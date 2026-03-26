import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import ServiceAreaSection from "../components/home/ServiceAreaSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <BeforeAfterSection />
      <ServiceAreaSection />
    </div>
  );
}