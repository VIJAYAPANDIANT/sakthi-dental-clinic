import { useSearchParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import ContactInfo, { CLINIC_CONTACT } from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ClinicMap from '../components/ClinicMap';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const intent =
    searchParams.get('intent') === 'emergency' ? 'emergency' : 'appointment';
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
      {/* Contact Page Header */}
      <section
        aria-labelledby="contact-page-heading"
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
              <span className="text-[#434C66]">Hosur, Tamil Nadu</span>
            </p>

            <h1
              id="contact-page-heading"
              className="mt-3 font-semibold tracking-[-0.025em] leading-[1.14] text-[#141D38]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.125rem, 3.6vw, 3.35rem)',
              }}
            >
              Contact Us
            </h1>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.72] text-[#434C66] max-w-[60ch]">
              We&apos;re here to help you. Get in touch with our team to learn
              more about our dental services or to request an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section
        aria-label="Contact Details and Inquiry Form"
        className="clinic-section bg-white"
      >
        <div className="clinic-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            <div className="lg:col-span-7">
              <ContactForm intent={intent} />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location */}
      <ClinicMap />

      {/* Bottom Call Now CTA */}
      <section
        aria-labelledby="contact-call-cta-heading"
        className="py-14 sm:py-16 lg:py-20 bg-white"
      >
        <div className="clinic-container">
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[28px] bg-[#141D38] px-7 py-11 sm:px-12 sm:py-14 lg:px-16 lg:py-16 shadow-[0_24px_54px_-24px_rgba(20,29,56,0.45)]"
          >
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
                  Sakthi Dental Clinic · Anthivadi, Hosur
                </p>
                <h2
                  id="contact-call-cta-heading"
                  className="mt-2.5 text-white font-semibold tracking-[-0.02em] leading-[1.16]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.875rem, 3.2vw, 2.75rem)',
                  }}
                >
                  Ready to Take Care of Your Smile?
                </h2>
                <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.7] text-[#DCE2F2] max-w-[54ch]">
                  Contact Sakthi Dental Clinic today and let our team help you
                  with your dental care needs.
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={CLINIC_CONTACT.phones[0].href}
                  variant="light"
                  size="lg"
                >
                  <PhoneCall
                    className="w-[18px] h-[18px] text-[#664999] shrink-0"
                    aria-hidden="true"
                  />
                  <span>Call Now</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
