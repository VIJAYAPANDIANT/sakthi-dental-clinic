import { useState } from 'react';
import {
  Activity,
  AlignCenter,
  Baby,
  Crown,
  HeartPulse,
  Layers,
  Link2,
  Scan,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  Zap,
} from 'lucide-react';
import TreatmentCard from '../components/TreatmentCard';
import SectionHeader from '../components/SectionHeader';

/*
 * All 15 treatments offered at Sakthi Dental Clinic.
 * Descriptions stay concise and grounded in the clinic's core service overview.
 */
const TREATMENTS_LIST = [
  {
    id: 'teeth-cleaning-scaling',
    name: 'Teeth Cleaning & Scaling',
    category: 'Preventive Care',
    filterGroup: 'preventive',
    description:
      'Preventive care to remove plaque and tartar buildup while helping protect gums and maintain oral hygiene.',
    icon: Sparkles,
    tone: 'lavender',
  },
  {
    id: 'tooth-filling',
    name: 'Tooth Filling',
    category: 'Restorative Care',
    filterGroup: 'restorative',
    description:
      'Composite fillings for cavity treatment and natural-looking tooth restoration.',
    icon: Shield,
    tone: 'sky',
  },
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    category: 'Oral Surgery',
    filterGroup: 'surgical',
    description:
      'Safe and painless removal of impacted or decayed teeth with attentive patient comfort.',
    icon: Stethoscope,
    tone: 'blush',
  },
  {
    id: 'artificial-complete-denture',
    name: 'Artificial Complete Denture',
    category: 'Prosthodontics',
    filterGroup: 'restorative',
    description:
      'Full mouth replacement designed to restore everyday chewing function and smile confidence.',
    icon: Smile,
    tone: 'lavender',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    category: 'Implantology',
    filterGroup: 'surgical',
    description:
      'Modern replacement option that supports artificial teeth securely to restore function and appearance.',
    icon: ShieldCheck,
    tone: 'sky',
  },
  {
    id: 'laser-dentistry',
    name: 'Laser Dentistry',
    category: 'Modern Dentistry',
    filterGroup: 'surgical',
    description:
      'Precision laser-assisted dental procedures designed for gentle, modern clinical treatment.',
    icon: Zap,
    tone: 'blush',
  },
  {
    id: 'root-canal-therapy',
    name: 'Root Canal Therapy',
    category: 'Endodontics',
    filterGroup: 'restorative',
    description:
      'Restorative endodontic treatment to address tooth infection and help preserve the natural tooth.',
    icon: HeartPulse,
    tone: 'lavender',
  },
  {
    id: 'wisdom-tooth-extraction',
    name: 'Wisdom Tooth Extraction',
    category: 'Oral Surgery',
    filterGroup: 'surgical',
    description:
      'Careful removal of impacted or painful wisdom teeth to protect surrounding teeth and gums.',
    icon: Activity,
    tone: 'sky',
  },
  {
    id: 'fixed-partial-denture',
    name: 'Fixed Partial Denture (Bridge)',
    category: 'Prosthodontics',
    filterGroup: 'restorative',
    description:
      'Custom dental bridge supported by adjacent teeth to replace one or more missing teeth.',
    icon: Link2,
    tone: 'blush',
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening (Bleaching)',
    category: 'Cosmetic Care',
    filterGroup: 'cosmetic',
    description:
      'Cosmetic whitening treatments designed for a cleaner, brighter smile.',
    icon: Sun,
    tone: 'lavender',
  },
  {
    id: 'veneers',
    name: 'Veneers',
    category: 'Cosmetic Care',
    filterGroup: 'cosmetic',
    description:
      'Thin custom shells placed over the front surface of teeth to refine smile shape and appearance.',
    icon: Crown,
    tone: 'sky',
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    category: 'Children’s Care',
    filterGroup: 'preventive',
    description:
      'Gentle, reassuring preventive and restorative dental care tailored specifically for children.',
    icon: Baby,
    tone: 'blush',
  },
  {
    id: 'flap-surgery',
    name: 'Flap Surgery',
    category: 'Periodontal Care',
    filterGroup: 'surgical',
    description:
      'Specialized gum care procedure to clean deep gum pockets and support healthier gum tissue.',
    icon: Layers,
    tone: 'lavender',
  },
  {
    id: 'orthodontic-braces',
    name: 'Orthodontic Braces',
    category: 'Orthodontics',
    filterGroup: 'cosmetic',
    description:
      'Structured braces to straighten teeth and guide balanced bite alignment.',
    icon: AlignCenter,
    tone: 'sky',
  },
  {
    id: 'clear-aligners',
    name: 'Clear Aligners',
    category: 'Orthodontics',
    filterGroup: 'cosmetic',
    description:
      'Removable transparent aligners designed to straighten and align teeth discreetly.',
    icon: Scan,
    tone: 'blush',
  },
];

const FILTER_OPTIONS = [
  { id: 'all', label: 'All Treatments' },
  { id: 'preventive', label: 'Preventive & Pediatric' },
  { id: 'restorative', label: 'Restorative & Dentures' },
  { id: 'surgical', label: 'Surgical & Implants' },
  { id: 'cosmetic', label: 'Cosmetic & Orthodontics' },
];

export default function TreatmentsGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleTreatments =
    activeFilter === 'all'
      ? TREATMENTS_LIST
      : TREATMENTS_LIST.filter((item) => item.filterGroup === activeFilter);

  return (
    <section
      aria-labelledby="all-treatments-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            headingId="all-treatments-heading"
            eyebrow="Comprehensive Care Under One Roof"
            title="All Dental Services"
          />

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter treatments by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F8F5FD] border border-[#E5DDF5]"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#51377E] shadow-xs'
                      : 'text-[#434C66] hover:text-[#141D38]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-[13px] text-[#66708A] tabular-nums">
          Showing {visibleTreatments.length} of {TREATMENTS_LIST.length} treatments
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {visibleTreatments.map((treatment, idx) => (
            <TreatmentCard
              key={treatment.id}
              index={idx}
              name={treatment.name}
              category={treatment.category}
              description={treatment.description}
              icon={treatment.icon}
              tone={treatment.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
