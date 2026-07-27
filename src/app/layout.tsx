import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://linzhiqing.dev"),
  title: {
    default: `${profile.name} | 个人官网`,
    template: `%s | ${profile.name}`
  },
  description: profile.seoDescription,
  verification: {
    other: {
      "msvalidate.01": "6EEE23F1569CDB8DDCB0D52CCBF3B075"
    }
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://linzhiqing.dev",
    siteName: "linzhiqing.dev",
    title: `${profile.name} | 个人官网`,
    description: profile.seoDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="container-page">{children}</main>
      </body>
    </html>
  );
}
