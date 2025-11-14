'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import * as React from 'react';

// Import images
import familyPlanningImage from '../../../public/familyPlanning.png';
import firstSipImage from '../../../public/firstSip.png';
import portfolioReviewImage from '../../../public/portfolioReview.png';
import retiredLifeImage from '../../../public/retiredLife.png';
import workingProfessionalImage from '../../../public/workingProfessional.png';

const slides = [
  {
    id: 'slide1',
    text1: (
      <p>
        I need a <span className="text-[#56b28b]">Rs. 40L</span> corpus <br /> in the next{' '}
        <span className="text-[#56b28b]">5 years.</span>
      </p>
    ),
    text2: "“But, I don't know how to get there!”",
    image: workingProfessionalImage,
    altImage: "working professional",
    contentPosition: 'left',
    text1Size: "text-3xl md:text-4xl lg:text-5xl",
    text2Size: "text-xl lg:text-2xl xl:text-3xl"
  },
  {
    id: 'slide2',
    text1: (
      <p>
        I want to make my{' '}
        <span className="text-[#56b28b]">First SIP</span> investment.
      </p>
    ),
    text2: '“How should I start?”',
    image: firstSipImage,
    altImage: "first SIP investment",
    contentPosition: 'left',
    text1Size: "text-3xl md:text-4xl lg:text-5xl",
    text2Size: "text-xl lg:text-2xl xl:text-3xl"
  },
  {
    id: 'slide3',
    text1: (
      <p>
        I'm retiring with <span className="text-[#56b28b]">Rs. 50L</span> and have{' '}
        <span className="text-[#56b28b]">Rs. 35K </span>
        monthly expenses.
      </p>
    ),
    text2: '“Help me generate monthly income.”',
    image: retiredLifeImage,
    altImage: "about to retire person",
    contentPosition: 'left',
    text1Size: "text-3xl md:text-4xl lg:text-5xl",
    text2Size: "text-xl lg:text-2xl xl:text-3xl"
  },
  {
    id: 'slide4',
    text1: (
       <p>
        My investments are giving {' '}
        <span className="text-[#56b28b]">below average returns.</span>
      </p>
    ),
    text2: '“Please review my portfolio and give recommendation.”',
    image: portfolioReviewImage,
    altImage: "investing since last few years",
    contentPosition: 'left',
    text1Size: "text-3xl md:text-4xl lg:text-5xl",
    text2Size: "text-xl lg:text-2xl xl:text-3xl"
  },
  {
    id: 'slide5',
    text1: (
      <p>
        We'll need <span className="text-[#56b28b]">Rs. 1.5 crore</span> for our <span className="text-[#56b28b]">kids'</span> future.
      </p>
    ),
    text2: '“Give us a long-term investment plan!”',
    image: familyPlanningImage,
    altImage: "higher education and wedding",
    contentPosition: 'left',
    text1Size: "text-3xl md:text-4xl lg:text-5xl",
    text2Size: "text-xl lg:text-2xl xl:text-3xl"
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      api.off('select', onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section id="hero" className="relative w-full pt-5">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[calc(100vh-80px)] min-h-[500px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.altImage}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full container mx-auto flex items-center">
                  <div
                    className={cn('w-full text-white', {
                      'text-center': slide.contentPosition === 'center',
                      'text-left': slide.contentPosition === 'left',
                      'text-right': slide.contentPosition === 'right',
                    })}
                  >
                    <div
                      className={cn('max-w-2xl', {
                        'mx-auto': slide.contentPosition === 'center',
                        'mr-auto': slide.contentPosition === 'left',
                        'ml-auto': slide.contentPosition === 'right',
                      })}
                    >
                      <div className={cn(
                        "font-heading font-extrabold tracking-tight drop-shadow-lg",
                        "text-3xl sm:text-4xl md:text-5xl"
                      )}>
                        {slide.text1}
                      </div>
                      <p className={cn(
                        "pt-6 font-normal text-white text-left leading-tight font-caveat-brush",
                        "text-xl sm:text-2xl md:text-3xl"
                      )}>
                        {slide.text2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors duration-300',
              current === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
