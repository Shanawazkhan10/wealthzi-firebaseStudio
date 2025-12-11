"use client";
import { useState, useEffect, useRef } from "react";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayInterval = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    const startAutoPlay = () => {
      if (isAutoPlaying && !isHovered) {
        autoPlayInterval.current = window.setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
      }
    };

    startAutoPlay();
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlaying, isHovered]);

  // Handle mouse hover to pause auto-play
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsAutoPlaying(true);
  };

  // Handle dot navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(true);
  };

  // Calculate transform for smooth transitions
  const transformStyle = `translateX(-${currentIndex * 100}%)`;

  return (
    <section className="py-8 px-2 sm:py-10 sm:px-4 md:py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Intro */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-[#022D36] mb-2 text-center">
          Explore Our NRI Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 font-light mb-5 md:mb-8 max-w-2xl mx-auto text-center">
          We empower NRIs to seize global investment opportunities, plan for every goal, and achieve tailormade solutions—from India to anywhere in the world and back home.
        </p>

        {/* Carousel core section */}
        <div
          className="relative overflow-hidden rounded-xl shadow-md border border-gray-100 bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: transformStyle }}
          >
            {slides.map((s, i) => (
              <div
                key={s.src ?? i}
                className="w-full h-44 sm:h-60 md:h-80 lg:h-96 shrink-0 relative flex flex-col items-center justify-end"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover grayscale-[.05] hover:grayscale-0 transition-all rounded-xl"
                  draggable={false}
                />
                {/* Caption Overlay */}
                <div className="absolute left-2 right-2 bottom-3 md:left-4 md:right-4 md:bottom-6 bg-black/60 text-white px-2 py-2 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm md:text-base text-center font-semibold shadow-md">
                  {s.caption}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-3 md:mt-5 absolute w-full bottom-0 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mx-1 transition-colors duration-200 border border-white focus:outline-none ${
                  i === currentIndex ? "bg-primary" : "bg-gray-400/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentIndex ? "true" : "false"}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-1 md:px-4 pointer-events-none">
            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
                setIsAutoPlaying(true);
              }}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors absolute left-1 top-1/2 -translate-y-1/2"
              aria-label="Previous slide"
            >
              {/* Left arrow icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
                setIsAutoPlaying(true);
              }}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors absolute right-1 top-1/2 -translate-y-1/2"
              aria-label="Next slide"
            >
              {/* Right arrow icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        {/* Extra: Static image & info block (below carousel) */}
        {/* <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8 md:mt-10">
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border border-emerald-300">
            <img
              src="/nri-solution-featured.png"
              alt="NRI Featured Solution"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-emerald-800 mb-2">
              Achieve More with Smart NRI Strategies
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto sm:mx-0">
              From digital onboarding to multi-currency investments, our platform empowers NRIs with simple, transparent, and effective strategies. Get expert advice on global diversification, tax optimization, retirement planning, and more—all on one seamless platform built for you.
            </p>
          </div>
        </div> */}

      </div>
    </section>
  );
}
export default ImageShowcaseCarousel;