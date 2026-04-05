"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Container from "../common/Container";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Freebie",
      price: "$0",
      description:
        "Ideal for individuals who need quick access to basic features.",
      features: [
        [true, "20,000+ of PNG & SVG graphics"],
        [true, "Access to 100 million stock images"],
        [false, "Upload custom icons and fonts"],
        [false, "Unlimited Sharing"],
        [false, "Upload graphics & video in up to 4k"],
        [false, "Unlimited Projects"],
        [false, "Instant Access to our design system"],
        [false, "Create teams to collaborate on designs"],
      ],
    },
    {
      name: "Professional",
      price: yearly ? "$18" : "$25",
      description:
        "Ideal for individuals who need advanced features and tools for client work.",
      features: [
        [true, "20,000+ of PNG & SVG graphics"],
        [true, "Access to 100 million stock images"],
        [true, "Upload custom icons and fonts"],
        [true, "Unlimited Sharing"],
        [true, "Upload graphics & video in up to 4k"],
        [true, "Unlimited Projects"],
        [false, "Instant Access to our design system"],
        [false, "Create teams to collaborate on designs"],
      ],
    },
    {
      name: "Enterprise",
      price: yearly ? "$75" : "$100",
      description:
        "Ideal for businesses who need personalized services and security for large teams.",
      features: [
        [true, "20,000+ of PNG & SVG graphics"],
        [true, "Access to 100 million stock images"],
        [true, "Upload custom icons and fonts"],
        [true, "Unlimited Sharing"],
        [true, "Upload graphics & video in up to 4k"],
        [true, "Unlimited Projects"],
        [true, "Instant Access to our design system"],
        [true, "Create teams to collaborate on designs"],
      ],
    },
  ];

  return (
    <section className="pt-12 sm:pt-16 lg:pt-[74px]">
      <Container>
        <div className="mx-auto px-4 sm:px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-[#191D23] font-bold mb-4">
            Airbnb Assistant{" "}
            <span className="text-[#ED3C6A]">pricing</span>
          </h2>

          <p className="text-[#191D23] text-base sm:text-lg lg:text-xl font-normal mb-8 lg:mb-[38px]">
            Choose a plan that's right for you
          </p>

          {/* Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <span className="text-[#191D23] text-sm sm:text-base">
              Pay Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                yearly ? "bg-[#ED3C6A]" : "bg-[#040921]/32"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                  yearly ? "translate-x-6" : ""
                }`}
              />
            </button>

            <div className="flex items-center flex-wrap justify-center gap-2">
              <span className="text-[#191D23] text-sm sm:text-base">
                Pay Yearly
              </span>

              <Image
                className="relative top-1"
                src="/curvearrow.png"
                alt="arrow icon"
                width={40}
                height={20}
              />

              <span className="text-[#ED3C6A] text-sm sm:text-lg font-medium">
                Save 25%
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 sm:mt-16 lg:mt-[90px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="border border-[#FAC4D2] rounded-2xl px-5 sm:px-6 py-8 sm:py-10 text-left transition-all duration-300 group hover:bg-[#ED3C6A]"
              >
                <h3 className="text-xl sm:text-[22px] font-bold text-[#191D23] group-hover:text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm sm:text-base font-normal text-[#191D23] group-hover:text-white">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-end gap-2 group-hover:text-white">
                  <span className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-none">
                    {plan.price}
                  </span>
                  <span className="text-sm sm:text-base font-light mb-1">
                    / Month
                  </span>
                </div>

                <button className="mt-5 w-full py-3 rounded-[4px] font-medium border border-[#ED3C6A] text-[#ED3C6A] group-hover:bg-white group-hover:text-[#ED3C6A] transition-all duration-300">
                  Get Started Now
                </button>

                <ul className="mt-8 sm:mt-10 space-y-3">
                  {plan.features.map(([included, text], i) => (
                    <li key={i} className="flex items-center gap-3">
                      {included ? (
                        <span className="w-8 h-8 flex justify-center items-center bg-[#FAC4D2] rounded-full shrink-0">
                          <Check className="w-5 h-5" />
                        </span>
                      ) : (
                        <span className="w-8 h-8 flex justify-center items-center bg-[#F7F8F9] rounded-full shrink-0">
                          <X className="w-5 h-5 text-gray-400" />
                        </span>
                      )}

                      <span
                        className={`text-sm sm:text-base ${
                          included
                            ? "text-[#191D23]"
                            : "text-gray-400"
                        } group-hover:text-white`}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}