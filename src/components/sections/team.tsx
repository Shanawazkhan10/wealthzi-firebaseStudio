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
    title: "₹500cr+",
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
      <div className="container mx-auto relative">
        {/* Team Members Section */}
        {/* Team Members Grid - Desktop Version */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="relative overflow-hidden rounded-lg shadow-lg group text-white">
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                fill
                className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col justify-end h-full p-4 min-h-[300px]">
                <h3 className="font-heading text-lg lg:text-xl font-bold">{member.name}</h3>
                <p className="text-base text-white/80">{member.title}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Members Mobile Version */}
        <div className="md:hidden flex w-screen bg-cover bg-center bg-no-repeat justify-center flex-col pt-6 overflow-x-scroll">
          <div className="flex flex-row md:self-center mr-s16 md:border-4 md:border-white">
            {teamMembers.map((member, index) => (
              <div
                className={`flex ${member.bgImage} md:h-[300px] md:w-[222px] h-[196px] w-[145px] bg-cover bg-no-repeat object-contain items-end flex-shrink-0`}
                key={index}
              >
                <div className="flex h-3/5 w-full items-center justify-end flex-col bg-gradient-to-t from-ziGreen to-transparent">
                  <p className="flex text-white font-bold text-s md:text-xl">
                    {member.name}
                  </p>
                  <p className="flex text-white font-normal text-xs pb-6">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-12 pt-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Wealth experts with 20+ years experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground">
            Our team combines decades of wealth management and technology experience to empower your financial journey.
          </p>
        </div>
        {/* Stats Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            {/* Desktop Stats Card */}
            <Card className="hidden md:block bg-primary text-primary-foreground shadow-xl">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                <Award className="w-12 h-12 md:w-16 md:h-16 text-white shrink-0"/>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold">Backed by Trust</h3>
                  <p className="mt-2 text-primary-foreground/80 text-base md:text-lg">
                    Team with decades of wealth management and technology experience in managing Rs 2,500 crore worth assets of 1000+ high net-worth clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8">
              {reviewsArray.map((item, index) => (
                <Card key={index} className="bg-blue-100/50 backdrop-blur-sm border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={item.emoji}
                      alt={item.subtitle}
                      className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4"
                    />
                    <p className="text-2xl md:text-3xl font-bold text-blue-900">
                      {item.title}
                    </p>
                    <p className="text-base md:text-lg text-blue-800">
                      {item.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile Stats */}
            <div className="md:hidden bg-lightBlueBg rounded-lg p-6">
              <p className="text-center pt-3 text-sm md:text-2xl self-center">
                Backed by trust. Team with decades of wealth management and technology
                experience in managing ₹2,500 crore worth assets of 1000+ high
                net-worth clients.
              </p>
              <div className="flex justify-center items-center pt-6">
                {reviewsArray.map((item, index) => (
                  <div
                    key={index}
                    className="bg-lightBlueBg w-[100px] h-[100px] md:w-[200px] md:h-[200px] items-center justify-center flex flex-col rounded-md mr-s12"
                  >
                    <Image
                      src={item.emoji}
                      alt={"wealthzi logo"}
                      className="h-[32px] md:h-[64px] w-auto"
                    />
                    <p className="text-s18 md:text-4xl font-bold text-darkBlueText">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-lg line-clamp-1 text-darkBlueText">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}