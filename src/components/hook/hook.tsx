import { useEffect, useRef, useState, RefObject } from "react";

function useInView<T extends HTMLElement>(
  threshold = 0.3
): [RefObject<T>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  return [ref as RefObject<T>, isVisible]; // 👈 type assertion ici
}

export default useInView;
