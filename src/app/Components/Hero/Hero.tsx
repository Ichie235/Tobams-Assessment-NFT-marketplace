"use client";
import HeaderWithCustomInput from "./HeaderWithCustomInput/HeaderWithCustomInput";
import { FormData } from "../../../../type/FormData";

const options = ["Option 1", "Option 2", "Option 3"];

export default function Hero() {
  const handleSubmit = (formData: FormData) => {
    console.log("Submitted:", formData);
  };
  return (
    <main className="flex flex-col h-screen items-center">
      <div className="z-40 mt-44 md:mt-48 lg:mt-56">
        <HeaderWithCustomInput options={options} />
      </div>
    </main>
  );
}
