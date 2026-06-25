import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import AandV from "@/components/Our approach and values/AandV";
import ShowcaseSection from "@/components/ShowcaseSection/ShowcaseSection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <AandV />
        <ShowcaseSection />
      </main>
    </>
  );
}
