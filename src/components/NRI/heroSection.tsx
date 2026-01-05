"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
function HeroSection() {
  return (
    <section
      id="nri-hero"
      className="hero-bg pt-16 pb-6 md:pt-24 md:pb-12 text-white pb-10 h-screen"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center justify-between">
          {/* Text Content */}
          <div className="w-full mx-0 md:mx-5 flex flex-col justify-center items-start">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 mt-2">
              Wealth Management for Global Indians{" "}
            </h1>
            <p className="text-sm xs:text-base md:text-xl mb-6 md:mb-8 max-w-2xl">
              Invest seamlessly in India and global markets with a trusted,
              SEBI-regulated wealth partner built specifically for NRIs.{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start mb-6 md:mb-8 w-full">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-2 py-2">
                <Image
                  src="https://webassets.nivesh.com/RIA/wealthzi/Content/images/investmentPlanner/taxes.png"
                  alt="Tax Optimization"
                  width={60}
                  height={60}
                  className="rounded-full border bg-[#E4F4EE] m-1"
                />
                <span className="text-xs sm:text-base">
                  Taxation & Compliance
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-2 py-2">
                <Image
                  src="https://webassets.nivesh.com/RIA/wealthzi/Content/categoryimages/Mandate.png"
                  alt="Kyc"
                  width={60}
                  height={60}
                  className="rounded-full border bg-[#E4F4EE] m-1"
                />
                <span className="text-xs sm:text-base">Easy KYC</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-2 py-2">
                <Image
                  src="https://webassets.nivesh.com/RIA/wealthzi/Content/images/investmentPlanner/Large-&-Mid-cap.png"
                  alt="assets"
                  width={60}
                  height={60}
                  className="rounded-full border bg-[#E4F4EE] m-1"
                />
                <span className="text-xs sm:text-base">
                  10+ Investment Assets
                </span>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row gap-3 xs:gap-4 w-full max-w-full md:max-w-none">
              <Button
                size="lg"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("consult");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="text-base sm:text-lg px-6 py-3 rounded-full bg-[#00313A] text-white hover:brightness-95 w-full xs:w-auto"
              >
                Book a Free NRI Wealth Consultation{" "}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("consult");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="text-base sm:text-lg px-6 py-3 rounded-full bg-[#00313A] text-white hover:brightness-95 w-full xs:w-auto"
              >
                Start Online KYC{" "}
              </Button>
            </div>
          </div>

          {/* Hero Image - always visible, properly sized */}
          <div className="w-full flex items-center justify-center mb-8 md:mb-0">
            <Image
              src="/web.png"
              alt="Working professional"
              width={640}
              height={640}
              sizes="(max-width: 768px) 80vw, 35vw"
              className="object-cover w-80 sm:w-100 md:w-[560px] lg:w-[640px] h-auto"
              priority={true}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="bg-[#033D4A] ">
        <TrustBar />
      </div>{" "}
    </section>
  );
}

function TrustBar() {
  return (
    <div className="w-full bg-white/6 py-3  ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-xl text-white/90">
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
          <span>
            SEBI-Registered
          </span>
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
              d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 3.5 1-6L3 8.5 9 8 12 2z"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </svg>
          <span>
            NRI-Compliant
          </span>
        </div>{" "}
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
          <span>
            India & Global Access
          </span>
        </div>{" "}
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
          <span>
            Digital Onboarding
          </span>
        </div>
      </div>
    </div>
  );
}

export default function NRIHeroSection() {
  return (
    <>
      <HeroSection />
    </>
  );
}
