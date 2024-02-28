import React from "react";
import CustomInput from "../../FormInput/CustomInput";
import { FormData } from "../../../../../type/FormData";
import Image from "next/image";

interface HeaderWithCustomInputProps {
  options: string[];
  onSubmit: (formData: FormData) => void;
  customInputClassName?: string;
}

export default function HeaderWithCustomInput({
  options,
  onSubmit,
  customInputClassName,
}: HeaderWithCustomInputProps) {
  return (
    <main className="flex flex-col items-center gap-4">
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
        className="bg-white text-black h-[84px]"
      />
    </main>
  );
}
