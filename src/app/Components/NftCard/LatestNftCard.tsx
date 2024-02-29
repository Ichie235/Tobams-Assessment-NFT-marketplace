import Image from "next/image";
import { NftProjectProps } from "../../../../library/nftData";

export default function LatestNftCard({
  name,
  image,
  likes,
  price,
  bidersIcon,
  bidersNumber,
  time,
}: NftProjectProps) {
  return (
    <main className="flex flex-col md:gap-4 lg:gap-6 px-2 py-4 md:px-6 md:pt-2 md:pb-4 border border-nft-light-gray rounded-3xl w-[280px] md:w-full cursor-pointer">
      <div>
        <Image
          src={image}
          width={400}
          height={520}
          alt={name}
          className="rounded-2xl w-[250px] h-[350px] md:w-[400px] md:h-[520px] mx-auto  md:mx-0  transition-transform hover:scale-105"
        />
      </div>
      <div className="flex justify-between">
        <p className="w-72 text-white font-bold">{name}</p>
        <div className="bg-nft-purple-light-200 text-sm text-center text-nft-purple-light-100 px-1 py-2 rounded-md">
          {price}
        </div>
      </div>
      <div className="flex  item-center gap-3 text-white text-sm font-light">
        <Image src="/timer-icon.svg" width={20} height={21} alt="timer-icon" />{" "}
        <div className="text-white">{time}</div>
      </div>
      <hr className="text-[#262840] mt-4" />
      <div className="flex justify-between">
        <div className="flex  item-center gap-2 text-white text-sm font-light">
          <Image src={bidersIcon} width={60} height={32} alt="bidder-icon" />{" "}
          <div className="text-nft-deep-gray">
            {bidersNumber} People are bidding
          </div>
        </div>
        <div className="flex  item-center justify-center gap-1 text-white text-sm font-light">
          <Image
            src="/heart-icon.svg"
            width={20}
            height={21}
            alt="heart icon"
          />{" "}
          <div className="text-nft-deep-gray">{likes}</div>
        </div>
      </div>
    </main>
  );
}
