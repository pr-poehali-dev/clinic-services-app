import Navbar from "@/components/Navbar";
import { HeroSection, ServicesSection, MoversSection, PricesSection, PortfolioSection, ReviewsSection } from "@/components/Sections";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <ServicesSection />
      <MoversSection scrollTo={scrollTo} />
      <PricesSection />
      <PortfolioSection />
      <ReviewsSection />
      <BookingSection />
      <FooterSection scrollTo={scrollTo} />
    </div>
  );
}