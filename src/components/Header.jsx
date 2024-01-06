import React, { useEffect, useState } from "react";
import logoImg from "../assets/images/svg/logo.svg"
import instaImg from "../assets/images/svg/insta.svg"
import twitterImg from "../assets/images/svg/twitter.svg"
import discordImg from "../assets/images/svg/discord.svg"
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden-while-loading");
    } else if (!isMobileMenuOpen) {
      document.body.classList.remove("overflow-hidden-while-loading");
    }
  }, [isMobileMenuOpen]);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="bg_nav">
      <div className="container xl:max-w-[1140px] h-[100px] lg:h-[80px] px-4 sm:px-8 xl:px-0 mx-auto flex items-center justify-between">
        <a href="/">
         <img src={logoImg} alt="logo-img" />
        </a>
        <div className="hidden lg:flex items-center">
          <a
            href="#home"
            className="text-base text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:text-[#FF7D01]"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:text-[#FF7D01] px-5"
          >
            About
          </a>
          <a
            href="#team"
            className="text-base text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:text-[#FF7D01]"
          >
            Team
          </a>
          <a
            href="#roadMap"
            className="text-base text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:text-[#FF7D01] px-5"
          >
            RoadMap
          </a>
          <a
            href="#faqs"
            className="text-base text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:text-[#FF7D01]"
          >
            FAQ 
          </a>

          <div className="flex gap-3 ps-12 pe-8">
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={instaImg} alt="insta-img" />
            </a>
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={twitterImg} alt="twitter" />
            </a>
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={discordImg} alt="discord" />
              </a>
            </div>
                    <div className="flex">
                <div className="button_border button_border-hover-style">
                  <span className="block bg-black p-1">
                    <a href="#connect-wallet">
                      <button className="common_btn text-base ff_black_sans text-white px-[12px] py-[6px] rounded-[2px]">Connect Wallet</button>
                    </a>
                  </span>
                </div>
              </div>
        </div>
        <div className="lg:hidden custom_index">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black z-50 flex justify-center items-center transition-all duration-300">
          <div className="text-black py-4 flex justify-center items-center navbar_custom_height">
            <ul className="flex flex-col items-center animate-fadeIn">
              <li>
                <a
                  href="#home"
                  className="text-xl text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#about"
                  className="text-xl text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#roadmap"
                  className="text-xl text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  Roadmap
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#faqs"
                  className="text-xl text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#team"
                  className="text-xl text-white ff_M_plus font-normal transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  Team
                </a>
              </li>
              <div className="flex gap-3 pt-5">
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={instaImg} alt="insta-img" />
            </a>
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={twitterImg} alt="twitter" />
            </a>
            <a href="/">
              <img className="transition-all duration-300 ease-in-out hover:scale-125" src={discordImg} alt="discord" />
              </a>
            </div>
               <div className="flex justify-start mt-4">
                <div className="button_border button_border-hover-style">
                  <span className="block bg-black p-1">
                    <a href="#connect-wallet">
                      <button className="common_btn text-base ff_black_sans text-white px-[12px] py-[6px] rounded-[2px]">Connect Wallet</button>
                    </a>
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
