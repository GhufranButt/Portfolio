import React from "react";
import ReactImg from "../Assets/React.svg";
import JavascriptImg from "../Assets/Javascript.svg";
import JavaImg from "../Assets/Java.svg";
import CPlusImg from "../Assets/C++.svg";
import CImg from "../Assets/C.svg";
import SqlImg from "../Assets/Mysql.svg";

const LogoImages = [
  {
    url: CImg,
    name: "C",
    progress: 80,
  },
  {
    url: CPlusImg,
    name: "C++",
    progress: 70,
  },
  {
    url: JavascriptImg,
    name: "Java Script",
    progress: 85,
  },
  {
    url: JavaImg,
    name: "Java",
    progress: 60,
  },
  {
    url: ReactImg,
    name: "React",
    progress: 90,
  },
  {
    url: SqlImg,
    name: "My Sql",
    progress: 75,
  },
];

function Experience() {
  return (
    <div className="bg-[#17153D] py-8  xl:py-28">
      <div className="flex justify-center">
        <h1 className="font-bold text-white text-[20px] mt-7 sm:text-[25px] sm:mt-16 lg:text-[35px] xl:text-5xl">
          EXPERIENCE
        </h1>
      </div>
      <div
        className="
      grid grid-cols-2 justify-center
      pr-10 pl-10 mt-6 gap-4
      sm:gap-3 sm:mt-7 
      md:flex md:flex-row md:mb-9
      lg:gap-3 lg:mt-11 
      xl:mt-16 xl:gap-7"
      >
        {LogoImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-[18px] sm:text-sm lg:text-[15px] xl:text-[23px] text-white font-medium mt-1">
              {image.name}
            </span>
            <img
              src={image.url}
              className="h-[42px] w-[42px] sm:h-[40px] sm:w-[40px] lg:h-[70px] lg:w-[90px] lg:mt-3 xl:h-[150px] xl:w-[150px] xl:mt-6 object-contain"
            />
            <div className="w-[88px] h-[3px] mt-2 sm:w-20 sm:h-1 md:w-24 md:h-1 lg:w-32 xl:w-52 xl:h-2 bg-gray-200 rounded-[2px] dark:bg-gray-700">
              <div
                className="h-[3px] w-[35px] sm:w-16 sm:h-1 md:w-24 md:h-1 lg:w-[28px] xl:h-[8px] bg-blue-600 rounded-[2px]"
                style={{ width: `${image.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
