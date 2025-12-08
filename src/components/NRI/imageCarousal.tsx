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
    <section className="py-12 px-4 h-screen">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-4xl text-[#022D36] font-bold mb-6 text-center">
          Explore Our NRI Solutions
        </h3>
        <div
          className="relative overflow-hidden rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          {/* Custom carousel container */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: transformStyle }}
          >
            {slides.map((s, i) => (
              <div
                key={s.src ?? i}
                className="w-full h-70 md:h-96 shrink-0 overflow-hidden"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover grayscale-[.05] hover:grayscale-0 transition-all"
                />
                <div className="absolute left-4 bottom-4 bg-black/50 text-white px-4 py-2 rounded">
                  <span className="font-semibold">{s.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  i === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentIndex ? "true" : "false"}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={() => {
                setCurrentIndex(
                  (prev) => (prev - 1 + slides.length) % slides.length
                );
                setIsAutoPlaying(true);
              }}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
                setIsAutoPlaying(true);
              }}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ImageShowcaseCarousel;