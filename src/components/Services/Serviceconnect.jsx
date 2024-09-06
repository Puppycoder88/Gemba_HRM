import React from 'react';
import servicel from '../../assets/servicel.jpeg';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Serviceconnect = () => {
  return (
    <div
    className="h-[65vh] top-0 relative"
    style={{
      backgroundImage: `url(${servicel})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="px-8 pt-24 contrast-200 bg-black bg-opacity-25 h-[65vh]">
  <div className="flex justify-between ">
    <p className="text-6xl font-bold text-start text-white ">Connect with Our <br /><span className="text-green-600">Experts</span></p>
    <button className=" my-12 bg-blue-700 hover:bg-blue-900 flex text-center text-white rounded-3xl w-40 h-12 font-semibold items-center justify-evenly"> <NavLink to="/contact" > Contact Us </NavLink> <FaArrowRightLong className=" text-xl"/></button>
  </div>
  <p className='text-white  font-semibold text-xl'>Leave the Worries to Us. Focus on Your Business. <br /> We'll Handle the Rest.</p>
  </div>
  </div>
  )
}

export default Serviceconnect