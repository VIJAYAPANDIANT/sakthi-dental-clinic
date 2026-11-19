import { motion, useReducedMotion } from 'framer-motion';
import {
  Accessibility,
  Car,
  CarFront,
  Clock,
  MapPin,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const CLINIC_FACILITIES = [
  {
    title: 'Convenient central location',
    icon: MapPin,
    accentColor: 'text-[#664999]',
    spanClass: 'sm:col-span-1 lg:col-span-2',
  },
  {
    title: 'Hassle-free parking',
    icon: Car,
    accentColor: 'text-[#2C5F9E]',
    spanClass: 'sm:col-span-1 lg:col-span-2',
  },
  {
    title: 'Doctors available daily (9 AM - 9 PM)',
    icon: Clock,
    accentColor: 'text-[#664999]',
    spanClass: 'sm:col-span-1 lg:col-span-2',
    isTabular: true,
  },
  {
    title: 'Pickup & drop-off support',
    icon: CarFront,
    accentColor: 'text-[#A94B6E]',
    spanClass: 'sm:col-span-1 lg:col-span-3',
  },
  {
    title: 'Wheelchair access',
    icon: Accessibility,
    accentColor: 'text-[#2C5F9E]',
    spanClass: 'sm:col-span-2 lg:col-span-3',
  },
];

export default function Amenities() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="clinic-facilities-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <SectionHeader
          headingId="clinic-facilities-heading"
          eyebrow="Designed for Comfort & Accessibility"
          title="Clinic Facilities"
        />

        <ul
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5"
          aria-label="Sakthi Dental Clinic Facilities"
        >
          {CLINIC_FACILITIES.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.li
                key={facility.title}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.36,
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${facility.spanClass} group rounded-[20px] bg-[#F8F5FD] border border-[#E5DDF5] p-6 sm:p-7 flex items-center gap-4 transition-all duration-200 ease-out hover:bg-[#F1EBF9] hover:border-[#CEBBE9]`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5DDF5] shadow-[0_6px_16px_-10px_rgba(20,29,56,0.18)] flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-[1.05]">
                  <Icon
                    className={`w-5 h-5 ${facility.accentColor}`}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className={`text-[16px] sm:text-[17px] font-semibold leading-[1.35] text-[#141D38] ${
                    facility.isTabular ? 'tabular-nums' : ''
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {facility.title}
                </h3>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
