import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Linktree | Better version of Linktree",
  description: "A premium sci-fi themed linktree. Developer Linktree | Better version of Linktree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-[#050608] text-white selection:bg-[#4BEEF5]/30 antialiased`}>
        {children}
      </body>
    </html>
  );
}
