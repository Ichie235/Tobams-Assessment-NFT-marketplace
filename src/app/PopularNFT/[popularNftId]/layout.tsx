import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Projects",
  description: "Explore the most popular NFT's",
};

export default function PopularNftProjectsLayout({
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
