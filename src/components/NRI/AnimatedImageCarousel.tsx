"use client";
import React, { useRef, useState, useEffect } from "react";

// Replace SLIDES with main NRI problems
const NRI_PROBLEM_SLIDES = [
  {
    src: '/workingProfessional.png', // Or any background you like
    alt: 'Build Wealth Abroad',
    title: 'Goal: Build Wealth Abroad',
    problem: 'I want ₹1 Cr in 5 years from my India investments while living overseas. Show a compliant, achievable plan.',
    solution: 'We design a SIP-based mutual fund plan mapped to your goals, using NRE/NRO/PIS for regulatory clarity and easy repatriation.'
  },
  {
    src: '/carousal1.jpg',
    alt: 'Retiree Income',
    title: 'Retiree: Tax-Efficient Income',
    problem: 'I am retired or returning to India with a large corpus; I need a monthly income plan with tax efficiency.',
    solution: 'We build staggered cashflows via debt and growth assets, personalized to your residency and tax bracket, with easy income management.'
  },
  {
    src: '/carousal2.jpg',
    alt: 'Diversification',
    title: 'Global Diversification',
    problem: 'I want global exposure but also a solid India base to hedge against currency risk and volatility.',
    solution: 'We blend Indian and global funds, enable access via NRE/GIFT City, creating dual-currency and multi-market safety nets.'
  },
  {
    src: '/carousal3.jpg',
    alt: 'Taxation & Compliance',
    title: 'Taxation & Compliance Clarity',
    problem: 'I am confused about TDS, DTAA, global tax reporting, and compliance for my investments.',
    solution: 'We map your residency, optimize accounts, and ensure seamless disclosures and DTAA relief for global and India income.'
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

const AnimatedImageCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const slides = NRI_PROBLEM_SLIDES;
  const length = slides.length;
  const interval = 4800;
  const progressBarRef = useRef<HTMLDivElement>(null);

  useInterval(() => {
    if (!isHover) {
      setCurrent((prev) => (prev + 1) % length);
    }
  }, interval);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = 'none';
      progressBarRef.current.style.width = '0%';
      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = `width ${interval}ms linear`;
          progressBarRef.current.style.width = '100%';
        }
      }, 50);
    }
  }, [current, interval]);

  // Simple swipe support (unchanged)
  const touchStartX = useRef<number | null>(null);
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        setCurrent((prev) => (dx > 0 ? (prev - 1 + length) % length : (prev + 1) % length));
      }
    }
    touchStartX.current = null;
  }

  return (
    <section className="py-8 md:py-14 px-2 md:px-6 w-full overflow-x-hidden bg-gradient-to-b from-muted to-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading and Subheading */}
        <h2 className="text-2xl md:text-4xl text-[#022D36] font-bold text-center mb-1">
          Top NRI Investment Challenges & Solutions
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Explore the major financial challenges faced by NRIs and our actionable solutions. Swipe or click through to learn more about each problem statement.
        </p>
        <div
          className="relative rounded-2xl shadow-xl border border-slate-100 bg-white overflow-hidden"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[320px] sm:h-[430px] flex items-center justify-center">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className={
                  'absolute inset-0 transition-opacity duration-700 ' +
                  (i === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none')
                }
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover brightness-95 scale-105 transition-transform duration-700 rounded-2xl"
                  draggable={false}
                  style={{
                    transform: i === current ? 'scale(1)' : 'scale(1.04)',
                  }}
                />
                {/* Text overlay per slide: */}
                {i === current && (
                  <div className="absolute left-0 bottom-0 w-full py-8 px-4 md:px-10 bg-gradient-to-t from-black/80 to-transparent animate-fade-in">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2 animate-slide-up">{slide.title}</h3>
                    <div className="text-base text-white/90 mb-1 animate-slide-up delay-75"><b>Problem: </b>{slide.problem}</div>
                    <div className="text-sm sm:text-base text-emerald-200 animate-slide-up delay-150"><b>Solution: </b>{slide.solution}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-black/10 z-30">
            <div ref={progressBarRef} className="h-full bg-gradient-to-r from-emerald-400 to-sky-400" style={{ width: 0 }} />
          </div>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full border border-white focus:outline-none transition-colors duration-200 ${i === current ? 'bg-emerald-400 shadow' : 'bg-white/40 hover:bg-emerald-200'}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? 'true' : 'false'}
              />
            ))}
          </div>
          {/* Arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + length) % length)}
            className="absolute top-1/2 left-1 z-20 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-emerald-500 transition-colors focus:outline-none"
            aria-label="Previous slide"
            tabIndex={0}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % length)}
            className="absolute top-1/2 right-1 z-20 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-emerald-500 transition-colors focus:outline-none"
            aria-label="Next slide"
            tabIndex={0}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.9s; }
        .animate-slide-up { animation: slide-up 0.7s cubic-bezier(.6,-0.05,.7,1.01); }
        .delay-75 { animation-delay: 0.15s; }
        .delay-150 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default AnimatedImageCarousel;
