import { useEffect, useRef, useState, useCallback } from "react";

interface StickyOptions {
  offsetTop?: number;
  bottoming?: boolean;
  spacer?: boolean;
  recalcEvery?: number;
}

export function useSticky(options: StickyOptions = {}) {
  const { offsetTop = 0, bottoming = true, spacer = true, recalcEvery } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [, setScrollCount] = useState(0);

  const recalc = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    let sticky = false;

    // Check if element should stick
    if (parentRect.top < offsetTop) {
      sticky = true;

      if (bottoming && parentRect.bottom - offsetTop <= elRect.height) {
        // Stop at bottom
        el.style.position = "absolute";
        el.style.top = `${parent.offsetHeight - el.offsetHeight}px`;
      } else {
        // Stick to top
        el.style.position = "fixed";
        el.style.top = `${offsetTop}px`;
      }
    } else {
      // Reset
      el.style.position = "";
      el.style.top = "";
      sticky = false;
    }

    setIsSticky(sticky);

    // Handle spacer
    if (spacer && spacerRef.current) {
      if (sticky) {
        spacerRef.current.style.display = "block";
        spacerRef.current.style.height = `${elRect.height}px`;
        spacerRef.current.style.width = `${elRect.width}px`;
      } else {
        spacerRef.current.style.display = "none";
      }
    }
  }, [offsetTop, bottoming, spacer]);

  const handleScroll = useCallback(() => {
    if (recalcEvery) {
      setScrollCount((c) => {
        const newCount = c + 1;
        if (newCount >= recalcEvery) {
          recalc();
          return 0;
        }
        return newCount;
      });
    } else {
      recalc();
    }
  }, [recalc, recalcEvery]);

  useEffect(() => {
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return { ref, spacerRef, isSticky };
}
