"use client";
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
import AnimatedImageCarousel from "@/components/NRI/AnimatedImageCarousel";
import ContactForm from "@/components/NRI/contactform";
import React from "react";

function StickyConsultationFab() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("nri-hero");
    if (!hero) {
      const onScroll = () => setVisible(window.scrollY > 100);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const handleClick = () => {
    const el = document.getElementById("consult");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Book a consultation"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-emerald-600 text-white px-5 py-3 shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      Book a consultation
    </button>
  );
}

export default function NRIServicesPage() {
  return (
    <div className="min-h-screen  ">
      <Header />
      <main className="pt-8">
        <NRIHeroSection />
        <NriExpertise />
        <AnimatedImageCarousel />
        {/* <ImageShowcaseCarousel /> */}
        {/* <InvestmentSolutionsPage /> */}
        <MapSection />
        <Team />
        {/* <KeySolutionsList /> */}
        <WhyChooseSection />
        <AMCMarqueeCarousel />
        <Testimonials />
        <ContactForm />
      </main>
      <StickyConsultationFab />
      <Footer />
    </div>
  );
}
