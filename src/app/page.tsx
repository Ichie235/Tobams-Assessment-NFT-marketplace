import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import LatestNftCard from "./Components/NftCard/LatestNftCard";
import { NftLatestproject } from "../../library/nftData";
import ToggleButton from "./Components/Button/ToggleButton";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <section className="mt-60 md:mt-96 lg:mt-[31.25rem] h-auto">
        <h1 className="text-white text-2xl md:text-4xl text-center mt-12 mb-16 lg:mb-24 ">
          Latest live auctions
        </h1>
        <div className="flex  gap-6">
          {NftLatestproject.map((item, index) => (
            <div key={index}>
              <LatestNftCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                time={item.time}
                bidersIcon={item.bidersIcon}
                bidersNumber={item.bidersNumber}
                likes={item.likes}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-2 items-center mx-5 md:mx-10 lg:mx-16 xl:mx-32">
        <div>
          <p className="text-nft-deep-gray text-base">OVERLINE</p>
          <h1 className="text-white text-4xl md:text-6xl mt-5 md:mt-6">
            Sapien ipsum scelerisque convallis <br /> fusce
          </h1>
          <p className="w-full md:w-[450px] mt-8 text-nft-deep-gray">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="flex gap-4 mt-5">
            <ToggleButton
              type="button"
              className="w-36 bg-nft-deep-blue-gr p-2 text-white rounded-xl"
            >
              Get started
            </ToggleButton>
            <ToggleButton
              type="button"
              className="w-32 text-nft-deep-gray border-2 border-nft-light-gray rounded-xl p-2"
            >
              Learn more
            </ToggleButton>
          </div>
        </div>
        <div className="px-12">
          <Image
            src="/design-image.svg"
            width={684}
            height={616}
            alt="Design Image"
          />
        </div>
      </section>
    </main>
  );
}
