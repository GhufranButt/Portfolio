import React from "react";
import Rounded1 from "../Assets/Ellipse 1.png";
import Rounded2 from "../Assets/Ellipse 2.png";
import Stars from "../Assets/Stars.svg";
import Rating from "../Assets/Rating.svg";

function Testimonial() {
  return (
    <div
      className="o
    bg-white py-5 md:py-9 lg:py-16 xl:py-24"
    >
      <div className="flex justify-center">
        <h1 className=" font-bold text-[#17153D] text-[20px] mt-2 sm:text-[25px] sm:mt-9 lg:text-[35px] xl:text-5xl">
          Testimonial
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 mt-2 sm:gap-2 sm:mt-6 md:gap-3 md:flex-row lg:gap-5 xl:mt-16">
        <div
          className="bg-[#17153D]
         h-[190px] w-[170px] rounded-[15px] 
         sm:h-[200px] sm:w-[200px] sm:rounded-2xl 
         md:h-[230px] md:w-[210px] md:rounded-2xl
         lg:h-[355px] lg:w-[345px] lg:rounded-3xl
         xl:h-[500px] xl:w-[488px]"
        >
          <div className="flex justify-center mt-2 sm:mt-3 lg:mt-6">
            <img
              src={Rounded2}
              className="
              h-[79px] w-[79px] 
              sm:h-[80px] sm:w-[80px]
              md:h-[90px] md:w-[90px] 
              lg:h-[125px] lg:w-[125px] 
              xl:h-[190px] xl:w-[190px]"
            />
          </div>
          <div className="flex justify-center font-bold text-white text-[15px] md:text-[14px] lg:text-[25px] xl:text-[35px]">
            <h1>Leticia Kutch</h1>
          </div>
          <div
            className=" flex text-[#B9C8F3] text-center
           text-[8px] px-2
           sm:text-[21px] sm:mt-2 
           md:text-[10px] md:mt-1
           lg:text-[16px] lg:mt-6 lg:px-4
           xl:text-[24px]"
          >
            Sapiente occaecati exercitationem quasi eum corporis sit. Aut
            consectetur maxime debitis quam voluptatem aut consequatur
            voluptatum.
          </div>
          <div
            className="
          flex justify-center 
           gap-2 h-[8px] mt-[6px]  
           sm:h-[10px] sm:mt-2
            md:h-[14px] md:mt-1       
            lg:h-[18px] lg:mt-3
            xl:h-[24px]"
          >
            <img src={Rating} />
            <img src={Stars} />
          </div>
        </div>
        <div
          className="bg-[#17153D]
         h-[190px] w-[170px] rounded-[15px] 
         sm:h-[200px] sm:w-[200px] sm:rounded-2xl
         md:h-[230px] md:w-[210px] md:rounded-2xl
         lg:h-[355px] lg:w-[345px] lg:rounded-3xl
         xl:h-[500px] xl:w-[488px]"
        >
          <div className="flex justify-center mt-2 sm:mt-3 lg:mt-6">
            <img
              src={Rounded1}
              className="
              h-[79px] w-[79px] 
              sm:h-[80px] sm:w-[80px]
              md:h-[90px] md:w-[90px] 
              lg:h-[125px] lg:w-[125px] 
              xl:h-[190px] xl:w-[190px]"
            />
          </div>
          <div className="flex justify-center font-bold text-white text-[15px] md:text-[14px] lg:text-[25px] xl:text-[35px]">
            <h1>Leticia Kutch</h1>
          </div>
          <div
            className=" flex text-[#B9C8F3] text-center
           text-[8px] px-2
           sm:text-[10px] sm:mt-2 
           lg:text-[16px] lg:mt-6 lg:px-4
           xl:text-[24px]"
          >
            Sapiente occaecati exercitationem quasi eum corporis sit. Aut
            consectetur maxime debitis quam voluptatem aut consequatur
            voluptatum.
          </div>
          <div
            className="
          flex justify-center 
           gap-2 h-[8px] mt-[6px]  
           sm:h-[10px] sm:mt-2
          md:h-[14px] md:mt-1
           lg:h-[18px] lg:mt-3
            xl:h-[24px]"
          >
            <img src={Rating} />
            <img src={Stars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
