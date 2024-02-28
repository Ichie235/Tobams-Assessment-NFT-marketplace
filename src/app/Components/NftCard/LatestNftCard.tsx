import Image from "next/image";

export default function LatestNftCard({}) {
  return (
    <main className="flex flex-col gap-6 px-6 py-6 border border-nft-light-gray rounded-3xl w-[448px] h-[767px]">
      <div>
        <Image
          src="/nft-images/nft-2.svg"
          width={400}
          height={520}
          alt="NFT Image"
          className="rounded-2xl lg:w-[350px] xl-w-[400]"
        />
      </div>
      <div className="flex gap-8">
        <p className="w-72 text-white font-bold flex-shrink-1">
          Dui accumsan leo vestibulum ornare eu
        </p>
        <div className="flex-grow bg-nft-purple-light-200 text-nft-purple-light-100 px-2 py-2 rounded-md">
          1.11 ETH
        </div>
      </div>
      <div className="flex  item-center gap-3 text-white text-sm font-light">
        <Image src="/timer-icon.svg" width={20} height={21} alt="timer-icon" />{" "}
        <div>22:59 min left</div>
      </div>
      <hr className="text-[#262840] mt-4" />
      <div className="flex justify-between">
        <div className="flex  item-center gap-3 text-white text-sm font-light">
          <Image
            src="/timer-icon.svg"
            width={20}
            height={21}
            alt="timer-icon"
          />{" "}
          <div className="text-nft-deep-gray">101 People are bidding</div>
        </div>
        <div className="flex  item-center gap-1 text-white text-sm font-light">
          <Image
            src="/heart-icon.svg"
            width={20}
            height={21}
            alt="timer-icon"
          />{" "}
          <div className="text-nft-deep-gray">101</div>
        </div>
      </div>
    </main>
  );
}
