import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  scale?: boolean;
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  scale = false,
  className,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 18,
        ...(scale ? { scale: 0.97 } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
