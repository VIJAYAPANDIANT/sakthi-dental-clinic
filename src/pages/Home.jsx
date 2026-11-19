import Hero from '../sections/Hero';
import WelcomeBanner from '../sections/WelcomeBanner';
import WhyChooseUs from '../sections/WhyChooseUs';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Amenities from '../sections/Amenities';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      {/* Day 1 Deliverables */}
      <Hero />
      <WelcomeBanner />

      {/* Day 2 Modular Sections (scaffolded, populated with client content next) */}
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Amenities />
      <CTA />
    </>
  );
}
