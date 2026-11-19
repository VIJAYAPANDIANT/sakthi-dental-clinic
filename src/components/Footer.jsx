import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E3D7F4]">
      <div className="clinic-container py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link
              to="/"
              className="text-[18px] font-semibold tracking-[-0.015em] text-[#141D38] hover:text-[#664999] transition-colors duration-150"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sakthi Dental Clinic
            </Link>
            <p className="mt-1.5 text-sm text-[#66708A]">
              Hosur, Tamil Nadu
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-[#434C66] hover:text-[#51377E] transition-colors duration-150 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F1EBF9] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#66708A]">
          <p>© {currentYear} Sakthi Dental Clinic, Hosur. All rights reserved.</p>
          <p>Specialized Dental Care for Women, Children &amp; Families</p>
        </div>
      </div>
    </footer>
  );
}
