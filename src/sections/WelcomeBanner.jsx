import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WelcomeBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Patient Assurance"
      className="py-10 sm:py-12 lg:py-14 bg-white"
    >
      <div className="clinic-container">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[24px] bg-[#141D38] text-white px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-11 shadow-[0_20px_44px_-22px_rgba(20,29,56,0.4)]"
        >
          {/* Subtle decorative lavender & sky radial sheen */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#7E62B0]/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -bottom-24 h-56 w-56 rounded-full bg-[#2C5F9E]/25 blur-3xl"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <ShieldCheck
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#E3D7F4]"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-[13px] font-medium tracking-[0.01em] text-[#D8C9EE]">
                  Our Promise to Every Patient
                </p>
                <h2
                  className="mt-1 text-white font-medium tracking-[-0.015em] leading-[1.28]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.375rem, 2.3vw, 2rem)',
                  }}
                >
                  You are always in safe hands. We are ready to help, anytime.
                </h2>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact?intent=appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#141D38] hover:bg-[#F1EBF9] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Reach Our Clinic</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
