import React from "react";
import AboutImg from "../Assets/pana.svg";
import Button from "../Components/Button";

function About() {
  return (
    <div className="bg-white flex flex-col py-4 xl:py-24">
      <div className="flex justify-center">
        <h1
          className="
        text-[#17153D] font-poppins font-bold
        text-[20px] mt-4 
        sm:text-[25px] sm:mt-10 
        lg:text-[35px] 
        xl:text-5xl"
        >
          WHAT WE DO
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-16 xl:gap-36">
        <img
          src={AboutImg}
          className="
          w-40 h-40 mt-4
          sm:h-[130px] sm:w-[130px] 
          md:h-[160px] md:w-[160px]
          lg:h-[280px] lg:w-[280px]
          xl:h-[350px] xl:w-[350px]"
        />
        <div className="flex flex-col items-center gap-1 md:items-start xl:gap-4 xl:mt-24">
          <h1 className="text-[#17153D] font-poppins font-bold text-[15px] mt-2 md:text-[19px] xl:text-[40px]">
            ABOUT ME
          </h1>
          <p
            className="
            text-[12px] pl-12 pr-6
            sm:text-[9px] sm:leading-[1.5] sm:max-w-[300px]
            md:text-[13px] md:pl-1 md:pr-1
            lg:text-[16px] lg:leading-[1.2] lg:max-w-[420px] 
            xl:text-[23px] xl:leading-[1.5] xl:max-w-[680px]"
          >
            Lorem ipsum dolor sit amet consectetur. Enim non viverra nunc nunc.
            Faucibus vitae ipsum viverra dui volutpat amet nec urna fames.
            Egestas amet pretium blandit cras elit sit lacus facilisis. Orci
            tristique felis vulputate facilisis mi. Donec morbi adipiscing
            pulvinar at ridiculus venenatis nunc aliquam. Et nec enim odio ipsum
            posuere augue amet.
          </p>
          <button
            className="bg-[#17153D] text-white hover:bg-[#0F0D29]
          text-[8px] rounded-[14px] px-3 py-2 
          sm:text-[7px] sm:rounded-[10px] sm:px-3 sm:py-1
          md:text-[10px] md:rounded-[16px] md:px-4 md:py-2
          lg:text-[14px] lg:rounded-[18px] lg:px-5 lg:py-2 lg:mt-1
          xl:text-[20px] xl:px-7 xl:py-4 xl:rounded-[35px]"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
