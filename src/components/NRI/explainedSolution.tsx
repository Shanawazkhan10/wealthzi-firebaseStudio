const keySolutions = [
  {
    title: "1. India & Global Investing",
    intro:
      "Navigating investment opportunities across geographies is at the core of effective wealth management for NRIs. Nivesh.com delivers a full spectrum of access—",
    points: [
      {
        title: "Indian assets:",
        description:
          "stocks, mutual funds, PMS, and more, via compliant NRE/NRO.",
      },
      {
        title: "Global exposure:",
        description:
          "Curated funds, ETFs, and a managed portfolio of international trends, with all regulatory and tax reporting handled.",
      },
      {
        title: "Risk management strategies:",
        description:
          "asset allocation and jurisdictional diversification to minimize volatility and tax drag.",
      },
      {
        title: "Personalized portfolios:",
        description:
          "Each plan is crafted to your goals, risk appetite, and residency needs.",
      },
    ],
    quote:
      "For NRIs, a globally diversified portfolio—carefully managed for currency and compliance—remains the most robust path to building and safeguarding wealth.",
  },
  {
    title: "2. Short-Term Parking of Funds",
    intro:
      "Idle capital often loses value to inflation. Our short-term parking solutions offer:",
    points: [
      {
        title: "Dollar-based arbitrage funds",
        description: "which beats the FD return with liquidity.",
      },
      {
        title: "Tax-efficient arbitrage and bond funds,",
        description: "tailored for higher tax bracket NRIs.",
      },
    ],
    quote:
      "All instruments are selected for stability, fast access, and regulatory compliance, enabling payroll funds, emergency reserves, and transaction proceeds to keep earning while remaining accessible at a moment's notice.",
  },
  {
    title: "3. Saving for Long-Term Goals",
    intro:
      "Whether for a child's overseas education, a dream home in India, or major life milestones, Nivesh.com enables purposeful wealth accumulation through:",
    points: [
      {
        title: "Goal-based investment planning:",
        description:
          "Structured SIPs, hybrid funds, and tax-advantaged plans matched to each objective and investment horizon.",
      },
      {
        title: "Regular portfolio reviews:",
        description:
          "Rebalancing to ensure your progress is on track, risk is managed, and tax efficiencies are maximized.",
      },
      {
        title: "Dynamic accumulation strategies:",
        description:
          "Shift between equity, debt, gold, and real estate as each goal's timeline approaches, lowering risk as needed.",
      },
    ],
    quote:
      "Goal-based investing keeps you disciplined, resilient in volatile markets, and consistently aligned with what matters most.",
  },
  {
    title: "4. Retirement Planning for NRIs Returning to India",
    intro:
      "Preparing for a return home after years abroad is financially complex. Our retirement transition services address:",
    points: [
      {
        title: "INR-focused portfolio shift:",
        description:
          "Gradual reallocation from foreign to Indian assets, minimizing currency loss.",
      },
      {
        title: "INR income creation:",
        description:
          "Systematic withdrawal plans (SWP), senior citizen schemes, and annuities tailored to your lifestyle and longevity projections.",
      },
      {
        title: "Healthcare & legacy planning:",
        description:
          "Integrate insurance and succession to shield wealth from unexpected costs or legal disruptions.",
      },
      {
        title: "Tax Understanding:",
        description: "DTAA and Necessary Compliance Requirements.",
      },
    ],
    quote:
      "A smooth, stress-free retirement in India starts with smart preparation years in advance—and continues with vigilant, expert management.",
  },
  {
    title: "5. Wealth Creation via India GIFT City",
    intro:
      "The GIFT City (Gujarat International Finance Tec-City) platform is a game-changer for sophisticated NRIs:",
    points: [
      {
        title: "Invest in USD or other major currencies:",
        description: "Avoid double conversion losses.",
      },
      {
        title:
          "Access international funds, bonds, alternatives, and structured products",
        description: "with simplified tax and repatriation.",
      },
      {
        title: "Tax benefits:",
        description:
          "Reduced or no TDS on certain products, capital gains exemptions on IFSC-listed assets, and simplified compliance (often no PAN required).",
      },
      {
        title: "Lower minimums (for some offerings),",
        description: "digital onboarding, and global access.",
      },
      {
        title: "Mutual Funds, Portfolio Management and AIFs:",
        description:
          "For HNIs seeking actively managed, internationally compliant investment strategies.",
      },
    ],
    quote:
      "We'll demystify GIFT City onboarding, eligibility, and ongoing regulatory changes, helping you tap India's global financial gateway for elevated returns, transparency, and total flexibility.",
  },
];

function KeySolutionsList({ items = keySolutions }: { items?: typeof keySolutions }) {
  return (
    <section className="py-10 px-4 fade-onload">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Solutions
        </h2>
        <div className="space-y-8">
          {items.map((sol, i) => (
            <details
              key={i}
              className="p-6 bg-muted/20 rounded-lg"
              open={i === 0}
            >
              <summary className="cursor-pointer text-2xl font-bold text-primary">
                {sol.title}
              </summary>
              <div className="mt-4">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  {sol.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sol.points.map((pt, j) => (
                    <div key={j} className="space-y-2">
                      <h4 className="font-semibold text-foreground">
                        {pt.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
                {sol.quote && (
                  <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-r-lg mt-6">
                    <p className="italic text-foreground">{sol.quote}</p>
                  </blockquote>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeySolutionsList;