import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Projects",
  description: "Explore the Top NFT Projects",
};

export default function TopNftProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-screen  bg-nft-navy-blue">
      {children}
    </main>
  );
}
