import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Team from "@/components/sections/team";

function HeroSection() {
  return (
    <section className="hero-bg px-4 pt-24 text-white  h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Expert Wealth Management for NRIs. Unlock India's Potential,
              Globally.
            </h1>
            <p className="text-md md:text-xl mb-8">
              Tailored guidance across India and global investing, tax-efficient
              short-term parking, long-term goal planning, retirement solutions
              for returnees, and secure wealth creation via India GIFT City.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-start items-center mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Managed by SEBI-Registered Advisors
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Compliant. Transparent. India & Global Reach.
              </Badge>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-3 rounded-full bg-[#0077FF] text-white hover:brightness-95"
                  >
                    Book a Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Book a Consultation</DialogTitle>
                    <DialogDescription>
                      Share basic details and our advisor will reach out.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-3 py-4">
                    <input
                      name="name"
                      placeholder="Your name"
                      className="input"
                    />
                    <input name="email" placeholder="Email" className="input" />
                    <input name="phone" placeholder="Phone" className="input" />
                    <textarea
                      name="notes"
                      placeholder="Short note"
                      className="input h-24"
                    />
                    <DialogFooter>
                      <Button type="submit">Submit</Button>
                    </DialogFooter>
                  </form>
                  <DialogClose asChild>
                    <button className="sr-only">Close</button>
                  </DialogClose>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-[#0C1B33] rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/familyPlanningMobile.png"
              alt="Working professional"
              width={640}
              height={420}
              className="rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="w-full bg-white/6 py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-white/90">
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 3.5 1-6L3 8.5 9 8 12 2z"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </svg>
          <span>Managed by SEBI-Registered Advisors</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </svg>
          <span>Compliant. Transparent. India & Global Reach.</span>
        </div>
      </div>
    </div>
  );
}

function ImageShowcaseCarousel() {
  const slides = [
    {
      src: "/heroSectionBg1.png",
      alt: "Market growth illustration",
      caption: "India & Global Opportunities",
    },
    {
      src: "/moneyBackground.jpeg",
      alt: "Wealth background",
      caption: "Tax-efficient short-term parking",
    },
    {
      src: "/InvestmentGrowth.png",
      alt: "Investment growth chart",
      caption: "Long-term goal planning",
    },
    {
      src: "/workingProfessional.png",
      alt: "Working professional",
      caption: "Personalized NRI advice",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Explore Our NRI Solutions
        </h3>
        <div className="relative">
          <Carousel className="rounded-lg">
            <CarouselContent className="items-stretch">
              {slides.map((s, i) => (
                <CarouselItem key={s.src ?? i}>
                  <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full h-full object-cover grayscale-[.05] hover:grayscale-0 transition-all"
                    />
                    <div className="absolute left-4 bottom-4 bg-black/50 text-white px-4 py-2 rounded">
                      <span className="font-semibold">{s.caption}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious aria-label="Previous slide" />
            <CarouselNext aria-label="Next slide" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="h-full p-6 rounded-lg shadow-sm hover:shadow-md">
      <div className="flex items-start gap-3 mb-3">
        <div className="rounded flex items-center justify-center text-primary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function ProblemsGrid({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          NRI Investment Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <ProblemCard key={p.title ?? i} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="pt-10 px-4 fade-onload">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Expertise
        </h2>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Nivesh.com's NRI Division, we bring together decades of
            experience in global wealth management and deep expertise in India's
            evolving investment ecosystem. Whether you're planning to build
            assets in India, diversify globally, or prepare for a seamless
            return home, our advisors help you navigate every financial decision
            with clarity, precision, and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoreServicesList({
  items,
}: {
  items: { area: string; description: string; benefits: string }[];
}) {
  return (
    <section className="py-10 px-4 bg-muted/50 fade-onload">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-  xl md:text-2xl font-bold text-center mb-12">
          Core Services & Benefits
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((s, i) => (
            <div key={s.area ?? i} className="h-full p-6 bg-white/60 rounded-lg shadow-sm">
              <button className="w-full text-left">
                <h3 className="text-xl font-semibold mb-2">{s.area}</h3>
              </button>
              <p className="text-sm text-muted-foreground mb-4">
                {s.description}
              </p>
              <div>
                <h4 className="font-semibold text-sm text-primary">
                  Key Benefits:
                </h4>
                <p className="text-sm text-muted-foreground">{s.benefits}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeySolutionsList({ items }: { items: typeof keySolutions }) {
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

function WhyChoose({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground fade-onload">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Nivesh.com's NRI Division?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((r, i) => (
            <div key={r.title ?? i} className="text-center space-y-4">
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="text-primary-foreground/90">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({
  items,
}: {
  items: { quote: string; author: string }[];
}) {
  const slides = items.map((t) => (
    <CarouselItem key={t.author}>
      <div className="p-6 bg-white/60 rounded-lg shadow-sm h-full flex flex-col justify-center">
        <blockquote className="text-lg italic mb-4">"{t.quote}"</blockquote>
        <cite className="text-sm font-semibold text-primary">— {t.author}</cite>
      </div>
    </CarouselItem>
  ));

  return (
    <section className="py-16 px-4 fade-onload">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        <div className="relative">
          <Carousel>
            <CarouselContent className="items-stretch">
              {slides}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default function NRIServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <HeroSection />
        <TrustBar />
        <ImageShowcaseCarousel />
        <ProblemsGrid items={nriProblems} />
        <ExpertiseSection />
        <CoreServicesList items={coreServices} />
        <KeySolutionsList items={keySolutions} />
        <WhyChoose items={whyChooseUs} />
        <Team />
        <Testimonials items={testimonials} />
      </main>
      <Footer />
    </div>
  );
}

const nriProblems = [
  {
    title: "Goal",
    description:
      "I want ₹1 Cr in 5 years from my India investments while I'm living abroad; show me a compliant, time‑bound plan to get there.",
  },
  // {
  //   title: "Starter",
  //   description:
  //     "I've just begun earning overseas. Help me start my first India SIP the right way — KYC, account choice and repatriation clarity.",
  // },
  {
    title: "DIY investor",
    description:
      "I manage my India portfolio from overseas but returns are below average; review my holdings and suggest improvements.",
  },
  {
    title: "Family plan",
    description:
      "We need ₹2.5 Cr in 8–10 years for our children's education and wedding; design a tax‑aware, repatriable investment roadmap.",
  },
  {
    title: "Retiree",
    description:
      "I'm returning/retired with ₹7 Cr in India; build a monthly income plan that minimises tax and respects my residency status.",
  },
  {
    title: "Diversification",
    description:
      "I want a global portfolio alongside India exposure to hedge currency risk and smooth volatility.",
  },
  {
    title: "Parents support",
    description:
      "I want a reliable ₹50k monthly income to support my parents in India; show a low‑risk, compliant solution.",
  },
  {
    title: "Education goal",
    description:
      "I need ₹4 Cr by my child's 18th birthday for overseas university; propose a disciplined growth plan with repatriation steps.",
  },
  {
    title: "GIFT City route",
    description:
      "I want to invest via GIFT City (IFSC) to access foreign currency accounts, potentially favourable tax and offshore fund options; explain eligibility, benefits and practical steps.",
  },
  {
    title: "Taxation & compliance",
    description:
      "I'm confused about TDS, capital gains, DTAA and reporting obligations in both countries; show me a tax‑efficient way to invest and report correctly.",
  },
];

const coreServices = [
  {
    area: "India & Global Investing",
    description:
      "Diversified wealth strategies in Indian and international markets",
    benefits:
      "Currency diversification, access to growth, inflation-beating returns",
  },
  {
    area: "Short-Term Fund Parking",
    description:
      "Secure, liquid, arbitrage and tax-efficient options for idle funds",
    benefits: "Flexibility, capital safety, fast access",
  },
  {
    area: "Saving for Long-Term Goals",
    description: "Structured solutions for education, housing, and more",
    benefits: "Disciplined accumulation, risk-adjusted growth",
  },
  {
    area: "Retirement Planning for Returning NRIs",
    description: "Custom plans for NRIs moving back to India",
    benefits: "INR income, smooth transition, lifestyle security",
  },
  {
    area: "Wealth Creation via GIFT City",
    description: "Regulatory gateway to global and India-linked investments",
    benefits: "Tax-friendly, global asset access, regulated ease",
  },
];

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

const testimonials = [
  {
    quote:
      "Nivesh.com's NRI advisors helped me transition my US savings into India and GIFT City portfolios, beating inflation while ensuring full compliance. I've never felt more confident planning my return.",
    author: "Sanjay S., Dubai/London",
  },
  {
    quote:
      "I needed short-term access for global payroll and long-term growth for my family's future in Mumbai. The team's clarity and transparency are unmatched.",
    author: "Ankita P., Singapore",
  },
];
