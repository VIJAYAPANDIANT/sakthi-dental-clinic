import { Link } from 'react-router-dom';

const VARIANT_STYLES = {
  primary:
    'bg-[#664999] text-white hover:bg-[#51377E] active:bg-[#432C6B] shadow-[0_8px_20px_-8px_rgba(102,73,153,0.45)] border border-transparent',
  secondary:
    'bg-[#141D38] text-white hover:bg-[#1F2B4D] active:bg-[#0E152B] shadow-[0_8px_20px_-10px_rgba(20,29,56,0.45)] border border-transparent',
  emergency:
    'bg-white text-[#141D38] border border-[#D8C9EE] hover:bg-[#FDF2F6] hover:border-[#E8C0D0] hover:text-[#8E3556] active:bg-[#FAE6EE]',
  outline:
    'bg-transparent text-[#141D38] border border-[#CEBBE9] hover:bg-[#F8F5FD] hover:border-[#664999] hover:text-[#51377E]',
  ghost:
    'bg-transparent text-[#434C66] border border-transparent hover:bg-[#F8F5FD] hover:text-[#141D38]',
};

const SIZE_STYLES = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-2.5 text-sm min-h-[44px]',
  lg: 'px-7 py-3.5 text-[15px] min-h-[48px]',
};

/**
 * Reusable Button component supporting React Router links, anchor tags, and native buttons.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  onClick,
  ...rest
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] whitespace-nowrap shrink-0 transition-all duration-150 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#664999] disabled:opacity-55 disabled:pointer-events-none';

  const variantClasses = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const sizeClasses = SIZE_STYLES[size] || SIZE_STYLES.md;
  const composedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={composedClasses} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={composedClasses} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={composedClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
