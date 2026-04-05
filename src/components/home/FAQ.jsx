"use client";
import { useState } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import Container from "../common/Container";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes will be applied immediately, and billing will be adjusted accordingly.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Once canceled, you will continue to have access until the end of your current billing period. No additional charges will be made after that.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional details such as company name, VAT number, or address to your invoices. Simply update your billing information in your account settings.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is done on a monthly or yearly basis depending on your selected plan. You will be charged automatically at the start of each billing cycle.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your profile settings. After updating, you may need to verify the new email address before the change takes effect.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="w-full bg-[#F9FAFB] rounded-[16px] py-10 md:py-[74px] px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-black leading-tight">
            Frequently asked{" "}
            <span className="text-[#ED3C6A]">questions</span>
          </h2>

          <p className="text-sm sm:text-base md:text-[16px] text-black mt-3 md:mt-5 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-pink-200 py-4 md:py-6 cursor-pointer transition"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between text-left gap-4"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-sm sm:text-base md:text-[18px] font-semibold text-gray-900 leading-snug">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <CircleMinus className="text-pink-500 w-5 h-5" />
                  ) : (
                    <CirclePlus className="text-pink-500 w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer with animation */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3 md:mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-sm sm:text-base md:text-[16px] leading-6 md:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}