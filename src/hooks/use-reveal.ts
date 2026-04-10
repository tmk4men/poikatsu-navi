"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";
    const targets = el.querySelectorAll(selectors);
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return ref;
}
