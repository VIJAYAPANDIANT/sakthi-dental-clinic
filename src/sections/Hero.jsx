import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarCheck, HeartHandshake, ShieldPlus } from 'lucide-react';
import Button from '../components/Button';

const HERO_IMAGE_SRC = '/src/assets/images/sakthi_dental_hero_1795067015427.jpg';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      };

  const imageMotion = prefersReducedMotion
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.985 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F2FC] via-[#FAF7FE] to-white border-b border-[#EFE8FA]"
    >
      {/* Subtle ambient pastel luminance (soft lavender & pale sky) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#E8DCF8]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#E7F1FC]/60 blur-3xl"
      />

      <div className="clinic-container relative py-14 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Text & Primary Actions */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999] mb-4">
              <span>Sakthi Dental Clinic</span>
              <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
                ·
              </span>
              <span className="text-[#434C66]">Hosur, Tamil Nadu</span>
            </p>

            <h1
              id="hero-heading"
              className="text-[#141D38] font-semibold tracking-[-0.025em] leading-[1.12] max-w-[18ch]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              Specialized Dental Care for Women, Children &amp; Families
            </h1>

            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#434C66] max-w-[54ch]">
              Experience compassionate, expert-led dental services tailored to
              your needs, all in a modern and welcoming environment.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button
                to="/contact?intent=appointment"
                variant="primary"
                size="lg"
              >
                <CalendarCheck className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                <span>Fix an Appointment</span>
              </Button>

              <Button
                to="/contact?intent=emergency"
                variant="emergency"
                size="lg"
              >
                <ShieldPlus className="w-[18px] h-[18px] shrink-0 text-[#A94B6E]" aria-hidden="true" />
                <span>Emergency Dental Support</span>
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E6DCF5] flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#66708A]">
              <span>Women-focused care</span>
              <span aria-hidden="true" className="text-[#CEBBE9]">
                ·
              </span>
              <span>Gentle pediatric visits</span>
              <span aria-hidden="true" className="text-[#CEBBE9]">
                ·
              </span>
              <span>Family dental wellness</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Clinic Photograph */}
          <motion.div
            {...imageMotion}
            className="lg:col-span-6 flex items-stretch"
          >
            <div className="relative w-full overflow-hidden rounded-[24px] bg-[#EFE8FA] border border-[#E3D7F4] shadow-[0_22px_50px_-24px_rgba(20,29,56,0.2)] aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
              {!imageError ? (
                <img
                  src={HERO_IMAGE_SRC}
                  alt="A dentist speaking warmly with a mother and her young daughter inside the bright, calming consultation room at Sakthi Dental Clinic"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-[#F1EBF9] via-[#FDF4F7] to-[#EEF5FC]">
                  <div className="w-16 h-16 rounded-2xl bg-white/90 border border-[#E3D7F4] flex items-center justify-center mb-4">
                    <HeartHandshake
                      className="w-8 h-8 text-[#664999]"
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className="text-lg font-semibold text-[#141D38]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Sakthi Dental Clinic
                  </p>
                  <p className="mt-1 text-sm text-[#434C66] max-w-xs">
                    Compassionate dental care for women, children, and families
                    in Hosur, Tamil Nadu.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
