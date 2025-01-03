import React from "react";
import HarisImg from "../Assets/Haris.png";
import twitter from "../Assets/Twitter.svg";
import facebook from "../Assets/Facebook.svg";
import linkedin from "../Assets/Linkedin.svg";
import { FaBars } from "react-icons/fa";

const socialLinks = [
  {
    url: twitter,
    alt: "Twitter",
  },
  {
    url: facebook,
    alt: "Facebook",
  },
  {
    url: linkedin,
    alt: "LinkedIn",
  },
];

function Intro({ sideBarToggle, setSideBarToggle }) {
  return (
    <div className="flex flex-col gap-7 bg-[#17153D]">
      <div className="relative top-1 left-1">
        <nav className="flex justify-between items-center lg:hidden">
          <FaBars
            className="text-white text-1xl md:text-2xl cursor-pointer hover:text-gray-300"
            onClick={() => setSideBarToggle(!sideBarToggle)}
          />
          {sideBarToggle && (
            <ul className="absolute right-2 top-0 flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <li key={index} className="flex justify-center items-center">
                  <img
                    src={link.url}
                    alt={link.alt}
                    className="h-4 w-4 md:h-5 md:w-5 cursor-pointer pr-1"
                  />
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
      <nav className="hidden sm:hidden lg:flex justify-around xl:pt-14 pt-10">
        <div
          className="
        text-white font-bold font-[Poppins] 
        text-[12px] pr-36 
        sm:text-[17px] sm:pr-20 
        lg:text-[22px] lg:pr-40 
        xl:text-[33px] xl:pr-[490px]"
        >
          GH.
        </div>

        <div className="pl-8 flex gap-5 sm:gap-3 sm:pl-40 items-center">
          {socialLinks.map((link, index) => (
            <img
              key={index}
              src={link.url}
              alt={link.alt}
              className="sm:h-3 sm:w-3 lg:h-4 lg:w-6 xl:h-5 xl:w-5 cursor-pointer hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </nav>
      <div className="flex flex-col justify-around gap-2 mt-16 sm:flex-row">
        <div className="flex flex-col justify-center items-center sm:items-start sm:gap-1 md:items-start lg:items-start xl:gap-4">
          <h1 className="text-white font-bold font-[Poppins] text-[20px] sm:text-[18px] md:text-[20px] lg:text-4xl xl:text-6xl">
            GHUFRAN ALI
          </h1>
          <h1 className="text-white font-poppins text-[13px] sm:text-[13px] md:text-[13px] lg:text-[22px] xl:text-3xl">
            EXPERT IN JS
          </h1>
          <div>
            <button
              className="
            flex justify-center items-center bg-white text-black shadow-md hover:shadow-lg
            text-[8px] rounded-[14px] px-2 py-1 mt-1
            sm:text-[7px] sm:px-2 sm:py-1 sm:gap-1 sm:rounded-[10px] sm:font-medium
            md:text-[9px] md:px-2.5 md:py-1.5 md:gap-1 md:rounded-[15px]
            lg:px-4 lg:py-2 lg:text-[12px] lg:rounded-[30px] 
            xl:text-[15px] xl:px-6 gap-2"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={HarisImg}
            className="h-[120px] sm:h-[160px] md:h-[180px] lg:h-[209px] xl:h-[446px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
