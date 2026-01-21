import {useLayoutEffect, useRef, useState} from 'react';

type UseFitTextOptions = {
  /**
   * Starting font size (px) that we try first.
   * Keep this aligned with your design system "normal" size.
   */
  maxFontPx: number;
  /**
   * Lowest font size (px) we allow before giving up.
   */
  minFontPx: number;
  /**
   * Step (px) to decrement when overflowing.
   */
  stepPx?: number;
};

type UseFitTextResult = {
  containerRef: React.RefObject<HTMLElement | null>;
  textRef: React.RefObject<HTMLElement | null>;
  fontSizePx: number;
};

/**
 * Shrinks text until it fits on a single line inside its container.
 * Works with any text length and recalculates on container resize.
 */
export function useFitText({
  maxFontPx,
  minFontPx,
  stepPx = 1
}: UseFitTextOptions): UseFitTextResult {
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);
  const [fontSizePx, setFontSizePx] = useState(maxFontPx);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    let raf = 0;
    let observer: ResizeObserver | null = null;

    const fit = () => {
      // Reset to max, then shrink until it fits.
      let next = maxFontPx;
      text.style.fontSize = `${next}px`;

      // Ensure layout is up-to-date before measuring.
      // (Reading scrollWidth triggers layout, so we don't need extra awaits.)
      const available = container.clientWidth;
      if (available <= 0) {
        setFontSizePx(maxFontPx);
        return;
      }

      // Shrink until the rendered content fits the available width.
      // Use scrollWidth to include overflow content.
      // Hard cap iterations to avoid accidental infinite loops.
      let guard = 0;
      while (text.scrollWidth > available && next > minFontPx && guard < 500) {
        next -= stepPx;
        text.style.fontSize = `${next}px`;
        guard++;
      }

      setFontSizePx(next);
    };

    const scheduleFit = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(fit);
    };

    // Refit on container size changes.
    observer = new ResizeObserver(scheduleFit);
    observer.observe(container);

    // Initial fit.
    scheduleFit();

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
      observer = null;
    };
  }, [maxFontPx, minFontPx, stepPx]);

  return {containerRef, textRef, fontSizePx};
}


