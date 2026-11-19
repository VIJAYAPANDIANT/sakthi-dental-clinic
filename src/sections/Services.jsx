import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const CORE_TREATMENTS = [
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    description:
      'Safe and painless removal of impacted or decayed teeth.',
    image:
      '/src/assets/images/treatment_tooth_extraction_1795132495798.jpg',
    alt: 'Dentist explaining digital dental X-ray care calmly before a gentle tooth extraction procedure',
  },
  {
    id: 'complete-denture',
    name: 'Artificial Complete Denture',
    description:
      'Full mouth replacement to restore confidence and function.',
    image:
      '/src/assets/images/treatment_complete_denture_1795132495670.jpg',
    alt: 'Natural-looking crafted artificial complete dental denture displayed on a clean clinical tray',
  },
  {
    id: 'tooth-filling',
    name: 'Tooth Filling',
    description:
      'Composite fillings for cavity treatment and tooth restoration.',
    image:
      '/src/assets/images/treatment_tooth_filling_1795132495239.jpg',
    alt: 'Dentist performing a gentle composite tooth filling restoration with a smiling patient',
  },
  {
    id: 'teeth-cleaning',
    name: 'Teeth Cleaning or Scaling',
    description:
      'Preventive care to remove plaque and protect gums.',
    image:
      '/src/assets/images/treatment_teeth_cleaning_1795132494347.jpg',
    alt: 'Preventive ultrasonic teeth cleaning and gentle gum care checkup in a bright clinic',
  },
  {
    id: 'bleaching',
    name: 'Bleaching',
    description:
      'Cosmetic whitening treatments for a brighter smile.',
    image:
      '/src/assets/images/treatment_bleaching_1795132494795.jpg',
    alt: 'Patient with a confident, naturally bright healthy smile in a modern pastel lavender dental clinic',
  },
  {
    id: 'orthodontic-treatment',
    name: 'Orthodontic Treatment',
    description:
      'Braces and aligners to straighten and align teeth.',
    image:
      '/src/assets/images/treatment_orthodontic_1795132496181.jpg',
    alt: 'Modern clear orthodontic aligners beside a precision dental alignment model',
  },
];

function TreatmentCard({ treatment, index, prefersReducedMotion }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: prefersReducedMotion ? 0 : (index % 3) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="clinic-card group overflow-hidden flex flex-col transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#CEBBE9] hover:shadow-[0_20px_42px_-20px_rgba(20,29,56,0.16)]"
    >
      <Link
        to="/treatments"
        className="flex flex-col flex-1 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#664999] rounded-[20px]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F1EBF9] border-b border-[#EFE8FA]">
          {!imgError ? (
            <img
              src={treatment.image}
              alt={treatment.alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.035]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F1EBF9] via-[#FAF6FE] to-[#EEF5FC]">
              <Sparkles
                className="w-7 h-7 text-[#664999] mb-2"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-[#141D38]">
                {treatment.name}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            <h3
              className="text-[19px] font-semibold tracking-[-0.015em] leading-[1.3] text-[#141D38] group-hover:text-[#51377E] transition-colors duration-150"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {treatment.name}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-[#434C66]">
              {treatment.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-[#F4EFFB] flex items-center justify-between text-[13.5px] font-semibold text-[#664999]">
            <span>Explore treatment</span>
            <ArrowRight
              className="w-4 h-4 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-heading"
      className="clinic-section bg-[#F8F5FD] border-y border-[#EFE8FA]"
    >
      <div className="clinic-container">
        <SectionHeader
          headingId="services-heading"
          eyebrow="Our Core Treatments"
          title="Explore Our Services"
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {CORE_TREATMENTS.map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        <div className="mt-11 flex justify-center">
          <Button to="/treatments" variant="primary" size="lg">
            <span>View Full List of Treatments</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
