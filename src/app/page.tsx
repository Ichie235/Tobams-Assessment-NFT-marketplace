import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import LatestNftCard from "./Components/NftCard/LatestNftCard";
import {
  NftLatestproject,
  PopularNFTproject,
  TopNFTproject,
} from "../../library/nftData";
import ToggleButton from "./Components/Button/ToggleButton";
import Overline from "./Components/OverlineSection/Overline";
import PopularNftCard from "./Components/NftCard/PopularNftCard";
import Link from "next/link";
import EllipseRing from "./Components/Hero/Ellipse/EllipseRing";
import Footer from "./Components/Footer/Footer";
import TopNftLowerPriceCard from "./Components/TopNftComponent/TopNftLowerPriceCard";
import TopNFT from "./Components/TopNftComponent/TopNFT";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <EllipseRing />
      <Hero />
      <section className="mt-60 md:mt-96 lg:mt-[31.25rem] h-auto">
        <h1 className="text-white text-2xl md:text-4xl text-center mt-12 mb-16 lg:mb-24 ">
          Latest live auctions
        </h1>
        <div className="flex  gap-6">
          {NftLatestproject.map((item, index) => (
            <Link key={index} href={`/NFT/${item.slug}`}>
              <LatestNftCard
                id={item.id}
                name={item.name}
                price={item.price}
                creatorImage=""
                image={item.image}
                time={item.time}
                bidersIcon={item.bidersIcon}
                bidersNumber={item.bidersNumber}
                likes={item.likes}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* OVERLINE SECTION */}
      <section>
        <Overline
          title=" Sapien ipsum scelerisque convallis fusce"
          description=" Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo."
          image="/design-image.svg"
        />
      </section>
      {/* TOP NFT SECTION */}
      <section className="mt-20">
        <TopNFT />
      </section>
      <Overline
        className="lg:flex lg:flex-row-reverse gap-16"
        title=" Habitant tristique aliquam in vel scelerisque"
        description="Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo."
        image="/design-image-2.svg"
      >
        <div className="flex gap-3 my-6">
          <div className="flex flex-col gap-2">
            <Image src="/Group.svg" width={32} height={32} alt=" icon" />
            <p className="text-white text-xl">Sollicitudin sapien</p>
            <p className="text-nft-deep-gray">Cursus fermentum</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src="/icon.svg" width={32} height={32} alt=" icon" />
            <p className="text-white text-xl">Pulvinar metus</p>
            <p className="text-nft-deep-gray">Nunc sed</p>
          </div>
        </div>
      </Overline>
      <hr className="text-[#262840] my-14" />
      <section className="flex flex-col items-center gap-7 mx-2 md:mx-10 lg:mx-16 ">
      <p className="text-nft-deep-gray text-xl text-center font-semibold">OVERLINE</p>
        <h1 className="text-white text-4xl text-center mt-1">
          Most popular live auctions
        </h1>
        <div className="flex gap-3 flex-wrap ">
          <ToggleButton
            type="button"
            className="text-nft-deep-gray border-2 border-nft-light-gray rounded-xl px-1  transition-transform hover:scale-105"
          >
            Architecture
          </ToggleButton>
          <ToggleButton
            type="button"
            className="text-nft-deep-gray border-2 border-nft-light-gray rounded-xl px-1  transition-transform hover:scale-105"
          >
            Photography
          </ToggleButton>
          <ToggleButton
            type="button"
            className="text-nft-deep-gray border-2 border-nft-light-gray rounded-xl px-1  transition-transform hover:scale-105"
          >
            Games
          </ToggleButton>
          <ToggleButton
            type="button"
            className="text-nft-deep-gray border-2 border-nft-light-gray rounded-xl px-1  transition-transform hover:scale-105"
          >
            Music
          </ToggleButton>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row lg:justify-center lg:items-center  gap-6">
          {PopularNFTproject.map((item, index) => (
            <Link key={index} href={`/PopularNFT/${item.slug}`}>
              <PopularNftCard
                id={item.id}
                name={item.name}
                price={item.price}
                creatorImage={item.creatorImage}
                image={item.image}
                time={item.time}
                bidersIcon={item.bidersIcon}
                bidersNumber={item.bidersNumber}
                likes={item.likes}
              />
            </Link>
          ))}
        </div>
        <ToggleButton
          type="button"
          className="w-[170px] text-nft-deep-gray border-2 border-nft-light-gray rounded-xl px-1  transition-transform hover:scale-105 my-12"
        >
          Show more
        </ToggleButton>
      </section>
      <hr className="text-[#262840] my-5" />
      <Footer />
    </main>
  );
}
