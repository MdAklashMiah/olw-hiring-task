"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Container from "../common/Container";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Freebie",
      price: "$0",
      description:
        "Ideal for individuals who need quick access to basic features.",
      highlighted: false,
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
        "Ideal for individuals who who need advanced features and tools for client work.",
      highlighted: true,
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
      highlighted: false,
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
    <section className="pt-[74px]">
        <Container>

      <div className=" mx-auto px-6 text-center">
        <h2 className="text-[40px] text-[#191D23] font-bold mb-4">
          Airbnb Assistant{" "}
          <span className="text-[#ED3C6A]">pricing</span>
        </h2>

        <p className="text-[#191D23] text-xl font-normal mb-[38px]">
          Choose a plan that's right for you
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-[#191D23]">Pay Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              yearly ? "bg-[#ED3C6A]" : "bg-[#040921]/32"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                yearly ? "translate-x-6" : ""
              }`}
            />
          </button>
          <div className="flex items-center">

          <span className="text-[#191D23] mr-4">Pay Yearly</span>
          <img className="relative -bottom-2" src="/curvearrow.png" alt="arrowicon" />
          <span className="text-[#ED3C6A] text-lg font-medium ml-2 relative top-5">
            Save 25%
          </span>
          </div>


        </div>

        {/* Cards */}
        <div className="mt-[90px] flex justify-between ">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border border-[#FAC4D2] rounded-2xl px-6 py-10 text-left transition-all duration-300 group hover:bg-[#ED3C6A] `}
            >
              <h3 className="text-[22px] font-bold text-[#191D23] group-hover:text-white">
                {plan.name}
              </h3>

              <p
                className={`max-w-[330px] mt-2 text-base font-normal group-hover:text-white`}
              >
                {plan.description}
              </p>

              <div className="mt-5 flex items-center gap-2 group-hover:text-white">
                <span className="text-[56px] font-semibold">
                  {plan.price}
                </span>
                <span
                  className={`text-base font-light`}
                >
                  / Month
                </span>
              </div>

              <button
                className={`mt-5 w-full py-3 rounded-[4px] font-medium border border-[#ED3C6A] group-hover:bg-white group-hover:text-[#ED3C6A]`}
              >
                Get Started Now
              </button>

              <ul className="mt-10 space-y-3">
                {plan.features.map(([included, text], i) => (
                  <li key={i} className="flex items-center gap-3">
                    {included ? (
                        <span className="w-8 h-8 flex justify-center items-center bg-[#FAC4D2] rounded-full ">
                            <Check
                              className={`w-5 h-5 `}
                            />
                        </span>
                    ) : (
                        <span className="w-8 h-8 flex justify-center items-center bg-[#F7F8F9] rounded-full">
                            <X className="w-5 h-5 text-gray-400" />
                        </span>
                    )}

                    <span
                      className={`text-base ${
                    included ? "text-[#191D23]" : "text-gray-400"
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