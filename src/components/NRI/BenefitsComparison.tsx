"use client";
import React from "react";

export default function BenefitsComparison() {
  return (
    <section className="pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Why Invest Through a Dedicated NRI Wealth Manager</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without Us */}
          <div className="bg-rose-50 rounded-2xl p-7 border border-rose-100 flex flex-col shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-rose-500 mb-4">Without a Wealth Manager</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg pl-2">
              <li>Multiple intermediaries</li>
              <li>Higher compliance risk</li>
              <li>Unclear tax outcomes</li>
              <li>Fragmented reporting</li>
            </ul>
          </div>
          {/* With Us */}
          <div className="bg-emerald-50 rounded-2xl p-7 border border-emerald-100 flex flex-col shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-emerald-600 mb-4">With Us</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg pl-2">
              <li>Single point of accountability</li>
              <li>Structured, compliant investing</li>
              <li>Optimized tax and repatriation planning</li>
              <li>Consolidated portfolio view</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
