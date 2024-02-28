import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import LatestNftCard from "./Components/NftCard/LatestNftCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10">
      <Hero />
      <div className="mt-[500px] h-auto">
        <h1 className="text-white text-4xl text-center mt-12 mb-24">
          Latest live auctions
        </h1>
        <LatestNftCard />
      </div>
    </main>
  );
}
