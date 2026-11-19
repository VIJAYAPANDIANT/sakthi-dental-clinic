import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CalendarCheck, Menu, X } from 'lucide-react';
import Button from './Button';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
];

function ClinicEmblem() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="36" height="36" rx="10" fill="#F1EBF9" />
      <path
        d="M18 9.2C14.8 9.2 12.1 11.45 12.1 14.85C12.1 17.25 13.05 19.35 13.85 21.6C14.5 23.45 15 26.3 16.35 26.3C17.2 26.3 17.55 24.4 18 23.25C18.45 24.4 18.8 26.3 19.65 26.3C21 26.3 21.5 23.45 22.15 21.6C22.95 19.35 23.9 17.25 23.9 14.85C23.9 11.45 21.2 9.2 18 9.2Z"
        stroke="#664999"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6 13.6C16.2 12.8 17.05 12.4 18 12.4"
        stroke="#A94B6E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        hasScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E3D7F4] shadow-[0_8px_24px_-16px_rgba(20,29,56,0.14)]'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#EFE8FA]'
      }`}
    >
      <div className="clinic-container">
        <div className="flex items-center justify-between gap-8 h-[72px]">
          {/* Zone 1: Brand wordmark (single line) */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-[#141D38] whitespace-nowrap shrink-0 group focus-visible:rounded-lg"
            aria-label="Sakthi Dental Clinic Home"
          >
            <ClinicEmblem />
            <span
              className="text-[19px] font-semibold tracking-[-0.015em] text-[#141D38] group-hover:text-[#664999] transition-colors duration-150"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sakthi Dental Clinic
            </span>
          </Link>

          {/* Zone 2: Desktop navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1.5 text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#51377E] font-semibold'
                      : 'text-[#434C66] hover:text-[#141D38]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-transform duration-150 origin-left ${
                        isActive
                          ? 'bg-[#664999] scale-x-100'
                          : 'bg-[#CEBBE9] scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              to="/contact?intent=appointment"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Fix an Appointment</span>
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E3D7F4] text-[#141D38] hover:bg-[#F8F5FD] transition-colors duration-150 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Navigation Menu */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-[#EFE8FA] shadow-[0_18px_36px_-18px_rgba(20,29,56,0.18)]"
          >
            <div className="clinic-container py-5 flex flex-col gap-1.5">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#F8F5FD] text-[#51377E] font-semibold'
                        : 'text-[#434C66] hover:bg-[#FAF8FE] hover:text-[#141D38]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-3 mt-2 border-t border-[#EFE8FA]">
                <Button
                  to="/contact?intent=appointment"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Fix an Appointment</span>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
