import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | NudgeFollowup",
  description:
    "Read the Terms of Use for NudgeFollowup, including rules for using our services, accounts, intellectual property, liability, and dispute resolution.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
