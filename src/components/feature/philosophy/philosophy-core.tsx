'use client';

import type { ReactNode } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { cn } from 'cn';
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useReducedMotion
} from 'motion/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { InViewAction } from '@/hooks/in-view-action';

/**
 * Eight circles on a ring of 6.5rem around the core, every 45° clockwise from
 * the top. Order here is the order of appearance.
 */
const HOLISTIC_PETALS: {
  label: string;
  position: string;
  className?: string;
}[] = [
  { label: 'Design', position: 'top-[calc(50%-6.5rem)] left-1/2' },
  {
    label: 'Code',
    position: 'top-[calc(50%-4.6rem)] left-[calc(50%+4.6rem)]'
  },
  {
    label: 'Marketing',
    position: 'top-1/2 left-[calc(50%+6.5rem)]'
  },
  {
    label: 'Sales',
    position: 'top-[calc(50%+4.6rem)] left-[calc(50%+4.6rem)]'
  },
  { label: 'Business', position: 'top-[calc(50%+6.5rem)] left-1/2' },
  {
    label: 'Analytics',
    position: 'top-[calc(50%+4.6rem)] left-[calc(50%-4.6rem)]',
    className: 'text-center whitespace-pre-line'
  },
  {
    label: 'Consulting',
    position: 'top-1/2 left-[calc(50%-6.5rem)]'
  },
  { label: 'UX', position: 'top-[calc(50%-4.6rem)] left-[calc(50%-4.6rem)]' }
];

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
  children
}: {
  step: number;
  className: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0);
  const opacity = useMotionValue(0);
  const reducedMotion = useReducedMotion();
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
    if (!isInView) return;

    if (reducedMotion) {
      x.set(0);
      y.set(0);
      scale.set(1);
      opacity.set(1);
      return;
    }

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
  }, [isInView, reducedMotion, step, x, y, scale, opacity]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PhilosophyCore() {
  const [activeTab, setActiveTab] = useState<
    'Core product UI' | 'Holistic product UI'
  >('Core product UI');

  return (
    <MotionConfig reducedMotion="user">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="gap-6 py-8"
      >
        {/* Panels share one grid cell: while Base UI keeps the leaving panel
            mounted for a frame, the layout height stays one panel high. */}
        <div className="grid">
          <TabsContent value="Core product UI" className={PANEL_CLASS}>
            <div
              data-petal-root
              className="relative mx-auto grid size-96 items-center justify-center"
            >
              <div className="flex">
                <Petal
                  step={0}
                  className="flex size-44 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-foreground transition-colors hover:z-10 hover:bg-primary hover:text-primary-foreground"
                >
                  Design
                </Petal>
                <Petal
                  step={1}
                  className="-ml-10 flex size-44 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-foreground transition-colors hover:z-10 hover:bg-primary hover:text-primary-foreground"
                >
                  Code
                </Petal>
              </div>
              <Petal
                step={2}
                className="mx-auto -mt-40 flex size-44 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-foreground transition-colors hover:z-10 hover:bg-primary hover:text-primary-foreground"
              >
                UX
              </Petal>
              <div className="absolute top-1/2 left-1/2 z-50 -mt-6 flex size-16 -translate-1/2 animate-core-pulse items-center justify-center rounded-full bg-primary text-primary-foreground">
                UI
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Holistic product UI" className={PANEL_CLASS}>
            <div
              data-petal-root
              className="relative mx-auto grid size-96 items-center justify-center"
            >
              {/* Same -mt-6 lift as the core in the other tab, so "UI" stays put. */}
              <div className="absolute inset-0 -translate-y-6">
                {HOLISTIC_PETALS.map(({ label, position, className }, step) => (
                  <Petal
                    key={label}
                    step={step}
                    className={cn(
                      'absolute flex size-44 -translate-1/2 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-foreground transition-colors hover:z-10 hover:bg-primary hover:text-primary-foreground',
                      position,
                      className
                    )}
                  >
                    {label}
                  </Petal>
                ))}
              </div>

              <InViewAction
                action={() => console.log('Log')}
                className="absolute top-1/2 left-1/2 z-50 -mt-6 flex size-16 -translate-1/2 animate-core-pulse items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                UI
              </InViewAction>
            </div>
          </TabsContent>
        </div>

        <TabsList className="mx-auto">
          <TabsTrigger value="Core product UI">Core product UI</TabsTrigger>
          <TabsTrigger value="Holistic product UI">
            Holistic product UI
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </MotionConfig>
  );
}
