import Image from "next/image";
import { NftProjectProps } from "../../../../library/nftData";

export default function PopularNftCard({
  name,
  image,
  likes,
  price,
  bidersNumber,
  time,
}: NftProjectProps) {
  return (
    <main className="flex flex-col md:gap-4 lg:gap-6 px-2 py-2 border-t-0 border-r-0 border-l-0 shadow-2xl border-b border-nft-light-gray rounded-3xl w-[280px] md:w-full  transition-transform hover:scale-105 cursor-pointer">
      <div>
        <Image
          src={image}
          width={212}
          height={355}
          alt={name}
          className="rounded-2xl w-[212px] h-[355px] mx-auto"
        />
      </div>
      <div className="flex justify-between">
        <p className="w-[212] text-white font-bold px-3">{name}</p>
      </div>
      <div className="flex justify-between  text-white text-sm font-light">
        <div className="flex justify-center items-center">
          <Image
            src="/timer-icon.svg"
            width={15}
            height={15}
            alt="timer-icon"
          />
          <div className="text-white text-sm">{time}</div>
        </div>
        <div className="bg-nft-purple-light-200 text-sm text-center text-nft-purple-light-100 px-1 py-2 rounded-md">
          {price}
        </div>
      </div>
      <hr className="text-[#262840] mt-4 mb-2" />
      <div className="flex justify-between">
        <div className="text-nft-deep-gray px-2 text-xs">
          {bidersNumber} People are bidding
        </div>

        <div className="flex  item-center justify-center gap-1 text-white text-sm font-light">
          <Image
            src="/heart-icon.svg"
            width={15}
            height={15}
            alt="heart icon"
          />{" "}
          <div className="text-nft-deep-gray text-xs">{likes}</div>
        </div>
      </div>
    </main>
  );
}
