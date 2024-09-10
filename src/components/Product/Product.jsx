import React from 'react';
import img10 from '../../assets/img10.jpg';
import ProductGrid from './ProductCards';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import productConnect from '../../assets/productConnect.jpg';

const Product = () => {
  return (
    <div className='pt-20 '>
        <div
      className="h-[65vh] top-0 relative"
      style={{
        backgroundImage: `url(${img10})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
        <div className="px-12 py-40 contrast-200 h-[65vh]">
          <h1 className="text-6xl font-bold text-white animate-slideInLeft">
          One Platform, Endless Possibilities-</h1>
            <h2 className=" text-6xl font-bold animate-slideInRight text-green-600">
            ERP to Healthcare 
            </h2>
         
        </div>
      </div>
    </div>
    <ProductGrid/>
    <div
    className="h-[65vh] top-0 relative"
    style={{
      backgroundImage: `url(${productConnect})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="px-8 py-32 contrast-200 bg-black bg-opacity-50 h-[65vh]">
  <div className="flex justify-between ">
    <p className="text-6xl font-bold text-start text-white ">Connect with Our <br /><span className="text-green-600">Experts</span></p>
    <button className=" my-12 bg-blue-700 hover:bg-blue-900 flex text-center text-white rounded-3xl w-40 h-12 font-semibold items-center justify-evenly"> <NavLink to="/contact" > Contact Us </NavLink> <FaArrowRightLong className=" text-xl"/></button>
  </div>
  </div>
  </div>
    </div>
  )
}

export default Product