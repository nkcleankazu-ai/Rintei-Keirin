import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rintei-keirin-qgwc.vercel.app"),
  title: {
    default: "輪帝 RINTEI｜競輪予想・レース展開分析",
    template: "%s｜輪帝 RINTEI",
  },
  description:
    "輪帝 RINTEIは、競輪のレース展開やライン構成を分析し、予想情報を提供するサービスです。無料予想・有料予想を掲載しています。",
  keywords: [
    "輪帝",
    "RINTEI",
    "競輪予想",
    "競輪",
    "3連単",
    "レース展開分析",
    "ライン予想",
  ],
  alternates: {
    canonical: "https://rintei-keirin-qgwc.vercel.app",
  },
  verification: {
    google: "Qj9PzPEMyqTWYkdCH99u9WphR5loqjoRrFSjt09MLQQ",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://rintei-keirin-qgwc.vercel.app",
    siteName: "輪帝 RINTEI",
    title: "輪帝 RINTEI｜競輪予想・レース展開分析",
    description: "展開を読み、勝負を見極める。競輪予想情報サービス 輪帝。",
  },
  twitter: {
    card: "summary",
    title: "輪帝 RINTEI｜競輪予想・レース展開分析",
    description: "展開を読み、勝負を見極める。競輪予想情報サービス 輪帝。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
