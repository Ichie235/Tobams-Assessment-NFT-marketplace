import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import LatestNftCard from "./Components/NftCard/LatestNftCard";
import { NftLatestproject } from "../../library/nftData";
import ToggleButton from "./Components/Button/ToggleButton";
import Overline from "./Components/OverlineSection/Overline";

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
      <Overline
        title=" Sapien ipsum scelerisque convallis fusce"
        description=" Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo."
        image="/design-image.svg"
      />
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
      <hr className="text-[#262840] my-8" />
    </main>
  );
}
