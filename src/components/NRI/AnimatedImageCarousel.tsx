"use client";
import React, { useRef, useState, useEffect } from "react";

// Example slides, replace with your data/images
const SLIDES = [
  {
    src: "/heroSectionBg1.png",
    alt: "Market growth illustration",
    title: "India & Global Opportunities",
    desc: "Seize global investment openings tailored for NRIs.",
  },
  {
    src: "/moneyBackground.jpeg",
    alt: "Wealth background",
    title: "Tax-efficient short-term parking",
    desc: "Benefit from high-yield solutions and robust compliance.",
  },
  {
    src: "/InvestmentGrowth.png",
    alt: "Investment growth chart",
    title: "Long-term goal planning",
    desc: "Empower every stage with disciplined wealth strategies.",
  },
  {
    src: "/workingProfessional.png",
    alt: "Working professional",
    title: "Personalized NRI advice",
    desc: "Platform and experts supporting your India-global journey.",
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

const AnimatedImageCarousel: React.FC<{
  slides?: typeof SLIDES;
  autoPlay?: boolean;
  interval?: number;
}> = ({ slides = SLIDES, autoPlay = true, interval = 4200 }) => {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const length = slides.length;
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Auto-advance logic
  useInterval(() => {
    if (autoPlay && !isHover) {
      setCurrent((prev) => (prev + 1) % length);
    }
  }, interval);

  // Progress bar animates width
  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";
      // Delay transition to trigger reflow
      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.transition = `width ${interval}ms linear`;
          progressBarRef.current.style.width = "100%";
        }
      }, 50);
    }
  }, [current, interval]);

  // Swipe support
  const touchStartX = useRef<number | null>(null);
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        setCurrent((prev) =>
          dx > 0 ? (prev - 1 + length) % length : (prev + 1) % length
        );
      }
    }
    touchStartX.current = null;
  }

  return (
    <section className="py-8 md:py-14 px-2 md:px-6 w-full overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-2xl shadow-xl border border-slate-100 bg-white overflow-hidden"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center select-none">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={
                  "absolute inset-0 transition-opacity duration-700 " +
                  (i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")
                }
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover brightness-95 scale-105 transition-transform duration-700 rounded-2xl"
                  draggable={false}
                  style={{
                    transform:
                      i === current
                        ? "scale(1)"
                        : "scale(1.04)",
                  }}
                />
                {/* Caption/Overlay */}
                {i === current && (
                  <div className="absolute left-0 bottom-0 w-full py-7 px-4 md:px-12 bg-gradient-to-t from-black/70 to-transparent animate-fade-in">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2 animate-slide-up">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 font-light animate-slide-up delay-75">
                      {slide.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar above image */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-black/10 z-30">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-emerald-400 to-sky-400"
              style={{ width: 0 }}
            />
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full border border-white focus:outline-none transition-colors duration-200 ${
                  i === current ? "bg-emerald-400 shadow" : "bg-white/40 hover:bg-emerald-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? "true" : "false"}
              />
            ))}
          </div>

          {/* Arrow buttons (show on hover/always on mobile/tablet) */}
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
      {/* Animations */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.9s; }
        .animate-slide-up { animation: slide-up 0.7s cubic-bezier(.6,-0.05,.7,1.01); }
        .delay-75 { animation-delay: 0.15s; }
      `}</style>
    </section>
  );
};

export default AnimatedImageCarousel;
