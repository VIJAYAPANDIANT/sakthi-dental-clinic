import { motion, useReducedMotion } from 'framer-motion';
import {
  Cpu,
  HeartHandshake,
  Layers,
  Stethoscope,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const FEATURES = [
  {
    index: '01',
    title: 'All-in-One Care',
    description:
      'From general dentistry to specialized treatments, everything under one roof.',
    icon: Layers,
    iconBg: 'bg-[#F1EBF9] border-[#E3D7F4]',
    iconColor: 'text-[#664999]',
  },
  {
    index: '02',
    title: 'Experienced Doctors',
    description:
      'Our dentists are professionally trained and committed to personalized patient care.',
    icon: Stethoscope,
    iconBg: 'bg-[#EEF5FC] border-[#D8E7F7]',
    iconColor: 'text-[#2C5F9E]',
  },
  {
    index: '03',
    title: 'Patient-Centric Approach',
    description:
      'We prioritize comfort, safety, and transparency in every treatment we offer.',
    icon: HeartHandshake,
    iconBg: 'bg-[#FDF2F6] border-[#F2D7E2]',
    iconColor: 'text-[#A94B6E]',
  },
  {
    index: '04',
    title: 'Technology-Driven Services',
    description:
      'Modern tools and equipment ensure precision and safety.',
    icon: Cpu,
    iconBg: 'bg-[#F1EBF9] border-[#E3D7F4]',
    iconColor: 'text-[#664999]',
  },
];

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <SectionHeader
          headingId="why-choose-heading"
          eyebrow="Sakthi Dental Clinic · Patient Care Standards"
          title="Why Choose Sakthi Dental Clinic?"
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 14 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.38,
                  delay: prefersReducedMotion ? 0 : idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="clinic-card group p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#CEBBE9] hover:shadow-[0_18px_38px_-18px_rgba(20,29,56,0.14)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-[1.04] ${feature.iconBg}`}
                    >
                      <Icon
                        className={`w-5 h-5 ${feature.iconColor}`}
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-xs font-semibold tracking-wider text-[#9A8BB8] tabular-nums pt-1"
                    >
                      {feature.index}
                    </span>
                  </div>

                  <h3
                    className="mt-6 text-[19px] font-semibold tracking-[-0.015em] leading-[1.3] text-[#141D38]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-[14.5px] leading-[1.68] text-[#434C66]">
                    {feature.description}
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
