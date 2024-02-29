import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Projects",
  description: "Explore the best NFT's",
};

export default function NftProjectsLayout({
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
