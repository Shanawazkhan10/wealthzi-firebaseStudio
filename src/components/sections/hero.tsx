"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import familyPlanningImage from "../../../public/familyPlanning.png";
import firstSipImage from "../../../public/firstSip.png";
import portfolioReviewImage from "../../../public/portfolioReview.png";
import retiredLifeImage from "../../../public/retiredLife.png";
import workingProfessionalImage from "../../../public/workingProfessional.png";

const slides = [
  {
    id: "slide1",
    text1: (
      <p>
        I need a <span className="text-[#56b28b]">₹40L</span> corpus <br /> in
        the next <span className="text-[#56b28b]">5 years.</span>
      </p>
    ),
    text2: "“But, I don't know how to get there!”",
    image: workingProfessionalImage,
    altImage: "working professional",
  },
  {
    id: "slide2",
    text1: (
      <p>
        I want to make my <span className="text-[#56b28b]">First SIP</span>{" "}
        investment.
      </p>
    ),
    text2: "“How should I start?”",
    image: firstSipImage,
    altImage: "first SIP investment",
  },
  {
    id: "slide3",
    text1: (
      <p>
        I'm retiring with <span className="text-[#56b28b]">₹50L</span> and have{" "}
        <span className="text-[#56b28b]">₹35K </span>monthly expenses.
      </p>
    ),
    text2: "“Help me generate monthly income.”",
    image: retiredLifeImage,
    altImage: "about to retire person",
  },
  {
    id: "slide4",
    text1: (
      <p>
        My investments are giving{" "}
        <span className="text-[#56b28b]">below average returns.</span>
      </p>
    ),
    text2: "“Please review my portfolio and give recommendation.”",
    image: portfolioReviewImage,
    altImage: "investing since last few years",
  },
  {
    id: "slide5",
    text1: (
      <p>
        We'll need <span className="text-[#56b28b]">₹1.5 crore</span> for our{" "}
        <span className="text-[#56b28b]">kids'</span> future.
      </p>
    ),
    text2: "“Give us a long-term investment plan!”",
    image: familyPlanningImage,
    altImage: "higher education and wedding",
  },
];

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const HeroAnimatedCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const interval = 5000;
  const length = slides.length;
  const animDuration = 700; // ms

  // UseInterval for auto sliding
  useInterval(() => {
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx + 1) % length);
  }, interval);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";
      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = `width ${interval}ms linear`;
          progressBarRef.current.style.width = "100%";
        }
      }, 50);
    }
  }, [current]);

  // Swipe support
  const touchStartX = useRef<number | null>(null);
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        setPrev(current);
        setCurrent((prev) =>
          dx > 0 ? (prev - 1 + length) % length : (prev + 1) % length
        );
      }
    }
    touchStartX.current = null;
  }

  // Custom image transition effect
  // Only two slides (current and prev) are visible during transition
  return (
    <section className="relative w-full min-h-screen h-[100svh] flex items-stretch overflow-hidden bg-black">
      {/* Carousel slides (animated) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => {
          // Only render previous and current slide
          if (i !== current && i !== prev) return null;
          let anim = "";
          if (i === current && prev !== null) {
            anim = "slideIn"; // New current
          } else if (i === prev) {
            anim = "slideOut"; // Old leaving
          }
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-none ${
                anim === "slideIn" ? "animate-hero-slide-in" : ""
              }${anim === "slideOut" ? "animate-hero-slide-out" : ""} ${
                i === current ? "z-20" : "z-10 pointer-events-none"
              }`}
              style={{ animationDuration: animDuration + "ms" }}
            >
              <Image
                src={slide.image}
                alt={slide.altImage}
                fill
                priority={i === 0}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Main slide text/animation */}
      <div
        className="relative z-10 min-h-screen flex items-center w-full container mx-auto px-4 sm:px-8 "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full max-w-2xl text-white mx-0 animate-fade-in text-left">
          <div className="font-heading font-extrabold tracking-tight drop-shadow-lg text-3xl sm:text-4xl md:text-5xl animate-slide-up text-left">
            {slides[current].text1}
          </div>
          <p className="pt-6 font-normal text-white leading-tight font-caveat-brush text-xl sm:text-2xl md:text-3xl animate-slide-up delay-75 text-left">
            {slides[current].text2}
          </p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-black/30 z-20">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#56b28b] to-[#3795d2]"
          style={{ width: 0 }}
        />
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => {
          const active = current === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (current !== idx) { setPrev(current); setCurrent(idx); }
              }}
              className={
                `transition-all duration-300 border border-white focus:outline-none ${
                  active
                    ? 'w-7 h-3 bg-white shadow rounded-full'
                    : 'w-3 h-3 bg-white/40 hover:bg-emerald-300 rounded-full'
                }`
              }
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={active ? "true" : "false"}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes hero-slide-in {
          from {
            opacity: 0;
            transform: scale(1.08) translateX(60px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }
        @keyframes hero-slide-out {
          from {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
          to {
            opacity: 0;
            transform: scale(0.97) translateX(-60px);
          }
        }
        .animate-fade-in { animation: fade-in 1s; }
        .animate-slide-up { animation: slide-up 0.7s cubic-bezier(.6,-0.05,.7,1.01); }
        .delay-75 { animation-delay: 0.15s; }
        .animate-hero-slide-in { animation: hero-slide-in 0.7s cubic-bezier(.5,0,.2,1.01) both; }
        .animate-hero-slide-out { animation: hero-slide-out 0.7s cubic-bezier(.4,.1,.6,1.02) both; }
      `}</style>
    </section>
  );
};

export default function Hero() {
  return <HeroAnimatedCarousel />;
}
