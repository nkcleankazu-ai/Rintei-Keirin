import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "輪帝 RINTEI｜勝負を制する、輪の力。",
  description: "展開を読み、勝負を見極める。競輪予想情報サービス 輪帝。",
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
