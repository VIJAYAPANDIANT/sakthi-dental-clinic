/**
 * Reusable section header ensuring consistent typographic hierarchy,
 * spacing, and unboxed metadata discipline across homepage sections.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  headingId,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`${
        isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`.trim()}
    >
      {eyebrow && (
        <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999]">
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="mt-2 font-semibold tracking-[-0.022em] leading-[1.18] text-[#141D38]"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#434C66] ${
            isCentered ? 'mx-auto max-w-[54ch]' : 'max-w-[56ch]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
