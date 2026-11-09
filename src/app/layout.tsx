import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "輪帝 RINTEI｜勝負を制する、輪の力。",
  description: "競輪AI予想 輪帝。勝負を制する、輪の力。",
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
