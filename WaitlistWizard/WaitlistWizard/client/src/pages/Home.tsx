import Hero3D from "@/components/Hero3D";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero3D />
      <PortfolioSection />
      <PricingSection />
      <Newsletter />
      <ContactForm />
    </>
  );
}
