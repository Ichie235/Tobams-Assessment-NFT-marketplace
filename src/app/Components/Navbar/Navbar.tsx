"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import ToggleButton from "../Button/ToggleButton";

export default function Navbar({}): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleOpenMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <nav className="fixed h-[4rem] text-[.875em] w-full z-50 top-0 left-0 px-10 py-3 mt-4 md:mt-0 md:px-16 lg:py-[48px] flex justify-between items-center">
      <div className="flex h-full basis-2/3 gap-[8rem] lg:items-center justify-between">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={213}
            height={34}
            alt="Company Logo"
            className="w-[213px] h-[34px]"
          />
        </Link>
        <ul className="hidden lg:flex h-full text-nft-deep-gray items-center gap-8 w-[40%]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>Roadmap</Link>
          </li>
          <li>
            <Link href={"#"}>Discover</Link>
          </li>
          <li>
            <Link href={"#"}>Community</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <ToggleButton
          type="button"
          className="w-[117px] h-[52px] text-nft-deep-gray border border-nft-light-gray rounded-xl  cursor-pointer"
        >
          <Link href="#" role="link">
            Contact
          </Link>
        </ToggleButton>
        <ToggleButton
          type="button"
          className="w-[145px] h-[52px] bg-nft-purple-blue-gr text-white rounded-xl cursor-pointer"
        >
          <Link href="#" role="link">
            My Account
          </Link>
        </ToggleButton>
      </div>
      <button
        onClick={handleOpenMobileMenu}
        className="lg:hidden flex flex-col gap-[2px] justify-center items-center z-10 absolute right-7 top-5"
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-nft-royal-blue-gr block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <aside
        className={
          "lg:hidden fixed bg-[#262840] top-0 right-0 w-[62%]  flex flex-col justify-evenly gap-4 p-[30px] ease-in-out duration-1000 z-0 " +
          (isMobileMenuOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex gap-2"></div>

        <Link href="#" onClick={handleOpenMobileMenu} className="text-base">
          Home
        </Link>
        <Link href="#" onClick={handleOpenMobileMenu} className="text-base">
          Roadmap
        </Link>
        <Link href="#" onClick={handleOpenMobileMenu} className="text-base">
          Discover
        </Link>
        <Link href="#" onClick={handleOpenMobileMenu} className="text-base">
          Community
        </Link>
        <ToggleButton
          type="button"
          className="p-4 bg-nft-purple-blue-gr text-white rounded-xl cursor-pointer"
          onClick={handleOpenMobileMenu}
        >
          <Link href="#">Contact</Link>
        </ToggleButton>
        <ToggleButton
          type="button"
          className="p-4 bg-nft-purple-blue-gr text-white rounded-xl cursor-pointer"
          onClick={handleOpenMobileMenu}
        >
          <Link href="#">My Account</Link>
        </ToggleButton>
      </aside>
    </nav>
  );
}
