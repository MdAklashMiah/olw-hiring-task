import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import { serviceCard } from "../../../constant/ServiceCard";

const Services = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 px-5 lg:px-0">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[32px] text-black font-bold mb-3.5">
          Our <span className="text-[#ED3C6A]">Service</span>
        </h2>

        <p className="max-w-[700px] text-sm sm:text-base text-black font-medium mx-auto text-center mb-10 sm:mb-12 lg:mb-14 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCard.map((item, index) => (
            <div
              key={index}
              className="border border-[#FAC4D2] rounded-[13px] pt-8 sm:pt-10 lg:pt-12 px-6 sm:px-7 lg:px-8 pb-6 lg:pb-[30px] hover:border-transparent hover:bg-white hover:shadow-[0px_4px_90px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <Image
                src={item.icons}
                alt={item.title}
                width={60}
                height={60}
                className="w-[50px] sm:w-[60px] h-auto"
              />

              <h3 className="max-w-[215px] text-xl sm:text-2xl text-[#1E1E1E] leading-[125%] font-bold mt-6 sm:mt-8 mb-3.5">
                {item.title}
              </h3>

              <p className="max-w-[306px] text-sm sm:text-base text-black font-medium mb-7 sm:mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button className="border border-[#ED3C6A] rounded-[44px] text-[#ED3C6A] px-5 sm:px-6 py-2.5 text-sm font-medium hover:bg-[#ED3C6A] hover:text-white transition-all duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;