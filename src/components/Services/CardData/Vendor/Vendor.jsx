import React from 'react';
import Vendorimg from '../../../../assets/Vendor.jpeg';
import VendorData from './VendorData';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Vendor = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
            <header className="relative w-full h-[55vh] overflow-hidden font-custom">
                <img
                    src="https://png.pngtree.com/background/20210709/original/pngtree-earth-transaction-global-trade-data-picture-image_926206.jpg"
                    alt="Header"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="p-6 text-4xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20">
                       Vendor Portal
                    </div>
                </div>
            </header>

            <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
                {/* Image */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft">
                    <img
                        src={Vendorimg}
                        alt="Below Header"
                        className="w-full max-w-[700px] max-h-80 object-cover rounded-xl border-2 border-white shadow-lg"
                    />
                </div>

                {/* Text Div */}
                <div className="mt-5 md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 p-4 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
                    <p className='text-4xl font-bold text-gray-800'>One Portal for Seamless Supplier Management</p>
                    <p className=" mt-2  text-gray-600">
                    Vendor Portals, also called Supplier Portals, are online platforms that enable businesses to collaborate with their external suppliers. These portals streamline communication, making it easier to manage orders, track shipments, and handle invoices. Suppliers can update product information, confirm purchase orders, and submit invoices directly through the portal. This improves transparency and reduces manual effort by centralizing all supplier interactions in one place. As a result, businesses can enhance their procurement processes and build stronger supplier relationships. Vendor Portals also ensure better control over supply chain operations.
                    </p>
                </div>
            </div>

            <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>Elevate Your Supplier Interactions with Gemba's Vendor Portal</div>
                <div className='text-gray-600 my-2'>A Pre-Built Suite of Vendor Management Solutions is a comprehensive, ready-to-use set of tools designed to streamline and enhance the management of supplier relationships and procurement processes. Here's a detailed description:
</div>
            </div>
            <VendorData/>

            <div className="relative w-full h-[50vh] overflow-hidden  mt-10">
                <img
                    src="https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"  
                    alt="Footer Background"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-10 justify-center p-6 pt-24 bg-black bg-opacity-40 contrast-200">
               
                <h2 className="mb-4 text-5xl font-bold text-white">Want more?</h2>
                <div className="flex justify-between ">
                    <h3 className=" font-semibold text-green-600 text-4xl">Speak to our experts</h3>
                   
                    <button className=" bg-blue-700 hover:bg-blue-900 flex text-center text-white rounded-3xl w-40 h-12 font-semibold items-center justify-evenly"> <NavLink to="/contact" > Contact Us </NavLink> <FaArrowRightLong className=" text-xl"/></button>
                </div>
                </div>
            </div>
            
            </div>
  )
}

export default Vendor