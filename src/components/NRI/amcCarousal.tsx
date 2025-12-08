"use client";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const keys = Object.keys(AMCIconUrl);
    const duplicateCount =
      typeof window !== "undefined" && window.innerWidth < 768 ? 4 : 3;
    setIconsArray(Array(duplicateCount).fill(keys).flat());
  }, []);

  const handleEnter = () => setIsPaused(true);
  const handleLeave = () => setIsPaused(false);

  return (
    <div className="overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 py-6 md:py-8">
      <div className="text-[#022D36] text-xl text-center font-semibold mb-4 ">
        Trusted by all AMCs
      </div>
      <div
        className={`flex animate-marquee ${
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
            <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 mx-2 transition-transform duration-200 hover:scale-110">
              <img
                src={AMCIconUrl[amcKey as keyof typeof AMCIconUrl]}
                alt={`${amcKey} AMC Logo`}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
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
