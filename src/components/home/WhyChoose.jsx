import React from "react";
import Container from "../common/Container";
import { ArrowRight, Check } from "lucide-react";

const WhyChoose = () => {
  const whyChoose = [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team",
  ];

  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center bg-[#FDEBF0] border border-[#F8BECD] rounded-[33px] 
      pt-10 md:pt-[66px] pb-10 md:pb-[83px] 
      px-5 md:px-10 lg:pl-[90px] lg:pr-[38px]">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-5/12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mt-2.5">
            Few Reasons Why you Choose us?
          </h2>

          <p className="max-w-full lg:max-w-[457px] text-sm md:text-base text-black font-semibold mt-5 md:mt-[26px] mb-6 md:mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <ul className="flex flex-col space-y-3.5">
            {whyChoose.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-7 h-7 md:w-8 md:h-8 flex justify-center items-center text-[#ED3C6A] bg-[#FAC4D2] rounded-full">
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                <span className="text-sm md:text-base text-[#1E1E1E] font-bold">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="flex justify-center items-center mt-8 md:mt-[45px] space-x-2 px-5 md:px-6 py-3 md:py-[18px] bg-[#ED3C6A] rounded-sm text-sm text-white font-bold w-full sm:w-auto">
            Schedule A Meeting
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
          <img
            src="/ChooseBanner.png"
            alt="bannerImage"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;