import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ThumbsUp } from 'lucide-react';

const stories = [
  {
    achievement: (
      <>
        4x his investments <br />
        <span className="text-[#56b28b] font-bold">in last 3 years</span>
      </>
    ),
    name: 'B Madan, 55Y',
    details: 'CFO, Listed Company',
    imageId: 'success-1',
  },
  {
    achievement: (
      <>
        Wealth up by <span className="text-[#56b28b] font-bold">107%</span> <br />
        since Feb 2020
      </>
    ),
    name: 'MSR Kumaraswamy, 52Y',
    details: 'Sr Engineer',
    imageId: 'success-2',
  },
  {
    achievement: (
      <>
        <span className="text-[#56b28b] font-bold">2x his investments</span> <br />
        in less than a year
      </>
    ),
    name: 'S Berry, 37Y',
    details: 'Executive',
    imageId: 'success-3',
  },
  {
    achievement: (
      <>
        Networth up by <span className="text-[#56b28b] font-bold">68%</span> <br />
        in 18 months
      </>
    ),
    name: 'S Agarwal, 43Y',
    details: 'Works with BIG4',
    imageId: 'team-sanjeev',
  },
  {
    achievement: (
      <>
        <span className="text-[#56b28b] font-bold">Doubled wealth</span> <br />
        in last 2 years
      </>
    ),
    name: 'S Bhasin, 52Y',
    details: 'Journalist',
    imageId: 'team-pradeep',
  },
  {
    achievement: (
      <>
        Wealth up by <span className="text-[#56b28b] font-bold">75%</span> <br />
        in 2 years
      </>
    ),
    name: 'K Jerath, 41Y',
    details: 'Media Professional',
    imageId: 'success-4',
  },
];


export default function SuccessStories() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="learn" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Real Impact. Real Savings.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Read success stories from Wealthzi Customers.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {stories.map((story, index) => {
              const image = getImage(story.imageId);
              return (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary text-primary-foreground relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                     <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-black/10 rounded-full"></div>
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center z-10">
                        <div className="p-4 bg-black/20 rounded-full mb-4">
                           <ThumbsUp className="w-10 h-10 text-white/80" />
                        </div>
                      <p className="font-heading text-lg md:text-xl text-white flex-grow">
                        {story.achievement}
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold text-white text-base md:text-lg">{story.name}</p>
                        <p className="text-sm md:text-base text-white/80">{story.details}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
