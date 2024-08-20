import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yongjin Huang | Personal Portfolio",
  description: "Yongjin Huang's personal portfolio",
};
const languages = ['en', 'zh']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string
  }
}>) {
  return (
    <>
      <html lang={lng} dir={dir(lng)}>
        <head />
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </>
  );
}
