"use client";

import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full mt-16 md:mt-20 border-t border-[#D6D6D6] ">
      <Container>
        
        {/* Top Section */}
        <div className="w-full py-10 md:py-16 px-5 lg:px-0">
          
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            
            {/* Left */}
            <div>
              <div className="mb-5">
                <Image
                  src="/footer-logo.png"
                  alt="logo"
                  width={120}
                  height={40}
                  priority
                />
              </div>

              <p className="text-[#52525B] text-sm leading-6 mb-6 md:mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis.
              </p>

              <div className="flex gap-4 md:gap-5 text-gray-700 text-lg">
                <FaTwitter className="cursor-pointer hover:text-black transition" />
                <FaFacebookF className="cursor-pointer hover:text-black transition" />
                <FaInstagram className="cursor-pointer hover:text-black transition" />
                <FaGithub className="cursor-pointer hover:text-black transition" />
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-[16px] mb-4">Company</h4>
              <ul className="space-y-2 md:space-y-3 text-[#18181B] text-sm">
                <li className="cursor-pointer hover:text-pink-500 transition">About</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Features</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Works</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Career</li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-semibold text-[16px] mb-4">Help</h4>
              <ul className="space-y-2 md:space-y-3 text-[#18181B] text-sm">
                <li className="cursor-pointer hover:text-pink-500 transition">Customer Support</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Delivery Details</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Terms & Conditions</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Privacy Policy</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-[16px] mb-4">Resources</h4>
              <ul className="space-y-2 md:space-y-3 text-[#18181B] text-sm">
                <li className="cursor-pointer hover:text-pink-500 transition">Free eBooks</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Development Tutorial</li>
                <li className="cursor-pointer hover:text-pink-500 transition">How to – Blog</li>
                <li className="cursor-pointer hover:text-pink-500 transition">Youtube Playlist</li>
              </ul>
            </div>

          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-[#230B41] text-white text-center py-3 md:py-4 text-xs md:text-sm px-4">
        © Copyright 2024, All Rights Reserved by XYZ
      </div>
    </footer>
  );
}