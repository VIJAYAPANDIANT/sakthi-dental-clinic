import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import Button from './Button';
import SectionHeader from './SectionHeader';
import { CLINIC_CONTACT } from './ContactInfo';

const ENCODED_ADDRESS = encodeURIComponent(
  `${CLINIC_CONTACT.name}, ${CLINIC_CONTACT.address}`
);

const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${ENCODED_ADDRESS}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_ADDRESS}`;

export default function ClinicMap() {
  return (
    <section
      aria-labelledby="clinic-location-heading"
      className="clinic-section bg-[#F8F5FD] border-y border-[#EFE8FA]"
    >
      <div className="clinic-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            headingId="clinic-location-heading"
            eyebrow="Visit Our Clinic"
            title="Clinic Location"
            description={CLINIC_CONTACT.address}
          />

          <div className="shrink-0">
            <Button
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 overflow-hidden rounded-[24px] bg-white border border-[#E3D7F4] shadow-[0_18px_40px_-20px_rgba(20,29,56,0.14)]">
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] bg-[#EFE8FA]">
            <iframe
              title="Sakthi Dental Clinic Location on Google Maps"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>

          <div className="px-6 py-4 sm:px-7 sm:py-5 bg-white border-t border-[#EFE8FA] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="flex items-start sm:items-center gap-2.5 text-sm text-[#434C66]">
              <MapPin
                className="w-4 h-4 text-[#664999] shrink-0 mt-0.5 sm:mt-0"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-[#141D38]">
                  {CLINIC_CONTACT.name}
                </strong>{' '}
                — {CLINIC_CONTACT.address}
              </span>
            </p>

            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#664999] hover:text-[#51377E] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:rounded-md"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
