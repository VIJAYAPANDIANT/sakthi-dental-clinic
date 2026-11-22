import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible FAQ accordion item with smooth expand/collapse animation.
 */
export default function FAQItem({
  id,
  index,
  question,
  answer,
  category,
  isOpen,
  onToggle,
  showCategory = false,
}) {
  const prefersReducedMotion = useReducedMotion();
  const buttonId = `${id}-trigger`;
  const panelId = `${id}-panel`;
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`rounded-[18px] border transition-colors duration-200 ${
        isOpen
          ? 'bg-[#FAF7FE] border-[#CEBBE9] shadow-[0_12px_28px_-16px_rgba(20,29,56,0.12)]'
          : 'bg-white border-[#E5DDF5] hover:border-[#D3C3EC]'
      }`}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 px-5 py-5 sm:px-6 sm:py-5 text-left cursor-pointer rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#664999]"
        >
          <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
            <span
              aria-hidden="true"
              className={`text-[13px] font-semibold tabular-nums pt-0.5 shrink-0 transition-colors duration-150 ${
                isOpen ? 'text-[#664999]' : 'text-[#9A8BB8]'
              }`}
            >
              {formattedNumber}
            </span>

            <div className="min-w-0">
              {showCategory && (
                <span className="block text-[12px] font-medium text-[#66708A] mb-1">
                  {category}
                </span>
              )}
              <span
                className={`block text-[16px] sm:text-[17px] font-semibold leading-[1.45] transition-colors duration-150 ${
                  isOpen ? 'text-[#51377E]' : 'text-[#141D38]'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {question}
              </span>
            </div>
          </div>

          <span
            aria-hidden="true"
            className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
              isOpen
                ? 'bg-[#664999] border-[#664999] text-white rotate-180'
                : 'bg-[#F8F5FD] border-[#E5DDF5] text-[#664999] rotate-0'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              prefersReducedMotion
                ? { opacity: 1, height: 'auto' }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: 'auto' }}
            exit={
              prefersReducedMotion
                ? { opacity: 0, height: 'auto' }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pl-[3.25rem] sm:pl-[3.85rem]">
              <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#434C66]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
