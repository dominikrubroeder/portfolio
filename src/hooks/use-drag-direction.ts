'use client';

import { useRef } from 'react';

type DragDirection = 'left' | 'right' | 'up' | 'down';

interface UseDragDirectionOptions {
  threshold?: number;
  onDrag?: (direction: DragDirection, delta: { x: number; y: number }) => void;
}

/** Detect a mouse/touch drag and react on its value change
 * @example*
 * const drag = useDragDirection({
 *   threshold: 50,
 *   onDrag: (direction) => {
 *     if (direction === "up") {
 *       // ...
 *     }
 *
 *     if (direction === "down") {
 *       // ...
 *     }
 *   },
 * });
 *
 * return <div {...drag}>Volume</div>;
 * */
export function useDragDirection({
  threshold = 10,
  onDrag
}: UseDragDirectionOptions = {}) {
  const start = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  const onPointerDown = (event: React.PointerEvent) => {
    start.current = {
      x: event.clientX,
      y: event.clientY
    };

    dragging.current = false;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const delta = {
      x: event.clientX - start.current.x,
      y: event.clientY - start.current.y
    };

    if (!dragging.current && Math.hypot(delta.x, delta.y) < threshold) {
      return;
    }

    dragging.current = true;

    const direction: DragDirection =
      Math.abs(delta.x) > Math.abs(delta.y)
        ? delta.x > 0
          ? 'right'
          : 'left'
        : delta.y > 0
          ? 'down'
          : 'up';

    onDrag?.(direction, delta);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    dragging.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp
  };
}
