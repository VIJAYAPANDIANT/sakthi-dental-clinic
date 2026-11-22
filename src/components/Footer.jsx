import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CLINIC_CONTACT } from './ContactInfo';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

function FooterEmblem() {
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7FE] border-t border-[#E3D7F4]">
      <div className="clinic-container py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Clinic Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-[#141D38] hover:text-[#664999] transition-colors duration-150 focus-visible:rounded-lg"
            >
              <FooterEmblem />
              <span
                className="text-[19px] font-semibold tracking-[-0.015em]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {CLINIC_CONTACT.name}
              </span>
            </Link>

            <p className="mt-4 text-[14.5px] leading-[1.7] text-[#434C66] max-w-[34ch]">
              Specialized dental care for women, children, and families in
              Hosur, Tamil Nadu.
            </p>
          </div>

          {/* Column 2: Quick Links to All Six Pages */}
          <div className="lg:col-span-3">
            <h2
              className="text-[15px] font-semibold text-[#141D38]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h2>
            <nav
              aria-label="Footer Navigation"
              className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2.5"
            >
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[14px] font-medium text-[#434C66] hover:text-[#51377E] transition-colors duration-150 w-fit focus-visible:rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Verified Contact Details */}
          <div className="md:col-span-2 lg:col-span-5">
            <h2
              className="text-[15px] font-semibold text-[#141D38]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact Information
            </h2>

            <address className="mt-4 not-italic space-y-3.5 text-[14px] text-[#434C66]">
              <p className="flex items-start gap-3 leading-[1.65]">
                <MapPin
                  className="w-4 h-4 text-[#664999] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span>{CLINIC_CONTACT.address}</span>
              </p>

              <p className="flex items-start gap-3 leading-[1.65]">
                <Phone
                  className="w-4 h-4 text-[#2C5F9E] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1 tabular-nums">
                  <a
                    href={CLINIC_CONTACT.phones[0].href}
                    className="font-medium text-[#141D38] hover:text-[#664999] transition-colors duration-150 focus-visible:rounded-md"
                  >
                    {CLINIC_CONTACT.phones[0].display}
                  </a>
                  <span aria-hidden="true" className="text-[#B6A1D8]">
                    /
                  </span>
                  <a
                    href={CLINIC_CONTACT.phones[1].href}
                    className="font-medium text-[#141D38] hover:text-[#664999] transition-colors duration-150 focus-visible:rounded-md"
                  >
                    {CLINIC_CONTACT.phones[1].display}
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-3 leading-[1.65]">
                <Mail
                  className="w-4 h-4 text-[#A94B6E] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <a
                  href={CLINIC_CONTACT.email.href}
                  className="font-medium text-[#141D38] hover:text-[#664999] transition-colors duration-150 break-all focus-visible:rounded-md"
                >
                  {CLINIC_CONTACT.email.display}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Copyright & Privacy Bar */}
        <div className="mt-10 pt-6 border-t border-[#E6DCF5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] text-[#66708A]">
          <p>
            © {currentYear} {CLINIC_CONTACT.name}, Hosur. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="font-medium text-[#434C66] hover:text-[#51377E] transition-colors duration-150 focus-visible:rounded-md"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact?intent=appointment"
              className="font-semibold text-[#664999] hover:text-[#51377E] transition-colors duration-150 focus-visible:rounded-md"
            >
              Fix an Appointment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
