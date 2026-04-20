
import Footer from '@/components/layout/footer';
import Ux4gWidget from '@/components/ux4g-widget';
import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lime Wealth',
  description: 'A modern, professional wealth management website by LimeWealth.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://img1.digitallocker.gov.in/ux4g/UX4G-CDN-accessibility/css/accesibility-style-v2.1.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Inter:wght@300;400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="sticky top-0 z-50">
          {/* <Marquee /> */}
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Ux4gWidget />
        <Script
          src="https://img1.digitallocker.gov.in/ux4g/UX4G-CDN-accessibility/js/weights-v1.js"
          strategy="afterInteractive"
        />
        <Script id="ux4g-trigger-mapping" strategy="afterInteractive">
          {`
            (() => {
              const bindWidgetTrigger = () => {
                if (typeof window.openMain !== 'function') {
                  return false;
                }

                const triggers = [
                  document.getElementById('uw-widget-custom-trigger2'),
                  document.getElementById('uw-widget-custom-trigger'),
                  document.querySelector('[data-uw-trigger="true"]')
                ].filter(Boolean);

                if (!triggers.length) {
                  return false;
                }

                triggers.forEach((trigger) => {
                  if (trigger.dataset.ux4gBound === 'true') {
                    return;
                  }

                  trigger.dataset.ux4gBound = 'true';
                  trigger.addEventListener('click', () => {
                    window.openMain();
                  });
                });

                return true;
              };

              if (bindWidgetTrigger()) {
                return;
              }

              let attempts = 0;
              const intervalId = window.setInterval(() => {
                attempts += 1;
                if (bindWidgetTrigger() || attempts > 20) {
                  window.clearInterval(intervalId);
                }
              }, 500);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
