import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Team from "@/components/sections/team";
import NriExpertise from "@/components/NRI/keySolutions";
import InvestmentSolutionsPage from "@/components/NRI/investmentSolutions";
import MapSection from "@/components/NRI/mapSection";
import ImageShowcaseCarousel from "@/components/NRI/imageCarousal";
import Testimonials from "@/components/NRI/testimonials";
import NRIHeroSection from "@/components/NRI/heroSection";
import WhyChooseSection from "@/components/NRI/whyChooseUs";
import KeySolutionsList from "@/components/NRI/explainedSolution";
import AMCMarqueeCarousel from "@/components/NRI/amcCarousal";

export default function NRIServicesPage() {
  return (
    <div className="min-h-screen  ">
      <Header />
      <main className="pt-8">
        <NRIHeroSection />
        <NriExpertise />
        <ImageShowcaseCarousel />
        <InvestmentSolutionsPage />
        <MapSection />
        <Team />
        <KeySolutionsList />
        <WhyChooseSection />
        <AMCMarqueeCarousel />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
