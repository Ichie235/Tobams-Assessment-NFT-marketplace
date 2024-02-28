"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleButton from "../Button/ToggleButton";
import FormInput from "../FormInput/FormInput";

type SocialMediaIconProps = {
  src: string;
  alt: string;
};

export const socialMediaIcons: SocialMediaIconProps[] = [
  {
    src: "/social-icons/Facebook-icon.svg",
    alt: "facebook icon",
  },
  {
    src: "/social-icons/linkedin-icon.svg",
    alt: "instagram icon",
  },
  {
    src: "/social-icons/github-icon.svg",
    alt: "LinkedIn icon",
  },
  {
    src: "/social-icons/X-icon.svg",
    alt: "instagram icon",
  },
  {
    src: "/social-icons/Instagram-icon.svg",
    alt: "X icon",
  },
];

export default function Footer({}): JSX.Element {
  const [textValue, setTextValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "textValue") {
      setTextValue(value);
    }
  };
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 border border-nft-light-gray rounded-[20px] lg:border-0 mx-5 md:mx-10 lg:mx-16 xl:mx-32">
      <div className="flex flex-col lg:border lg:border-nft-light-gray rounded-l-[20px] py-12 px-9 md:px-12">
        <div>
          <Image
            src="/footer-logo.svg"
            width={213}
            height={34}
            alt="Footer-logo"
          />
          <div className="flex flex-col gap-5 md:flex-row lg:gap-6 xl:gap-10 mt-8 lg:mt-[296px] text-nft-deep-gray">
            <Link href="#">Support</Link>
            <Link href="#">Term of service</Link>
            <Link href="#">License</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white lg:border lg:border-nft-light-gray px-12 lg:py-12">
        <Link href="#">Auctions</Link>
        <Link href="#">Roadmap</Link>
        <Link href="#">Discover</Link>
        <Link href="#">Community</Link>
        <ToggleButton
          type="button"
          className="w-36 h-14 bg-nft-royal-blue-gr rounded-xl mt-9"
        >
          My account
        </ToggleButton>

        <div className="flex gap-6 mt-16">
          {socialMediaIcons.map((item, index) => (
            <div key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                width={24}
                height={24}
                className=" cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:border lg:border-nft-light-gray rounded-r-[20px] py-12 px-9 md:px-12">
        <div>
          <p className="text-nft-deep-gray">
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
            velit, sed egestas in. Id nam semper dolor tellus vulputate eget
            turpis.
          </p>
          <div className="relative flex gap-10 mt-6 lg:mt-[220px]">
            <FormInput
              type="text"
              name="textValue"
              title=""
              value={textValue}
              onChange={handleChange}
              placeholder="Newsletter"
              className="rounded-xl bg-white text-black mt-4 lg:mt-0"
            />
            <ToggleButton
              type="submit"
              className=" absolute right-5 bottom-[2px] font-semibold text-nft-royal-blue rounded-xl mt-9"
            >
              Sign in
            </ToggleButton>
          </div>
        </div>
      </div>
    </main>
  );
}
