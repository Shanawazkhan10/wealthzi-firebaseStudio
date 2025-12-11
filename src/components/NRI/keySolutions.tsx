import React from "react";

interface ExpertiseItem {
  h: string;
  p: string;
}

interface NriExpertiseProps {
  className?: string;
  title?: string;
  subtitle?: string;
  intro?: string;
  items?: ExpertiseItem[];
}

const defaultItems: ExpertiseItem[] = [
  {
    h: "India & Global Investing",
    p: "Diversified wealth strategies in Indian and international markets",
  },
  {
    h: "Goal Planning and Money mangement",
    p: "",
  },
  {
    h: "Global Diversification",
    p: "Structured solutions for education, housing and more",
  },
  {
    h: "Retirement for Returning NRIs",
    p: "Custom INR income plans and smooth transition",
  },
  {
    h: "Wealth via GIFT City",
    p: "Tax‑friendly gateway to global and India‑linked assets",
  },
];

const NriExpertise: React.FC<NriExpertiseProps> = ({
  className,
  title = "Our Expertise",
  subtitle = "Decades of global wealth experience with India’s fast-evolving wealth ecosystem",
  intro = `At Wealthzi's NRI Division, we bring together decades of
  experience in global wealth management and deep expertise in
  India's investment ecosystem. Whether you're building assets in
  India, diversifying globally, or preparing to return home, our
  advisors help you navigate every decision with clarity,
  precision, and compliance.`,
  items = defaultItems,
}) => {
  return (
    <section
      className={`py-10 md:py-16 px-4 md:px-8 lg:px-12 ${className || ''} bg-[url('/moneyBackground.jpeg')] bg-cover bg-center bg-no-repeat`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold text-darkText text-center">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 font-light text-center">
            {subtitle}
          </p>
          {intro && (
            <p className="text-sm md:text-base text-center text-gray-500 max-w-3xl mx-auto mt-2">{intro}</p>
          )}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6 auto-rows-auto">
          {/* Featured Section (always visible, grid-layout adapts) */}
          <div className="md:col-span-7 md:row-span-2 bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 sm:p-8 md:p-12 rounded-3xl text-white flex flex-col justify-between min-h-[300px] md:min-h-[350px] md:max-h-[550px] hover:shadow-2xl transition-shadow duration-300">
            <div>
              <div className="text-emerald-200 text-xs md:text-sm font-semibold mb-4 uppercase tracking-wider">
                Featured
              </div>
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-6 leading-tight">
                {items[0]?.h}
              </h2>
              {/* Semantic List for solutions */}
              <ul className="text-emerald-50 text-xs sm:text-sm md:text-lg mb-6 leading-relaxed list-disc list-inside space-y-1 pl-3">
                <li>Ease of Digital KYC</li>
                <li>Goal Planning</li>
                <li>Globally Diversified Investment Solution</li>
                <li>Gift City Solution</li>
                <li>Tax Optimization and Compliant Execution</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 mt-2">
              <svg
                className="w-8 h-8 mb-2 md:mb-4 text-emerald-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white text-xs md:text-sm italic leading-relaxed">
                For NRIs, a globally diversified portfolio—carefully managed for currency and compliance—remains the most robust path to building and safeguarding wealth.
              </p>
            </div>
          </div>

          {/* Top Right */}
          <div className="md:col-span-5 bg-white border-2 border-gray-200 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-sky-400 transition-all duration-300 group">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg sm:text-xl mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-base sm:text-md md:text-xl font-bold text-gray-900 mb-3 mx-3">
                {items[1]?.h}
              </h3>
            </div>
            {/* <p className="text-gray-600 text-base leading-relaxed mb-4">{items[1]?.p}</p> */}
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Protect idle capital from inflation with dollar-based arbitrage options and tax‑efficient arbitrage/bond funds. Stability, fast access and compliance for payroll funds, emergency reserves and transactions.
            </p>
          </div>

          {/* Middle Right */}
          <div className="md:col-span-5 bg-gradient-to-br from-sky-50 to-emerald-50 border-2 border-sky-200 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-emerald-400 transition-all duration-300 group">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg sm:text-xl mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 mx-3">
                {items[2]?.h}
              </h3>
            </div>
            {/* <p className="text-gray-600 text-base leading-relaxed mb-4">{items[2]?.p}</p> */}
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Goal-based planning with disciplined SIPs, hybrid funds and tax‑advantaged plans. Regular reviews and rebalancing, dynamic shifts across equity, debt, gold and real estate as horizons approach.
            </p>
          </div>

          {/* Bottom Left Wide (uses index 3) */}
          <div className="md:col-span-7 bg-white border-2 border-gray-200 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-sky-400 transition-all duration-300 group flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg sm:text-2xl group-hover:bg-sky-500 group-hover:text-white transition-colors">
                04
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {items[4]?.h}
              </h3>
              {/* <p className="text-gray-600 text-base leading-relaxed mb-3">{items[3]?.p}</p> */}
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Gradual reallocation to INR, income creation via SWP and senior schemes, and healthcare & legacy planning. Understand DTAA and compliance for a smooth, stress‑free retirement.
              </p>
              <div className="mt-5 pt-4 border-t border-emerald-400 ">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Strategic Advantage</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Accent (uses index 4 now for last item) */}
          <div className="md:col-span-5 bg-gradient-to-br from-gray-900 to-gray-800 p-5 sm:p-6 md:p-8 rounded-3xl text-white hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-sky-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg sm:text-xl mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  05
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#ffffff] mb-3 mx-3">
                  {items[3]?.h}
                </h3>
              </div>
              {/* <p className="text-gray-300 text-base leading-relaxed mb-3">{items[4]?.p}</p> */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Invest in USD or major currencies, access international funds/bonds/AIFs/PMS, potential tax benefits, simplified onboarding and repatriation, and globally managed strategies for HNIs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NriExpertise;
