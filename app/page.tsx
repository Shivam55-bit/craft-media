import Navbar from "@/src/components/navbar";
import HeroSection from "@/src/components/sections/hero-section";
import BrandSection from "@/src/components/sections/brand-section";
import ServicesSection from "@/src/components/sections/services-section";
import Footer from "@/src/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#fffdfa]" role="main">
        <HeroSection />
        <BrandSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
