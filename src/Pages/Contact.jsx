import React from "react";
import ContactImg from "../Assets/rafiki.svg";

function Contact() {
  return (
    <div className="bg-[#17153D] py-6 sm:py-7 md:py-8 xl:py-16">
      <div className="flex justify-center">
        <h1
          className="font-bold text-white 
         text-[20px] mt-1
         sm:text-[25px] sm:mt-2
         md:text-[30px] md:mt-3
         lg:text-[35px]  
         xl:text-5xl"
        >
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 mt-4 sm:gap-15 sm:mt-1 md:gap-12 md:mt-2 xl:gap-32 xl:mt-16 ">
        <div className="flex flex-col items-center gap-2 md:gap-3 sm:gap-1 lg:gap-2 xl:gap-3  ">
          <div className="flex flex-col">
            <label
              className="
             text-white font-poppins font-normal
             text-[11px]
             sm:text-[10px] 
             md:text-[14px]
             lg:text-[20px] 
             xl:text-[40px]"
            >
              Full Name
            </label>
            <input
              type="text"
              className="
               border-b border-white bg-transparent focus:outline-none text-white font-poppins font-normal
               text-[8px] 
               sm:text-[10px]
               md:text-[14px] 
               lg:text-[20px] lg:py-2 
               xl:text-[35px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="
             text-white font-poppins font-normal
             text-[11px] 
             sm:text-[10px] 
             md:text-[14px]
             lg:text-[20px] 
             xl:text-[40px]"
            >
              E-mail
            </label>
            <input
              type="text"
              className="
               border-b border-white bg-transparent focus:outline-none text-white font-poppins font-normal
               text-[8px] 
               sm:text-[10px] 
               md:text-[14px]
               lg:text-[20px] lg:py-2 
               xl:text-[35px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="
             text-white font-poppins font-normal
               text-[11px] 
             sm:text-[10px] 
             md:text-[14px]
             lg:text-[20px] 
             xl:text-[40px]"
            >
              Message
            </label>
            <input
              type="text"
              className="
               border-b border-white bg-transparent focus:outline-none text-white font-poppins font-normal
               text-[8px] 
               sm:text-[10px] 
               md:text-[14px]
               lg:text-[20px] lg:py-2 
               xl:text-[35px]"
            />
          </div>
          <button
            className="justify-center items-center 
          text-[8px] rounded-[14px] px-9 py-0.5 mt-1 
          sm:px-[45px] sm:py-[2px] sm:rounded-[12px] sm:text-[10px] sm:gap-1 sm:mt-2
          md:px-[59px] md:py-[3px] md:rounded-[15px] md:text-[15px] md:gap-1 md:mt-2 
          lg:gap-2 lg:text-[15px] lg:px-[110px] lg:py-[13px] lg:mt-4 lg:rounded-[40px] 
          xl:text-[22px] xl:px-[200px] bg-white text-[#17153D] font-bold"
          >
            Contact Us
          </button>
        </div>
        <div className="flex justify-center sm:h-[170px] sm:w-[170px] md:h-[250px] md:w-[250px] lg:h-[350px] lg:w-[350px] xl:h-[450px] xl:w-[450px]">
          <img
            src={ContactImg}
            className="h-[120px] sm:h-[170px] sm:w-[170px] md:h-[250px] md:w-[250px] lg:mt-1 lg:h-[350px] lg:w-[350px] xl:h-[450px] xl:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
