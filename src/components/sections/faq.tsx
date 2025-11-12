import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What is Wealthzi and how can it help me?',
    answer: 'Wealthzi is a comprehensive wealth management platform that provides expert financial advice, personalized investment strategies, and a suite of tools to help you achieve your financial goals, whether it\'s planning for retirement, your children\'s education, or growing your wealth.',
  },
  {
    question: 'Is my investment safe with Wealthzi?',
    answer: 'Yes, your investments are secure. Wealthzi is a SEBI registered Investment Advisor. We use bank-grade security and partner with trusted financial institutions. All investments are held in your name with the respective asset management companies.',
  },
  {
    question: 'What is the minimum investment amount?',
    answer: 'The minimum investment amount varies depending on the product. For mutual funds, you can start with a Systematic Investment Plan (SIP) for as low as ₹500. For other services like Portfolio Management Services (PMS), the minimums are higher as per regulatory requirements.',
  },
  {
    question: 'How does the Proprietary Zi Algorithm work?',
    answer: 'Our Proprietary Zi Algorithm is a sophisticated tool that analyzes thousands of data points, including market trends, fund performance, and economic indicators, to recommend the most suitable investment portfolio aligned with your risk tolerance and financial goals.',
  },
  {
    question: 'Can I get help from a human advisor?',
    answer: 'Absolutely. While our platform offers powerful automated tools, we believe in the power of human expertise. You have access to our team of experienced wealth advisors for remote assistance and personalized guidance whenever you need it.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our services and investments.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
