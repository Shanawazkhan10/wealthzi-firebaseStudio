"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
function HeroSection() {
  return (
    <section className="hero-bg  pt-24 text-white h-screen">
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

            {/* <div className="flex flex-col md:flex-row gap-4 justify-start items-center mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Managed by SEBI-Registered Advisors
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Compliant. Transparent. India & Global Reach.
              </Badge>
            </div> */}

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
    <div className="w-full bg-white/6 py-5">
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

export default function NRIHeroSection() {
  return (
    <>
      <HeroSection />
      <div className="bg-[#033D4A]">
        <TrustBar />
      </div>{" "}
    </>
  );
}
