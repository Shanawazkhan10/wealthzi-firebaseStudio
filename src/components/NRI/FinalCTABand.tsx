"use client";
import { Button } from "@/components/ui/button";

export default function FinalCTABand() {
  return (
    <section className="py-10 bg-emerald-700 mt-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Build and Manage Your India & Global Wealth-The Right Way
        </h2>
        <p className="text-lg text-white/80 mb-7">
          Wherever you live, we help you invest confidently in India and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
                className="text-base sm:text-lg px-6 py-3 rounded-full bg-white text-[#00313A] hover:brightness-95 hover:text-white w-full xs:w-auto"
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
                className="text-base sm:text-lg px-6 py-3 rounded-full bg-white text-[#00313A] hover:brightness-95 hover:text-white w-full xs:w-auto"
              >
                Start Online KYC{" "}
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
