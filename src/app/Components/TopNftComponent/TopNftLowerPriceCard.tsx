"use client";
import Image from "next/image";
import { NftProjectProps } from "../../../../library/nftData";
import ToggleButton from "../Button/ToggleButton";

export default function TopNftLowerPriceCard({
  image,
  name,
  time,
  price,
  bidersNumber,
}: NftProjectProps) {
  return (
    <>
      <main className="flex flex-col items-center md:items-start gap-5  md:gap-3 md:flex-row py-10 md:py-0 border border-nft-light-gray md:border-0 shadow-2xl rounded-xl transition-transform hover:scale-105">
        <Image
          src={image}
          width={120}
          height={120}
          alt={name}
          className="lg:w-[70px] xl:[120px]"
        />
        <div className="flex flex-col gap-3 px-6 md:px-0">
          <p className="w-[180px] md:w-full xl:w-[232px] text-white">{name}</p>
          <div className="flex justify-between">
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
          <div className="flex justify-between">
            <div className="flex  item-center gap-2 text-white text-sm font-light">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
