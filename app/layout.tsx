import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoop With Prezence",
  description: "Train with intention. Hoop With Prezence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">
        {children}
        <div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none z-40">
          <Image src="/images/hwp-wordmark.png" alt="Hoop With Prezence" width={320} height={44} className="mix-blend-multiply" />
        </div>
      </body>
    </html>
  );
}
