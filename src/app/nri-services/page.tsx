"use client";
import Header from "@/components/layout/header";
import Team from "@/components/sections/team";
import NRIHeroSection from "@/components/NRI/heroSection";
import NRIProblemSolutionStrip from "@/components/NRI/ProblemSolutionStrip";
import WhyChooseSection from "@/components/NRI/whyChooseUs";
import ServicesOverview from "@/components/NRI/ServicesOverview";
import KeySolutionsList from "@/components/NRI/explainedSolution";
import BenefitsComparison from "@/components/NRI/BenefitsComparison";
import DigitalOnboardingTimeline from "@/components/NRI/DigitalOnboardingTimeline";
import TrustCredibilitySection from "@/components/NRI/TrustCredibilitySection";
import FinalCTABand from "@/components/NRI/FinalCTABand";
import AnimatedImageCarousel from "@/components/NRI/AnimatedImageCarousel";
import MapSection from "@/components/NRI/mapSection";
import AMCMarqueeCarousel from "@/components/NRI/amcCarousal";
import Testimonials from "@/components/NRI/testimonials";
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
        {/* HERO SECTION */}
        <NRIHeroSection />
        {/* PROBLEM/SOLUTION STRIP - NEW */}
        <NRIProblemSolutionStrip />
        {/* ANIMATED IMAGE CAROUSEL - OLD */}
        {/* <AnimatedImageCarousel /> */}
        {/* WHY CHOOSE US - 4 CARD GRID - NEW */}
        <WhyChooseSection />
        {/* SERVICES OVERVIEW - FRAME 4 - NEW */}
        <ServicesOverview />
        {/* MAP SECTION - OLD */}
        <MapSection />
        {/* SERVICES OVERVIEW/CARDS/EXPLAINED SOLUTIONS - OLD */}
        {/* <KeySolutionsList /> */}
        {/* BENEFITS COMPARISON - WITH/WITHOUT - NEW */}
        <BenefitsComparison />
        {/* DIGITAL ONBOARDING TIMELINE - NEW */}
        <DigitalOnboardingTimeline />
        {/* TEAM SECTION - OLD */}
        {/* TRUST - FINAL BAND - NEW */}
        <TrustCredibilitySection />
        <Team />
        {/* AMC MARQUEE CAROUSEL - OLD */}
        <AMCMarqueeCarousel />
        {/* TESTIMONIALS - OLD */}
        <Testimonials />
        <FinalCTABand />
        {/* CONTACT FORM - OLD */}
        <ContactForm />
      </main>
      <StickyConsultationFab />
    </div>
  );
}