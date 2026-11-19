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
      {/* Homepage Foundation: Hero & Welcome Assurance Banner */}
      <Hero />
      <WelcomeBanner />

      {/* Day 3 Modular Sections (scaffolded and ready for upcoming client content) */}
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Amenities />
      <CTA />
    </>
  );
}
