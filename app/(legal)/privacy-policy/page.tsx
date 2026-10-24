"use client";
import Logo from "@/components/header/logo";
import Link from "next/link";

const sections = [
  { id: "information-we-collect", title: "1. What Information Do We Collect?" },
  { id: "how-we-process", title: "2. How Do We Process Your Information?" },
  {
    id: "sharing-information",
    title: "3. When and With Whom Do We Share Your Personal Information?",
  },
  { id: "social-logins", title: "4. How Do We Handle Your Social Logins?" },
  { id: "data-retention", title: "5. How Long Do We Keep Your Information?" },
  { id: "data-security", title: "6. How Do We Keep Your Information Safe?" },
  { id: "privacy-rights", title: "7. What Are Your Privacy Rights?" },
  { id: "do-not-track", title: "8. Controls for Do-Not-Track Features" },
  {
    id: "us-residents",
    title: "9. Do United States Residents Have Specific Privacy Rights?",
  },
  { id: "policy-updates", title: "10. Do We Make Updates to This Notice?" },
  { id: "contact-us", title: "11. How Can You Contact Us About This Notice?" },
  {
    id: "review-update-delete",
    title: "12. How Can You Review, Update, or Delete Your Data?",
  },
];

const privacyCategories = [
  {
    category: "A. Identifiers",
    examples:
      "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.",
  },
  {
    category: "B. Personal information under California Customer Records law",
    examples:
      "Name, contact information, education, employment, employment history, and financial information.",
  },
  {
    category: "C. Protected classification characteristics",
    examples:
      "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data.",
  },
  {
    category: "D. Commercial information",
    examples:
      "Transaction information, purchase history, financial details, and payment information.",
  },
  {
    category: "E. Biometric information",
    examples: "Fingerprints and voiceprints.",
  },
  {
    category: "F. Internet or network activity",
    examples:
      "Browsing history, search history, online behavior, interest data, and interactions with websites, applications, systems, and advertisements.",
  },
  {
    category: "G. Geolocation data",
    examples: "Device location.",
  },
  {
    category: "H. Audio, electronic, sensory, or similar information",
    examples:
      "Images, audio, video, or call recordings created in connection with business activities.",
  },
  {
    category: "I. Professional or employment-related information",
    examples:
      "Business contact details, job title, work history, and professional qualifications.",
  },
  {
    category: "J. Education information",
    examples: "Student records and directory information.",
  },
  {
    category: "K. Inferences drawn from personal information",
    examples:
      "Inferences drawn from collected information to create a profile or summary of an individual's preferences and characteristics.",
  },
  {
    category: "L. Sensitive personal information",
    examples: "Sensitive personal information as defined by applicable law.",
  },
];

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-slate-200 pb-4 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
    >
      {children}
    </h2>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-7 text-lg font-semibold text-slate-900">{children}</h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-7 text-slate-600">{children}</p>
  );
}

function PolicyList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-6 text-[15px] leading-7 text-slate-600 marker:text-slate-400">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-[15px] leading-7 text-slate-600">{children}</p>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
          </Link>

          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Back to home <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      {/* Page heading */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Legal & Privacy
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Your privacy matters to us. Learn how NudgeFollowup collects,
              uses, stores, and protects your personal information when you use
              our services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
                Last updated October 24, 2026
              </span>

              <span className="hidden h-4 w-px bg-slate-300 sm:block" />

              <span>12 sections</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        {/* Table of contents */}
        <aside className="print:hidden">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              On this page
            </p>

            <nav aria-label="Privacy policy table of contents" className="mt-5">
              <ol className="space-y-1 border-l border-slate-200">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group -ml-px block border-l-2 border-transparent px-4 py-2 text-[13px] leading-5 text-slate-500 transition hover:border-slate-900 hover:text-slate-900"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
                </svg>
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-900">
                Have a privacy question?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Contact us if you need help understanding this policy or
                exercising your privacy rights.
              </p>

              <a
                href="mailto:sahadatsk20023@gmail.com"
                className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                Contact support
              </a>
            </div>
          </div>
        </aside>

        {/* Policy content */}
        <article className="min-w-0 max-w-3xl">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Introduction
            </h2>

            <Paragraph>
              This Privacy Notice for NudgeFollowup (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) describes how and why we might
              access, collect, store, use, and/or share (&quot;process&quot;)
              your personal information when you use our services
              (&quot;Services&quot;), including when you:
            </Paragraph>

            <PolicyList
              items={[
                <>
                  Visit our website at{" "}
                  <a
                    href="https://nudgefollowup.up.railway.app"
                    className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                  >
                    nudgefollowup.up.railway.app
                  </a>{" "}
                  or any website of ours that links to this Privacy Notice.
                </>,
                <>
                  Engage with us in other related ways, including marketing
                  activities or events.
                </>,
              ]}
            />

            <Paragraph>
              Questions or concerns? Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for
              making decisions about how your personal information is processed.
              If you do not agree with our policies and practices, please do not
              use our Services.
            </Paragraph>

            <Paragraph>
              If you still have any questions or concerns, please contact us at{" "}
              <a
                href="mailto:sahadatsk20023@gmail.com"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                sahadatsk20023@gmail.com
              </a>
              .
            </Paragraph>
          </div>

          {/* Summary */}
          <section className="mb-14 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Summary of Key Points
            </h2>

            <Paragraph>
              This summary provides key points from our Privacy Notice. You can
              find more details about each topic in the corresponding section
              below.
            </Paragraph>

            <div className="mt-7 space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900">
                  What personal information do we process?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  When you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us,
                  the choices you make, and the features you use.
                </p>
                <a
                  href="#information-we-collect"
                  className="mt-2 inline-block text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  Learn more →
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Do we process sensitive personal information?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We do not process sensitive personal information as described
                  in this notice.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Do we collect information from third parties?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We do not independently collect personal information from
                  third parties, except for profile information received when
                  you choose to authenticate using a third-party provider.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  How do we process your information?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, maintain
                  security, and comply with applicable laws.
                </p>
                <a
                  href="#how-we-process"
                  className="mt-2 inline-block text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  Learn more →
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  What are your privacy rights?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Depending on your location and applicable law, you may have
                  rights to access, correct, delete, or obtain a copy of your
                  personal information.
                </p>
                <a
                  href="#privacy-rights"
                  className="mt-2 inline-block text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  Learn more →
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  How can you exercise your rights?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  You can contact us by email to request access, correction, or
                  deletion of your personal information. We will consider
                  requests in accordance with applicable data protection laws.
                </p>
                <a
                  href="#review-update-delete"
                  className="mt-2 inline-block text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-14">
            <SectionHeading id="information-we-collect">
              1. What Information Do We Collect?
            </SectionHeading>

            <Subheading>Personal information you disclose to us</Subheading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> We collect
              personal information that you voluntarily provide to us.
            </Highlight>

            <Paragraph>
              We collect personal information that you voluntarily provide when
              you register for the Services, express an interest in obtaining
              information about us or our products and Services, participate in
              activities on the Services, or otherwise contact us.
            </Paragraph>

            <Subheading>Sensitive information</Subheading>

            <Paragraph>
              We do not process sensitive personal information as described in
              this notice.
            </Paragraph>

            <Subheading>Social login data</Subheading>

            <Paragraph>
              We may provide you with the option to register or log in using a
              third-party account. If you choose this option, we may receive
              certain profile information from that provider, as described in
              the section titled &quot;How Do We Handle Your Social
              Logins?&quot;
            </Paragraph>

            <Subheading>Accuracy of your information</Subheading>

            <Paragraph>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </Paragraph>
          </section>

          {/* Section 2 */}
          <section className="mb-14">
            <SectionHeading id="how-we-process">
              2. How Do We Process Your Information?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> We process
              your information to provide, improve, and administer our Services,
              communicate with you, maintain security, prevent fraud, and comply
              with the law. We may also process your information for other
              purposes with your consent.
            </Highlight>

            <Paragraph>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </Paragraph>

            <PolicyList
              items={[
                <>
                  <strong className="text-slate-900">
                    To facilitate account creation and authentication.
                  </strong>{" "}
                  We may process your information so you can create an account,
                  log in, authenticate your identity, and keep your account in
                  working order.
                </>,
                <>
                  <strong className="text-slate-900">
                    To deliver our Services.
                  </strong>{" "}
                  We process information necessary to provide the features and
                  functionality you request.
                </>,
                <>
                  <strong className="text-slate-900">
                    To communicate with you.
                  </strong>{" "}
                  We may use your contact information to respond to questions,
                  provide support, or send service-related communications.
                </>,
                <>
                  <strong className="text-slate-900">
                    To maintain security and prevent fraud.
                  </strong>{" "}
                  We may process relevant information to help protect our
                  Services, users, and systems.
                </>,
                <>
                  <strong className="text-slate-900">
                    To comply with legal obligations.
                  </strong>{" "}
                  We may process information where necessary to comply with
                  applicable laws and respond to lawful requests.
                </>,
              ]}
            />

            <Paragraph>
              We process your personal information only when we have a valid
              legal reason to do so, including your consent, the performance of
              a contract, compliance with legal obligations, or other lawful
              grounds applicable to the circumstances.
            </Paragraph>
          </section>

          {/* Section 3 */}
          <section className="mb-14">
            <SectionHeading id="sharing-information">
              3. When and With Whom Do We Share Your Personal Information?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> We may share
              information in specific situations described in this section.
            </Highlight>

            <Paragraph>
              We may need to share your personal information in the following
              situation:
            </Paragraph>

            <Subheading>Business transfers</Subheading>

            <Paragraph>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </Paragraph>

            <Paragraph>
              We may also use service providers to operate and support our
              Services. Where applicable, these providers may process
              information on our behalf under appropriate arrangements.
            </Paragraph>
          </section>

          {/* Section 4 */}
          <section className="mb-14">
            <SectionHeading id="social-logins">
              4. How Do We Handle Your Social Logins?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> If you
              choose to register or log in to our Services using a third-party
              account, we may have access to certain information about you.
            </Highlight>

            <Paragraph>
              Our Services may offer the ability to register or log in using
              third-party account credentials. If you choose to do this, we will
              receive certain profile information from your provider.
            </Paragraph>

            <Paragraph>
              The profile information we receive may vary depending on the
              provider and your settings, but may include your name, email
              address, profile picture, and other information you authorize the
              provider to share.
            </Paragraph>

            <Paragraph>
              We will use the information we receive only for the purposes
              described in this Privacy Notice or otherwise made clear to you
              when you use the relevant Services.
            </Paragraph>

            <Paragraph>
              We do not control and are not responsible for how third-party
              providers independently use your personal information. We
              recommend reviewing their privacy notices to understand their data
              practices and privacy settings.
            </Paragraph>
          </section>

          {/* Section 5 */}
          <section className="mb-14">
            <SectionHeading id="data-retention">
              5. How Long Do We Keep Your Information?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> We keep your
              information for as long as necessary to fulfill the purposes
              outlined in this Privacy Notice, unless a longer retention period
              is required or permitted by law.
            </Highlight>

            <Paragraph>
              We will retain your personal information only for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law, such as
              for tax, accounting, or other legal requirements.
            </Paragraph>

            <Paragraph>
              No purpose described in this notice will require us to keep your
              personal information longer than the period during which you
              maintain an account with us, except where additional retention is
              required or permitted by applicable law.
            </Paragraph>

            <Paragraph>
              When we have no ongoing legitimate business need to process your
              personal information, we will delete or anonymize it. If immediate
              deletion is not possible, for example because the information is
              stored in backup archives, we will securely store it and isolate
              it from further processing until deletion becomes possible.
            </Paragraph>
          </section>

          {/* Section 6 */}
          <section className="mb-14">
            <SectionHeading id="data-security">
              6. How Do We Keep Your Information Safe?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> We aim to
              protect your personal information through appropriate
              organizational and technical security measures.
            </Highlight>

            <Paragraph>
              We have implemented technical and organizational security measures
              designed to protect the personal information we process.
            </Paragraph>

            <Paragraph>
              However, despite our safeguards and efforts to secure your
              information, no electronic transmission over the Internet or
              information storage technology can be guaranteed to be 100%
              secure.
            </Paragraph>

            <Paragraph>
              We cannot promise or guarantee that hackers, cybercriminals, or
              other unauthorized third parties will never defeat our security
              measures or improperly collect, access, steal, or modify your
              information.
            </Paragraph>

            <Paragraph>
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should access our Services within a secure
              environment.
            </Paragraph>
          </section>

          {/* Section 7 */}
          <section className="mb-14">
            <SectionHeading id="privacy-rights">
              7. What Are Your Privacy Rights?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> Depending on
              your country, province, or state of residence, you may have the
              right to review, change, or terminate your account and exercise
              other rights regarding your personal information.
            </Highlight>

            <Subheading>Withdrawing your consent</Subheading>

            <Paragraph>
              If we rely on your consent to process your personal information,
              you may have the right to withdraw that consent at any time. You
              can do so by contacting us using the details provided in the
              section &quot;How Can You Contact Us About This Notice?&quot;
            </Paragraph>

            <Paragraph>
              Withdrawing your consent will not affect the lawfulness of
              processing carried out before withdrawal. Where permitted by
              applicable law, it will not affect processing based on other
              lawful grounds.
            </Paragraph>

            <Subheading>Account information</Subheading>

            <Paragraph>
              If you would like to review or change information associated with
              your account, or terminate your account, you can:
            </Paragraph>

            <PolicyList
              items={[
                "Contact us using the contact information provided in this notice.",
                "Log in to your account and update your account information where those settings are available.",
              ]}
            />

            <Paragraph>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain certain information to prevent fraud,
              troubleshoot problems, assist with investigations, enforce our
              legal terms, or comply with applicable legal requirements.
            </Paragraph>

            <Paragraph>
              If you have questions or comments about your privacy rights, you
              may email us at{" "}
              <a
                href="mailto:sahadatsk20023@gmail.com"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                sahadatsk20023@gmail.com
              </a>
              .
            </Paragraph>
          </section>

          {/* Section 8 */}
          <section className="mb-14">
            <SectionHeading id="do-not-track">
              8. Controls for Do-Not-Track Features
            </SectionHeading>

            <Paragraph>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (&quot;DNT&quot;) feature or
              setting that you can activate to signal your privacy preference
              not to have data about your online browsing activities monitored
              and collected.
            </Paragraph>

            <Paragraph>
              At this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online.
            </Paragraph>

            <Paragraph>
              If a standard for recognizing and honoring DNT signals is adopted
              that we must follow in the future, we will inform you about that
              practice in a revised version of this Privacy Notice.
            </Paragraph>

            <Paragraph>
              California law requires us to disclose how we respond to web
              browser DNT signals. Because there is currently no industry or
              legal standard for recognizing or honoring these signals, we do
              not respond to them at this time.
            </Paragraph>
          </section>

          {/* Section 9 */}
          <section className="mb-14">
            <SectionHeading id="us-residents">
              9. Do United States Residents Have Specific Privacy Rights?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> Residents of
              certain US states may have rights to access, correct, delete, or
              obtain a copy of their personal information, subject to applicable
              law and its limitations.
            </Highlight>

            <Paragraph>
              If you are a resident of California, Colorado, Connecticut,
              Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota,
              Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode
              Island, Tennessee, Texas, Utah, or Virginia, you may have certain
              rights regarding your personal information.
            </Paragraph>

            <Subheading>
              Categories of personal information we collect
            </Subheading>

            <Paragraph>
              The table below describes categories of personal information
              identified in certain US state privacy laws. The original policy
              information supplied for this page marks each category as not
              collected. This classification should be verified against the
              information actually processed by the Services.
            </Paragraph>

            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                      Category
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                      Examples
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                      Collected
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {privacyCategories.map((item) => (
                    <tr
                      key={item.category}
                      className="align-top even:bg-slate-50/50"
                    >
                      <td className="border-b border-slate-100 px-4 py-4 font-medium text-slate-800">
                        {item.category}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 leading-6 text-slate-600">
                        {item.examples}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          No*
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Paragraph>
              *The &quot;No&quot; classification reflects the supplied policy
              text, not an independent technical audit of the Services. Review
              and update this table before publishing if the actual data
              practices differ.
            </Paragraph>

            <Subheading>Other personal information</Subheading>

            <Paragraph>
              The original policy also identifies the following contexts in
              which additional personal information might be collected:
            </Paragraph>

            <PolicyList
              items={[
                "Receiving help through customer support channels.",
                "Participation in customer surveys or contests.",
                "Facilitating the delivery of our Services and responding to inquiries.",
              ]}
            />

            <Subheading>Sources of personal information</Subheading>

            <Paragraph>
              Learn more about the sources of personal information we collect in
              Section 1, &quot;What Information Do We Collect?&quot;
            </Paragraph>

            <Subheading>How we use and share personal information</Subheading>

            <Paragraph>
              Learn more about how we use your personal information in Section
              2, &quot;How Do We Process Your Information?&quot;
            </Paragraph>

            <Subheading>
              Will your information be shared with anyone else?
            </Subheading>

            <Paragraph>
              We may disclose personal information to service providers pursuant
              to appropriate arrangements. Learn more in Section 3, &quot;When
              and With Whom Do We Share Your Personal Information?&quot;
            </Paragraph>

            <Paragraph>
              We may use personal information for our own business purposes,
              such as internal research for technological development and
              demonstration. Such use is not necessarily considered a sale of
              personal information under applicable law.
            </Paragraph>

            <Paragraph>
              The supplied policy states that no personal information was
              disclosed, sold, or shared with third parties for a business or
              commercial purpose during the preceding twelve months and that
              personal information will not be sold or shared in the future.
              Verify that this statement accurately reflects your current
              practices before publishing.
            </Paragraph>

            <Subheading>Your rights</Subheading>

            <Paragraph>
              Subject to applicable US state privacy laws, your rights may
              include:
            </Paragraph>

            <PolicyList
              items={[
                "The right to know whether your personal information is being processed.",
                "The right to access your personal information.",
                "The right to correct inaccurate personal information.",
                "The right to request deletion of your personal information.",
                "The right to obtain a copy of personal information you previously provided.",
                "The right to receive equal treatment for exercising your privacy rights.",
                "The right to opt out of certain processing activities, such as targeted advertising, the sale of personal information, or certain profiling, where applicable.",
                "The right to access information about categories of personal data being processed, where applicable.",
                "The right to obtain information about third parties to which personal information has been disclosed, where applicable.",
                "The right to review or challenge certain profiling activities, where applicable.",
                "The right to limit certain uses and disclosures of sensitive personal information, where applicable.",
              ]}
            />

            <Subheading>How to exercise your rights</Subheading>

            <Paragraph>
              To exercise these rights, you can contact us by email at{" "}
              <a
                href="mailto:sahadatsk20023@gmail.com"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                sahadatsk20023@gmail.com
              </a>
              . You may also submit a data subject access request where that
              process is available.
            </Paragraph>

            <Paragraph>
              Under certain US state privacy laws, you may designate an
              authorized agent to submit a request on your behalf. We may
              require proof that the agent is authorized to act for you.
            </Paragraph>

            <Subheading>Request verification</Subheading>

            <Paragraph>
              Upon receiving your request, we may need to verify your identity
              to determine whether you are the person whose information we
              maintain. Information provided for verification will be used for
              identity verification, authority verification, and related
              security or fraud-prevention purposes.
            </Paragraph>

            <Paragraph>
              If we cannot verify your identity using information already
              maintained by us, we may request additional information where
              permitted by applicable law.
            </Paragraph>

            <Paragraph>
              If you submit a request through an authorized agent, we may
              request additional information to verify your identity and require
              evidence of the agent&apos;s authority.
            </Paragraph>

            <Subheading>Appeals</Subheading>

            <Paragraph>
              Under certain US state privacy laws, if we decline to take action
              regarding your request, you may be able to appeal our decision by
              emailing us at{" "}
              <a
                href="mailto:sahadatsk20023@gmail.com"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                sahadatsk20023@gmail.com
              </a>
              . We will respond in accordance with the requirements of
              applicable law.
            </Paragraph>

            <Subheading>California &quot;Shine the Light&quot; law</Subheading>

            <Paragraph>
              California Civil Code Section 1798.83, also known as the
              &quot;Shine the Light&quot; law, permits California residents,
              under certain conditions, to request information about categories
              of personal information disclosed to third parties for direct
              marketing purposes and the identities of those third parties.
              California residents who wish to make such a request may contact
              us using the details provided in this notice.
            </Paragraph>
          </section>

          {/* Section 10 */}
          <section className="mb-14">
            <SectionHeading id="policy-updates">
              10. Do We Make Updates to This Notice?
            </SectionHeading>

            <Highlight>
              <strong className="text-slate-900">In short:</strong> Yes, we will
              update this notice as necessary to stay compliant with relevant
              laws.
            </Highlight>

            <Paragraph>
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by a revised date at the top of this
              Privacy Notice.
            </Paragraph>

            <Paragraph>
              If we make material changes to this Privacy Notice, we may notify
              you by prominently posting a notice of the changes or by directly
              sending you a notification.
            </Paragraph>

            <Paragraph>
              We encourage you to review this Privacy Notice periodically to
              stay informed about how we protect your information.
            </Paragraph>
          </section>

          {/* Section 11 */}
          <section className="mb-14">
            <SectionHeading id="contact-us">
              11. How Can You Contact Us About This Notice?
            </SectionHeading>

            <Paragraph>
              If you have questions or comments about this notice, you may email
              us or contact us by post using the details below.
            </Paragraph>

            <div className="mt-6 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-slate-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    NudgeFollowup
                  </h3>

                  <a
                    href="mailto:sahadatsk20023@gmail.com"
                    className="mt-2 inline-block text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 hover:decoration-slate-900"
                  >
                    sahadatsk20023@gmail.com
                  </a>

                  <address className="mt-4 text-sm not-italic leading-7 text-slate-600">
                    Khalifa Ln
                    <br />
                    Berhampore, West Bengal 742103
                    <br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section className="mb-14">
            <SectionHeading id="review-update-delete">
              12. How Can You Review, Update, or Delete Your Data?
            </SectionHeading>

            <Paragraph>
              Based on the applicable laws of your country or state of residence
              in the United States, you may have the right to request access to
              the personal information we collect from you, details about how we
              have processed it, correction of inaccuracies, or deletion of your
              personal information.
            </Paragraph>

            <Paragraph>
              You may also have the right to withdraw your consent to our
              processing of personal information. These rights may be limited in
              certain circumstances by applicable law.
            </Paragraph>

            <Paragraph>
              To request access to, correction of, or deletion of your personal
              information, contact us at{" "}
              <a
                href="mailto:sahadatsk20023@gmail.com"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                sahadatsk20023@gmail.com
              </a>
              .
            </Paragraph>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Questions about your data?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    We&apos;re here to help with privacy-related questions and
                    requests.
                  </p>
                </div>

                <a
                  href="mailto:sahadatsk20023@gmail.com?subject=Privacy%20Request"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Contact us
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* Bottom note */}
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm leading-6 text-slate-500">
              Thank you for trusting NudgeFollowup. We are committed to handling
              personal information responsibly and respecting your privacy
              rights.
            </p>

            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950 print:hidden"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m6 14 6-6 6 6" />
              </svg>
              Back to top
            </a>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 print:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-base font-bold tracking-tight">
              nudge<span className="text-slate-400">followup</span>
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              Simple follow-ups. Better relationships.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"
          >
            <Link href="/privacy-policy" className="text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-slate-900">
              Terms of Service
            </Link>
            <Link
              href="mailto:sahadatsk20023@gmail.com"
              className="transition hover:text-slate-900"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-slate-400 sm:px-8">
            © {new Date().getFullYear()} NudgeFollowup. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Print styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 6rem;
        }

        @media print {
          header,
          aside,
          footer,
          .print\\:hidden {
            display: none !important;
          }

          body {
            background: white !important;
            color: black !important;
          }

          article {
            max-width: 100% !important;
          }

          section {
            break-inside: avoid-page;
          }

          a {
            color: black !important;
            text-decoration: none !important;
          }
        }
      `}</style>
    </main>
  );
}
