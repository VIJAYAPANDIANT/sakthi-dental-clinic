import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Eye } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

/*
 * Sakthi Dental Clinic Vision & Mission statements grounded in the clinic's
 * care principles (update directly here if replacing with verbatim brief text).
 */
const VISION_MISSION_ITEMS = [
  {
    id: 'vision',
    title: 'Our Vision',
    eyebrow: 'Looking Ahead',
    description:
      'To be a trusted center for specialized dental care in Hosur—bringing modern, technology-driven treatments and lasting oral health to women, children, and families in a welcoming environment.',
    icon: Eye,
    iconWrapperClass: 'bg-[#F1EBF9] border-[#E3D7F4]',
    iconColorClass: 'text-[#664999]',
    surfaceGlowClass: 'bg-[#EDE3FA]/65',
  },
  {
    id: 'mission',
    title: 'Our Mission',
    eyebrow: 'Every Patient, Every Visit',
    description:
      'To deliver compassionate, expert-led, and personalized dental care that prioritizes comfort, safety, and transparency—ensuring every patient feels supported and in safe hands at every step.',
    icon: Compass,
    iconWrapperClass: 'bg-[#FDF2F6] border-[#F2D7E2]',
    iconColorClass: 'text-[#A94B6E]',
    surfaceGlowClass: 'bg-[#F9E4ED]/65',
  },
];

export default function VisionMission() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="vision-mission-heading"
      className="clinic-section bg-[#F8F5FD] border-t border-[#EFE8FA]"
    >
      <div className="clinic-container">
        <SectionHeader
          headingId="vision-mission-heading"
          eyebrow="Our Guiding Purpose"
          title="Vision & Mission"
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {VISION_MISSION_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 14 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="clinic-card relative overflow-hidden p-7 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#CEBBE9] hover:shadow-[0_18px_40px_-18px_rgba(20,29,56,0.14)]"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl ${item.surfaceGlowClass}`}
                />

                <div className="relative">
                  <div
                    className={`w-13 h-13 rounded-2xl border flex items-center justify-center ${item.iconWrapperClass}`}
                  >
                    <Icon
                      className={`w-6 h-6 ${item.iconColorClass}`}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-6 text-[13px] font-medium text-[#66708A]">
                    {item.eyebrow}
                  </p>

                  <h3
                    className="mt-1.5 text-[24px] sm:text-[26px] font-semibold tracking-[-0.018em] leading-[1.22] text-[#141D38]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.75] text-[#434C66]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
