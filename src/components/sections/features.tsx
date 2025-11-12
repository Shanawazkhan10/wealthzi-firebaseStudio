'use client';

import {
  Briefcase,
  CandlestickChart,
  ClipboardList,
  Fingerprint,
  RefreshCw,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'Build Portfolio',
  },
  {
    icon: <CandlestickChart className="w-8 h-8 text-primary" />,
    title: 'Easy Transactions',
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: 'Portfolio Tracking',
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    title: 'Review & Rebalancing',
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-primary" />,
    title: 'Proprietary Zi Algorithm',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Remote Human Assistance',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Create Wealth with Wealthzi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wealth creation is made smooth with an easy-to-use interface to
            transact in and research mutual funds, FDs, bonds, portfolio
            management services and AIFs along with automated portfolio review
            and tracking.
          </p>
          <p className="mt-2 text-md text-muted-foreground">
            Join over 10,000 customers who trust wealthzi to take control of
            their financial future.
          </p>
        </div>

        <div className="mt-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Get FREE financial guidance and invest in best investment options
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto bg-green-100/50 p-3 rounded-full">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
