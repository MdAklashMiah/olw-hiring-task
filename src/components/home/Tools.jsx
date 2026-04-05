import React from "react";


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
    <section className="pt-[84px]">
      <div className="text-center pb-[136px]">
        <h2 className="text-[32px] text-black font-bold mb-6">
          Our <span className="text-[#ED3C6A]">Tools</span>
        </h2>
        <p className="max-w-[700px] mx-auto text-sm text-black font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="bg-[#F6F6F6] pt-[38px] pb-[85px] ">
            <div className="max-w-[960px] mx-auto flex flex-wrap justify-between space-y-10">
                {logos.map((item, i)=>(

                <div className="w-[290px] h-[140px] flex justify-center items-center bg-white rounded-[11px] hover:shadow-[0px_4px_30.3px_0px_rgba(255,138,168,0.28)] transition-shadow duration-300">
                    <img key={i} src={item} alt="logo" />
                </div>
                ))}
            </div>
      </div>
    </section>
  );
};

export default Tools;
