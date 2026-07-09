import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import AandV from "@/components/Our approach and values/AandV";
import ShowcaseSection from "@/components/ShowcaseSection/ShowcaseSection";
import LatestWork from "@/components/Latest Work/LatestWork";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import LatestNews from "@/components/Latest news/LatestNews";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <AandV />
        <ShowcaseSection />
        <LatestWork />
        <TestimonialsSection />
        <LatestNews />
        <ContactSection />
      </main>
    </>
  );
}
