"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Blog",
    "Resources",
  ];

  const getPath = (link) =>
    link === "Home" ? "/" : `/${link.toLowerCase()}`;

  const handleLinkClick = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 bg-white z-50 shadow-[0px_4px_62px_rgba(250,196,210,0.63)] px-5 md:px-0">
      <Container>
        <div className="flex items-center justify-between py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={40}
              className="w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={getPath(link)}
                onClick={() => setActive(link)}
                className={`relative transition-all duration-300 text-sm lg:text-base xl:text-lg
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#ED3C6A]
                after:transition-all after:duration-300
                hover:after:w-full
                ${
                  active === link
                    ? "text-[#ED3C6A] font-bold after:w-full"
                    : "text-[#1E1E1E] font-normal hover:text-[#ED3C6A] hover:font-bold"
                }`}
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-3 lg:py-[18px] bg-[#ED3C6A] rounded-sm text-sm text-white font-bold whitespace-nowrap">
            Schedule A Meeting
            <ArrowRight size={18} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={getPath(link)}
                onClick={() => handleLinkClick(link)}
                className={`text-base transition-all duration-300 ${
                  active === link
                    ? "text-[#ED3C6A] font-bold"
                    : "text-[#1E1E1E]"
                }`}
              >
                {link}
              </Link>
            ))}

            <button className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-[#ED3C6A] rounded-sm text-sm text-white font-bold">
              Schedule A Meeting
              <ArrowRight size={18} />
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;