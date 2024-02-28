"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ToggleButton from "../Button/ToggleButton";
import EllipseRing from "./Ellipse/EllipseRing";

export default function Hero() {
  return (
    <main className="flex flex-col h-screen items-center">
      <EllipseRing />
    </main>
  );
}
