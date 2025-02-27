import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-sans">{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "TikTok Trend Analizi",
  description: "TikTok trendlerini analiz eden web uygulaması",
};
