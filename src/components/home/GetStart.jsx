import React from "react";

const GetStart = () => {
  const GetStartCard = [
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
    <section className="max-w-[948px] mx-auto pt-[67px] pb-[84px]">
      <div className="text-center">
        <h2 className="text-[32px] text-black font-bold mb-[22px]">
          Getting Started is <span className="text-[#ED3C6A]">Easy</span>
        </h2>
        <p className="max-w-[700px] mx-auto text-sm text-black font-medium mb-[42px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex justify-between">
        {GetStartCard.map((item, i) => (
          <div>
            <div className="w-[285px] h-[192px] flex justify-center items-center border-2 border-[#FDEBF0] rounded-[9px] relative">
              <span className="w-[76px] h-[76px] border-[5px] border-[#ED3C6A] rounded-full absolute -top-[20px] -left-[20px] text-[30px] text-black font-medium text-center leading-[76px] ">
                {item.id}
              </span>
              <img key={i} src={item.icon} alt="icon" />
            </div>
            <h4 className="max-w-[250px] mx-auto text-xl text-black font-semibold text-center mt-[33px]">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStart;
