import { motion, useReducedMotion } from 'framer-motion';

export default function TreatmentsHero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section
      aria-labelledby="treatments-page-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F2FC] via-[#FAF7FE] to-white border-b border-[#EFE8FA]"
    >
      {/* Subtle pastel radial luminance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[#E8DCF8]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-24 h-72 w-72 rounded-full bg-[#E7F1FC]/60 blur-3xl"
      />

      <div className="clinic-container relative py-14 sm:py-16 lg:py-20">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999]">
            <span>Sakthi Dental Clinic</span>
            <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
              ·
            </span>
            <span className="text-[#434C66]">Hosur, Tamil Nadu</span>
          </p>

          <h1
            id="treatments-page-heading"
            className="mt-3 font-semibold tracking-[-0.025em] leading-[1.14] text-[#141D38]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.125rem, 3.6vw, 3.35rem)',
            }}
          >
            Our Dental Treatments
          </h1>

          <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.72] text-[#434C66] max-w-[62ch]">
            At Sakthi Dental Clinic, we provide comprehensive dental care using
            modern techniques and personalized treatment approaches. Explore our
            services to find the right care for your dental needs.
          </p>

          <div className="mt-8 pt-5 border-t border-[#E6DCF5] flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#66708A] tabular-nums">
            <span>15 Dental Treatments</span>
            <span aria-hidden="true" className="text-[#CEBBE9]">
              ·
            </span>
            <span>Women, Children &amp; Families</span>
            <span aria-hidden="true" className="text-[#CEBBE9]">
              ·
            </span>
            <span>Doctors available daily (9 AM - 9 PM)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
