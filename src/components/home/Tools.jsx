import React from "react";
import Image from "next/image";

const Tools = () => {
  const logos = [
    "/tools/pricelabs.png",
    "/tools/wheelhouse.png",
    "/tools/beyondpricing.png",
    "/tools/hostfully.png",
    "/tools/geesty.png",
    "/tools/lodgify.png",
    "/tools/hostfully.png",
    "/tools/geesty.png",
    "/tools/lodgify.png",
  ];

  return (
    <section className="pt-12 sm:pt-16 lg:pt-[84px]">
      {/* Heading */}
      <div className="text-center pb-12 sm:pb-16 lg:pb-[136px] px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-black font-bold mb-4 sm:mb-6">
          Our <span className="text-[#ED3C6A]">Tools</span>
        </h2>

        <p className="max-w-[700px] mx-auto text-sm sm:text-base text-black font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Logo Cards */}
      <div className="bg-[#F6F6F6] pt-8 sm:pt-10 lg:pt-[38px] pb-12 sm:pb-16 lg:pb-[85px] px-4">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {logos.map((item, i) => (
            <div
              key={i}
              className="w-full min-h-[120px] sm:min-h-[130px] lg:h-[140px] flex justify-center items-center bg-white rounded-[11px] hover:shadow-[0px_4px_30.3px_0px_rgba(255,138,168,0.28)] transition-shadow duration-300"
            >
              <Image
                src={item}
                alt="tool logo"
                width={180}
                height={60}
                className="w-[140px] sm:w-[160px] lg:w-[180px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;