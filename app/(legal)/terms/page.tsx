"use client";
import Logo from "@/components/header/logo";
import Link from "next/link";
import type { ReactNode } from "react";

const sections = [
  { id: "services", title: "1. Our Services" },
  { id: "intellectual-property", title: "2. Intellectual Property Rights" },
  { id: "user-representations", title: "3. User Representations" },
  { id: "prohibited-activities", title: "4. Prohibited Activities" },
  { id: "user-contributions", title: "5. User Contributions" },
  { id: "contribution-license", title: "6. Contribution License" },
  { id: "services-management", title: "7. Services Management" },
  { id: "termination", title: "8. Term and Termination" },
  { id: "modifications", title: "9. Modifications and Interruptions" },
  { id: "governing-law", title: "10. Governing Law" },
  { id: "disputes", title: "11. Dispute Resolution" },
  { id: "corrections", title: "12. Corrections" },
  { id: "disclaimer", title: "13. Disclaimer" },
  { id: "liability", title: "14. Limitations of Liability" },
  { id: "indemnification", title: "15. Indemnification" },
  { id: "user-data", title: "16. User Data" },
  {
    id: "electronic-communications",
    title: "17. Electronic Communications",
  },
  { id: "miscellaneous", title: "18. Miscellaneous" },
  { id: "contact", title: "19. Contact Us" },
];

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-slate-200 pb-4 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
    >
      {children}
    </h2>
  );
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-7 text-lg font-semibold text-slate-900">{children}</h3>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-7 text-slate-600">{children}</p>
  );
}

function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-6 text-[15px] leading-7 text-slate-600 marker:text-slate-400">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-[15px] leading-7 text-slate-600">{children}</p>
    </div>
  );
}

function ContactEmail() {
  return (
    <a
      href="mailto:sahadatsk20023@gmail.com"
      className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
    >
      sahadatsk20023@gmail.com
    </a>
  );
}

export default function TermsOfUsePage() {
  return (
    <main id="top" className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
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
              Legal &amp; Terms
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Terms of Use
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              These terms explain the rules for using NudgeFollowup. Please read
              them carefully before creating an account or using our services.
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

              <span>19 sections</span>
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

            <nav aria-label="Terms of Use table of contents" className="mt-5">
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
                Need clarification?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Contact us if you have questions about these terms or your use
                of NudgeFollowup.
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

        {/* Terms content */}
        <article className="min-w-0 max-w-3xl">
          {/* Agreement */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Agreement to Our Legal Terms
            </h2>

            <Paragraph>
              These Terms of Use (&quot;Terms&quot;) constitute a legally
              binding agreement between you, whether personally or on behalf of
              an entity (&quot;you&quot;), and NudgeFollowup (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;), concerning your access to and
              use of our website and services.
            </Paragraph>

            <Paragraph>
              We operate NudgeFollowup, a service designed to help users
              organize contacts, track conversations, manage follow-up dates,
              and maintain records related to their business relationships.
            </Paragraph>

            <Paragraph>
              You can access our website at{" "}
              <a
                href="https://nudgefollowup.up.railway.app"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                nudgefollowup.up.railway.app
              </a>
              .
            </Paragraph>

            <Paragraph>
              You can contact us by email at <ContactEmail /> or by post at:
            </Paragraph>

            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              <strong className="text-slate-900">NudgeFollowup</strong>
              <br />
              Khalifa Ln
              <br />
              Berhampore, West Bengal 742103
              <br />
              India
            </div>

            <Highlight>
              By accessing or using our Services, you acknowledge that you have
              read and understood these Terms and agree to be bound by them. If
              you do not agree to these Terms, you must discontinue use of our
              Services.
            </Highlight>

            <Paragraph>
              Any supplemental terms, policies, or operating rules published
              through our Services are incorporated into these Terms where
              applicable. Our Privacy Policy describes how we handle personal
              information and should be read alongside these Terms.
            </Paragraph>

            <Paragraph>
              We may update these Terms from time to time. When we make changes,
              we will update the &quot;Last updated&quot; date above and, where
              appropriate or required by law, provide additional notice. Your
              continued use of the Services after revised Terms take effect
              constitutes acceptance of the revised Terms where permitted by
              applicable law.
            </Paragraph>
          </section>

          {/* 1 */}
          <section className="mb-14">
            <SectionHeading id="services">1. Our Services</SectionHeading>

            <Paragraph>
              NudgeFollowup provides tools that help users manage contacts,
              record interactions, organize follow-up activities, and keep track
              of business relationships.
            </Paragraph>

            <Paragraph>
              The availability of particular features may depend on your
              account, the current version of the Services, and any applicable
              plan or usage restrictions.
            </Paragraph>

            <Paragraph>
              Our Services are intended for lawful personal or business use. You
              are responsible for ensuring that your use of the Services
              complies with the laws and regulations applicable to you.
            </Paragraph>

            <Paragraph>
              Accessing our Services from a jurisdiction where their use is
              restricted or unlawful is your responsibility. We do not represent
              that the Services are appropriate or available in every
              jurisdiction.
            </Paragraph>
          </section>

          {/* 2 */}
          <section className="mb-14">
            <SectionHeading id="intellectual-property">
              2. Intellectual Property Rights
            </SectionHeading>

            <Subheading>Our intellectual property</Subheading>

            <Paragraph>
              Unless otherwise stated, we own or license the intellectual
              property rights in our Services, including their source code,
              software, design, functionality, branding, text, graphics, and
              other materials made available by us. These materials are
              collectively referred to as the &quot;Content.&quot;
            </Paragraph>

            <Paragraph>
              Our trademarks, service marks, logos, and other brand elements are
              collectively referred to as the &quot;Marks.&quot; The Content and
              Marks may be protected by copyright, trademark, and other
              applicable intellectual property laws.
            </Paragraph>

            <Subheading>Your permitted use</Subheading>

            <Paragraph>
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable, and revocable license to
              access and use the Services for your personal use or internal
              business purposes.
            </Paragraph>

            <Paragraph>
              Except as expressly permitted by these Terms or applicable law,
              you may not copy, reproduce, republish, distribute, sell, publicly
              display, modify, or commercially exploit our Content or Marks
              without our prior written permission.
            </Paragraph>

            <Paragraph>
              If you wish to use our Content or Marks beyond the permissions
              described here, contact us at <ContactEmail />.
            </Paragraph>

            <Paragraph>
              All rights not expressly granted to you are reserved by us or our
              licensors. A material breach of this section may result in
              suspension or termination of your access to the Services, subject
              to applicable law.
            </Paragraph>

            <Subheading>Your feedback and submissions</Subheading>

            <Paragraph>
              If you send us suggestions, ideas, comments, or feedback about our
              Services, you grant us permission to use that feedback to
              evaluate, maintain, and improve our Services without an obligation
              to compensate you, to the extent permitted by law.
            </Paragraph>

            <Paragraph>
              This permission does not transfer ownership of your contact
              records, business information, or other user data to us.
            </Paragraph>
          </section>

          {/* 3 */}
          <section className="mb-14">
            <SectionHeading id="user-representations">
              3. User Representations
            </SectionHeading>

            <Paragraph>
              By using our Services, you represent and agree that:
            </Paragraph>

            <PolicyList
              items={[
                "You have the legal capacity to enter into these Terms and will comply with them.",
                "You will provide accurate, current, and complete information when creating or maintaining your account.",
                "You will not use the Services for an illegal, fraudulent, or unauthorized purpose.",
                "Your use of the Services will comply with applicable laws and regulations.",
                "You will not attempt to access another user's account without authorization.",
                "You will take reasonable steps to maintain the confidentiality of your account credentials.",
                "You will not use automated means to access the Services in a way that violates these Terms or interferes with their operation.",
              ]}
            />

            <Paragraph>
              You are responsible for updating information you provide to us
              when it changes. If information you provide is materially
              inaccurate, incomplete, or misleading, we may restrict or suspend
              your account where reasonably necessary and permitted by law.
            </Paragraph>
          </section>

          {/* 4 */}
          <section className="mb-14">
            <SectionHeading id="prohibited-activities">
              4. Prohibited Activities
            </SectionHeading>

            <Paragraph>
              You may use the Services only for their intended purposes and in
              accordance with these Terms. You agree not to:
            </Paragraph>

            <PolicyList
              items={[
                "Use the Services in violation of any applicable law, regulation, or third-party right.",
                "Use the Services to defraud, deceive, impersonate, threaten, harass, or harm another person.",
                "Attempt to obtain another user's password, authentication credentials, or other confidential account information.",
                "Access, probe, or interfere with accounts, systems, networks, or data without authorization.",
                "Circumvent, disable, or interfere with security features or access restrictions.",
                "Upload or transmit malware, viruses, malicious scripts, or other material intended to damage or disrupt systems.",
                "Send spam, abusive messages, or unauthorized bulk communications using the Services.",
                "Use bots, scrapers, robots, or other automated methods to collect information from the Services without authorization.",
                "Systematically retrieve data from the Services to create a competing database or directory without our written permission.",
                "Copy, modify, reverse engineer, decompile, or disassemble the Services except where applicable law expressly permits it.",
                "Remove copyright notices, trademarks, or other proprietary notices from our Content.",
                "Interfere with the availability, integrity, performance, or normal operation of the Services.",
                "Create accounts using false information or attempt to bypass account restrictions.",
                "Use the Services or their Content to build or support a competing product in violation of applicable law or these Terms.",
                "Misuse our support channels or knowingly submit false abuse reports.",
                "Use the Services to store or process information that you have no legal right to collect or use.",
              ]}
            />

            <Paragraph>
              We may investigate suspected violations and take appropriate
              action, including restricting access, suspending accounts, or
              reporting unlawful conduct to relevant authorities where
              appropriate and permitted by law.
            </Paragraph>
          </section>

          {/* 5 */}
          <section className="mb-14">
            <SectionHeading id="user-contributions">
              5. User Contributions
            </SectionHeading>

            <Paragraph>
              The Services may allow you to enter, upload, store, or otherwise
              provide information, including contact details, notes, interaction
              histories, follow-up records, and other business information. This
              information is referred to as &quot;User Content.&quot;
            </Paragraph>

            <Paragraph>
              You are responsible for the User Content you provide and for
              ensuring that you have the necessary rights and permissions to
              collect, enter, store, and use it through our Services.
            </Paragraph>

            <Paragraph>
              You must not use the Services to store or share unlawful,
              fraudulent, defamatory, threatening, abusive, or otherwise
              prohibited material.
            </Paragraph>

            <Paragraph>
              When your User Content includes information about other people,
              you are responsible for ensuring that your collection and use of
              that information has an appropriate legal basis and complies with
              applicable privacy and data protection laws.
            </Paragraph>

            <Paragraph>
              You retain your rights in your User Content, subject to the
              limited permissions needed for us to provide and maintain the
              Services as described in these Terms and our Privacy Policy.
            </Paragraph>
          </section>

          {/* 6 */}
          <section className="mb-14">
            <SectionHeading id="contribution-license">
              6. Contribution License
            </SectionHeading>

            <Paragraph>
              You retain ownership of your User Content. You grant us permission
              to host, store, process, reproduce, and transmit your User Content
              only as reasonably necessary to provide, maintain, secure, and
              improve the Services, comply with legal obligations, and carry out
              your instructions.
            </Paragraph>

            <Paragraph>
              This permission is limited to the purposes described above and
              does not give us ownership of your contact records, notes, or
              other business information.
            </Paragraph>

            <Paragraph>
              We may use feedback or suggestions you voluntarily provide about
              the Services to improve our products without an obligation to
              compensate you, subject to applicable law.
            </Paragraph>

            <Paragraph>
              We handle personal information in accordance with our Privacy
              Policy. For more information, please visit our{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                Privacy Policy
              </a>
              .
            </Paragraph>
          </section>

          {/* 7 */}
          <section className="mb-14">
            <SectionHeading id="services-management">
              7. Services Management
            </SectionHeading>

            <Paragraph>
              We reserve the right, but are not obligated, to manage the
              Services in ways reasonably necessary to maintain their operation,
              protect users, and enforce these Terms.
            </Paragraph>

            <Paragraph>This may include:</Paragraph>

            <PolicyList
              items={[
                "Monitoring for apparent violations of these Terms, to the extent permitted by law.",
                "Investigating suspected abuse, fraud, security incidents, or unlawful activity.",
                "Restricting or removing content that violates these Terms or applicable law.",
                "Limiting access to features when reasonably necessary for security, maintenance, or operational reasons.",
                "Taking appropriate legal action or reporting suspected unlawful conduct to relevant authorities where warranted.",
              ]}
            />

            <Paragraph>
              We will exercise these rights in accordance with applicable law
              and any obligations that apply to us.
            </Paragraph>
          </section>

          {/* 8 */}
          <section className="mb-14">
            <SectionHeading id="termination">
              8. Term and Termination
            </SectionHeading>

            <Paragraph>
              These Terms remain effective while you use the Services or
              maintain an account, subject to any provisions that continue after
              termination.
            </Paragraph>

            <Paragraph>
              You may stop using the Services at any time. If account deletion
              is available through your account settings, you may use that
              feature. Otherwise, you may contact us to request account closure.
            </Paragraph>

            <Paragraph>
              We may suspend or terminate access to all or part of the Services
              where reasonably necessary, including when you materially violate
              these Terms, your use creates a security risk, or we are required
              to do so by law.
            </Paragraph>

            <Paragraph>
              Where appropriate and legally permissible, we will provide notice
              and an opportunity to address a violation before termination. We
              may act immediately when necessary to protect users, our systems,
              or third parties.
            </Paragraph>

            <Paragraph>
              Upon termination, your permission to use the affected Services
              ends. Provisions that by their nature should survive termination,
              including provisions concerning intellectual property,
              disclaimers, liability, and dispute resolution, will continue to
              apply to the extent permitted by law.
            </Paragraph>

            <Paragraph>
              Any handling or deletion of your personal information following
              account closure will be governed by our Privacy Policy and
              applicable law.
            </Paragraph>
          </section>

          {/* 9 */}
          <section className="mb-14">
            <SectionHeading id="modifications">
              9. Modifications and Interruptions
            </SectionHeading>

            <Paragraph>
              We may modify, update, suspend, or discontinue features of the
              Services from time to time for operational, technical, security,
              or business reasons.
            </Paragraph>

            <Paragraph>
              We aim to keep the Services available, but we cannot guarantee
              uninterrupted access. Maintenance, infrastructure issues, network
              failures, software errors, or circumstances beyond our reasonable
              control may cause delays or interruptions.
            </Paragraph>

            <Paragraph>
              Where reasonably practicable, we may provide notice of significant
              planned interruptions. We may also make emergency changes without
              prior notice when necessary to maintain security, protect users,
              or comply with the law.
            </Paragraph>

            <Paragraph>
              Nothing in these Terms excludes any obligation or liability that
              cannot lawfully be excluded in relation to the availability or
              operation of the Services.
            </Paragraph>
          </section>

          {/* 10 */}
          <section className="mb-14">
            <SectionHeading id="governing-law">
              10. Governing Law
            </SectionHeading>

            <Paragraph>
              These Terms and any dispute arising out of or relating to the
              Services will be governed by the laws of India, subject to
              applicable conflict-of-law rules and any mandatory legal
              protections that apply to you.
            </Paragraph>

            <Paragraph>
              Subject to applicable law, disputes will be brought before the
              competent courts in the jurisdiction determined under applicable
              Indian law.
            </Paragraph>

            <Paragraph>
              Nothing in this section limits any rights or remedies that cannot
              be waived or restricted under applicable law.
            </Paragraph>
          </section>

          {/* 11 */}
          <section className="mb-14">
            <SectionHeading id="disputes">
              11. Dispute Resolution
            </SectionHeading>

            <Subheading>Contact us first</Subheading>

            <Paragraph>
              If you have a complaint or dispute concerning the Services or
              these Terms, we encourage you to contact us first at{" "}
              <ContactEmail /> so that we can attempt to resolve the matter
              informally.
            </Paragraph>

            <Paragraph>
              Please describe the issue, the relevant circumstances, and the
              resolution you are seeking. We will make reasonable efforts to
              review your complaint and respond.
            </Paragraph>

            <Subheading>Formal proceedings</Subheading>

            <Paragraph>
              If a dispute cannot be resolved informally, either party may
              pursue the remedies available under applicable law before a court
              or other forum with appropriate jurisdiction.
            </Paragraph>

            <Paragraph>
              Nothing in this section prevents either party from seeking urgent
              relief where legally available or limits rights that cannot be
              restricted by agreement.
            </Paragraph>
          </section>

          {/* 12 */}
          <section className="mb-14">
            <SectionHeading id="corrections">12. Corrections</SectionHeading>

            <Paragraph>
              Information presented through the Services may occasionally
              contain typographical errors, inaccuracies, or omissions,
              including descriptions of features, documentation, or other
              information.
            </Paragraph>

            <Paragraph>
              We reserve the right to correct errors, update information, and
              make improvements when reasonably necessary. Where required by
              law, we will provide appropriate notice of material changes.
            </Paragraph>
          </section>

          {/* 13 */}
          <section className="mb-14">
            <SectionHeading id="disclaimer">13. Disclaimer</SectionHeading>

            <Highlight>
              The Services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis to the extent permitted by law. We do not
              guarantee that the Services will always be uninterrupted,
              error-free, or suitable for every purpose.
            </Highlight>

            <Paragraph>
              NudgeFollowup provides tools for contact management and follow-up
              organization. The Services are intended to assist your workflow
              and do not guarantee that you will successfully contact leads,
              retain customers, close sales, or achieve any particular business
              outcome.
            </Paragraph>

            <Paragraph>
              You are responsible for verifying information you enter into the
              Services and for making your own business decisions based on that
              information.
            </Paragraph>

            <Paragraph>
              We do not guarantee that information stored in the Services will
              always be available without interruption or that every error,
              defect, or security issue can be prevented.
            </Paragraph>

            <Paragraph>
              To the fullest extent permitted by law, we disclaim warranties
              that may otherwise be implied, including implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement, where such disclaimers are legally permitted.
            </Paragraph>

            <Paragraph>
              We are not responsible for independent third-party websites,
              products, or services merely because they are linked to or
              accessible through our Services. Your use of third-party services
              may be subject to their own terms and privacy policies.
            </Paragraph>

            <Paragraph>
              Nothing in these Terms excludes warranties, guarantees, or rights
              that cannot be excluded under applicable law.
            </Paragraph>
          </section>

          {/* 14 */}
          <section className="mb-14">
            <SectionHeading id="liability">
              14. Limitations of Liability
            </SectionHeading>

            <Paragraph>
              To the fullest extent permitted by applicable law, NudgeFollowup
              and the people or entities acting on its behalf will not be liable
              for indirect, incidental, special, consequential, or punitive
              losses arising out of or relating to your use of, or inability to
              use, the Services.
            </Paragraph>

            <Paragraph>
              This includes, where legally permissible, loss of profits,
              revenue, business opportunities, goodwill, anticipated savings, or
              data, and losses arising from interruptions, unauthorized access,
              or reliance on information made available through the Services.
            </Paragraph>

            <Paragraph>
              To the fullest extent permitted by applicable law, our total
              liability arising out of or relating to the Services or these
              Terms will be limited to the amount you paid us for the Services
              during the twelve months immediately preceding the event giving
              rise to the claim, or INR 1,000 if you paid nothing during that
              period.
            </Paragraph>

            <Paragraph>
              The preceding limitation applies only to the extent permitted by
              applicable law. It does not exclude or limit liability that cannot
              lawfully be excluded or limited, including any non-waivable
              consumer rights or liability for which limitation is prohibited by
              law.
            </Paragraph>

            <Paragraph>
              Some jurisdictions do not permit certain exclusions or limitations
              of liability. In those jurisdictions, our liability will be
              limited to the maximum extent permitted by law.
            </Paragraph>
          </section>

          {/* 15 */}
          <section className="mb-14">
            <SectionHeading id="indemnification">
              15. Indemnification
            </SectionHeading>

            <Paragraph>
              To the extent permitted by applicable law, you agree to compensate
              NudgeFollowup for reasonable losses, liabilities, damages, and
              expenses arising from third-party claims caused by:
            </Paragraph>

            <PolicyList
              items={[
                "Your unlawful use of the Services.",
                "Your material violation of these Terms.",
                "Your infringement of another person's intellectual property, privacy, or other legal rights.",
                "Your User Content where it violates applicable law or a third party's rights.",
                "Your fraudulent, intentional, or otherwise unlawful conduct in connection with the Services.",
              ]}
            />

            <Paragraph>
              We will provide reasonable notice of a claim where required by
              law. Any indemnification obligation will be subject to applicable
              legal limitations and will not apply to the extent a claim results
              from our own conduct for which indemnification cannot lawfully be
              required.
            </Paragraph>
          </section>

          {/* 16 */}
          <section className="mb-14">
            <SectionHeading id="user-data">16. User Data</SectionHeading>

            <Paragraph>
              We process information you provide through the Services to operate
              your account and provide the features you use. This may include
              contact records, notes, follow-up dates, and interaction
              histories.
            </Paragraph>

            <Paragraph>
              We may maintain backups and technical records as reasonably
              necessary for service operation, recovery, security, and
              compliance with applicable law.
            </Paragraph>

            <Paragraph>
              You are responsible for ensuring that the information you enter is
              accurate and that you have appropriate authorization to use it.
              Where appropriate, you should maintain independent copies of
              important business information.
            </Paragraph>

            <Paragraph>
              Although we take reasonable steps to protect information and
              maintain the Services, no system can guarantee protection against
              every possible failure, security incident, or loss.
            </Paragraph>

            <Paragraph>
              We will handle requests to access, correct, export, or delete
              personal information in accordance with our Privacy Policy and
              applicable law.
            </Paragraph>
          </section>

          {/* 17 */}
          <section className="mb-14">
            <SectionHeading id="electronic-communications">
              17. Electronic Communications, Transactions, and Signatures
            </SectionHeading>

            <Paragraph>
              By visiting the Services, sending us emails, or completing online
              forms, you communicate with us electronically.
            </Paragraph>

            <Paragraph>
              Where permitted by applicable law, you consent to receive
              service-related communications electronically, including by email
              or through notices displayed within the Services.
            </Paragraph>

            <Paragraph>
              Electronic communications may be used for account-related notices,
              service updates, security information, policy changes, and
              responses to your inquiries.
            </Paragraph>

            <Paragraph>
              Where applicable law recognizes electronic records,
              communications, and signatures, they may be used in connection
              with our relationship with you. Nothing in these Terms removes any
              legal requirement for a particular form of notice, signature, or
              record where that requirement cannot be waived.
            </Paragraph>
          </section>

          {/* 18 */}
          <section className="mb-14">
            <SectionHeading id="miscellaneous">
              18. Miscellaneous
            </SectionHeading>

            <Subheading>Entire agreement</Subheading>

            <Paragraph>
              These Terms, together with our Privacy Policy and any additional
              terms expressly applicable to specific features, constitute the
              agreement between you and us concerning your use of the Services.
            </Paragraph>

            <Subheading>No waiver</Subheading>

            <Paragraph>
              If we do not enforce a provision of these Terms immediately, that
              does not mean we waive our right to enforce it later.
            </Paragraph>

            <Subheading>Severability</Subheading>

            <Paragraph>
              If any provision of these Terms is held to be invalid or
              unenforceable, that provision will be limited or removed only to
              the extent necessary. The remaining provisions will continue in
              effect to the extent permitted by law.
            </Paragraph>

            <Subheading>Assignment</Subheading>

            <Paragraph>
              You may not transfer your rights or obligations under these Terms
              without our prior written consent, except where applicable law
              provides otherwise. We may transfer our rights and obligations in
              connection with a business reorganization or transfer, subject to
              applicable law.
            </Paragraph>

            <Subheading>Independent relationship</Subheading>

            <Paragraph>
              These Terms do not create a partnership, joint venture, employment
              relationship, or agency relationship between you and us.
            </Paragraph>

            <Subheading>Events beyond our control</Subheading>

            <Paragraph>
              We will not be responsible for delays or failures caused by
              circumstances beyond our reasonable control, to the extent
              permitted by law.
            </Paragraph>

            <Subheading>Interpretation</Subheading>

            <Paragraph>
              Headings are provided for convenience and do not determine the
              meaning of these Terms. Nothing in these Terms is intended to
              remove any protection or remedy that applicable law does not
              permit us to exclude.
            </Paragraph>
          </section>

          {/* 19 */}
          <section className="mb-14">
            <SectionHeading id="contact">19. Contact Us</SectionHeading>

            <Paragraph>
              If you have a question, complaint, or concern about these Terms or
              the use of NudgeFollowup, please contact us using the details
              below.
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

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Still have questions?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Get in touch if you need clarification about these terms.
                  </p>
                </div>

                <a
                  href="mailto:sahadatsk20023@gmail.com?subject=Terms%20of%20Use%20Question"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Contact us
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* End note */}
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm leading-6 text-slate-500">
              Thank you for using NudgeFollowup. By using our Services, you help
              us maintain a respectful, secure, and reliable experience for
              everyone.
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
            <a
              href="/privacy-policy"
              className="transition hover:text-slate-900"
            >
              Privacy Policy
            </a>

            <a href="/terms" className="text-slate-900">
              Terms of Use
            </a>

            <a
              href="mailto:sahadatsk20023@gmail.com"
              className="transition hover:text-slate-900"
            >
              Contact
            </a>
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

          a {
            color: black !important;
            text-decoration: none !important;
          }
        }
      `}</style>
    </main>
  );
}
