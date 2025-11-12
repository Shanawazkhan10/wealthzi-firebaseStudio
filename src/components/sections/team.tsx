import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const teamMembers = [
  { name: 'Sanjeev Johari', title: 'Director - Financial Planning', imageId: 'team-sanjeev' },
  { name: 'Pradeep Pillai', title: 'Co-founder, Head of Wealth', imageId: 'team-pradeep' },
  { name: 'Yogesh Kumar', title: 'Director, Wealthzi', imageId: 'team-yogesh' },
  { name: 'Aditya Kachru', title: 'Association Director, Advisory', imageId: 'team-aditya' },
  { name: 'Harshit Singh', title: 'AVP Operations', imageId: 'team-harshit' },
];

export default function Team() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="about" className="relative py-16 lg:py-24">
       <Image
          src="https://picsum.photos/seed/team-bg/1920/1080"
          alt="Financial experts in a meeting"
          fill
          className="object-cover"
          data-ai-hint="team meeting"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Wealth experts with 20+ years experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our team combines decades of wealth management and technology experience to empower your financial journey.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => {
            const image = getImage(member.imageId);
            return (
              <Card key={member.name} className="text-center bg-background/80 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Photo of ${member.name}`}
                      width={400}
                      height={400}
                      className="rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto object-cover border-4 border-white shadow-md"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <h3 className="font-heading mt-4 text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-lg text-primary font-medium">{member.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-16">
            <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground shadow-xl">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    <Award className="w-12 h-12 md:w-16 md:h-16 text-white shrink-0"/>
                    <div>
                        <h3 className="font-heading text-2xl font-bold">Backed by Trust</h3>
                        <p className="mt-2 text-primary-foreground/80 text-lg">
                        Team with decades of wealth management and technology experience in managing Rs 2,500 crore worth assets of 1000+ high net-worth clients.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
