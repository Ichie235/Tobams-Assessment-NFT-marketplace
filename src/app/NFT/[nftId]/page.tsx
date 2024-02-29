import { notFound } from "next/navigation";
import Image from "next/image";
import { NftLatestproject, NftProjectProps } from "../../../../library/nftData";

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
      <div className="grid grid-cols-2 gap-24 border border-nft-light-gray rounded-xl p-3">
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
        </div>
      </div>
    </main>
  );
}
