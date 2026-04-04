import React from "react";

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
    <div className="pt-12">
      <h4 className="text-xl text-black font-semibold text-center mb-9">
        Trusted by leaders in 50+ industries
      </h4>

      <div className="px-24 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-[62px] hover:[animation-play-state:paused]">

          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="logo" />
          ))}

          {logos.map((logo, i) => (
            <img key={`dup-${i}`} src={logo} alt="logo" />
          ))}

        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;