"use client";
import React from "react";
import Image from "next/image";

const Arrow = () => {
  return (
    <div className="hidden md:flex items-center justify-center px-2 lg:px-4">
      <Image src="/images/Icon5.png" alt="arrow" width={100} height={100} className="object-contain" />
    </div>
  );
};
export default function DigitalOnboardingTimeline() {
  return (
    <section className="pt-5 pb-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Invest in India—Without the Paperwork
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-2 mb-6">
          {/* Timeline Steps */}
          <OnboardingStep num={1} label="Online Registration" />
          <Arrow />
          <OnboardingStep num={2} label="Video KYC & FATCA compliance" />
          <Arrow />
          <OnboardingStep num={3} label="Bank and demat account linking" />
          <Arrow />
          <OnboardingStep num={4} label="Portfolio activation" />
        </div>
        <p className="text-center text-sm md:text-xl text-gray-600 mb-2">
          Typical go-live time:{" "}
          <span className="font-semibold">3-5 working days</span>
        </p>
        <p className="text-center text-xl text-gray-500">
          UAE • Saudi Arabia • USA • UK • Europe • Singapore • Australia
        </p>
      </div>
    </section>
  );
}

function OnboardingStep({ num, label }: { num: number; label: string }) {
  return (
    <div className="flex flex-col items-center flex-1 min-w-0 max-w-[200px]">
      <div className="w-12 h-12 rounded-full bg-[#00313A] text-white flex items-center justify-center text-xl font-bold mb-3 shadow-lg">
        {num}
      </div>
      <div className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center leading-tight">
        {label}
      </div>
    </div>
  );
}

