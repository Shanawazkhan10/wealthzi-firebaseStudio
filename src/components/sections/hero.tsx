'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const slides = [
  {
    id: 'slide1',
    text1: (
      <p>
        I am a working professional, and want a{' '}
        <span className="text-[#56b28b]">₹40L</span> corpus in the next{' '}
        <span className="text-[#56b28b]">5 years.</span>
      </p>
    ),
    text2: "“But, I don't know how to get there!”",
    imageId: 'hero-1',
    contentPosition: 'left',
  },
  {
    id: 'slide2',
    text1: (
      <p>
        I have just started earning. I want to make my{' '}
        <span className="text-[#56b28b]">First SIP</span> investment.
      </p>
    ),
    text2: '“How should I start?”',
    imageId: 'hero-2',
    contentPosition: 'left',
  },
  {
    id: 'slide3',
    text1: (
      <p>
        I am a <span className="text-[#56b28b]"> retired</span>
        /about to retire person and I have{' '}
        <span className="text-[#56b28b]">₹50L </span>investments and{' '}
        <span className="text-[#56b28b]">₹35K </span>
        monthly expense.
      </p>
    ),
    text2: '“Help me generate monthly income.”',
    imageId: 'hero-3',
    contentPosition: 'left',
  },
  {
    id: 'slide4',
    text1: (
       <p>
        I’ve been investing <span className="text-[#56b28b]">on my own</span>{' '}
        since last few years, but I’m getting{' '}
        <span className="text-[#56b28b]">below average returns.</span>
      </p>
    ),
    text2: '“Please review my portfolio and give recommendation.”',
    imageId: 'hero-1',
    contentPosition: 'left',
  },
  {
    id: 'slide5',
    text1: (
      <p>
        We’ll need <span className="text-[#56b28b]">₹1.5 crore</span> in 8-10
        years for our <span className="text-[#56b28b]">kids</span> higher
        education and wedding.
      </p>
    ),
    text2: '“Give us a long-term investment plan!”',
    imageId: 'hero-2',
    contentPosition: 'left',
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

  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="hero" className="relative w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => {
            const image = getImage(slide.imageId);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[70vh] min-h-[500px] w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={image.imageHint}
                    />
                  )}
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
                        <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                          {slide.text1}
                        </div>
                        <p className="pt-6 font-normal text-white text-left text-2xl lg:text-4xl xl:text-5xl leading-tight font-['Caveat_Brush']">
                          {slide.text2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              current === index ? 'w-6 bg-white' : 'bg-white/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
