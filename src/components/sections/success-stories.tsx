import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const stories = [
  {
    achievement: (
      <>
        <span className="text-primary font-bold">4x his investments</span> <br />
        in last 3 years
      </>
    ),
    name: 'B Madan, 55Y',
    details: 'CFO, Listed Company',
    imageId: 'success-1',
  },
  {
    achievement: (
      <>
        <span className="text-primary font-bold">Wealth up by 107%</span> <br />
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
        <span className="text-primary font-bold">2x his investments</span> <br />
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
        <span className="text-primary font-bold">Networth up by 68%</span> <br />
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
        <span className="text-primary font-bold">Doubled wealth</span> <br />
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
        <span className="text-primary font-bold">Wealth up by 75%</span> <br />
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
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={`Photo of ${story.name}`}
                                width={80}
                                height={80}
                                className="rounded-full mb-4 border-2 border-primary"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                      <p className="font-heading text-lg md:text-xl text-muted-foreground flex-grow">
                        {story.achievement}
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold text-foreground text-base md:text-lg">{story.name}</p>
                        <p className="text-sm md:text-base text-muted-foreground">{story.details}</p>
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
