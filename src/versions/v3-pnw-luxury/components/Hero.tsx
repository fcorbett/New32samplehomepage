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
      : {
          initial: "hidden",
          animate: "show",
          variants: textVariants,
          custom: delay,
        };

  return (
    <div className="pnw-hero-row grid grid-cols-1 lg:grid-cols-2 w-full min-w-0">
      <div className="pnw-hero-pad flex items-center bg-[var(--pnw-white)] px-6 md:px-16 py-16 md:py-20 lg:py-0 lg:min-h-[620px]">
        <div className="max-w-lg">
          <Text
            {...textProps(0)}
            className="font-semibold text-[var(--pnw-moss)] text-sm tracking-wide mb-6"
          >
            Modern family dentistry, rooted in Seattle
          </Text>
          <Text
            {...textProps(0.12)}
            className="font-display font-normal text-[var(--pnw-ink)] text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-6"
          >
            Beautiful smiles.
            <br />
            Lifelong care.
          </Text>
          <Text
            {...textProps(0.24)}
            className="text-[var(--pnw-ink-soft)] text-base md:text-lg leading-relaxed mb-8"
          >
            A trusted dental studio built on genuine relationships, clinical
            excellence, and thoughtful prevention — for every generation of
            your family.
          </Text>
          <Text {...textProps(0.36)}>
            <a
              href={phone.tel}
              className="inline-block px-6 py-3 bg-[var(--pnw-moss)] text-[var(--pnw-white)] text-sm font-semibold uppercase tracking-wide hover:bg-[var(--pnw-moss-deep)] transition-colors"
            >
              Call to schedule
            </a>
          </Text>
        </div>
      </div>

      <motion.div
        className="relative lg:min-h-[620px] min-h-[360px] w-full overflow-hidden"
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.04 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={imgHero}
          alt="Warm, natural materials inside the new32 studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
