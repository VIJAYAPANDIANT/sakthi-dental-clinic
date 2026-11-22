import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import PolicySection from '../components/PolicySection';
import { CLINIC_CONTACT } from '../components/ContactInfo';
import { POLICY_INTRO, POLICY_SECTIONS } from '../data/privacyPolicyData';

const TABLE_OF_CONTENTS = [
  ...POLICY_SECTIONS.map(({ id, number, title }) => ({ id, number, title })),
  { id: 'contact-information', number: '08', title: 'Contact Information' },
];

export default function PrivacyPolicy() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <>
      {/* Minimal Privacy Policy Header */}
      <section
        aria-labelledby="privacy-policy-heading"
        className="relative overflow-hidden bg-gradient-to-b from-[#F6F2FC] via-[#FAF7FE] to-white border-b border-[#EFE8FA]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[#E8DCF8]/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 -right-24 h-64 w-64 rounded-full bg-[#E7F1FC]/55 blur-3xl"
        />

        <div className="clinic-container relative py-14 sm:py-16 lg:py-20">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999]">
              <span>Sakthi Dental Clinic</span>
              <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
                ·
              </span>
              <span className="text-[#434C66]">Website Policy</span>
            </p>

            <h1
              id="privacy-policy-heading"
              className="mt-3 font-semibold tracking-[-0.025em] leading-[1.14] text-[#141D38]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.125rem, 3.6vw, 3.25rem)',
              }}
            >
              Privacy Policy
            </h1>

            <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.72] text-[#434C66] max-w-[62ch]">
              {POLICY_INTRO}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Policy Document Layout */}
      <section
        aria-label="Privacy Policy Details"
        className="clinic-section bg-white"
      >
        <div className="clinic-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Desktop Sticky Table of Contents */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="rounded-[20px] bg-[#F8F5FD] border border-[#E5DDF5] p-6">
                <p className="text-[13px] font-semibold text-[#51377E]">
                  On This Page
                </p>

                <nav
                  aria-label="Privacy Policy Sections"
                  className="mt-4 flex flex-col gap-1"
                >
                  {TABLE_OF_CONTENTS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-baseline gap-2.5 px-3 py-2 rounded-lg text-[14px] font-medium text-[#434C66] hover:bg-white hover:text-[#51377E] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#664999]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[12px] font-semibold text-[#8C75B8] tabular-nums shrink-0"
                      >
                        {item.number}
                      </span>
                      <span>{item.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-[#E5DDF5]">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#664999] hover:text-[#51377E] transition-colors duration-150"
                  >
                    <span>Have a question? Contact us</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Policy Reading Container */}
            <article className="lg:col-span-8 clinic-card p-6 sm:p-9 lg:p-11">
              <div className="divide-y divide-[#EFE8FA]">
                {POLICY_SECTIONS.map((section) => (
                  <PolicySection
                    key={section.id}
                    id={section.id}
                    number={section.number}
                    title={section.title}
                    paragraphs={section.paragraphs}
                    bullets={section.bullets}
                  />
                ))}

                {/* Contact Information Section */}
                <PolicySection
                  id="contact-information"
                  number="08"
                  title="Contact Information"
                  paragraphs={[
                    'If you have questions regarding this Privacy Policy or how your inquiry information is handled, please reach out to Sakthi Dental Clinic directly:',
                  ]}
                >
                  <div className="rounded-2xl bg-[#F8F5FD] border border-[#E5DDF5] p-5 sm:p-6 space-y-4">
                    <p
                      className="text-[18px] font-semibold text-[#141D38]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {CLINIC_CONTACT.name}
                    </p>

                    <div className="space-y-3 text-[14.5px] text-[#434C66]">
                      <p className="flex items-start gap-3">
                        <MapPin
                          className="w-4 h-4 text-[#664999] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{CLINIC_CONTACT.address}</span>
                      </p>

                      <p className="flex items-start gap-3">
                        <Mail
                          className="w-4 h-4 text-[#A94B6E] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>
                          Email:{' '}
                          <a
                            href={CLINIC_CONTACT.email.href}
                            className="font-semibold text-[#141D38] hover:text-[#664999] transition-colors duration-150 break-all"
                          >
                            {CLINIC_CONTACT.email.display}
                          </a>
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <Phone
                          className="w-4 h-4 text-[#2C5F9E] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span className="tabular-nums">
                          Phone:{' '}
                          <a
                            href={CLINIC_CONTACT.phones[0].href}
                            className="font-semibold text-[#141D38] hover:text-[#664999] transition-colors duration-150"
                          >
                            {CLINIC_CONTACT.phones[0].display}
                          </a>
                          <span aria-hidden="true" className="mx-1.5 text-[#9A8BB8]">
                            /
                          </span>
                          <a
                            href={CLINIC_CONTACT.phones[1].href}
                            className="font-semibold text-[#141D38] hover:text-[#664999] transition-colors duration-150"
                          >
                            {CLINIC_CONTACT.phones[1].display}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </PolicySection>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
