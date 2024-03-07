import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap  px-12 py-6 bg-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/logo.svg" alt="Koinx Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto justify-end ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow justify-end">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary text-[16px] font-semibold mr-10"
          >
            Crypto Taxes
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary text-[16px] font-semibold mr-10"
          >
            Free Tools
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-primary text-[16px] font-semibold  mr-10"
          >
            Resource Center
          </a>

          <a
            href="#"
            className="inline-block text-sm px-4 py-3 leading-none border rounded-[8px] bg-primary text-white mt-4 lg:mt-0 hover:bg-black Z"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
