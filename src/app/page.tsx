import Hero from '@/components/sections/hero';
import Team from '@/components/sections/team';
import SuccessStories from '@/components/sections/success-stories';
import Faq from '@/components/sections/faq';
import Features from '@/components/sections/features';
import { metaOgImageUrl } from '@/lib/application.properties';
import { MetaTagsData } from '@/localeData/MetaTagsData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lime Wealth',
  keywords: MetaTagsData?.home?.keywords,
  description: MetaTagsData?.home?.discription,
  twitter: {
    card: 'summary_large_image',
    images: [metaOgImageUrl],
    description: MetaTagsData?.home?.discription,
    title: 'Lime Wealth',
    site: '@LimeWealth_in',
    creator: '@LimeWealth_in',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Lime Wealth',
    images: [metaOgImageUrl],
    description: MetaTagsData?.home?.discription,
    url: 'https://www.LimeWealth.com/',
    siteName: 'LimeWealth',
  },
  alternates: {
    canonical: 'https://www.LimeWealth.com/',
  },
  other: {
    'itemProp-name': 'LimeWealth',
    'itemProp-image': metaOgImageUrl,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Team />
      {/* <SuccessStories /> */}
      <Faq />
    </>
  );
}
