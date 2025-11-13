import Head from 'next/head';
import Hero from '@/components/sections/hero';
import Team from '@/components/sections/team';
import SuccessStories from '@/components/sections/success-stories';
import Faq from '@/components/sections/faq';
import Features from '@/components/sections/features';
import { metaOgImageUrl } from '@/lib/application.properties';
import { MetaTagsData } from '@/localeData/MetaTagsData';

export default function Home() {
  return (
    <>
      <Head>
        <title>{MetaTagsData?.home?.title}</title>
        <meta name="keywords" content={MetaTagsData?.home?.keywords}></meta>
        <meta name="description" content={MetaTagsData?.home?.discription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metaOgImageUrl} />
        <meta
          name="twitter:description"
          content={MetaTagsData?.home?.discription}
        />
        <meta name="twitter:title" content={MetaTagsData?.home?.title} />
        <meta name="twitter:site" content="@Wealthzi_in" />
        <meta name="twitter:creator" content="@Wealthzi_in" />
        <meta itemProp="name" content="Wealthzi" />
        <meta itemProp="image" content={metaOgImageUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={MetaTagsData?.home?.title} />
        <meta property="og:image" content={metaOgImageUrl} />
        <meta
          property="og:description"
          content={MetaTagsData?.home?.discription}
        />
        <meta property="og:url" content="https://www.wealthzi.com/" />
        <meta property="og:site_name" content="Wealthzi" />
        <link rel="canonical" href="https://www.wealthzi.com/" />
      </Head>

      <Hero />
      <Features />
      <Team />
      <SuccessStories />
      <Faq />
    </>
  );
}