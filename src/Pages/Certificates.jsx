import React from "react";
import Reactangle1Img from "../Assets/Rectangle 1.png";
import Reactangle2Img from "../Assets/Rectangle 2.png";
import Reactangle3Img from "../Assets/Rectangle 3.png";
import Reactangle4Img from "../Assets/Rectangle 4.png";
import Reactangle5Img from "../Assets/Rectangle 5.png";
import Reactangle6Img from "../Assets/Rectangle 6.png";
import Reactangle7Img from "../Assets/Rectangle 7.png";

const certificates = [
  {
    url: Reactangle1Img,
    alt: "Certificate 1",
  },
  {
    url: Reactangle2Img,
    alt: "Certificate 2",
  },
  {
    url: Reactangle3Img,
    alt: "Certificate 3",
  },
  {
    url: Reactangle4Img,
    alt: "Certificate 4",
  },
  {
    url: Reactangle5Img,
    alt: "Certificate 5",
  },
  {
    url: Reactangle6Img,
    alt: "Certificate 6",
  },
  {
    url: Reactangle7Img,
    alt: "Certificate 7",
  },
];

function Certificates() {
  return (
    <div className="bg-[#FFF] flex flex-col items-center py-4">
      <div className="sm:mt-12">
        <h1
          className=" 
        font-bold text-[#17153D] 
        text-[20px] mt-6 
        sm:text-[25px] sm:font-bold 
        lg:text-[35px] 
        xl:text-5xl xl:mt-24 "
        >
          Certificates
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2 sm:gap-4 xl:mt-7">
        {certificates.map((certificate, index) => (
          <img
            key={index}
            src={certificate.url}
            alt={certificate.alt}
            className="
            object-cover rounded-lg shadow-lg
            h-[110px] w-[110px]
            sm:w-28 sm:h-28 sm:mt-4
            lg:w-36 lg:h-36 
            xl:h-[200px] xl:w-[200px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
