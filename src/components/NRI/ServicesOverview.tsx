"use client";
import React from "react";

export default function ServicesOverview() {
  return (
    <section className="py-12 px-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Comprehensive Wealth Management for NRIs
        </h2>

        <div className="space-y-6">
          {/* First Row: Goal-Based Planning */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Block: Goal-Based Financial Planning */}
            <div className="md:w-1/2 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-3">
                Goal-Based Financial Planning
              </h3>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                We begin with your life goals—not products.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 flex-1">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Retirement in India or overseas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Children's education and global mobility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Property purchase in India</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Legacy and estate planning</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-3 border-l-4 border-emerald-500">
                <p className="text-xs font-semibold text-emerald-900">
                  A clear, actionable investment roadmap.
                </p>
              </div>
            </div>
            {/* Right Block: Summary */}
            <div className="w-full md:w-1/2 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-3 text-center">
                Global & USD Investing
              </h3>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Diversify beyond India through global markets and USD-denominated structures.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <ul className="flex-1 space-y-2 text-sm text-gray-700 mt-1">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>US equities and ETFs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Global diversification strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>GIFT City (IFSC) funds and international AIFs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-emerald-500">
                <p className="text-xs font-semibold text-emerald-900">
                  Global products with simplified compliance for NRIs.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row: India Investing - Three Equal Blocks */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mutual Funds */}
            <div className="flex-1 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-emerald-900 mb-3">
                NRI Mutual Funds
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                NRI-compliant equity, hybrid and debt funds across NRE and NRO structures.
              </p>
            </div>
            {/* PMS */}
            <div className="flex-1 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-emerald-900 mb-3">
                Portfolio Management (PMS)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                High-conviction equity portfolios with direct stock ownership and transparent reporting.
              </p>
            </div>
            {/* AIFs */}
            <div className="flex-1 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-emerald-900 mb-3">
                Alternative Investments (AIFs)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Access to private equity, venture capital, private credit and structured strategies.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
