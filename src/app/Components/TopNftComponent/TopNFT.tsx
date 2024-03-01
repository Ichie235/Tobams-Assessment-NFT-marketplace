import Image from "next/image";
import { TopNFTproject } from "../../../../library/nftData";
import ToggleButton from "../Button/ToggleButton";
import TopNftLowerPriceCard from "./TopNftLowerPriceCard";
import Link from "next/link";

export default function TopNFT() {
  return (
    <main className="flex flex-col justify-center md:flex-row md:flex-wrap items-end gap-5">
      <section className="w-full md:w-[350px] lg:w-[300px] xl:w-[440px] flex flex-col items-center  gap-4 border border-nft-light-gray rounded-2xl px-4 py-6">
        <h1 className="text-white text-3xl">Top NFT at a lower price</h1>
        {TopNFTproject.map((item, index) => (
          <Link key={index} href={`/TopNFT/${item.slug}`}>
            <TopNftLowerPriceCard
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              bidersIcon={item.bidersIcon}
              bidersNumber={item.bidersNumber}
              time={item.time}
              creatorImage=""
            />
          </Link>
        ))}
        <ToggleButton
          type="button"
          className="w-[150px] lg:w-[250px] xl:w-[367px] cursor-pointer border border-nft-deep-gray text-white transition-transform hover:scale-105 mt-3"
        >
          Show me more
        </ToggleButton>
      </section>
      <section className="w-full md:w-[350px] lg:w-[300px] xl:w-[420px] flex flex-col  gap-4 border border-nft-light-gray rounded-2xl pb-4">
        <Image
          src="/get-started-box-1.png"
          width={420}
          height={400}
          alt="get started box image"
          className="lg:w-[300px] lg:h-[610px] xl:w-[420px] rounded-t-2xl"
        />
        <div className="px-6">
          <h1 className="w-full md:w-[314px] text-white text-2xl font-bold">
            Get started creating & selling your NFTs
          </h1>
          <p className="w-full md:w-[275px] text-nft-deep-gray text-sm mt-4">
            Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
            Mi est sit.
          </p>
        </div>
        <div className="px-5 my-4">
          <ToggleButton
            type="submit"
            className="w-[150px] lg:w-[250px] xl:w-[367px] bg-nft-royal-blue-gr text-white cursor-pointer transition-transform hover:scale-105"
          >
            Get started
          </ToggleButton>
        </div>
      </section>
      <section className="w-full md:w-[350px] lg:w-[300px] xl:w-[440px] flex flex-col items-center  gap-4 border border-nft-light-gray rounded-2xl px-4 py-6">
        <h1 className="text-white text-3xl">Top NFT at a lower price</h1>
        {TopNFTproject.map((item, index) => (
          <Link key={index} href={`/TopNFT/${item.slug}`}>
            <TopNftLowerPriceCard
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              bidersIcon={item.bidersIcon}
              bidersNumber={item.bidersNumber}
              time={item.time}
              creatorImage=""
            />
          </Link>
        ))}
        <ToggleButton
          type="button"
          className="w-[150px] lg:w-[250px] xl:w-[367px] cursor-pointer border border-nft-deep-gray text-white transition-transform hover:scale-105 mt-3"
        >
          Show me more
        </ToggleButton>
      </section>
    </main>
  );
}
