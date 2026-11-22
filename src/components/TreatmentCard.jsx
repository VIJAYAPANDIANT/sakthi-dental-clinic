import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Stethoscope } from 'lucide-react';

const TONE_STYLES = {
  lavender: {
    iconWrap: 'bg-[#F1EBF9] border-[#E3D7F4]',
    iconColor: 'text-[#664999]',
  },
  sky: {
    iconWrap: 'bg-[#EEF5FC] border-[#D8E7F7]',
    iconColor: 'text-[#2C5F9E]',
  },
  blush: {
    iconWrap: 'bg-[#FDF2F6] border-[#F2D7E2]',
    iconColor: 'text-[#A94B6E]',
  },
};

/**
 * Reusable TreatmentCard displaying a dental treatment's icon,
 * editorial index, name, concise description, and consultation link.
 */
export default function TreatmentCard({
  index,
  name,
  description,
  category,
  icon: Icon = Stethoscope,
  tone = 'lavender',
}) {
  const prefersReducedMotion = useReducedMotion();
  const styles = TONE_STYLES[tone] || TONE_STYLES.lavender;
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      layout={!prefersReducedMotion}
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.36,
        delay: prefersReducedMotion ? 0 : (index % 3) * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="clinic-card group h-full p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#CEBBE9] hover:shadow-[0_18px_38px_-18px_rgba(20,29,56,0.14)]"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div
            className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover:scale-[1.05] ${styles.iconWrap}`}
          >
            <Icon className={`w-5 h-5 ${styles.iconColor}`} aria-hidden="true" />
          </div>

          <span
            aria-hidden="true"
            className="text-xs font-semibold tracking-wider text-[#9A8BB8] tabular-nums pt-1"
          >
            {formattedNumber}
          </span>
        </div>

        <p className="mt-5 text-[12.5px] font-medium text-[#66708A]">
          {category}
        </p>

        <h3
          className="mt-1.5 text-[19px] sm:text-[20px] font-semibold tracking-[-0.015em] leading-[1.3] text-[#141D38] group-hover:text-[#51377E] transition-colors duration-150"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {name}
        </h3>

        <p className="mt-2.5 text-[14.5px] leading-[1.68] text-[#434C66]">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F4EFFB]">
        <Link
          to="/contact?intent=appointment"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#664999] hover:text-[#51377E] transition-colors duration-150 focus-visible:rounded-md"
        >
          <span>Consult for this treatment</span>
          <ArrowRight
            className="w-4 h-4 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}
