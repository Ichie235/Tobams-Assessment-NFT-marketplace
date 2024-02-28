import React from "react";
import CustomInput from "../../FormInput/CustomInput";
import { FormData } from "../../../../../type/FormData";
import Image from "next/image";

interface HeaderWithCustomInputProps {
  options: string[];
}

type brandIconProps = {
  src: string;
  alt: string;
};

export const nftIcons: brandIconProps[] = [
  {
    src: "/hero-icons/tiger-nft-icon.png",
    alt: "tiger nft",
  },
  {
    src: "/hero-icons/parrot-nft-icon.png",
    alt: "parrot nft",
  },
  {
    src: "/hero-icons/wolf-nft-icon.png",
    alt: "wolf nft",
  },
];

export const brandIcons: brandIconProps[] = [
  {
    src: "/brand-images/ritter-sport.svg",
    alt: "ritter sport",
  },
  {
    src: "/brand-images/nike.svg",
    alt: "nike icon",
  },
  {
    src: "/brand-images/Adidas.svg",
    alt: "Adidas icon",
  },
  {
    src: "/brand-images/holland.svg",
    alt: "holland icon",
  },
];

export default function HeaderWithCustomInput({
  options,
}: HeaderWithCustomInputProps) {
  return (
    <main className="flex flex-col items-center gap-4 px-3 md:px-32 lg:px-48 xl:px-0">
      <div className="text-2xl text-nft-deep-gray font-semibold">
        Non Fungible Tokens
      </div>
      <div>
        <Image
          src="hero-images/Frame.svg"
          width={837}
          height={219}
          alt="NFT Marketplace"
          className=""
        />
      </div>
      <div className="text-2xl text-nft-deep-gray font-semibold mt-4">
        Discover, collect and sell
      </div>
      <CustomInput
        placeholder="Items, collections and creators"
        options={options}
        className="bg-white text-black h-[56px] md:h-[84px]"
      />
      <div className="flex justify-center items-center md:hidden">
        {nftIcons.map((item, index) => (
          <div key={index}>
            <Image
              src={item.src}
              alt={item.alt}
              width={89}
              height={89}
              className=" cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-6 md:gap-20 mt-20 md:mt-64">
        {brandIcons.map((item, index) => (
          <div key={index}>
            <Image
              src={item.src}
              alt={item.alt}
              width={85}
              height={45}
              className=" cursor-pointer"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
