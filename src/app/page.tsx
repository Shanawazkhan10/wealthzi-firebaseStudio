import Hero from '@/components/sections/hero';
import Team from '@/components/sections/team';
import SuccessStories from '@/components/sections/success-stories';
import Faq from '@/components/sections/faq';
import Features from '@/components/sections/features';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Team />
      <SuccessStories />
      <Faq />
    </>
  );
}
