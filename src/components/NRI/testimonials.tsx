"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Nivesh.com's NRI advisors helped me transition my US savings into India and GIFT City portfolios, beating inflation while ensuring full compliance. I've never felt more confident planning my return.",
    author: "Sanjay S., Dubai/London",
  },
  {
    quote:
      "I needed short-term access for global payroll and long-term growth for my family's future in Mumbai. The team's clarity and transparency are unmatched.",
    author: "Ankita P., Singapore",
  },
];

function Testimonials({ items = testimonials }: { items?: { quote: string; author: string }[] }) {
  const slides = (items ?? []).map((t) => (
    <CarouselItem key={t.author}>
      <div className="p-6 bg-white/60 rounded-lg shadow-sm h-full flex flex-col justify-center">
        <blockquote className="text-lg italic mb-4">{t.quote}</blockquote>
        <cite className="text-sm font-semibold text-primary">— {t.author}</cite>
      </div>
    </CarouselItem>
  ));

  return (
    <section className="py-16 px-4 fade-onload">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        <div className="relative">
          <Carousel>
            <CarouselContent className="items-stretch">
              {slides}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
