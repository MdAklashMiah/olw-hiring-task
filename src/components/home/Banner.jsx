import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:h-[672px] mt-[80px] sm:mt-[90px]">
      {/* Background Image */}
      <Image
        src="/heroImage.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Airbnb Assistants For
        </h1>

        <h3 className="text-black text-2xl sm:text-3xl lg:text-[38px] font-medium mt-2">
          Property Management
        </h3>

        <p className="max-w-xl lg:max-w-2xl text-black font-medium text-sm sm:text-base mx-auto mt-6 sm:mt-8 mb-8 sm:mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <button className="flex items-center justify-center gap-2 mx-auto mb-5 sm:mb-7 px-4 sm:px-6 py-3 sm:py-[18px] bg-[#ED3C6A] rounded-sm text-sm text-white font-bold whitespace-nowrap">
          Schedule A Meeting
          <ArrowRight size={18} />
        </button>

        <Link
          className="text-sm sm:text-base text-black font-medium underline"
          href="/"
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
};

export default Banner;