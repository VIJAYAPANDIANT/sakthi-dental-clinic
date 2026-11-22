import { motion, useReducedMotion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';
import AppointmentCTA from '../sections/AppointmentCTA';

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <>
      {/* FAQ Page Header */}
      <section
        aria-labelledby="faq-page-heading"
        className="relative overflow-hidden bg-gradient-to-b from-[#F6F2FC] via-[#FAF7FE] to-white border-b border-[#EFE8FA]"
      >
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
              <span className="text-[#434C66]">Patient Guidance</span>
            </p>

            <h1
              id="faq-page-heading"
              className="mt-3 font-semibold tracking-[-0.025em] leading-[1.14] text-[#141D38]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.125rem, 3.6vw, 3.35rem)',
              }}
            >
              Frequently Asked Questions
            </h1>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.72] text-[#434C66] max-w-[60ch]">
              Find answers to common questions about our dental treatments,
              appointments, and patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <FAQAccordion />

      {/* Bottom Appointment CTA */}
      <AppointmentCTA
        heading="Still Have Questions?"
        description="Our team is happy to help you find the right dental care."
        buttonLabel="Fix an Appointment"
        buttonTo="/contact?intent=appointment"
      />
    </>
  );
}
