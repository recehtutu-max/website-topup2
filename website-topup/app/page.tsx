import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ProductGrid />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
