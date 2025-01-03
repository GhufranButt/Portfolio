import React from "react";

function Button() {
  return (
    <div>
      <button
        className="
          px-8 py-4 
          justify-center items-center 
          gap-2.5 
          rounded-[30px] 
          bg-white 
          text-black 
          shadow-md hover:shadow-lg
        "
      >
        Resume
      </button>
    </div>
  );
}

export default Button;
