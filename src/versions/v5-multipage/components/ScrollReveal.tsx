import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: boolean;
};

/**
 * CSS/IO reveal without Motion (~125KB saved on the home critical path).
 * SSR + first paint stay fully visible (opacity 1) so prerender/hydration
 * never flash hidden content. Below-fold nodes hide after mount, then reveal.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  scale = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight - 80 && rect.bottom > 0;
    if (inView) return;

    setVisible(false);
    // Next frame so the browser applies opacity:0 before we observe
    const raf = requestAnimationFrame(() => setAnimated(true));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "-80px", threshold: 0.01 },
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const style: CSSProperties =
    visible
      ? {
          opacity: 1,
          transform: "none",
          transition: animated
            ? `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
            : undefined,
        }
      : {
          opacity: 0,
          transform: scale ? "translateY(18px) scale(0.97)" : "translateY(18px)",
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
