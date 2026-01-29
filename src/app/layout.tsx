import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sravya Majeti | Product Leader",
  description: "Senior Product Manager building 0→1 platforms for technology startups.",
  openGraph: {
    title: "Sravya Majeti | Product Leader",
    description: "Senior Product Manager building 0→1 platforms for technology startups.",
    type: "website",
    url: "https://productmama.dev/",
    siteName: "Sravya Majeti Portfolio",
  },
  // twitter: {
  //   card: "summmarry_large_image",
  //   title: "Sravya Majeti | Product Leader",
  //   description: "Senior Product Manager building 0→1 platforms for technology startups.",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
