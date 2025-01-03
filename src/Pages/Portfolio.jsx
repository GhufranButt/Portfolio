import React from "react";
import rectangle1 from "../Assets/Rectangle 12.png";
import rectangle2 from "../Assets/Rectangle 13.png";

function Portfolio() {
  return (
    <div className="bg-[#17153D] py-7 md:py-11 lg:py-14 xl:py-28">
      <div className="flex justify-center">
        <h1
          className="
        font-bold text-white 
        text-[20px] 
        sm:text-[25px] mt-2 sm:font-bold 
        md:mt-6
        lg:text-[35px] lg:mt-10
        xl:mb-24"
        >
          Portfolios
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center gap-3 mt-4 md:gap-4 md:mt-7 lg:gap-7 lg:mt-10 xl:gap-10">
        <div className="relative xl:h-[500px]">
          <img
            src={rectangle1}
            className="
          h-[190px] w-[170px]
          sm:h-[200px] sm:w-[200px]
          md:h-[220px] md:w-[220px]
          lg:h-[340px] lg:w-[340px]
          xl:h-[500px] xl:w-[500px]"
          />

          <div
            className="
          flex flex-col items-center justify-center bg-[#D9D9D9E5]
          h-[68px] w-[170px] absolute bottom-0 
          sm:w-[200px] sm:h-[70px]
          md:w-[220px] md:h-[75px]
          lg:w-[340px] lg:h-[120px]
          xl:absolute xl:bottom-0 xl:h-[170px] xl:w-[500px]"
          >
            <h1
              className="text-[#17153D] font-bold
            text-[8px]
            sm:text-[9px]
            md:text-[11px]  
            lg:text-[14px]
            xl:text-xl"
            >
              TLR THERAPEUTICS
            </h1>
            <p
              className="text-[#343434] text-center
             text-[6px] px-2
             sm:text-[5px] sm:px-3
             md:text-[7px] md:px-3
             lg:text-[10px] lg:px-2
             xl:text-sm xl:px-8"
            >
              Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
              nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
              fames.
            </p>
            <button
              className=" 
            bg-[#17153D] text-white
             text-[6px] rounded-[10px] px-[5px] py-[3px]
             sm:text-[6px] sm:rounded-[9px] sm:px-[7px] sm:py-[4px] sm:mt-1
             md:text-[7px] md:rounded-[10px] md:px-[8px] md:py-[5px]
             lg:text-[9px] lg:rounded-[12px] lg:px-[13px] lg:py-[7px]
             xl:mt-4 xl:text-[16px] xl:px-4 xl:py-3 xl:rounded-[24px]"
            >
              View Site
            </button>
          </div>
        </div>
        <div className="relative xl:h-[500px]">
          <img
            src={rectangle2}
            className="
          h-[190px] w-[170px]
          sm:h-[200px] sm:w-[200px]
          lg:h-[340px] lg:w-[340px]
          md:h-[220px] md:w-[220px]
          xl:h-[500px] xl:w-[500px]"
          />

          <div
            className="
          flex flex-col items-center justify-center bg-[#D9D9D9E5]
          h-[65px] w-[170px] absolute bottom-0 
          sm:w-[200px] sm:h-[70px]
          lg:w-[340px] lg:h-[120px]
          md:w-[220px] md:h-[75px]
          xl:absolute xl:bottom-0 xl:h-[170px] xl:w-[500px]"
          >
            <h1
              className="text-[#17153D] font-bold
            text-[8px]
            sm:text-[9px]
            md:text-[11px]
            lg:text-[14px]
            xl:text-xl"
            >
              TLR THERAPEUTICS
            </h1>
            <p
              className="text-[#343434] text-center
             text-[6px] px-2
            sm:text-[5px] sm:px-3
            md:text-[7px] md:px-3
            lg:text-[10px] lg:px-2
            xl:text-sm xl:px-8"
            >
              Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc
              nunc. Faucibus vitae ipsum viverra dui volutpat amet nec urna
              fames.
            </p>
            <button
              className=" 
            bg-[#17153D] text-white
             text-[6px] rounded-[10px] px-[5px] py-[3px]
             sm:text-[6px] sm:rounded-[9px] sm:px-[7px] sm:py-[4px] sm:mt-1
             md:text-[7px] md:rounded-[10px] md:px-[8px] md:py-[5px]
             lg:text-[9px] lg:rounded-[12px] lg:px-[13px] lg:py-[7px]
             xl:mt-4 xl:text-[16px] xl:px-4 xl:py-3 xl:rounded-[24px]"
            >
              View Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
