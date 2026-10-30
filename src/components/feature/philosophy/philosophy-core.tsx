'use client';

import type { CSSProperties, ReactNode } from 'react';
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { cn } from 'cn';
import {
  AnimatePresence,
  animate,
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useReducedMotion
} from 'motion/react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useThemeSetting } from '@/components/feature/theme';

import {
  philosophyCoreLabel,
  philosophyCoreTabLabels,
  philosophyHolisticLabels,
  philosophyTopicGroups,
  philosophyTopics
} from './philosophy-data';

/**
 * Position of petal `index` of `count` on a ring of 6.5rem around the core,
 * evenly spaced clockwise from the top. Order is the order of appearance.
 */
function ringPosition(index: number, count: number) {
  const angle = (index / count) * 2 * Math.PI;
  const x = (Math.sin(angle) * 6.5).toFixed(3);
  const y = (-Math.cos(angle) * 6.5).toFixed(3);

  return {
    top: `calc(50% + ${y}rem)`,
    left: `calc(50% + ${x}rem)`
  };
}

const PANEL_CLASS = 'col-start-1 row-start-1 data-hidden:invisible';

const PETAL_STEP = 0.1;
const PETAL_EASE = [0.4, 0, 0.2, 1] as const;

/**
 * Circle that blooms out of the "UI" core once it enters the viewport.
 * `step` is its place in the opening order. The start offset is measured so
 * every circle begins centered on the core, wherever it is laid out.
 */
function Petal({
  step,
  className,
  style,
  onSelect,
  autoFocus,
  children
}: {
  step: number;
  className: string;
  style?: CSSProperties;
  /** Makes the circle a button that opens the petal one level deeper. */
  onSelect?: () => void;
  autoFocus?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0);
  const opacity = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const { isEnabled: animationsEnabled } = useThemeSetting(
    'themeAnimationSettings'
  );
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useLayoutEffect(() => {
    const petal = ref.current;
    const core = petal
      ?.closest('[data-petal-root]')
      ?.querySelector('.animate-core-pulse');

    if (!petal || !core) return;

    const from = petal.getBoundingClientRect();
    const to = core.getBoundingClientRect();

    x.set(to.left + to.width / 2 - (from.left + from.width / 2));
    y.set(to.top + to.height / 2 - (from.top + from.height / 2));
  }, [x, y]);

  useEffect(() => {
    if (reducedMotion || !animationsEnabled) {
      x.set(0);
      y.set(0);
      scale.set(1);
      opacity.set(1);
      return;
    }

    if (!isInView) return;

    const transition = {
      duration: 0.55,
      ease: PETAL_EASE,
      delay: step * PETAL_STEP
    };
    const controls = [x, y].map((value) => animate(value, 0, transition));

    controls.push(
      animate(scale, 1, transition),
      animate(opacity, 1, transition)
    );

    return () => controls.forEach((control) => control.stop());
  }, [isInView, reducedMotion, animationsEnabled, step, x, y, scale, opacity]);

  const motionStyle = { x, y, scale, opacity };
  const animationsOff =
    'in-data-[theme-animations=off]:transform-none! in-data-[theme-animations=off]:opacity-100!';
  const labelChip =
    'in-data-[theme=wireframe]:rounded-(--sketch-button-radius) in-data-[theme=wireframe]:bg-[color-mix(in_oklab,var(--primary)_10%,var(--background))] in-data-[theme=wireframe]:px-1.5';

  return (
    <div ref={ref} style={style} className={cn('relative', className)}>
      <motion.div
        aria-hidden
        style={motionStyle}
        className={cn(
          'absolute inset-0 rounded-full bg-primary/10',
          animationsOff,
          'in-data-[theme=wireframe]:rounded-(--sketch-blob-radius)!',
          "in-data-[theme=wireframe]:before:pointer-events-none in-data-[theme=wireframe]:before:absolute in-data-[theme=wireframe]:before:-inset-px in-data-[theme=wireframe]:before:-rotate-2 in-data-[theme=wireframe]:before:rounded-(--sketch-blob-outline-radius) in-data-[theme=wireframe]:before:border-2 in-data-[theme=wireframe]:before:border-foreground in-data-[theme=wireframe]:before:content-['']"
        )}
      />
      {onSelect ? (
        <motion.button
          type="button"
          autoFocus={autoFocus}
          onClick={onSelect}
          style={motionStyle}
          className={cn(
            'focus-visible:ring-ring/50 focus-visible:outline-ring absolute inset-0 z-10 flex cursor-pointer items-center justify-center rounded-full hover:bg-primary hover:text-primary-foreground focus-visible:ring-[3px] focus-visible:outline-1 in-data-[theme=wireframe]:rounded-(--sketch-blob-radius) motion-safe:transition-colors',
            animationsOff
          )}
        >
          <span className={labelChip}>{children}</span>
        </motion.button>
      ) : (
        <motion.span
          style={motionStyle}
          className={cn('relative z-10', labelChip, animationsOff)}
        >
          {children}
        </motion.span>
      )}
    </div>
  );
}

const CORE_CLASS =
  "absolute top-1/2 left-1/2 z-50 -mt-6 flex -translate-1/2 animate-core-pulse items-center justify-center rounded-full bg-primary text-primary-foreground in-data-[theme=wireframe]:rounded-(--sketch-blob-radius)! in-data-[theme=wireframe]:before:pointer-events-none in-data-[theme=wireframe]:before:absolute in-data-[theme=wireframe]:before:-inset-0.5 in-data-[theme=wireframe]:before:-rotate-2 in-data-[theme=wireframe]:before:rounded-(--sketch-blob-outline-radius) in-data-[theme=wireframe]:before:border-2 in-data-[theme=wireframe]:before:border-foreground in-data-[theme=wireframe]:before:content-['']";

/**
 * One level deeper: the topic is the new center and its
 * characteristics, purpose and fields bloom around it. Clicking the center
 * goes back up.
 */
function PhilosophyDetail({
  topic,
  onBack
}: {
  topic: string;
  onBack: () => void;
}) {
  const details = philosophyTopics[topic];
  const items = philosophyTopicGroups.flatMap(({ key }) =>
    details[key].map((label) => ({ id: `${key}-${label}`, label }))
  );

  return (
    <div
      className="space-y-6"
      onKeyDown={(event) => {
        if (event.key === 'Escape') onBack();
      }}
    >
      <div className="diagram-fit">
        <div
          data-petal-root
          className="diagram-fit-body relative grid size-96 items-center justify-center"
        >
          <div className="absolute inset-0 -translate-y-6">
            {items.map(({ id, label }, step) => (
              <Petal
                key={id}
                step={step}
                className="absolute -m-22 flex size-44 items-center justify-center text-foreground transition-colors"
                style={ringPosition(step, items.length)}
              >
                {label}
              </Petal>
            ))}
          </div>

          <button
            type="button"
            autoFocus
            onClick={onBack}
            aria-label={`${topic}, back to ${philosophyCoreLabel}`}
            className={cn(
              CORE_CLASS,
              'size-20 cursor-pointer outline-none hover:bg-primary-hover focus-visible:bg-primary-hover'
            )}
          >
            {topic}
          </button>
        </div>
      </div>

      <nav
        aria-label="Blossom level"
        className="flex items-center justify-center"
      >
        <Button variant="ghost-muted" onClick={onBack}>
          <ChevronLeftIcon aria-hidden />
          {philosophyCoreLabel}
        </Button>
        <span aria-hidden className="px-1 text-muted-foreground">
          /
        </span>
        <span
          aria-current="location"
          className="px-3 font-semibold text-foreground"
        >
          {topic}
        </span>
      </nav>

      <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2">
        {philosophyTopicGroups.map(({ key, title }) => (
          <Fragment key={key}>
            <dt className="font-semibold text-foreground">{title}</dt>
            <dd>{details[key].join(', ')}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}

export function PhilosophyCore() {
  const [activeTab, setActiveTab] = useState<
    'Core product UI' | 'Holistic product UI'
  >('Core product UI');
  const [topic, setTopic] = useState<string | null>(null);
  // The topic we just left: its petal takes focus back when the blossom returns.
  const [returnedFrom, setReturnedFrom] = useState<string | null>(null);
  const { isEnabled: animationsEnabled } = useThemeSetting(
    'themeAnimationSettings'
  );
  const transition = { duration: animationsEnabled ? 0.22 : 0 };

  const topicProps = (label: string) =>
    label in philosophyTopics
      ? {
          onSelect: () => {
            setReturnedFrom(null);
            setTopic(label);
          },
          autoFocus: label === returnedFrom
        }
      : {};

  const goBack = () => {
    setReturnedFrom(topic);
    setTopic(null);
  };

  return (
    <MotionConfig reducedMotion="user">
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
          setReturnedFrom(null);
        }}
        className="py-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          {topic ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={transition}
              className="origin-[50%_12rem]"
            >
              <PhilosophyDetail topic={topic} onBack={goBack} />
            </motion.div>
          ) : (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.12 }}
              transition={transition}
              className="flex origin-[50%_12rem] flex-col gap-6"
            >
              {/* Panels share one grid cell: while Base UI keeps the leaving panel
              mounted for a frame, the layout height stays one panel high. */}
              <div className="grid">
                <TabsContent value="Core product UI" className={PANEL_CLASS}>
                  <div className="diagram-fit">
                    <div
                      data-petal-root
                      className="diagram-fit-body relative grid size-96 items-center justify-center"
                    >
                      <div className="flex">
                        <Petal
                          step={0}
                          {...topicProps(philosophyCoreTabLabels[0])}
                          className="flex size-44 items-center justify-center text-foreground transition-colors"
                        >
                          {philosophyCoreTabLabels[0]}
                        </Petal>
                        <Petal
                          step={1}
                          {...topicProps(philosophyCoreTabLabels[1])}
                          className="-ml-10 flex size-44 items-center justify-center text-foreground transition-colors"
                        >
                          {philosophyCoreTabLabels[1]}
                        </Petal>
                      </div>
                      <Petal
                        step={2}
                        {...topicProps(philosophyCoreTabLabels[2])}
                        className="mx-auto -mt-40 flex size-44 items-center justify-center text-foreground transition-colors"
                      >
                        {philosophyCoreTabLabels[2]}
                      </Petal>
                      <div className={cn(CORE_CLASS, 'size-16')}>
                        {philosophyCoreLabel}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="Holistic product UI"
                  className={PANEL_CLASS}
                >
                  <div className="diagram-fit">
                    <div
                      data-petal-root
                      className="diagram-fit-body relative grid size-96 items-center justify-center"
                    >
                      {/* Same -mt-6 lift as the core in the other tab, so "UI" stays put. */}
                      <div className="absolute inset-0 -translate-y-6">
                        {philosophyHolisticLabels.map((label, step) => (
                          <Petal
                            key={label}
                            step={step}
                            {...topicProps(label)}
                            className="absolute -m-22 flex size-44 items-center justify-center text-foreground transition-colors"
                            style={ringPosition(
                              step,
                              philosophyHolisticLabels.length
                            )}
                          >
                            {label}
                          </Petal>
                        ))}
                      </div>

                      <div className={cn(CORE_CLASS, 'size-16')}>
                        {philosophyCoreLabel}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>

              <TabsList className="mx-auto max-w-full max-xs:h-auto! max-xs:w-full max-xs:flex-col">
                <TabsTrigger
                  value="Core product UI"
                  className="max-xs:h-11 max-xs:w-full max-xs:flex-none max-sm:px-3 max-sm:text-[1rem]"
                >
                  Core product UI
                </TabsTrigger>
                <TabsTrigger
                  value="Holistic product UI"
                  className="max-xs:h-11 max-xs:w-full max-xs:flex-none max-sm:px-3 max-sm:text-[1rem]"
                >
                  Holistic product UI
                </TabsTrigger>
              </TabsList>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </MotionConfig>
  );
}
