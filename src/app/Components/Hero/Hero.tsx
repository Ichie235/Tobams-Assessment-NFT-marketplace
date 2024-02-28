"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ToggleButton from "../Button/ToggleButton";
import EllipseRing from "./Ellipse/EllipseRing";
import HeaderWithCustomInput from "./HeaderWithCustomInput/HeaderWithCustomInput";
import { FormData } from "../../../../type/FormData";

const options = ["Option 1", "Option 2", "Option 3"];

interface HeroProps {
  onSubmit: (formData: FormData) => void; // Use FormData from HeaderWithCustomInput
}
export default function Hero({ onSubmit }: HeroProps) {
  const handleSubmit = (formData: FormData) => {
    console.log("Submitted:", formData);
  };
  return (
    <main className="flex flex-col h-screen items-center">
      {/* <div className="">
        <EllipseRing />
      </div> */}
      <div className="z-50">
        <HeaderWithCustomInput options={options} onSubmit={onSubmit} />
      </div>
    </main>
  );
}
