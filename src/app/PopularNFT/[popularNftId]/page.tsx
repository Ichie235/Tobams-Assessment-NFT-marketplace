import { notFound } from "next/navigation";
import Image from "next/image";
import {
  NftProjectProps,
  PopularNFTproject,
} from "../../../../library/nftData";
import ToggleButton from "@/app/Components/Button/ToggleButton";
import PopularNftCard from "@/app/Components/NftCard/PopularNftCard";
import Footer from "@/app/Components/Footer/Footer";
import CopyIcon from "../../../../svg/CopyIcon";
import ShareIcon from "../../../../svg/ShareIcon";
import HeartIcon from "../../../../svg/HeartIcon";
import Link from "next/link";

type Params = {
  params: {
    popularNftId: string;
  };
};
export default function PopularNftProjects({ params: { popularNftId } }: Params) {
  const projectDetails: NftProjectProps | undefined = PopularNFTproject.find(
    (p) => p.slug === popularNftId
  );

  if (!projectDetails) {
    // Handle case when project is not found
    return notFound();
  }

  return (
    <>
      <main className="relative flex flex-col items-start justify-center px-6 py-32 md:px-11   lg:px-20 ">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 border border-nft-light-gray rounded-xl p-3">
          <div>
            <Image
              src={projectDetails.image}
              width={684}
              height={885}
              alt={projectDetails.name}
              className="rounded-xl w-[250px] h-[300px] md:w-[450px] md:h-[600px] lg:w-[684px] lg:h-[100vh] mt-2 md:mt-0 mx-auto lg:mx-0"
            />
          </div>
          <span className="absolute  -right-1 md:right-4 lg:right-12 top-48">
            <HeartIcon />
          </span>
          <span className=" absolute -right-1 md:right-4 lg:right-12 top-[17rem]">
            <CopyIcon />
          </span>
          <span className="absolute -right-1 md:right-4 lg:right-12 top-[23rem]">
            <ShareIcon />
          </span>
          <div className="mx-2 md:mx-5 lg:mx-0">
            <h1 className="w-full xl:w-[469px] text-white font-semibold text-2xl md:text-3xl xl:text-4xl mt-3 md:mt-8">
              {projectDetails.name}
            </h1>
            <p className="text-nft-deep-gray my-4 lg:px-1 xl:px-0">
              {projectDetails.description}
            </p>
            <div className="flex flex-col  md:flex-row gap-5 md:gap-9 xl:gap-12 my-5 xl:my-9">
              <div className="flex -ml-7">
                <Image
                  src={projectDetails.creatorImage}
                  width={90}
                  height={90}
                  alt={projectDetails.name}
                  className="rounded-full  lg:w-[70px] lg:h-[70px] xl:w-[90px] xl:h-[90px]"
                />
                <div className="flex flex-col justify-center  gap-2 text-white">
                  <p className="text-nft-deep-gray">{projectDetails.creator}</p>
                  <p className="leading-3">{projectDetails.creatorEmail}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/collection-icon.svg"
                  width={40}
                  height={40}
                  alt={projectDetails.name}
                  className="rounded-full"
                />
                <div className="flex flex-col  justify-center gap-2 text-white">
                  <p className="text-nft-deep-gray">Collection</p>
                  <p className="leading-3">Afterlife</p>
                </div>
              </div>
            </div>
            <div className="bg-nft-white-on-black border border-[#262840] md:mr-10 px-2 py-8 md:px-6 md:py-4 rounded-2xl">
              <div className="grid grid-cols-2 gap-12 px-3 md:px-6">
                <div>
                  <p className="text-nft-deep-gray">Current Price</p>
                  <h1 className="text-3xl text-white font-bold">
                    5.25 <span className="text-white text-sm">ETH</span>
                  </h1>
                </div>
                <div>
                  <p className="text-nft-deep-gray text-sm">Time left</p>
                  <h1 className="text-lg text-white font-bold">22:59 min</h1>
                  <p className="text-nft-deep-gray text-sm">
                    (01.01.2022 - 01:40:47)
                  </p>
                </div>
              </div>
              <div className="my-6 px-6">
                <ToggleButton
                  type="button"
                  className="w-full bg-nft-royal-blue-gr cursor-pointer transition-transform hover:scale-105 text-white font-semibold"
                >
                  Place a bid
                </ToggleButton>
              </div>
            </div>
            <div className="my-6 px-1">
              <Image
                src="/statictics.svg"
                width={495}
                height={227}
                alt="Image"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-7  my-36 ">
          <p className="text-nft-deep-gray text-base text-center">OVERLINE</p>
          <h1 className="text-white text-4xl text-center mt-1">
            Most popular live auctions
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-3 xl:flex xl:flex-row xl:justify-center xl:items-center  gap-4">
            {PopularNFTproject.map((item, index) => (
               <Link key={index} href={`/PopularNFT/${item.slug}`}>
                <PopularNftCard
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
          <ToggleButton
            type="button"
            className="w-[170px] text-nft-deep-gray border-2 border-nft-light-gray rounded-xl px-1  transition-transform hover:scale-105 my-12"
          >
            Show more
          </ToggleButton>
        </section>
      </main>
      <Footer />
    </>
  );
}
