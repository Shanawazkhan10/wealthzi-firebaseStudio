import Hero from '@/components/sections/hero';
import Team from '@/components/sections/team';
import SuccessStories from '@/components/sections/success-stories';
import Faq from '@/components/sections/faq';
import Calculators from '@/components/sections/calculators';
import InvestmentRecommendations from '@/components/sections/investment-recommendations';

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <SuccessStories />
      <InvestmentRecommendations />
      <Calculators />
      <Faq />
    </>
  );
}
