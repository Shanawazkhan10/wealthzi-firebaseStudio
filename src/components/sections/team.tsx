import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import Image from 'next/image';

// Import team member images
import AdityaImage from '../../../public/Wealthzi_Aditya.png';
import HarshitImage from '../../../public/Wealthzi_Harshit.png';
import PradeepImage from '../../../public/Wealthzi_Pradeep.png';
import SanjeevImage from '../../../public/Wealthzi_Sanjeev.png';
import YogeshImage from '../../../public/Wealthzi_Yogesh.png';

// Import emoji images
import HuggingFace from "../../../public/svgs/HuggingFace.svg";
import SlightlySmilingFace from "../../../public/svgs/SlightlySmilingFace.svg";
import StarStruck from "../../../public/svgs/StarStruck.svg";

const teamMembers = [
  { 
    name: 'Sanjeev Johari', 
    title: 'Director - Financial Planning', 
    image: SanjeevImage,
    bgImage: "bg-[url(/Wealthzi_Sanjeev.png)]"
  },
  { 
    name: 'Pradeep Pillai', 
    title: 'Co-founder, Head of Wealth', 
    image: PradeepImage,
    bgImage: "bg-[url(/Wealthzi_Pradeep.png)]"
  },
  { 
    name: 'Yogesh Kumar', 
    title: 'Director, Wealthzi', 
    image: YogeshImage,
    bgImage: "bg-[url(/Wealthzi_Yogesh.png)]"
  },
  { 
    name: 'Aditya Kachru', 
    title: 'Association Director, Advisory', 
    image: AdityaImage,
    bgImage: "bg-[url(/Wealthzi_Aditya.png)]"
  },
  { 
    name: 'Harshit Singh', 
    title: 'AVP Operations', 
    image: HarshitImage,
    bgImage: "bg-[url(/Wealthzi_Harshit.png)]"
  },
];

const reviewsArray = [
  {
    title: "Rs. 500cr+",
    subtitle: "Assets Managed",
    emoji: SlightlySmilingFace,
  },
  {
    title: "5000+",
    subtitle: "Happy Customers",
    emoji: HuggingFace,
  },
  {
    title: "10K+",
    subtitle: "Transactions",
    emoji: StarStruck,
  },
];

export default function Team() {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-[url(/moneyBackground.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto relative space-y-16">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Wealth experts with 20+ years experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground leading-relaxed">
            Our team combines decades of wealth management and technology experience to empower your financial journey.
          </p>
        </div>
        
        {/* Team Members Section */}
        {/* Team Members Grid - Desktop Version */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="relative overflow-hidden rounded-xl shadow-lg group text-white border-none">
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                fill
                className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col justify-end h-full p-4 min-h-[350px]">
                <h3 className="font-heading text-xl lg:text-2xl font-bold">{member.name}</h3>
                <p className="text-base text-white/90">{member.title}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Members Mobile Version */}
        <div className="md:hidden">
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {teamMembers.map((member, index) => (
                  <div key={index} className="flex-shrink-0 w-[180px]">
                      <Card className="relative overflow-hidden rounded-xl shadow-lg group text-white border-none h-[280px]">
                         <Image
                            src={member.image}
                            alt={`Photo of ${member.name}`}
                            fill
                            className="object-cover object-top w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="relative flex flex-col justify-end h-full p-4">
                            <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                            <p className="text-sm text-white/90">{member.title}</p>
                          </div>
                      </Card>
                  </div>
              ))}
            </div>
        </div>

        {/* Stats Section */}
        <div className="pt-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-primary-foreground shadow-xl rounded-xl">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                <Award className="w-16 h-16 text-white shrink-0"/>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold">Backed by Trust</h3>
                  <p className="mt-2 text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                    Team with decades of wealth management and technology experience in managing Rs. 2,500 crore worth assets of 1000+ high net-worth clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8">
              {reviewsArray.map((item, index) => (
                <Card key={index} className="bg-blue-100/50 backdrop-blur-sm border-blue-200 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={item.emoji}
                      alt={item.subtitle}
                      className="h-16 w-16 mx-auto mb-4"
                    />
                    <p className="text-3xl font-bold text-blue-900">
                      {item.title}
                    </p>
                    <p className="text-lg text-blue-800">
                      {item.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
