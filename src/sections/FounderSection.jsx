import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Award,
  Building2,
  CalendarCheck,
  GraduationCap,
  HeartHandshake,
  Hospital,
  UserRound,
} from 'lucide-react';
import Button from '../components/Button';

export const FOUNDER_IMAGE_SRC =
  '/src/assets/images/founder_dr_anupriya_1795265748636.jpg';

const FOUNDER_MILESTONES = [
  {
    marker: '2000',
    text: 'Graduated in 2000.',
    icon: GraduationCap,
  },
  {
    marker: '2004',
    text: 'Established Sakthi Dental Clinic in Hosur in 2004.',
    icon: Building2,
  },
  {
    marker: '6 Years',
    text: 'Worked for six years at Mathura Clinic.',
    icon: HeartHandshake,
  },
  {
    marker: '10+ Years',
    text: 'Served as a dental consultant at the Primary Health Center at Chandara Hospital for over a decade.',
    icon: Hospital,
  },
  {
    marker: '20+ Years',
    text: 'Over 20 years of dental expertise.',
    icon: Award,
  },
];

export default function FounderSection() {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      };

  const portraitMotion = prefersReducedMotion
    ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.985 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F2FC] via-[#FAF7FE] to-white border-b border-[#EFE8FA]"
    >
      {/* Subtle ambient pastel luminance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[#E8DCF8]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#E7F1FC]/55 blur-3xl"
      />

      <div className="clinic-container relative py-14 sm:py-16 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder Portrait */}
          <motion.div
            {...portraitMotion}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[440px]">
              {/* Subtle architectural pastel offset frames */}
              <div
                aria-hidden="true"
                className="hidden sm:block pointer-events-none absolute -top-3.5 -left-3.5 w-28 h-28 rounded-[24px] border border-[#E3D7F4] bg-[#FDF2F6]/70"
              />
              <div
                aria-hidden="true"
                className="hidden sm:block pointer-events-none absolute -bottom-3.5 -right-3.5 w-28 h-28 rounded-[24px] border border-[#DCE8F8] bg-[#EEF5FC]/80"
              />

              <div className="relative z-10 overflow-hidden rounded-[24px] bg-[#EFE8FA] border border-[#E3D7F4] shadow-[0_22px_50px_-24px_rgba(20,29,56,0.2)] aspect-[3/4]">
                {!imageError ? (
                  <img
                    src={FOUNDER_IMAGE_SRC}
                    alt="Dr. Anupriya, Founder of Sakthi Dental Clinic in Hosur, Tamil Nadu"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F1EBF9] via-[#FDF4F7] to-[#EEF5FC]">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#E3D7F4] flex items-center justify-center mb-4">
                      <UserRound
                        className="w-8 h-8 text-[#664999]"
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className="text-xl font-semibold text-[#141D38]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Dr. Anupriya
                    </p>
                    <p className="mt-1 text-sm text-[#434C66]">
                      Founder · Sakthi Dental Clinic
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Bio & Verified Clinical Journey */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999]">
              <span>About Us</span>
              <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
                ·
              </span>
              <span className="text-[#434C66]">Founder Profile</span>
            </p>

            <h1
              id="founder-heading"
              className="mt-3 font-semibold tracking-[-0.025em] leading-[1.14] text-[#141D38]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.125rem, 3.5vw, 3.25rem)',
              }}
            >
              Get to Know Dr. Anupriya
            </h1>

            <p className="mt-3 text-[18px] sm:text-[19px] font-medium text-[#664999] leading-[1.45]">
              Your Trusted Partner in Dental Care
            </p>

            <p className="mt-5 text-[15.5px] sm:text-[16px] leading-[1.75] text-[#434C66] max-w-[60ch]">
              With over 20 years of dedicated dental expertise, Dr. Anupriya
              founded Sakthi Dental Clinic in Hosur in 2004 to deliver
              compassionate, patient-first dental care tailored to women,
              children, and families.
            </p>

            {/* Structured Clinical Journey */}
            <ul
              aria-label="Dr. Anupriya career milestones"
              className="mt-7 divide-y divide-[#EFE8FA] rounded-[20px] bg-white border border-[#E5DDF5] shadow-[0_10px_30px_-14px_rgba(20,29,56,0.08)]"
            >
              {FOUNDER_MILESTONES.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.text}
                    className="flex items-start sm:items-center gap-4 px-5 py-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F8F5FD] border border-[#E5DDF5] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <Icon
                        className="w-[18px] h-[18px] text-[#664999]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 flex-1 min-w-0">
                      <span className="text-[13px] font-semibold text-[#51377E] tabular-nums whitespace-nowrap shrink-0 sm:min-w-[84px]">
                        {item.marker}
                      </span>
                      <span className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[#141D38]">
                        {item.text}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button
                to="/contact?intent=appointment"
                variant="primary"
                size="lg"
              >
                <CalendarCheck
                  className="w-[18px] h-[18px] shrink-0"
                  aria-hidden="true"
                />
                <span>Fix an Appointment</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
