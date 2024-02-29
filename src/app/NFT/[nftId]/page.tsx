import { notFound } from "next/navigation";
import Image from "next/image";
import { NftLatestproject, NftProjectProps, PopularNFTproject } from "../../../../library/nftData";
import ToggleButton from "@/app/Components/Button/ToggleButton";
import PopularNftCard from "@/app/Components/NftCard/PopularNftCard";

type Params = {
  params: {
    nftId: string;
  };
};
export default function NftProjects({ params: { nftId } }: Params) {
  const projectDetails: NftProjectProps | undefined = NftLatestproject.find(
    (p) => p.slug === nftId
  );

  if (!projectDetails) {
    // Handle case when project is not found
    return notFound();
  }

  return (
    <main className="flex flex-col items-start justify-center px-32 py-24">
      <section className="grid grid-cols-2 gap-24 border border-nft-light-gray rounded-xl p-3">
        <div>
          <Image
            src={projectDetails.image}
            width={684}
            height={885}
            alt={projectDetails.name}
            className="rounded-xl"
          />
        </div>
        <div>
          <h1 className="w-[469px] text-white font-semibold text-4xl mt-8">
            {projectDetails.name}
          </h1>
          <p className="text-nft-deep-gray my-4">
            {projectDetails.description}
          </p>
          <div className="flex gap-12 my-9">
            <div className="flex gap-1">
              <Image
                src={projectDetails.creatorImage}
                width={90}
                height={90}
                alt={projectDetails.name}
                className="rounded-full"
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
          <div className="bg-nft-white-on-black border border-[#262840] mr-10 px-6 py-4 rounded-2xl">
            <div className="grid grid-cols-2 gap-12 px-6">
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
            <Image src="/statictics.svg" width={495} height={227} alt="Image" />
          </div>
        </div>
      </section>
      <section>
      <div className="flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row lg:justify-center lg:items-center  gap-6">
          {PopularNFTproject.map((item, index) => (
            <div key={index}>
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
            </div>
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
  );
}
