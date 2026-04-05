import React from "react";
import Image from "next/image";

const TrustedCompany = () => {
  const logos = [
    "/company/airbnb.svg",
    "/company/booking.svg",
    "/company/vrbo.svg",
    "/company/tripadvisor.svg",
    "/company/agoda.svg",
    "/company/expedia.svg",
    "/company/hometogo.svg",
    "/company/tripping.svg",
    "/company/sonder.svg",
    "/company/hotels.svg",
  ];

  return (
    <section className="pt-8 sm:pt-10 lg:pt-12">
      <h4 className="text-lg sm:text-xl text-black font-semibold text-center mb-6 sm:mb-8 lg:mb-9 px-4">
        Trusted by leaders in 50+ industries
      </h4>

      <div className="px-4 sm:px-8 lg:px-24 overflow-hidden">
        <div className="flex w-max items-center gap-8 sm:gap-12 lg:gap-[62px] animate-marquee hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="shrink-0">
              <Image
                src={logo}
                alt="company logo"
                width={120}
                height={40}
                className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;