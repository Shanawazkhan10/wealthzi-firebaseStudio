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
    headline: 'Personalized wealth management for you.',
    imageId: 'hero-1',
    contentPosition: 'left',
  },
  {
    id: 'slide2',
    headline: 'Achieve your financial goals with expert advice.',
    imageId: 'hero-2',
    contentPosition: 'left',
  },
  {
    id: 'slide3',
    headline: 'Invest in your future, start today.',
    imageId: 'hero-3',
    contentPosition: 'left',
  },
  {
    id: 'slide4',
    headline: 'Smart investing for a secure tomorrow.',
    imageId: 'hero-1',
    contentPosition: 'left',
  },
  {
    id: 'slide5',
    headline: 'Build your legacy with Wealthzi.',
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
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                          {slide.headline}
                        </h1>
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
