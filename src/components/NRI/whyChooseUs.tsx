"use client";
import Image from "next/image";

const whyChooseUs = [
  {
    imageUrl: "/images/Icon1.png",
    title: "India Market Expertise",
    description:
      "Deep experience across Indian equities, mutual funds, PMS and alternatives-structured for NRI compliance.",
  },
  {
    imageUrl: "/images/Icon2.png",
    title: "Global Asset Allocation",
    description:
      "Balanced portfolios across India, global markets, and USD assets including GIFT City opportunities.",
  },
  {
    imageUrl: "/images/Icon3.png",
    title: "Regulatory & Tax-Aware",
    description:
      "Built around FEMA, DTAA, FATCA and repatriation rules-so your investments remain compliant.",
  },
  {
    imageUrl: "/images/Icon4.png",
    title: "Digital-First Experience",
    description:
      "End-to-end online onboarding, reporting, and portfolio reviews—across time zones.",
  },
];

function WhyChooseSection({
  items = whyChooseUs,
}: {
  items?: { imageUrl?: string; title: string; description: string }[];
}) {
  return (
    <section className="py-16 px-4 bg-emerald-50 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-900">
          Designed Specifically for NRI Wealth Needs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((card, i) => (
            <div
              key={card.title ?? i}
              className="bg-white border border-emerald-100 rounded-2xl shadow text-center p-8 flex flex-col items-center hover:border-emerald-300 transition"
            >
              {card.imageUrl && (
                <div className="mb-4">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="mx-auto"
                    loading="lazy"
                  />
                </div>
              )}
              <h3 className="text-lg font-bold text-emerald-700 mb-2">{card.title}</h3>
              <p className="text-gray-700 text-md font-medium mb-0">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyChooseSection;
