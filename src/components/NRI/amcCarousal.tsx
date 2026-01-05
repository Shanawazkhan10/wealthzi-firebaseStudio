"use client";
import { useEffect, useState, useRef } from "react";

const AmcBaseUrl = "https://webassets.nivesh.com/logo/amc/";
const AMCIconUrl = {
  BIRLA: `${AmcBaseUrl}aditya_birla.png`,
  AXIS: `${AmcBaseUrl}axis.png`,
  "360": `${AmcBaseUrl}360one.png`,
  BANDHAN: `${AmcBaseUrl}bandhan.png`,
  PARIBAS: `${AmcBaseUrl}baroda_paribas.png`,
  BARODA: `${AmcBaseUrl}BOB.png`,
  BOI: `${AmcBaseUrl}BOI.png`,
  CANARA: `${AmcBaseUrl}canera.png`,
  DSP: `${AmcBaseUrl}dsp.png`,
  EDELWEISS: `${AmcBaseUrl}edelweiss.png`,
  fRANKLIN: `${AmcBaseUrl}franklin.png`,
  GROWW: `${AmcBaseUrl}grow.png`,
  HDFC: `${AmcBaseUrl}hdfc.png`,
  HSBC: `${AmcBaseUrl}hsbc.png`,
  INDIABULLS: `${AmcBaseUrl}indiabulls.png`,
  INVESCO: `${AmcBaseUrl}invesco.png`,
  ITI: `${AmcBaseUrl}ITI.png`,
  JM: `${AmcBaseUrl}JM.png`,
  KOTAK: `${AmcBaseUrl}kotak.png`,
  "Kotak Mahindra": `${AmcBaseUrl}kotak.png`,
  "L&T": `${AmcBaseUrl}l&t.png`,
  LIC: `${AmcBaseUrl}lic.png`,
  MIRAE: `${AmcBaseUrl}mirae_asset.png`,
  MOTILAL: `${AmcBaseUrl}motilal.png`,
  MOAMC: `${AmcBaseUrl}motilal.png`,
  NIPPON: `${AmcBaseUrl}nippon.png`,
  NJ: `${AmcBaseUrl}Nj.png`,
  PARAG: `${AmcBaseUrl}parag_parikh.png`,
  PPFAS: `${AmcBaseUrl}parag_parikh.png`,
  PGIM: `${AmcBaseUrl}PGIM.png`,
  PRINCIPAL: `${AmcBaseUrl}principal.png`,
  QUANT: `${AmcBaseUrl}quant.png`,
  QUANTUM: `${AmcBaseUrl}quantum.png`,
  SAMCO: `${AmcBaseUrl}samco.png`,
  SBI: `${AmcBaseUrl}sbi.png`,
  SHRIRAM: `${AmcBaseUrl}shriram.png`,
  SUNDRAM: `${AmcBaseUrl}sundram.png`,
  TATA: `${AmcBaseUrl}tata.png`,
  TAURUS: `${AmcBaseUrl}taurus.png`,
  UNION: `${AmcBaseUrl}union.png`,
  WHITEOAK: `${AmcBaseUrl}white_oak.png`,
  ZERODHA: `${AmcBaseUrl}zerodha.png`,
  ICICI: `${AmcBaseUrl}icici.png`,
  UTI: `${AmcBaseUrl}UTI.png`,
  SUNDARAM: `${AmcBaseUrl}sundram.png`,
  MAHINDRA: `${AmcBaseUrl}mahindra.png`,
  BAJAJ: `${AmcBaseUrl}bajaj.png`,
  MMTC: `https://webassets.nivesh.com/Content/images/investmentPlanner/MMTCLogo.png`,
  NAVI: `${AmcBaseUrl}navi.png`,
} as const;

export default function AMCMarqueeCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [iconsArray, setIconsArray] = useState<string[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const keysRef = useRef<string[]>([]);

  useEffect(() => {
    const keys = Object.keys(AMCIconUrl);
    keysRef.current = keys;
    
    const getDuplicateCount = () => {
      if (typeof window === "undefined") return 3;
      return window.innerWidth < 768 ? 6 : 4; // Increased for full viewport coverage
    };

    const duplicateCount = getDuplicateCount();
    const fullArray = Array(duplicateCount).fill(keys).flat();
    setIconsArray(fullArray);
  }, []);

  // Handle window resize to update duplicates
  useEffect(() => {
    const handleResize = () => {
      const keys = keysRef.current;
      if (!keys.length) return;
      
      const duplicateCount = window.innerWidth < 768 ? 6 : 4;
      const fullArray = Array(duplicateCount).fill(keys).flat();
      setIconsArray(fullArray);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEnter = () => setIsPaused(true);
  const handleLeave = () => setIsPaused(false);

  return (
    <div className="overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 py-6 md:py-8">
      <div className="text-[#022D36] text-2xl text-center font-bold mb-5">
        Trusted by all AMCs
      </div>
      <div
        ref={marqueeRef}
        className={`flex animate-marquee-infinite ${
          isPaused ? "[animation-play-state:paused]" : ""
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onTouchStart={handleEnter}
        onTouchEnd={handleLeave}
      >
        {iconsArray.map((amcKey, index) => (
          <div
            key={`${amcKey}-${index}`}
            className="flex-shrink-0 px-4 md:px-6"
          >
            <div className="flex items-center justify-center  bg-transparent backdrop-blur-sm mx-2 transition-transform duration-200 hover:scale-110">
              <img
                src={AMCIconUrl[amcKey as keyof typeof AMCIconUrl]}
                alt={`${amcKey} AMC Logo`}
                className="w-20 h-20 md:w-30 md:h-30 object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
