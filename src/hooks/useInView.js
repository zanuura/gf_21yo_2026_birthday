import { useEffect, useRef } from 'react';

/**
 * useInView — fires callback when element enters viewport (once)
 * @param {function} onEnter — callback
 * @param {number} threshold — 0..1
 */
export function useInView(onEnter, threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [onEnter, threshold]);
  return ref;
}
