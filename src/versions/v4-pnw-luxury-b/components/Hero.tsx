import { motion, useReducedMotion } from "motion/react";
import { phone } from "../../../content/siteFacts";
import imgHero from "../../../imports/Variation1EditorialSplitV2/f501e2d8e220a52e831bcb8f341003090efc1d38.png";

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const Text = prefersReducedMotion ? "div" : motion.div;
  const textProps = (delay: number) =>
    prefersReducedMotion
      ? {}
      : { initial: "hidden", animate: "show", variants: textVariants, custom: delay };

  return (
    <section className="relative w-full min-h-[480px] md:min-h-[600px] lg:min-h-[680px]">
      <motion.img
        src={imgHero}
        alt="Warm, natural materials inside the new32 studio"
        className="absolute inset-0 w-full h-full object-cover"
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.03 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative z-10 flex items-end lg:items-center min-h-[480px] md:min-h-[600px] lg:min-h-[680px] px-6 md:px-16 py-10 md:py-16">
        <div className="bg-[var(--pnwb-white)]/92 backdrop-blur-sm p-8 md:p-12 max-w-lg w-full lg:ml-[max(0px,calc((100%-72rem)/2))]">
          <Text
            {...textProps(0)}
            className="font-semibold text-[var(--pnwb-sage)] text-sm tracking-wide mb-5"
          >
            Modern family dentistry, rooted in Seattle
          </Text>
          <Text
            {...textProps(0.12)}
            className="font-display text-[var(--pnwb-ink)] text-3xl md:text-4xl lg:text-5xl leading-[1.12] mb-5"
          >
            Beautiful smiles.
            <br />
            Lifelong care.
          </Text>
          <Text
            {...textProps(0.24)}
            className="text-[var(--pnwb-ink-soft)] text-base leading-relaxed mb-7 max-w-[52ch]"
          >
            A trusted dental studio built on genuine relationships, clinical
            excellence, and thoughtful prevention — for every generation of
            your family.
          </Text>
          <Text {...textProps(0.36)}>
            <a
              href={phone.tel}
              className="inline-block px-6 py-3 bg-[var(--pnwb-sage-deep)] text-[var(--pnwb-white)] text-sm font-semibold uppercase tracking-wide rounded-sm hover:bg-[var(--pnwb-ink)] transition-colors"
            >
              Call to schedule
            </a>
          </Text>
        </div>
      </div>
    </section>
  );
}
