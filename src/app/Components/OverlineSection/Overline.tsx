import React, { ReactNode } from "react";
import ToggleButton from "../Button/ToggleButton";
import Image from "next/image";

interface OverlineProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  children?: ReactNode;
}

export default function Overline({
  title,
  description,
  image,
  className,
  children,
}: OverlineProps) {
  return (
    <section
      className={`mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-2 items-center mx-5 md:mx-10 lg:mx-16 xl:mx-32 ${className}`}
    >
      <div>
        <p className="text-nft-deep-gray text-xl font-semibold">OVERLINE</p>
        <h1 className="w-full lg:w-[590px] text-white text-4xl md:text-6xl mt-5 md:mt-6">
          {title}
        </h1>
        <p className="w-full md:w-[450px] mt-8 text-nft-deep-gray">
          {description}
        </p>
        <div>{children}</div>
        <div className="flex gap-4 mt-5">
          <ToggleButton
            type="button"
            className="w-36 bg-nft-deep-blue-gr p-2 text-white rounded-xl"
          >
            Get started
          </ToggleButton>
          <ToggleButton
            type="button"
            className="w-32 text-nft-deep-gray border-2 border-nft-light-gray rounded-xl p-2"
          >
            Learn more
          </ToggleButton>
        </div>
      </div>
      <div className="px-12">
        <Image src={image} width={684} height={616} alt="Design Image" />
      </div>
    </section>
  );
}
