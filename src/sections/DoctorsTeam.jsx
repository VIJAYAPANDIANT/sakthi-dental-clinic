import {
  Activity,
  Award,
  HeartPulse,
  Scan,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
} from 'lucide-react';
import DoctorCard from '../components/DoctorCard';
import SectionHeader from '../components/SectionHeader';
import { FOUNDER_IMAGE_SRC } from './FounderSection';

const DOCTORS = [
  {
    name: 'Dr. Anupriya',
    specialization: 'Founder',
    image: FOUNDER_IMAGE_SRC,
    accent: 'lavender',
    icon: Award,
  },
  {
    name: 'Dr. Ananya Iyer',
    specialization: 'Prosthodontist',
    accent: 'sky',
    icon: Smile,
  },
  {
    name: 'Dr. Meera Subramanian',
    specialization: 'Endodontist',
    accent: 'blush',
    icon: HeartPulse,
  },
  {
    name: 'Dr. Arvind Kumar',
    specialization: 'Dental Surgeon',
    accent: 'lavender',
    icon: Stethoscope,
  },
  {
    name: 'Dr. Sneha N',
    specialization: 'Orthodontist',
    accent: 'sky',
    icon: Sparkles,
  },
  {
    name: 'Dr. Srinivas Rohit Ramanujam',
    specialization: 'Implantologist',
    accent: 'blush',
    icon: ShieldCheck,
  },
  {
    name: 'Dr. Balu',
    specialization: 'Laser Surgeon',
    accent: 'lavender',
    icon: Zap,
  },
  {
    name: 'Dr. Vikram Raj Kishore',
    specialization: 'Aligners Partner',
    accent: 'sky',
    icon: Scan,
  },
  {
    name: 'Dr. Ajay Jumar',
    specialization: 'Oral & Maxillofacial Surgeon',
    accent: 'blush',
    icon: Activity,
  },
];

export default function DoctorsTeam() {
  return (
    <section
      aria-labelledby="our-doctors-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <SectionHeader
          headingId="our-doctors-heading"
          eyebrow="Dedicated Clinical Specialists"
          title="Our Doctors"
          description="A collaborative team of specialists committed to gentle, attentive, and personalized dental care for every member of your family."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {DOCTORS.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialization={doctor.specialization}
              image={doctor.image}
              accent={doctor.accent}
              icon={doctor.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
