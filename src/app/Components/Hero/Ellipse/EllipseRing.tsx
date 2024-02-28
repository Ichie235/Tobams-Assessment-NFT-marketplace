"use client";
import Image from "next/image";
import EllipseCover from "../../../../../svg/EllipseCover";
import EllipseExtraLarge from "../../../../../svg/EllipseExtraLarge";
import EllipseExtraSmall from "../../../../../svg/EllipseExtraSmall";
import EllipseGrandParent from "../../../../../svg/EllipseGrandParent";
import EllipseLarge from "../../../../../svg/EllipseLarge";
import EllipseMainCover from "../../../../../svg/EllipseMainCover";
import EllipseMedium from "../../../../../svg/EllipseMedium";
import EllipseMediumTwo from "../../../../../svg/EllipseMediumTwo";
import EllipseParent from "../../../../../svg/EllipseParent";
import EllipseSmall from "../../../../../svg/EllipseSmall";

export default function EllipseRing() {
  return (
    <main className="mt-[-235px] md:-mt-20 lg:mt-0 w-full  flex flex-col items-center absolute">
      <EllipseMainCover className="absolute" />
      <EllipseCover className="absolute " />
      <EllipseGrandParent className="absolute" />
      <EllipseParent className="absolute top-20" />
      <EllipseExtraLarge className="absolute top-40" />
      <EllipseLarge className="absolute top-60" />
      <EllipseMedium className="absolute top-80" />
      <EllipseMediumTwo className="absolute top-[25rem]" />
      <EllipseSmall className="absolute top-[30rem]" />
      <EllipseExtraSmall className="absolute top-[35rem]" />

      <Image
        src="/hero-images/elephant-nft-icon.png"
        width={189}
        height={189}
        alt="elephant nft icon"
        className="hidden md:block absolute  md:left-[2rem] md:top-[45rem] xl:top-[40rem] lg:left-[3rem] xl:left-[4.8rem]  animation-spin"
      />

      <div className="hidden md:block w-[189px] h-[189px] ">
        <Image
          src="/hero-images/wolf-nft-icon.png"
          width={189}
          height={189}
          alt="wolf nft icon"
          className="absolute  md:right-[-20rem] top-24 lg:left-[55rem] xl:left-[68rem] animation-pulse"
        />
      </div>
      <div className="hidden md:block w-[189px] h-[189px] relative">
        <Image
          src="/hero-images/parrot-nft-icon.png"
          width={189}
          height={189}
          alt="parrot nft icon"
          className="absolute top-[20rem] md:top-[15rem] md:right-[-20rem] lg:right-[-24rem] xl:right-[-40rem]"
        />
      </div>
      <div className="hidden md:block w-[89px] h-[89px] relative">
        <Image
          src="/hero-images/toad-nft-icon.svg"
          width={89}
          height={89}
          alt="toad nft icon"
          className="absolute top-[30rem] right-[-23rem] animation-spin"
        />
      </div>
      <div className="hidden md:block w-[189px] h-[189px] relative">
        <Image
          src="/hero-images/tiger-nft-icon.png"
          width={189}
          height={189}
          alt="tiger nft icon"
          className="absolute top-[9rem] md:top-[-14rem] md:left-[-20rem] lg:left-[-28rem] xl:left-[-40rem] animation-bounce"
        />
      </div>
      <div className="hidden md:block w-[89px] h-[89px] relative">
        <Image
          src="/hero-images/whale-nft-icon.png"
          width={89}
          height={89}
          alt="whale nft icon"
          className="absolute bottom-[-25rem] right-[45rem]"
        />
      </div>
    </main>
  );
}
