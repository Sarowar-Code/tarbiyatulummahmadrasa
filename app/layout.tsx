import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";

import ClientLayout from "./ClientLayout";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "তারবিয়াতুল উম্মাহ মাদ্রাসা",
  description: "মাদ্রাসা ম্যানেজমেন্ট সিস্টেমের ডেমো UI",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
