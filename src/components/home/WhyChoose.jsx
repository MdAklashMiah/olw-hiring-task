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
      <div className="flex items-center bg-[#FDEBF0] border border-[#F8BECD] rounded-[33px] pt-[66px] pb-[83px] pl-[90px] pr-[38px]">
        <div className="w-5/12">
          <h2 className="text-4xl text-black font-bold mt-2.5">
            Few Reasons Why you Choose us?
          </h2>
          <p className="max-w-[457px] text-sm text-black font-semibold mt-[26px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
          <ul className="felx flex-column space-y-3.5">
            {whyChoose.map((item) => (
              <li className="flex items-center space-x-2">
                {" "}
                <span className="w-8 h-8 flex justify-center items-center text-[#ED3C6A] bg-[#FAC4D2] rounded-full ">
                  <Check className={`w-5 h-5 `} />
                </span>{" "}
                <span className="text-base text-[#1E1E1E] font-bold">{item}</span>
              </li>
            ))}
          </ul>
          <button className="flex justify-center items-center mt-[45px] space-x-2.5 px-6 py-[18px] bg-[#ED3C6A] rounded-sm text-sm text-white font-bold">
            Schedule A Meeting{" "}
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>
        <div className="w-7/12">
          <img src="/ChooseBanner.png" alt="bannerImage" />
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
