import React from "react";
import Container from "../common/Container";

const GetInTouch = () => {
  return (
    <section className="pt-5">
      <Container>
        <div className="w-full flex justify-center ">
          <div className="w-[1240px]">
            <div className="bg-[#F9FAFB] py-12 rounded-[16px] text-center">
              {/* Avatars */}
              <div className="flex justify-center -space-x-3 mb-6">
                <img src="/getintouch.png" alt="avatar" />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                Still have questions?
              </h3>

              {/* Description */}
              <p className="text-[16px] text-gray-500 mb-6">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>

              {/* Button */}
              <button className="bg-[#ED3C6A] hover:bg-pink-600 text-white text-[16px] font-medium px-5 py-2.5 rounded-[8px] transition">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
