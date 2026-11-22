import Hero from '../sections/Hero';
import WelcomeBanner from '../sections/WelcomeBanner';
import WhyChooseUs from '../sections/WhyChooseUs';
import Services from '../sections/Services';
import Amenities from '../sections/Amenities';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeBanner />
      <WhyChooseUs />
      <Services />
      <Amenities />
      <CTA />
    </>
  );
}
