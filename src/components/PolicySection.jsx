/**
 * Reusable editorial PolicySection component for structured legal and policy copy.
 */
export default function PolicySection({
  id,
  number,
  title,
  paragraphs = [],
  bullets = [],
  children,
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 py-8 first:pt-0 last:pb-0"
    >
      <div className="flex items-baseline gap-3">
        {number && (
          <span
            aria-hidden="true"
            className="text-[13px] font-semibold tracking-wider text-[#8C75B8] tabular-nums shrink-0"
          >
            {number}
          </span>
        )}
        <h2
          id={headingId}
          className="text-[21px] sm:text-[23px] font-semibold tracking-[-0.018em] leading-[1.28] text-[#141D38]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
      </div>

      {paragraphs.length > 0 && (
        <div className="mt-4 space-y-3.5 max-w-[68ch]">
          {paragraphs.map((text) => (
            <p
              key={text}
              className="text-[15.5px] leading-[1.78] text-[#434C66]"
            >
              {text}
            </p>
          ))}
        </div>
      )}

      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2.5 max-w-[66ch]">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[15px] leading-[1.72] text-[#434C66]"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-[#7E62B0] mt-[11px] shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {children && <div className="mt-5">{children}</div>}
    </section>
  );
}
