import { useRef } from 'react';

type DragDirection = 'left' | 'right' | 'up' | 'down';
type DragAxis = 'x' | 'y' | 'both';

interface Delta {
  x: number;
  y: number;
}

interface DragData {
  direction: DragDirection;
  delta: Delta;
  normalizedDelta: Delta;
  change: Delta;
}

interface UseDragDirectionOptions {
  threshold?: number;
  maxDistance?: number;
  axis?: DragAxis;
  onDrag?: (data: DragData) => void;
}

export function useDragDirectionValue({
  threshold = 10,
  maxDistance = 200,
  axis = 'both',
  onDrag
}: UseDragDirectionOptions = {}) {
  const start = useRef<Delta>({ x: 0, y: 0 });
  const previous = useRef<Delta>({ x: 0, y: 0 });
  const dragging = useRef(false);

  const normalize = (value: number) =>
    Math.max(-100, Math.min(100, (value / maxDistance) * 100));

  const onPointerDown = (event: React.PointerEvent) => {
    start.current = {
      x: event.clientX,
      y: event.clientY
    };

    previous.current = {
      x: 0,
      y: 0
    };

    dragging.current = false;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const rawDelta = {
      x: event.clientX - start.current.x,
      y: event.clientY - start.current.y
    };

    // Apply the selected axis.
    // Y is inverted so that:
    //   up   = positive
    //   down = negative
    const delta = {
      x: axis === 'y' ? 0 : rawDelta.x,
      y: axis === 'x' ? 0 : -rawDelta.y
    };

    if (!dragging.current) {
      if (Math.hypot(delta.x, delta.y) < threshold) {
        return;
      }

      dragging.current = true;
    }

    const normalizedDelta = {
      x: normalize(delta.x),
      y: normalize(delta.y)
    };

    const change = {
      x: normalizedDelta.x - previous.current.x,
      y: normalizedDelta.y - previous.current.y
    };

    previous.current = normalizedDelta;

    const direction: DragDirection =
      Math.abs(delta.x) > Math.abs(delta.y)
        ? delta.x >= 0
          ? 'right'
          : 'left'
        : delta.y >= 0
          ? 'up'
          : 'down';

    onDrag?.({
      direction,
      delta,
      normalizedDelta,
      change
    });
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
