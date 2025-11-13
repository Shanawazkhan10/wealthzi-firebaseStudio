import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ThumbsUp } from 'lucide-react';

const stories = [
  {
    achievement: (
      <>
        <span className="text-white">4x his investments</span> <br />
        <span style={{ color: 'rgb(76 167 113)' }}>in last 3 years</span>
      </>
    ),
    name: 'B Madan, 55Y',
    details: 'CFO, Listed Company',
    imageId: 'success-1',
  },
  {
    achievement: (
      <>
        <span className="text-white">Wealth up by 107%</span> <br />
        <span style={{ color: 'rgb(76 167 113)' }}>since Feb 2020</span>
      </>
    ),
    name: 'MSR Kumaraswamy, 52Y',
    details: 'Sr Engineer',
    imageId: 'success-2',
  },
  {
    achievement: (
      <>
        <span className="text-white">2x his investments</span> <br />
        <span style={{ color: 'rgb(76 167 113)' }}>in less than a year</span>
      </>
    ),
    name: 'S Berry, 37Y',
    details: 'Executive',
    imageId: 'success-3',
  },
  {
    achievement: (
      <>
        <span className="text-white">Networth up by 68%</span> <br />
        <span style={{ color: 'rgb(76 167 113)' }}>in 18 months</span>
      </>
    ),
    name: 'S Agarwal, 43Y',
    details: 'Works with BIG4',
    imageId: 'team-sanjeev',
  },
  {
    achievement: (
      <>
        <span className="text-white">Doubled wealth</span> <br />
        <span style={{ color: 'rgb(76 167 113)' }}>in last 2 years</span>
      </>
    ),
    name: 'S Bhasin, 52Y',
    details: 'Journalist',
    imageId: 'team-pradeep',
  },
  {
    achievement: (
      <>
        <span className="text-white">Wealth up by 75%</span> <br />
        <span style={{ color: 'rgb(76 167 113)' }}>in 2 years</span>
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
    <section id="learn" className="bg-[#efffed] pb-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground pt-10">
            Real Impact. Real Savings.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground">
            Read success stories from Wealthzi Customers.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {stories.map((story, index) => {
              const image = getImage(story.imageId);
              return (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/4">
                  <div className="h-full">
                    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary text-primary-foreground relative overflow-hidden min-h-[300px] rounded-xl">
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
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
