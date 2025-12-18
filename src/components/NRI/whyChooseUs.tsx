const whyChooseUs = [
  {
    title: "NRI-Focused Advisors",
    description: "Decades of cross-border experience.",
  },
  {
    title: "Comprehensive Compliance",
    description: "FEMA, SEBI, RBI and FATCA handled end-to-end.",
  },
  {
    title: "Personalized Attention",
    description:
      "One point of contact; ongoing portfolio reviews and strategy calls.",
  },
  {
    title: "Global-Local Integration",
    description:
      "Synergy of India's growth with international diversification.",
  },
  {
    title: "Transparent Fees & Secure Onboarding",
    description: "No surprises, clear reporting, full digital process.",
  },
  {
    title: "Holistic Legacy and Tax Planning",
    description:
      "Including estate, inheritance, and multi-country succession management.",
  },
];
function WhyChooseSection({
  items = whyChooseUs,
}: {
  items?: { title: string; description: string }[];
}) {
  return (
    <section className="px-4 bg-primary text-primary-foreground h-screen items-center flex">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
Why Wealthzi is the Trusted Choice for NRIs?        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((r, i) => (
            <div
              key={r.title ?? i}
              className="text-center space-y-4 p-4 border border-primary-foreground/20 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="text-primary-foreground/90">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyChooseSection;
