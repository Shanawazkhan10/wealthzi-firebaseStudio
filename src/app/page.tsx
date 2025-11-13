import Hero from '@/components/sections/hero';
import Team from '@/components/sections/team';
import SuccessStories from '@/components/sections/success-stories';
import Faq from '@/components/sections/faq';
import Features from '@/components/sections/features';
import { metaOgImageUrl } from '@/lib/application.properties';
import { MetaTagsData } from '@/localeData/MetaTagsData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: MetaTagsData?.home?.title,
  keywords: MetaTagsData?.home?.keywords,
  description: MetaTagsData?.home?.discription,
  twitter: {
    card: 'summary_large_image',
    images: [metaOgImageUrl],
    description: MetaTagsData?.home?.discription,
    title: MetaTagsData?.home?.title,
    site: '@Wealthzi_in',
    creator: '@Wealthzi_in',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: MetaTagsData?.home?.title,
    images: [metaOgImageUrl],
    description: MetaTagsData?.home?.discription,
    url: 'https://www.wealthzi.com/',
    siteName: 'Wealthzi',
  },
  alternates: {
    canonical: 'https://www.wealthzi.com/',
  },
  other: {
    'itemProp-name': 'Wealthzi',
    'itemProp-image': metaOgImageUrl,
  },
};

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
