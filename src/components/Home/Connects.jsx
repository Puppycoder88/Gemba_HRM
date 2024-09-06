import React from 'react';
import homeimg from '../../assets/homeimg.jpg';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6"; 

const Connects = () => {
  return (
    <div
    className=" h-[65vh] "
    style={{
      backgroundImage: `url(${homeimg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: "0.7",
     
    }}
  >
  <div className="px-12 py-28 contrast-200 bg-black bg-opacity-40 h-[65vh]">
  <div className="flex justify-between ">
    <p className="text-6xl font-bold text-start text-white ">Your Opportunity is our<br/>Mission-<span className="text-green-500">Let's Connect</span></p>
    <button className=" my-12 bg-blue-800 hover:bg-blue-900 flex text-center text-white rounded-3xl w-40 h-12 font-semibold items-center justify-evenly"> <NavLink to="/contact" > Get Started </NavLink> <FaArrowRightLong className=" text-xl"/></button>
  </div>
  <p className='text-white  font-semibold text-xl'>Experience the Power of Instant Innovation</p>
  </div>
  </div>
  )
}

export default Connects;