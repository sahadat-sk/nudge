import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NudgeFollowup",
  description:
    "Read the NudgeFollowup Privacy Policy to understand how we collect, use, store, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
