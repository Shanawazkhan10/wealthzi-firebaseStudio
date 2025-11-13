'use client';

import Image from 'next/image';

// Import all images
import buildPortfolio from "../../../public/svgs/buildPortfolio.svg";
import easyTransaction from "../../../public/svgs/easyTransaction.svg";
import portfolioReviewIcon from "../../../public/svgs/portfolioReviewIcon.svg";
import portfolioTracking from "../../../public/svgs/portfolioTrackingIcon.svg";
import proprietaryZiAlgoIcon from "../../../public/svgs/proprietaryZiAlgo.svg";
import remoteHumanIcon from "../../../public/svgs/remoteHuman.svg";

const features = [
  {
    title: 'Build Portfolio',
    image: buildPortfolio,
  },
  {
    title: 'Easy Transactions',
    image: easyTransaction,
  },
  {
    title: 'Portfolio Tracking',
    image: portfolioTracking,
  },
  {
    title: 'Review & Rebalancing',
    image: portfolioReviewIcon,
  },
  {
    title: 'Proprietary Zi Algorithm',
    image: proprietaryZiAlgoIcon,
  },
  {
    title: 'Remote Human Assistance',
    image: remoteHumanIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        {/* Main Heading Section - No background color */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Create Wealth with Wealthzi
          </h2>
          <p className="mt-4 text-lg md:text-xl text-foreground">
            Wealth creation is made smooth with an easy-to-use interface to
            transact in and research mutual funds, FDs, bonds, portfolio
            management services and AIFs along with automated portfolio review
            and tracking.
          </p>
          <p className="mt-2 text-base md:text-lg text-foreground">
            Join over 10,000 customers who trust wealthzi to take control of
            their financial future.
          </p>
        </div>

        {/* Features Grid Section - With RGB background color */}
        <div className="mt-12" style={{ backgroundColor: 'rgb(2 45 53)' }}>
          <div className="container mx-auto py-16 lg:py-24">
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-background">
                Get <span style={{ color: 'rgb(76 167 113)' }}>FREE</span> financial guidance and invest in best investment options
              </h3>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center flex flex-col items-center gap-4"
                >
                  <div className="mx-auto p-3 rounded-full" style={{ backgroundColor: 'rgb(76 167 113)' }}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10"
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-background">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}