"use client"

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState("HOME");
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Blog",
    "Resources",
  ];
  const getPath = (link) => (link === "Home" ? "/" : `/${link.toLowerCase()}`);
  return (
    <header className="shadow-[0px_4px_62px_rgba(250,196,210,0.63)]"> 
      <Container>
        <div className="flex justify-between items-center py-5">
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>

          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={getPath(link)}
                onClick={() => setActive(link)}
                className={`relative transition ${
                  active === link
                    ? "text-[#ED3C6A] text-lg font-bold"
                    : "text-[#1E1E1E] font-normal text-lg leading-[150%] hover:text-[#ED3C6A] hover:font-bold"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>

          <button className="flex space-x-2.5 px-6 py-[18px] bg-[#ED3C6A] rounded-sm text-sm text-white font-bold">Schedule A Meeting <span><ArrowRight /></span></button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
