import React from "react";
import serviceimg from '../../assets/service.png';

const TextSlider = () => {
  return (
    <div
      className="h-[65vh] top-0 relative"
      style={{
        backgroundImage: `url(${serviceimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col">
        <div className="px-12 py-40 contrast-200 h-[65vh]">
          <h1 className="text-6xl font-bold text-white animate-slideInLeft">
            Excellence in Service, </h1>
            <h2 className=" text-6xl font-bold animate-slideInRight text-green-600">
              Innovation in Delivery
            </h2>
         
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
