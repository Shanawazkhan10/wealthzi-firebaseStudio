import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const footerLinks = [
  {
    title: 'Services',
    links: ['Explore Funds', 'Financial Planning', 'Portfolio Management', 'Retirement'],
  },
  {
    title: 'About Us',
    links: ['Our Team', 'Careers', 'Press', 'Contact Us'],
  },
  {
    title: 'Learn',
    links: ['Blog', 'Investment Guides', 'Webinars', 'Glossary'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Disclosures'],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="text-primary" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Take control of your financial future with expert guidance.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline font-semibold tracking-wider text-sm">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wealthzi Digital. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-xs text-muted-foreground space-y-2">
            <h4 className="font-semibold text-foreground">Regulatory Disclosures</h4>
            <p>
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Wealthzi is a SEBI registered Investment Advisor (INA000017429).
            </p>
            <p>
            The contents herein above shall not be considered as an invitation or persuasion to trade or invest. I-Sec and affiliates accept no liabilities for any loss or damage of any kind arising out of any actions taken in reliance thereon. Please note Brokerage would not exceed the SEBI prescribed limit.
            </p>
        </div>
      </div>
    </footer>
  );
}
