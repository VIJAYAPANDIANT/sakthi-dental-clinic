import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export const CLINIC_CONTACT = {
  name: 'Sakthi Dental Clinic',
  address: 'B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India',
  phones: [
    { display: '+91 9862890897', href: 'tel:+919862890897' },
    { display: '+91 9363298118', href: 'tel:+919363298118' },
  ],
  email: {
    display: 'info@sakthidentalclinic.in',
    href: 'mailto:info@sakthidentalclinic.in',
  },
};

/*
 * Working Hours Configuration
 * Client confirmation required: the project brief lists two different timings
 * (9 AM–7 PM vs. 9 AM–9 PM). Replace `confirmedHours` below once the clinic
 * confirms the final schedule so no conflicting hours are published.
 */
const WORKING_HOURS_CONFIG = {
  isConfirmed: false,
  confirmedHours: '',
  pendingNote:
    'Consultation timings are pending final confirmation. Please call our clinic directly before visiting to confirm daily hours.',
};

export default function ContactInfo() {
  return (
    <aside
      aria-labelledby="contact-info-heading"
      className="space-y-5"
    >
      <div className="clinic-card p-6 sm:p-8">
        <p className="text-[13px] font-medium tracking-[0.01em] text-[#664999]">
          Direct Clinic Details
        </p>
        <h2
          id="contact-info-heading"
          className="mt-1.5 text-[24px] sm:text-[26px] font-semibold tracking-[-0.018em] text-[#141D38]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {CLINIC_CONTACT.name}
        </h2>

        <dl className="mt-7 divide-y divide-[#F1EBF9]">
          {/* Address */}
          <div className="pb-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#F1EBF9] border border-[#E3D7F4] flex items-center justify-center shrink-0">
              <MapPin
                className="w-5 h-5 text-[#664999]"
                aria-hidden="true"
              />
            </div>
            <div>
              <dt className="text-[13px] font-semibold text-[#66708A]">
                Clinic Address
              </dt>
              <dd className="mt-1 text-[15px] leading-[1.65] text-[#141D38]">
                {CLINIC_CONTACT.address}
              </dd>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="py-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#EEF5FC] border border-[#D8E7F7] flex items-center justify-center shrink-0">
              <Phone
                className="w-5 h-5 text-[#2C5F9E]"
                aria-hidden="true"
              />
            </div>
            <div>
              <dt className="text-[13px] font-semibold text-[#66708A]">
                Phone Numbers
              </dt>
              <dd className="mt-1.5 flex flex-col gap-1.5">
                {CLINIC_CONTACT.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="inline-flex items-center text-[15.5px] font-semibold text-[#141D38] hover:text-[#664999] transition-colors duration-150 tabular-nums w-fit focus-visible:rounded-md"
                  >
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
          </div>

          {/* Email */}
          <div className="pt-5 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#FDF2F6] border border-[#F2D7E2] flex items-center justify-center shrink-0">
              <Mail
                className="w-5 h-5 text-[#A94B6E]"
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0">
              <dt className="text-[13px] font-semibold text-[#66708A]">
                Email Address
              </dt>
              <dd className="mt-1.5">
                <a
                  href={CLINIC_CONTACT.email.href}
                  className="text-[15px] font-semibold text-[#141D38] hover:text-[#664999] transition-colors duration-150 break-all focus-visible:rounded-md"
                >
                  {CLINIC_CONTACT.email.display}
                </a>
              </dd>
            </div>
          </div>
        </dl>
      </div>

      {/* Working Hours Card (Pending Client Confirmation) */}
      <div className="rounded-[20px] bg-[#F8F5FD] border border-[#E5DDF5] p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-white border border-[#E5DDF5] flex items-center justify-center shrink-0">
            <Clock
              className="w-5 h-5 text-[#664999]"
              aria-hidden="true"
            />
          </div>

          <div>
            <h3
              className="text-[17px] font-semibold text-[#141D38]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Working Hours
            </h3>

            {WORKING_HOURS_CONFIG.isConfirmed ? (
              <p className="mt-1.5 text-[15px] font-medium text-[#141D38] tabular-nums">
                {WORKING_HOURS_CONFIG.confirmedHours}
              </p>
            ) : (
              <>
                <p className="mt-1 text-[13px] font-semibold text-[#664999]">
                  Pending clinic confirmation
                </p>
                <p className="mt-1.5 text-[14px] leading-[1.65] text-[#434C66]">
                  {WORKING_HOURS_CONFIG.pendingNote}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
