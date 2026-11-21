import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

function getInitials(name) {
  const cleaned = name.replace(/^Dr\.?\s+/i, '').trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'DR';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

const ACCENT_PALETTES = {
  lavender: {
    backdrop: 'from-[#F2ECFA] via-[#FAF7FE] to-[#EAE0F7]',
    ring: 'border-[#DDD0F2]',
    initials: 'text-[#51377E]',
    iconColor: 'text-[#664999]',
  },
  sky: {
    backdrop: 'from-[#EDF4FC] via-[#F8FBFF] to-[#E1EEFB]',
    ring: 'border-[#D2E4F7]',
    initials: 'text-[#1F4B80]',
    iconColor: 'text-[#2C5F9E]',
  },
  blush: {
    backdrop: 'from-[#FDF2F6] via-[#FFF9FB] to-[#F8E3EC]',
    ring: 'border-[#F0D4E0]',
    initials: 'text-[#873454]',
    iconColor: 'text-[#A94B6E]',
  },
};

/**
 * Reusable DoctorCard displaying doctor's name, specialization,
 * and either their clinical portrait or a consistent professional placeholder.
 */
export default function DoctorCard({
  name,
  specialization,
  image,
  accent = 'lavender',
  icon: SpecialtyIcon = Stethoscope,
  index = 0,
}) {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const palette = ACCENT_PALETTES[accent] || ACCENT_PALETTES.lavender;
  const initials = getInitials(name);

  return (
    <motion.article
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.38,
        delay: prefersReducedMotion ? 0 : (index % 3) * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="clinic-card group overflow-hidden flex flex-col transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#CEBBE9] hover:shadow-[0_18px_38px_-18px_rgba(20,29,56,0.14)]"
    >
      {/* Portrait or Consistent Clinical Placeholder */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden border-b border-[#EFE8FA] bg-gradient-to-br ${palette.backdrop}`}
      >
        {image && !imageError ? (
          <img
            src={image}
            alt={`${name}, ${specialization} at Sakthi Dental Clinic`}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6">
            <div
              className={`relative w-24 h-24 rounded-full bg-white/95 border ${palette.ring} shadow-[0_10px_26px_-14px_rgba(20,29,56,0.22)] flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-[1.04]`}
            >
              <span
                className={`text-2xl font-semibold tracking-[-0.02em] ${palette.initials}`}
                style={{ fontFamily: 'var(--font-display)' }}
                aria-hidden="true"
              >
                {initials}
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border border-[#E5DDF5] shadow-xs flex items-center justify-center"
              >
                <SpecialtyIcon className={`w-4 h-4 ${palette.iconColor}`} />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Doctor Identity */}
      <div className="p-6 flex flex-col justify-center flex-1">
        <h3
          className="text-[19px] font-semibold tracking-[-0.015em] leading-[1.3] text-[#141D38] group-hover:text-[#51377E] transition-colors duration-150"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {name}
        </h3>
        <p className="mt-1.5 text-[14px] font-medium text-[#664999]">
          {specialization}
        </p>
      </div>
    </motion.article>
  );
}
