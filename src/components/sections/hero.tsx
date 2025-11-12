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
    headline: "We'll need ₹1.5 crore in 8-10 years for our kids higher education and wedding.",
    subheadline: 'Give us a long-term investment plan!',
    cta: 'Start Planning',
    imageId: 'hero-1',
    contentPosition: 'center',
  },
  {
    id: 'slide2',
    headline: 'Create Wealth with Wealthzi',
    subheadline: 'Wealth creation is made smooth with an easy-to-use interface to transact in and research mutual funds, FDs, bonds, portfolio management services and AIFs along with automated portfolio review and tracking.',
    stats: 'Join over 10,000 customers who trust wealthzi to take control of their financial future.',
    cta: 'Join Now',
    imageId: 'hero-2',
    contentPosition: 'left',
  },
  {
    id: 'slide3',
    headline: 'Get FREE financial guidance and invest in best investment options',
    features: [
      'Build Portfolio',
      'Easy Transactions',
      'Portfolio Tracking',
      'Review & Rebalancing',
      'Proprietary Zi Algorithm',
      'Remote Human Assistance',
    ],
    cta: 'Get Free Advice',
    imageId: 'hero-3',
    contentPosition: 'right',
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [_, setPlugins] = React.useState([
    {
      name: 'autoplay',
      options: {
        delay: 5000,
        stopOnInteraction: true,
      },
    },
  ]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
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
          {slides.map((slide) => {
            const image = getImage(slide.imageId);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[80vh] min-h-[600px] w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      priority={slide.id === 'slide1'}
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
                        {slide.subheadline && (
                          <p className="mt-4 text-lg md:text-xl text-neutral-200 drop-shadow-md">
                            {slide.subheadline}
                          </p>
                        )}
                        {slide.stats && (
                          <p className="mt-4 text-lg font-semibold text-amber-300 drop-shadow-md">
                            {slide.stats}
                          </p>
                        )}
                        {slide.features && (
                          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-left">
                            {slide.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-neutral-200">
                                <Check className="h-5 w-5 text-accent" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <Button
                          size="lg"
                          className="mt-8 font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          aria-label={slide.cta}
                        >
                          {slide.cta}
                        </Button>
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
              current === index + 1 ? 'w-6 bg-white' : 'bg-white/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
