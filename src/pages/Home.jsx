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
      {/* Day 1 & Day 2 Foundation */}
      <Hero />
      <WelcomeBanner />

      {/* Day 3 Homepage Sections */}
      <WhyChooseUs />
      <Services />
      {/* Day 4 Scaffold */}
      <Testimonials />
      <Amenities />
      <CTA />
    </>
  );
}
