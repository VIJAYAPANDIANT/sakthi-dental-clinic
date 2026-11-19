import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

export default function WelcomeBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="welcome-assurance-heading"
      className="py-10 sm:py-12 lg:py-16 bg-white"
    >
      <div className="clinic-container">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="clinic-banner-pastel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12"
        >
          {/* Subtle pastel radial accents (blush & sky) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#F9DFE9]/65 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-[#DCEBF9]/70 blur-3xl"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Soft dual healthcare emblem */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#E3D7F4] shadow-[0_8px_20px_-10px_rgba(102,73,153,0.25)] flex items-center justify-center shrink-0">
                <ShieldCheck
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#664999]"
                  aria-hidden="true"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-lg bg-[#FDF2F6] border border-[#F2D7E2] flex items-center justify-center"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-[#A94B6E]" />
                </span>
              </div>

              <div>
                <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999]">
                  <span>Patient Care Assurance</span>
                  <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
                    ·
                  </span>
                  <span className="text-[#434C66]">Sakthi Dental Clinic</span>
                </p>
                <h2
                  id="welcome-assurance-heading"
                  className="mt-1.5 text-[#141D38] font-semibold tracking-[-0.018em] leading-[1.26] max-w-[34ch]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.375rem, 2.35vw, 2rem)',
                  }}
                >
                  You are always in safe hands. We are ready to help, anytime.
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                to="/contact?intent=appointment"
                variant="secondary"
                size="md"
              >
                <span>Fix an Appointment</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
