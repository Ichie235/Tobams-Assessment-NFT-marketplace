import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page to the best NFT's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative w-full h-screen  bg-nft-navy-blue overflow-x-hidden">
          <Navbar />
          {children}
          <div className="z-50 mt-[500px]">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
