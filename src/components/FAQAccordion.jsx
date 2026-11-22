import { useState } from 'react';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '../data/faqData';
import FAQItem from './FAQItem';

/**
 * Interactive FAQAccordion supporting category tabs, individual item toggling,
 * and expand/collapse-all controls across all 14 clinic questions.
 */
export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState(() => new Set([FAQ_ITEMS[0].id]));

  const filteredItems =
    activeCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allVisibleOpen =
    filteredItems.length > 0 &&
    filteredItems.every((item) => openIds.has(item.id));

  const handleToggleAll = () => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (allVisibleOpen) {
        filteredItems.forEach((item) => next.delete(item.id));
      } else {
        filteredItems.forEach((item) => next.add(item.id));
      }
      return next;
    });
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const nextVisible =
      categoryId === 'all'
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((item) => item.category === categoryId);
    if (nextVisible.length > 0) {
      setOpenIds(new Set([nextVisible[0].id]));
    }
  };

  return (
    <section
      aria-labelledby="faq-list-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2
              id="faq-list-heading"
              className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#141D38]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Browse by Topic
            </h2>

            <button
              type="button"
              onClick={handleToggleAll}
              className="self-start sm:self-auto text-[13.5px] font-semibold text-[#664999] hover:text-[#51377E] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
            >
              {allVisibleOpen ? 'Collapse all answers' : 'Expand all answers'}
            </button>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter FAQs by category"
            className="mt-5 flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F8F5FD] border border-[#E5DDF5]"
          >
            {FAQ_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectCategory(category.id)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#51377E] shadow-xs'
                      : 'text-[#434C66] hover:text-[#141D38]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-[13px] text-[#66708A] tabular-nums">
            Showing {filteredItems.length} of {FAQ_ITEMS.length} questions
          </p>

          {/* Accordion List */}
          <div className="mt-5 space-y-3.5">
            {filteredItems.map((item, idx) => (
              <FAQItem
                key={item.id}
                id={item.id}
                index={idx}
                question={item.question}
                answer={item.answer}
                category={item.category}
                showCategory={activeCategory === 'all'}
                isOpen={openIds.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
