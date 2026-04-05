"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";

// ✅ Fix SSR issue (VERY IMPORTANT)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Review() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 👉 Prevent hydration error
  if (!mounted) return null;

  const reviews = [
    {
      id: 1,
      name: "Jenny Wilson",
      image: "/review/jenny.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Esther Howard",
      image: "/review/esther.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Robert Fox",
      image: "/review/robert.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      image: "/review/jenny.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "Esther Howard",
      image: "/review/esther.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      name: "Robert Fox",
      image: "/review/robert.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    focusOnSelect: true,
    beforeChange: (_, next) => setActive(next),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto overflow-hidden pt-[80px] md:pt-[120px] bg-white">
      
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-2xl md:text-[32px] text-black font-bold mb-4 md:mb-6">
          Check Our Clients <span className="text-pink-500">Review</span>
        </h2>

        <p className="max-w-[670px] mx-auto text-xs md:text-sm text-black font-medium leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {reviews.map((r, i) => (
          <div
            key={r.id}
            className="pt-10 md:pt-[60px] pb-20 md:pb-44 px-3 md:px-6 lg:px-10"
          >
            <div
              className={`w-full max-w-[530px] mx-auto rounded-2xl py-6 md:py-10 px-4 md:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-7 transition-all duration-300 ${
                active === i
                  ? "bg-white shadow-[0px_4px_77.4px_rgba(136,136,136,0.41)]"
                  : "bg-[#F6F6F6]"
              }`}
            >
              {/* Image */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={r.image}
                  alt={r.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base md:text-xl text-black font-bold">
                  {r.name}
                </h3>

                <p className="text-xs md:text-sm text-black font-medium mt-1 mb-2 md:mb-3 leading-relaxed">
                  {r.message}
                </p>

                <div className="flex text-orange-400 text-xs md:text-sm">
                  ★★★★☆
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}