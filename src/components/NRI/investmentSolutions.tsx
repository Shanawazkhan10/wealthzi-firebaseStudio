"use client";
import { useState, useEffect } from "react";

interface InvestmentSolution {
  id: number;
  title: string;
  description: string;
  solution: string;
  impact: number;
  category: string;
  icon: React.ReactNode;
  tags?: string[];
}

interface InvestmentSolutionCardProps {
  solution: InvestmentSolution;
  index?: number;
}

const InvestmentSolutionCard = ({
  solution,
  index = 0,
}: InvestmentSolutionCardProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const impactValue = Math.max(0, solution.impact ?? 0);
    const t = setTimeout(() => setProgress(impactValue), 250);
    return () => clearTimeout(t);
  }, [solution.impact]);
  const safeImpact = Math.floor(solution.impact ?? 0);

  return (
    <div className="group relative h-full rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 via-background/60 to-muted/60 shadow-lg overflow-hidden backdrop-blur-xl">
      {/* Subtle gradient border / glow */}
      <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-primary/15 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col p-5 sm:p-6">
        {/* Top meta */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(59,130,246,0.35)]" />
            {solution.category}
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-sm">
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-semibold text-emerald-400">
              {safeImpact}% impact
            </span>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-inner">
            {solution.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
              {solution.title}
            </h3>
            {/* Impact bar */}
            <div className="mb-3">
              <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Plan strength</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution preview / hero area */}
        <div className="relative mt-1 rounded-xl bg-gradient-to-br from-primary/5 via-background to-emerald-500/5 p-[1px]">
          <div className="relative flex h-30 w-full items-center justify-center overflow-hidden rounded-[0.70rem] bg-background/80 px-4 py-3 sm:px-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_100%_80%,rgba(34,197,94,0.16),transparent_55%)] opacity-80" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2">
              Problem
              <p className="line-clamp-4 text-center text-xs sm:text-sm text-foreground/80">
                {solution.description}
              </p>
            </div>
          </div>
          <br />
          <div className="relative flex h-30 w-full items-center justify-center overflow-hidden rounded-[0.70rem] bg-background/80 px-4 py-3 sm:px-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_100%_80%,rgba(34,197,94,0.16),transparent_55%)] opacity-80" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2">
              Solution
              <p className="line-clamp-4 text-center text-xs sm:text-sm text-foreground/80">
                {solution.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start this plan
          </button>
        </div> */}
      </div>
    </div>
  );
};
const InvestmentSolutionsPage = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-4xl text-[#022D36] font-bold  mb-6 items-center text-center">
        NRI Investment & Planning Solutions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nriProblems.map((solution) => (
          <InvestmentSolutionCard
            key={solution?.id}
            solution={solution}
            // Add your handlers here if needed
          />
        ))}
      </div>
    </div>
  );
};

const nriProblems: InvestmentSolution[] = [
  {
    id: 0,
    title: "Goal",
    description:
      "I want ₹1 Cr in 5 years from my India investments while abroad; show a compliant plan.",
    solution:
      "We create a SIP-based plan using India mutual funds mapped to your target, returns, and INR risk via NRE/NRO + PIS, ensuring compliance, taxation, and repatriation clarity.",
    impact: 88,
    category: "Goal planning",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["₹1 Cr target", "5-year plan", "SIP roadmap"],
  },
  {
    id: 1,
    title: "DIY investor",
    description:
      "I manage my India portfolio overseas but returns lag; review and improve my holdings.",
    solution:
      "We X-ray your portfolio, reduce overlap, tilt to data-backed funds, and set rebalancing, currency, and exit rules for easy execution abroad.",
    impact: 82,
    category: "Portfolio review",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["Portfolio X-ray", "Rebalancing", "Performance upgrade"],
  },
  {
    id: 2,
    title: "Family plan",
    description:
      "We need ₹2.5 Cr in 8–10 years for education and wedding; design a tax-smart, repatriable plan.",
    solution:
      "We split goals, balance growth vs safety, and route via NRE/NRO so withdrawals and remittance match FEMA, taxes, and DTAA relief.",
    impact: 86,
    category: "Family goals",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["₹2.5 Cr target", "10-year horizon", "Goal buckets"],
  },
  {
    id: 3,
    title: "Retiree",
    description:
      "I'm retired/returning with ₹7 Cr in India; build a tax‑efficient monthly income plan.",
    solution:
      "We create an income ladder: short-term cashflows via debt, long-term growth for inflation hedge, aligned with your residency for tax optimization.",
    impact: 90,
    category: "Retirement income",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["₹7 Cr corpus", "Monthly income", "Tax-aware"],
  },
  {
    id: 4,
    title: "Diversification",
    description:
      "I want global exposure with India allocation to hedge currency risk and volatility.",
    solution:
      "We define your India base, add global ETFs/funds via NRE, GIFT City or foreign accounts, giving dual-currency exposure with rebalancing rules.",
    impact: 78,
    category: "Global diversification",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["Global ETFs", "Currency hedge", "Dual-market"],
  },
  {
    id: 5,
    title: "Parents support",
    description:
      "I want ₹50k/month for parents in India through a secure, compliant plan.",
    solution:
      "We build a stable income ladder with top-rated debt and deposits, funded from NRE/NRO for predictable payouts and simple paperwork.",
    impact: 84,
    category: "Family support",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["₹50k/month", "Low risk", "Parent ease"],
  },
  {
    id: 6,
    title: "Education goal",
    description:
      "Need ₹4 Cr by my child’s 18th for overseas education; show a disciplined, compliant plan.",
    solution:
      "We back-calculate required SIP/lump sum, use growth funds with a glide path, and outline repatriation steps under LRS, FEMA, and tax norms.",
    impact: 89,
    category: "Education planning",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["₹4 Cr goal", "Overseas degree", "Fee remittance"],
  },
  {
    id: 7,
    title: "GIFT City route",
    description:
      "I want to invest via GIFT City (IFSC) for foreign currency access, tax perks, and offshore funds.",
    solution:
      "We confirm eligibility, pick platforms, and map flows from NRE/overseas income to IFSC for USD assets and transparent tax tracking.",
    impact: 76,
    category: "GIFT City & IFSC",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["IFSC", "USD assets", "Tax perks"],
  },
  {
    id: 8,
    title: "Taxation & compliance",
    description:
      "Confused about TDS, DTAA, and dual reporting; need a clear tax‑efficient plan.",
    solution:
      "We define your residency, classify income (interest, gains, rent, dividends), and align accounts so TDS, DTAA relief, and disclosures are seamless.",
    impact: 92,
    category: "Tax & reporting",
    icon: <span className="text-xl font-bold text-primary">*</span>,
    tags: ["TDS & DTAA", "Reporting", "Compliance"],
  },
];

export default InvestmentSolutionsPage;
