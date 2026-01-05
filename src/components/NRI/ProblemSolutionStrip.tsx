"use client";
import React from "react";

export default function NRIProblemSolutionStrip() {
  return (
    <section className="py-10 md:py-16 bg-white/90 border-b border-gray-100 h-screen">
      <h2 className="text-2xl md:text-4xl text-[#022D36] font-bold text-center mb-1">
          Top NRI Investment Challenges & Solutions
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-md mb-8 max-w-2xl mx-auto">
          Explore the major financial challenges faced by NRIs and our actionable solutions.
        </p>
      <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column – Problem */}
        <div className="bg-rose-50 rounded-2xl p-7 flex flex-col justify-center shadow-sm border border-rose-100">
          <div className="text-xs font-bold uppercase text-rose-400 mb-2 tracking-wider">The NRI Challenge</div>
          <div className="text-gray-800 text-lg md:text-xl font-semibold mb-3">Managing investments in India as an NRI is complex:</div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-md font-normal pl-2">
            <li>FEMA and regulatory constraints</li>
            <li>Taxation and repatriation uncertainty</li>
            <li>Limited access to quality products</li>
            <li>Fragmented reporting across advisors and platforms</li>
          </ul>
        </div>
        {/* Right Column – Solution */}
        <div className="bg-emerald-50 rounded-2xl p-7 flex flex-col justify-center shadow-sm border border-emerald-100">
          <div className="text-xs font-bold uppercase text-emerald-500 mb-2 tracking-wider">Our Solution</div>
          <div className="text-gray-800 text-lg md:text-xl font-semibold mb-3">We simplify India & Global Investment of NRIs through:</div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-md font-normal pl-2">
            <li>Unified wealth platform for NRIs</li>
            <li>Fully compliant structure</li>
            <li>End-to-end support</li>
            <li>Ongoing portfolio management</li>
          </ul>
        </div>
      </div>
      <br/>
      <br/>

      <div className="max-w-6xl mx-auto px-4 md:px-0 flex justify-center items-center text-lg md:text-2xl text-gray-700 font-medium">One platform for compliant, end-to-end NRI investing—globally and in India.</div>
    </section>
  );
}
