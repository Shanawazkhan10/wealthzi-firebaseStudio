
import { metaOgImageUrl } from '@/lib/application.properties';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wealthzi: Privacy Policy',
  keywords:
    'mutual funds, invest in mutual funds, buy mutual funds, mutual fund investments, best mutual funds',
  description:
    'Wealthzi is a wealth management app which enables you to track and review your existing mutual funds portfolio. Wealthzi helps you invest into mutual funds suggested by its proprietary Zi methodology. Get started your investment journey with Wealthzi and build wealth with confidence.',
  openGraph: {
    title: 'Wealthzi: Privacy Policy',
    description:
      'Wealthzi is a wealth management app which enables you to track and review your existing mutual funds portfolio. Wealthzi helps you invest into mutual funds suggested by its proprietary Zi methodology. Get started your investment journey with Wealthzi and build wealth with confidence.',
    url: 'https://www.wealthzi.com/privacy-policy',
    siteName: 'Wealthzi',
    images: [metaOgImageUrl],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wealthzi: Privacy Policy',
    description:
      'Wealthzi is a wealth management app which enables you to track and review your existing mutual funds portfolio. Wealthzi helps you invest into mutual funds suggested by its proprietary Zi methodology. Get started your investment journey with Wealthzi and build wealth with confidence.',
    site: '@Wealthzi_in',
    creator: '@Wealthzi_in',
    images: [metaOgImageUrl],
  },
  alternates: {
    canonical: 'https://www.wealthzi.com/privacy-policy',
  },
   other: {
    'itemProp-name': 'Wealthzi: Privacy Policy',
    'itemProp-image': metaOgImageUrl,
  },
};

export default function PrivacyPolicy() {
  const linkClassName = "text-[#007FFF] underline";
  const textPadding = "pt-3";
  const mailToWealthzi = "mailto:support@wealthzi.com";

  return (
    <section className="py-16 lg:py-24 bg-muted">
       <div className="container mx-auto px-6 md:px-0">
         <div className="prose prose-sm md:prose-base max-w-none text-foreground bg-background p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold pb-6">
            Wealthzi Privacy Policy
          </h1>
       
          <p className={textPadding}>
            <strong>
              As an independent digital wealth management company, We are
              committed to keeping your Data secure, your personal information
              private, and being transparent about our practices for providing
              you Our Services.
            </strong>
          </p>
          <p className={textPadding}>
            Lime Internet Private Limited operates website{" "}
            <a href="https://www.wealthzi.com/" className={linkClassName}>
              https://www.wealthzi.com
            </a>{" "}
            and mobile applications under the brand name Wealthzi (hereinafter
            referred to as &ldquo;Wealthzi&rdquo;). Wealthzi provides Wealth
            Management &amp; Financial Consulting Services that enable you to
            organise your financial information, execute transactions, and track
            your portfolios.
          </p>
          <p className={textPadding}>
            Wealthzi is committed to operating its website and mobile
            applications with the highest ethical standards and appropriate
            internal controls. This Privacy Policy explains how Wealthzi
            collects, uses &amp; protects your information when you access
            Wealthzi website(s) &amp; mobile apps (collectively referred to as
            &ldquo;Services&rdquo; or &ldquo;Application&rdquo;). Since we are
            dealing with your Data, We take your privacy extremely seriously and
            encourage you to read this Privacy Policy.
          </p>
          <p className={textPadding}>
            We urge you to only use our website/application and Our Services if
            you agree to all the terms of the Privacy Policy. If you are not
            comfortable with any of the terms or policies of Our Privacy Policy,
            you may choose to discontinue usage of Wealthzi Services. You should
            read our Privacy Policy in detail before availing our Services and
            ensure that you agree to the same in toto.
          </p>
          <p className={textPadding}>
            In compliance to applicable laws, if you wish to update or delete
            your Data that Wealthzi has collected, You can also email us at{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            .
          </p>
          <h4 className='font-bold mt-4'>Collection of Data from Majors only:</h4>
          <p className={textPadding}>
            We do not collect or solicit Data from anyone under the age of 18
            knowingly. In case you are not a major (as per your jurisdiction) or
            if you are under 18 years of age, please do not attempt to or
            register for Our Services or send any Data about yourself to
            Wealthzi in any manner or for any purpose whatsoever. If you believe
            that a person under 18 may have provided us with Data, please
            contact us at&nbsp;{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            .
          </p>
          <p className={textPadding}>
            At our end, If we learn that we have collected Data from a person
            under age 18 years, we will delete that information as quickly as
            possible.
          </p>
         
          <h3 className='font-bold mt-6'>
            A. What Information does Wealthzi collect?
          </h3>
          <p className={textPadding}>
            We receive and store only that information you knowingly provide to
            us or with your explicit consent. We take consent from you at every
            point of collecting Data and take all reasonable steps to inform you
            of the Data that We are collecting.
          </p>
          <p className={textPadding}>
            If you want, You can always delete this information by writing to us
            at&nbsp;{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            .
          </p>
          <p className={textPadding}>
            The consent you give to us is free, informed, specific, clear and is
            capable of being withdrawn by the You as you may deem fit.
          </p>
          <p className={textPadding}>
            All of the below Information collected shall be referred to as
            &ldquo;Data&rdquo; hereinafter. Below is the list of information we
            collect.
          </p>
          
          <h4 className='font-semibold mt-4'>1. New Account :</h4>
          <p>
            When creating a new account in order to use Our Services, we request the
            following information from your end:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
                Name, PAN ID, address proof, Aadhaar id, email, mobile number,
                date of birth, address, father&apos;s name,
                mother&apos;s name, nominees, tax residency, nationality,
                gender and marital status.
            </li>
            <li>
                Bank account number, bank name branch and IFSC code, cancelled
                check copy
            </li>
            <li>
                Customers may also provide additional information voluntarily
                like their investment details, mutual fund and stock portfolio ,
                family details, insurance (term insurance, life insurance, and
                health insurance information), income and expenditure, credit
                card expenditure and balances (without security details) so that
                they can make use of the platform for better managing their
                financial life.
            </li>
            <li>
                Customer may share investment statements from CAMS, NSDL, Karvy
                and CDSL for us to populate the client&apos;s portfolio
                tracker. This information is only for client&apos;s tracking
                purposes.
            </li>
            <li>
                Customer may manually enter investment information in
                portfolio tracker;
            </li>
          </ul>
         
          <h4 className='font-semibold mt-4'>2. KYC details:</h4>
          <p>
            We will be collecting your KYC (Know your Customer) in order to comply with
            regulatory and compliance requirements, upon your explicit
            consent, from regulated Central KYC Registry.
          </p>
          
          <h4 className='font-semibold mt-4'>3. Investments information:</h4>
          <p>
            You provide us with the following information in order to help
            us share and present options with you to update your
            investment information in a secure manner:
          </p>
          <p className={textPadding}>
            <strong>
              (i) Upload your investment statements in PDF or Excel
              versions:&nbsp;
            </strong>
            These are investment statements that you get from depositories
            or brokers or Registrar &amp; Transfer Agents such as Computer
            Age Management Services, Karvy Fintech Private Limited, National
            Securities Depositories Limited, Central Depositories Services
            Limited, etc.
          </p>
          <p className={textPadding}>
            <strong>(ii) Enter the information manually</strong>: You provide
            investment details like scheme name, investment type, investment
            date and investment value by manually entering the Data.
          </p>
          <p className={textPadding}>
            <strong>(iii) Connect your Gmail account:&nbsp;</strong>You can
            choose to provide explicit consent to connect your Gmail account
            with Wealthzi account (using Google&rsquo;s OAuth authentication
            method), so that the application / website can &ldquo;read
            only&rdquo; the attachment from a small white listed set of senders
            specifically comprising :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
                <a
                  href="mailto:donotreply@camsonline.com"
                  className={linkClassName}
                >
                  donotreply@camsonline.com
                </a>
            </li>
            <li>
                <a href="mailto:samfd@karvy.com" className={linkClassName}>
                 samfd@karvy.com
                </a>
            </li>
            <li>
                <a href="mailto:nsdl-cas@nsdl.co.in" className={linkClassName}>
                  nsdl-cas@nsdl.co.in
                </a>
            </li>
            <li>
                <a
                  href="mailto:eCAS@cdslstatement.com"
                  className={linkClassName}
                >
                  eCAS@cdslstatement.com
                </a>
            </li>
          </ul>
          <p className={textPadding}>
            In case any of the above email ids are changed by the Sender then we
            will notify you and update this information Privacy Policy.
          </p>
          <p className={textPadding}>
            The benefit of opting to connect your Gmail account as mentioned
            above is that your investment information gets updated
            automatically&nbsp;every month without any effort from your end.
            Once we have the requisite updated information, the application can
            give you deep and accurate analytics on your investments.
          </p>
          <p className={textPadding}>
            If you wish, You can choose to de-link your Gmail account with the
            application at any time and/ or you can also delete your information
            by writing to&nbsp;{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            .
          </p>
          <p className={textPadding}>
            Alternatively, you can also de-link your email by visiting Google
            Mail&rsquo;s permission settings.
          </p>
          <p className={textPadding}>
            The act of connecting your Gmail accounts with Wealthzi accounts
            comes under the &ldquo;Restricted scopes&rdquo; as mentioned in the
            Google API services user Data policy.
          </p>
          <p className={textPadding}>
            You accept, undertake and understand that whatever information you
            provide to us, is true, original, authentic and reliable and is in
            fact, your information. Such information must not violate
            anybody&rsquo;s rights or privacy. You must have the right and
            authority to share such information with us for usage of such
            Service.
          </p>
          <p className={textPadding}>
            <strong>Credit score &amp; Liabilities information</strong> : You
            provide Wealthzi with explicit consent to collect this information
            from third party service providers that are expressly authorised by
            you to distribute such information (for example, Experian or CRIF
            High Mark which is a credit information company registered under the
            Credit Information Companies (Regulation) Act, 2005).
          </p>
          <p className={textPadding}>
            Please note that the attachments from these senders have your
            investment related details such as Transaction Dates, Folio numbers,
            Subscription and Redemption Amounts, Dividends, etc. We organise
            this information in your account to provide deep analytics.
          </p>
          <p className={textPadding}>
            We never use or transfer the Data collected on our application for
            serving ads, including retargeting, personalized, or interest-based
            advertising. Please note we will never rent or sell your information
            or Data to any third Party entity.
          </p>
          <p className={textPadding}>
            Email parsing: The company may with the consent of the user parse
            Gmail or any other email account wherever it&apos;s allowed to do for
            the purpose of automated reading of financial and investment
            statements. The information thus processed will be populated in the
            portfolio and financial dashboard of the user. This will be done
            after securing the consent of the user.
          </p>
          <p className={textPadding}>
            Credit reports: The user may give consent for accessing their credit
            report from credit bureaus like but not limited to them CRIF High
            Mark Credit, Experian or CIBIL. The credit report thus accessed with
            the consent of the user will be provided to the user, and also
            analysed to help the user better manage his liabilities.
          </p>
          
          <h3 className='font-bold mt-6'>B. Why does Wealthzi ask for this information?</h3>
          <p className={textPadding}>
            Wealthzi provides online wealth management services to you. We only
            receive information you knowingly provide to Wealthzi or with your
            explicit consent through third Party entities.
          </p>
          <p className={textPadding}>
            The information you provide to us enables you to organise and
            aggregate your financial information in one place on Wealthzi
            Services which enables Wealthzi to provide you analytics on your
            investments &amp; liabilities, all in one place.
          </p>
          <p className={textPadding}>
            The information also enables Wealthzi Application to help you assess
            your risk profile from time to time, create your investment plans,
            make decisions on investments, execute purchase and sale of
            investment products and also enables you to manage your taxation.
          </p>
          
          <h3 className='font-bold mt-6'>C. How does Wealthzi store your Data?</h3>
          <p className={textPadding}>
            Wealthzi implements appropriate security safeguards including&mdash;
          </p>
          <ol className="list-lower-alpha pl-6 space-y-2 mt-2">
            <li>
              use of methods such as de-identification and encryption;
            </li>
            <li>
              steps necessary to protect the integrity of Data; and
            </li>
            <li>
              steps necessary to prevent misuse, unauthorised access
              to, modification, disclosure or destruction of Data.
            </li>
          </ol>
          <p className={textPadding}>
            Wealthzi stores all collected Data in secured cloud based servers
            that are hosted in India.
          </p>
          
          <h3 className='font-bold mt-6'>D. How does Wealthzi process your Data?</h3>
          <p className={textPadding}>
            In order to provide you with optimised services and results,
            Wealthzi uses technologies such as Deep data and Machine learning
            based algorithm to process Your Data and provide you with optimum
            results.
          </p>
         
          <h3 className='font-bold mt-6'>E. How Does Wealthzi Secure Your Data?</h3>
          <p className={textPadding}>
            Owing to your understanding of your Data&rsquo;s importance and
            sensitivity, Wealthzi uses 128 Bit data encryption along with a
            secured 3 tier password protection.
          </p>
         
          <h3 className='font-bold mt-6'>F. Does Wealthzi share your Data with 3rd Parties?</h3>
          <p className={textPadding}>
            While we do not share Data to any third Party entities, we might
            share them to enable us to provide you better Services in the
            future.
          </p>
          <p className={textPadding}>
            For any information that is shared to any third party, we take due
            and express consent from our Users. Kindly only give such consent
            when you are sure you want your information to be shared with 3rd
            Party entities.
          </p>
         
          <h3 className='font-bold mt-6'>G. Your Rights</h3>
          <p className={textPadding}>
            For your information, Individuals whose Data is collected, processed
            or stored by entities have statutory rights in relation to their
            Data and its collection, handling, processing, storage etc. You may
            have the right to
            <em>request access to Information</em>, as well as to
            <em>seek to update, delete or correct this Information</em>, subject
            to any exemptions provided by law.
          </p>
          <p className={textPadding}>
            You can exercise your rights using the settings and tools provided
            in your Services account. If for some reason, you are unable to use
            the settings and tools, contact our{" "}
            <strong>Customer Support (on details provided below)&nbsp;</strong>
            for additional access and assistance. Or if you wish to exercise
            these rights in an emergency situation or wish for us to take
            immediate action, we request you to kindly contact us immediately{" "}
            <strong>Customer Support&nbsp;</strong> on{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            .
          </p>
          <p className={textPadding}>
            Wealthzi may use automated decision making in processing your Data
            for some Services and You can request a manual review of the
            accuracy of an automated decision at any time.
          </p>
          <p className={textPadding}>
            Wealthzi relies on its legal &amp; legitimate interests, described
            above, to process your Data. In addition to the above, We may also
            process other information that constitutes your Data for direct
            marketing purposes or other purposes and you have a right to object
            to Wealthzi&rsquo;s use of your Data for this purpose at any time,
            if you so deem fit.
          </p>
          <p className={textPadding}>
            To emphasize for your understanding, you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
                <em>The right to be informed</em>: This Right essentially means
                that You must be informed clearly on what Information/Data we
                are processing, why, and who else the Data may be passed to;
            </li>
            <li>
                <em>The right of confirmation &amp; access:</em> This
                essentially gives you the right to see what Data is held about
                you by Wealthzi and, whether or not it is being processed, how
                is it being processed, etc.
            </li>
            <li>
                <em>The right to rectification</em>: This is the right you have
                to have your Data corrected or amended if you consider and can
                establish, what is held to be incorrect in some way.
            </li>
            <li>
                <em>The right to erasure:</em> Under certain circumstances you
                can ask Wealthzi to delete your Data. This right is also known
                as the &lsquo;the Right to be Forgotten&rsquo; and would apply
                if the Data is no longer required for the purposes it was
                collected for, or your consent for the processing of that Data
                has been withdrawn expressly, or if the Data has been unlawfully
                processed and you can establish the same.
            </li>
            <li>
                <em>The right to restrict processing: This&nbsp;</em>gives you
                the right to ask Wealthzi to temporarily halt the processing of
                Data, such as in the case where a dispute or if a legal case has
                to be concluded, or the Data contains certain error and is being
                corrected.
            </li>
            <li>
                <em>The right to Data portability</em>: You have the right to
                ask for any Data supplied directly to Wealthzi, to be provided
                in a structured, commonly used, and machine-readable format.
            </li>

            <li>
                <em>The right to object: Under this,&nbsp;</em>You have the
                right to object to further processing of your Data if you are of
                the opinion and can establish that such Processing is
                inconsistent with the primary purpose for which such Data was
                collected, including profiling, automation, and direct
                marketing.
            </li>

            <li>
                <em>
                  Rights in relation to automated decision making and profiling
                </em>
                : In case you do not agree, or have an issue, You have the right
                to not be subject to a decision based solely on automated
                processing.
            </li>
          </ul>

          <h3 className='font-bold mt-6'>H. How long does Wealthzi store and retain your Data?</h3>
          <p className={textPadding}>
            Wealthzi shall retain your Data as long as may be reasonably
            necessary to satisfy the purpose for which your Data is being
            collected and thereafter stored and processed.
          </p>
          <p className={textPadding}>
            Wealthzi otherwise stores Data for the entire customer life
            cycle and an additional period of three (3) months. In the event
            that a customer exits our application/website and terminates
            their account or stops using Our Service and intimates us of the
            same, we shall proceed to deleting their Data within 3 months of
            such intimation.
          </p>
          <p className={textPadding}>
            Wealthzi shall also undertake periodic review in order to
            determine whether it is necessary to retain the Data in its
            possession any further or determine the correct time to dispose
            it off.
          </p>

          <h3 className='font-bold mt-6'>I. How does Wealthzi do an impact assessment?</h3>
          <p className={textPadding}>
            At Wealthzi, data protection impact assessment contains, at a
            minimum&mdash;
          </p>
          <p className={textPadding}>
            (a) detailed description of the proposed processing operation,
            the purpose of processing and the nature of Data being
            processed;
          </p>

          <p className={textPadding}>
            (b) assessment of the potential harm that may be caused to you
            whose Data is proposed to be processed; and
          </p>
          <p className={textPadding}>
            (c) measures for managing, minimising, mitigating or removing
            such risk of harm.
          </p>
          <p className={textPadding}>
            Wealthzi shall notify in case of Data breach relating to any
            Data processed by Wealthzi where such breach is likely to cause
            harm to You.
          </p>

          <h3 className='font-bold mt-6'>J. Cookies &amp; Third Party Analytics Services</h3>
          <p className={textPadding}>
            We do not collect any information about your online activity
            when you sign-out and/or leave our website/application.
          </p>
          <p className={textPadding}>
            We use Local Storage Objects (LSOs) to store content,
            information, and your preferences to keep you signed-in. We
            identify user&rsquo;s signed-in state with a token and a userid.
            The LSO token is expired when user logs out of our website or
            mobile application. We auto-expire LSO tokens after an hour on
            our website and every 7 days on our mobile applications.
          </p>
          <p className={textPadding}>
            We also use <em>third party analytics</em> services in order to
            better understand user engagement with the Services. When a user
            browses or uses the Services, these third party analytics
            services may collect the user&rsquo;s IP address, browser type,
            and approximate location (based on the IP address). They may
            also use web logs or web beacons and may set and access cookies
            on your computer or other device.
          </p>
          <p className={textPadding}>
            These third party analytics services may deploy cookies on your
            browser. Your browser may offer you a &ldquo;
            <em>Do Not Track</em>
            &rdquo; option, which allows you to signal to operators of
            websites and web applications and services that you do not wish
            such operators to track certain of your online activities over
            time and across different websites. Do Not Track signals are set
            on a browser-by-browser basis, so you must set them on every
            browser you use if you do not wish to be tracked.
          </p>
          <p className={textPadding}>
            In order to provide a superior user experience, we provide the
            third party analytics service providers with a user&rsquo;s
            demographic information at Wealthzi along with user&rsquo;s
            movements on Wealthzi website and mobile applications.
          </p>
          <p className={textPadding}>
            We do not share and will never share any confidential Data such
            as user&rsquo;s investment details, contents of user&rsquo;s
            gmail, bank details, transaction details, income or any other
            sensitive details with these third party analytics service
            providers or any other Party except for the API based software
            service providers who are bound by the confidentiality and data
            privacy agreements.
          </p>

          <h3 className='font-bold mt-6'>K. Your Data with respect to connecting your Gmail account with
            Wealthzi Application : Compliance w.r.t. Google OAuth
            API Scopes (Restricted scopes)</h3>
          
          <p className={textPadding}>
            Wealthzi limits use of Data to provide or improve your user
            experience. With your updated information, the application can give
            you deep and accurate analytics on your investments.
          </p>
          <p className={textPadding}>
            We will never rent or sell your information or Data to anyone.
            Wealthzi ensures that it is always in compliance with the restricted
            scope defined under Google OAuth API policies.
          </p>
          <p className={textPadding}>
            Alternatively, you can remove access to Wealthzi from Google
            Mail&rsquo;s permission settings located at:
            <a
              href="https://myaccount.google.com/permissions"
              className={linkClassName}
            >
              myaccount.google.com/permissions
            </a>
            .
          </p>
          <p className={textPadding}>
            We don&apos;t use or transfer the Data for serving ads, including
            retargeting, personalized, or interest-based advertising and we do
            not allow and we prohibit access to any of the third party analytics
            providers.
          </p>
          <p className={textPadding}>We don&apos;t allow humans to read the Data, unless :</p>
          <ul className="list-lower-alpha pl-6 space-y-2 mt-2">
              <li>
                  We first obtain your affirmative agreement for specific
                  messages;
              </li>
              <li>
                  It is necessary for security purposes (such as
                  investigating a bug or abuse);
              </li>
              <li>
                  It is necessary to comply with applicable law; or
              </li>
              <li>
                  Our use is limited to internal operations and the Data
                  (including derivations) have been aggregated and anonymized.
              </li>
            </ul>
          <p className={textPadding}>
            These prohibitions of user of Data apply to the raw Data obtained
            from Restricted Scopes and Data aggregated, anonymized, or derived
            from them. Our employees, agents, contractors, and successors comply
            with the &ldquo;Google API Services: User Data Policy&rdquo;.
          </p>
          <p className={textPadding}>
            We will also be undergoing annual security assessment from a
            Google-designated third party and keep the same updated from time to
            time or as per instructions from Google and will publish the
            &ldquo;letter of assessment&rdquo; on Wealthzi website and mobile
            applications. &nbsp;
          </p>
          
          <h3 className='font-bold mt-6'>L. Changes to Privacy Policy</h3>
          <p className={textPadding}>
            Wealthzi reserves the right to change this policy from time to time.
            Any changes shall be effective immediately upon the posting of the
            revised Privacy Policy.
          </p>
          <p className={textPadding}>
            If we make any changes to this Policy, we will post a notice for
            thirty (30) days at the top of this page notifying users when this
            Privacy Policy is updated or modified. We will also attempt to
            communicate the changes to the privacy policy via email to you on
            your registered email address.
          </p>
          <p className={textPadding}>
            If you are not comfortable with any of the changes to Privacy Policy
            you may choose to discontinue usage of Wealthzi website or mobile
            applications. You can also email us at{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>{" "}
            to update or delete your Data that Wealthzi has collected. &nbsp;By
            continuing use of Our Services after a Policy change, you accept and
            agree to all the terms of our Privacy Policy and the changed terms
            thereafter.
          </p>
          
          <h3 className='font-bold mt-6'>M. Privacy Questions and Access</h3>
          <p className={textPadding}>
            If you have questions, concerns, or suggestions regarding our
            Privacy Policy, we can be reached at{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
          </p>
          
          <h3 className='font-bold mt-6'>N. Security and Responsible Disclosure</h3>
          <p className={textPadding}>
            We blend security at multiple steps within our products with state
            of the art technology to ensure our systems maintain strong security
            measures. The overall Data and privacy security design allows us
            defend our systems ranging from low hanging issue up to
            sophisticated attacks.
          </p>
          <p className={textPadding}>
            If you are a security enthusiast or a researcher and you have found
            a possible security vulnerability on Wealthzi, we encourage you to
            report the issue to us responsibly.
          </p>
          <p className={textPadding}>
            You could submit a bug report to us or communicate with our Data
            Protection Officer Mr. Harshit Singh at&nbsp;{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            with detailed steps required to reproduce the vulnerability.
          </p>
          <p className={textPadding}>
            We shall put best of our efforts to investigate and fix the
            legitimate issues in a reasonable time frame, meanwhile, requesting
            you not to publicly disclose it. Additionally, if you have
            suggestions on how we could improve our security systems to make it
            more robust and safe for all users, you can share those with us
            at&nbsp;{" "}
            <a href={mailToWealthzi} className={linkClassName}>
              support@wealthzi.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
