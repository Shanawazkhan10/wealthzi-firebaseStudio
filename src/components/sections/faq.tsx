import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    title: 'How do I import and track my external mutual funds on Wealthzi?',
    subTitle: `We support CAS statements from CAMS. You can auto-generate it using our "Track Mutual Funds" section. You will have to forward it to "cas@wealthzi.com".`,
  },
  {
    title: 'How to start a SIP on Wealthzi?',
    subTitle: (
      <p>
        To initiate a SIP with Wealthzi, you can follow these steps:
        <br />
        1. Sign up on Wealthzi and become investment ready.
        <br />
        2. Follow the Build Portfolio journey on the dashboard.
        <br />
        3. Take Risk assessment test to ascertain the suited risk profile.
        <br />
        4. Choose SIP method and enter your required SIP amount which you
        comfortable with
        <br />
        5. Proceed with the recommended funds <br />
        6. Select your bank and approve the auto-debit mandate and your SIP is
        set up.
      </p>
    ),
  },
  {
    title: 'How do I approve the SIP auto-debit mandate?',
    subTitle:
      'You can approve the auto-debit mandate for your mutual funds SIP by entering your net-banking or debit card information. These mandates are powered by Digio.',
  },
  {
    title: 'What is the minimum SIP amount?',
    subTitle:
      'Minimum SIP amount varies from fund to fund, you can start as low as Rs 100 in some of the funds.',
  },
  {
    title: 'Is Wealthzi Safe?',
    subTitle:
      'Wealthzi is registered with Association of Mutual Funds of India (AMFI) and BSEStAR for mutual fund transactions. Signzy and ICICI Prudention AMC are our KYC partners. We take utmost care in securing the user data and information. We do not share it with any third party.',
  },
  {
    title: 'What is Zi Methodology?',
    subTitle: (
      <p>
        Our proprietary mutual fund scoring methodology reflects extensive
        research in financial science using various data mining methods. <br />
        Each equity, debt & hybrid fund is assessed on their various Return,
        Risk & Risk-Return parameters within its category.
        <br />
        We make sure our recommended funds are: <br />- Most consistent funds{' '}
        <br />- With lower volatility <br />- Manageable beta <br />- Higher
        risk-adjusted return <br />- High Credit Quality
      </p>
    ),
  },
  {
    title: 'What is the framework of building portfolio on Wealthzi?',
    subTitle:
      'Our build portfolio recommendation are based on your risk profile, investment time horizon and asset allocation.',
  },
  {
    title: 'Why risk profile is important?',
    subTitle:
      'Risk profiling is the first and formost step in the process of financial planning and building a suitable investment portfolio. It helps you in taking the right risk as per your requirement and capacity. It helps to identify your psychological reactions to surprises in your investment and how to keep your emotions away from your investing decisions.',
  },
  {
    title: 'What are all assets I can track and invest on Wealthzi App?',
    subTitle:
      'On the Wealthzi app, you can track and invest in a variety of assets, including Mutual Funds, Stocks, Bonds, PMS, AIF and Gold.',
  },

  {
    title: 'How should I choose whether to go for SIP or Lumpsum?',
    subTitle: (
      <p>
        Deciding between SIP and lumpsum investment depends on your investment
        goals, risk appetite, and financial situation. SIPs can help you invest
        regularly over a period of time and benefit from rupee-cost averaging,
        which can reduce the impact of market volatility on your investments.
        Lumpsum investments, on the other hand, can provide an immediate boost
        to your portfolio and may be suitable if you have a lump sum amount
        available or if you believe that the markets are undervalued.
        <br /> It&apos;s free important to consult with a financial advisor or investment
        expert before making any investment decisions to determine the most
        suitable investment approach for your goals and risk tolerance.
        Additionally, the Wealthzi app provides curated investment options and
        Investment experts advice that can help you make informed investment
        decisions based on your personal financial situation and investment
        goals.
      </p>
    ),
  },

  {
    title: 'Why should I invest through Wealthzi?',
    subTitle:
      'Wealthzi helps you build portfolio for your suitable time horizon and recommends funds which are weighted by its proprietary Zi Methodology.',
  },
  {
    title: 'Can I setup SIP, SWP and STP on Wealthzi?',
    subTitle:
      'Absolutely. Wealthzi allows you to set up SIP (Systematic Investment Plan), SWP (Systematic Withdrawal Plan), and STP (Systematic Transfer Plan) to make regular investments, withdrawals, or transfers based on your investment goals and preferences. You can easily configure these options in the app and modify them at any time as per your convenience.',
  },
  {
    title:
      'Can I choose not to invest or exit from the recommended portfolio?',
    subTitle:
      "Yes, you can choose to not invest or exit from the recommended portfolio at any time. It is completely up to your discretion. However, it's important to note that some mutual funds may have exit loads depending upon the scheme.",
  },
  {
    title: 'Can I Top Up or redeem after initial lumpsum investment?',
    subTitle:
      'Wealthzi allows you to Top Up or redeem their investment after the initial lump sum investment. This provides flexibility to investors who may want to adjust their investment allocation or redeem their funds for any reason. You can easily Top Up or redeem their investments through the Wealthzi app. Keep in mind that mutual fund investments are subject to market risks, and past performance does not guarantee future returns.',
  },
  {
    title: 'What is the ideal time period for investment?',
    subTitle:
      'The ideal time period for investment depends on your risk profile, investment goals, and asset allocation. As a general guideline, equity as an asset class requires a minimum holding period of 5 years or more to potentially generate attractive returns. However, there are several other mutual fund categories that may be more suitable for investors with a shorter investment horizon, such as debt-oriented and hybrid-oriented funds. Our investment experts can help assess your risk profile and investment goals and recommend a portfolio that aligns with their investment time horizon.',
  },
  {
    title: 'What is the minimum investment amount to start?',
    subTitle:
      "At Wealthzi, we understand the importance of making investing accessible to all. That's why we offer you the flexibility to start building their investment portfolio with as little as Rs 100. However, we recommend a minimum investment of Rs 5,000 to ensure that the portfolio is robust and well-diversified across various asset classes. This amount allows you to benefit from the power of compounding and potentially earn attractive returns over the long term. Our investment experts can provide guidance on the optimal investment amount based on an investor's risk profile and investment goals.",
  },
  {
    title: 'Does Wealthzi charges fees for the services?',
    subTitle:
      "Wealthzi is a mutual fund distribution platform that allows investors to invest in mutual funds online. As a distributor, Wealthzi does not charge any additional fees for its services. However, there may be certain charges associated with the mutual funds such as expense ratios, exit loads, and other regulatory fees. Wealthzi's investment experts can provide clarity on the fees associated with mutual fund investments and help you make informed decisions based on their investment goals and risk appetite.",
  },
  {
    title: 'Are returns from investment on Wealthzi app guaranteed?',
    subTitle:
      'Market returns are subject to market risk and are not guaranteed, While wealthzi Investment experts strive to provide valuable guidance and support to investors. However, by investing in a diversified portfolio of mutual funds with a long-term investment horizon, you can potentially earn attractive returns while managing their risk effectively.',
  },
  {
    title:
      'Why Wealthzi investments experts required, when one invests only for long term?',
    subTitle:
      "While investing for the long term is important, it's essential to have the right guidance and support to navigate through the ups and downs of the market. Wealthzi's investment experts are equipped with the knowledge and experience to help you create and manage a well-diversified portfolio that is aligned with their long-term financial goals. They can provide hand-holding and support through every stage of your life, including the changing market conditions, to ensure that their portfolio stays on track. By having an expert partner like Wealthzi, you can stay focused on their long-term investment objectives and achieve your financial goals with confidence.",
  },
  {
    title: 'How can I start with investing via Wealthzi app?',
    subTitle:
      'After downloading the app, you have to provide us with your PAN, Email, Mobile and KYC information to make you investment ready.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Find answers to common questions about our services and investments.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-bold text-lg md:text-xl hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground">
                {item.subTitle}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
