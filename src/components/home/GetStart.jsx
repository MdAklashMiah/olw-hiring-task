import React from "react";
import Image from "next/image";

const GetStart = () => {
  const getStartCard = [
    {
      id: "01",
      icon: "/getStarted/friend.png",
      title: "Add requirements & sign up today",
    },
    {
      id: "02",
      icon: "/getStarted/Group.png",
      title: "Connect with your CSM & onboarding team",
    },
    {
      id: "03",
      icon: "/getStarted/support.png",
      title: "Meet your STR Assistant next week",
    },
  ];

  return (
    <section className="max-w-[948px] mx-auto pt-12 sm:pt-16 lg:pt-[67px] pb-12 sm:pb-16 lg:pb-[84px] px-4">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-black font-bold mb-4 sm:mb-[22px]">
          Getting Started is{" "}
          <span className="text-[#ED3C6A]">Easy</span>
        </h2>

        <p className="max-w-[700px] mx-auto text-sm sm:text-base text-black font-medium mb-10 sm:mb-12 lg:mb-[42px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-6">
        {getStartCard.map((item, i) => (
          <div key={i}>
            <div className="w-full min-h-[180px] lg:h-[192px] flex justify-center items-center border-2 border-[#FDEBF0] rounded-[9px] relative bg-white">
              <span className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[76px] lg:h-[76px] border-[5px] border-[#ED3C6A] rounded-full absolute -top-[18px] -left-[18px] text-2xl lg:text-[30px] text-black font-medium text-center leading-[50px] sm:leading-[60px] lg:leading-[66px] bg-white">
                {item.id}
              </span>

              <Image
                src={item.icon}
                alt={item.title}
                width={90}
                height={90}
                className="w-[70px] sm:w-[80px] lg:w-[90px] h-auto"
              />
            </div>

            <h4 className="max-w-[250px] mx-auto text-lg sm:text-xl text-black font-semibold text-center mt-6 sm:mt-8 lg:mt-[33px] leading-snug">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStart;