import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import Button from '../components/Button';

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="appointment-cta-heading"
      className="pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24 bg-white"
    >
      <div className="clinic-container">
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] bg-[#141D38] px-7 py-11 sm:px-12 sm:py-14 lg:px-16 lg:py-16 shadow-[0_24px_54px_-24px_rgba(20,29,56,0.45)]"
        >
          {/* Subtle ambient lavender & sky radiance */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#7E62B0]/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#2C5F9E]/30 blur-3xl"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-[13px] font-medium tracking-[0.015em] text-[#D8C9EE]">
                Sakthi Dental Clinic · Hosur, Tamil Nadu
              </p>
              <h2
                id="appointment-cta-heading"
                className="mt-2.5 text-white font-semibold tracking-[-0.02em] leading-[1.16]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.875rem, 3.2vw, 2.75rem)',
                }}
              >
                Your Smile Deserves the Best Care.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.7] text-[#DCE2F2] max-w-[52ch]">
                Take the first step towards a healthier and brighter smile with
                compassionate dental care.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                to="/contact?intent=appointment"
                variant="light"
                size="lg"
              >
                <CalendarCheck
                  className="w-[18px] h-[18px] text-[#664999] shrink-0"
                  aria-hidden="true"
                />
                <span>Fix an Appointment</span>
                <ArrowRight
                  className="w-4 h-4 text-[#664999] shrink-0"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
