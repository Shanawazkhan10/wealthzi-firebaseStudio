import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stories = [
  {
    quote: "Wealthzi's guidance was pivotal for my retirement planning. I feel secure and confident about my future.",
    name: 'Aarav Sharma',
    achievement: 'Achieved retirement goals 5 years early',
    imageId: 'success-1'
  },
  {
    quote: 'Planning our child\'s education felt overwhelming, but Wealthzi created a clear, achievable plan for us. We are so grateful!',
    name: 'Priya & Rohan Mehta',
    achievement: 'Fully funded child\'s education corpus',
    imageId: 'success-2'
  },
  {
    quote: 'The personalized portfolio recommendations have significantly outperformed my previous investments. The team is always available for advice.',
    name: 'Sunita Rao',
    achievement: '25% increase in portfolio value in 2 years',
    imageId: 'success-3'
  },
];

export default function SuccessStories() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="learn" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear from our clients who have successfully transformed their financial lives with Wealthzi.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {stories.map((story, index) => {
              const image = getImage(story.imageId);
              return (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                width={80}
                                height={80}
                                className="rounded-full mb-4 border-2 border-primary"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                      <blockquote className="text-foreground/80 italic flex-grow">
                        "{story.quote}"
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-bold font-heading text-foreground">{story.name}</p>
                        <p className="text-sm text-primary font-semibold">{story.achievement}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
