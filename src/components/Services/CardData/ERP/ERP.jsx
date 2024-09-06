import React from 'react';
import ERPimg from '../../../../assets/ERPimg.jpeg';
import ERPData from './ERP_Data';
import ModuleItems from './ModuleItems';
import ERPMimg from '../../../../assets/ERPMimg.jpg';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const ERP = () => {
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
               Enterprise Resource Planning
            </div>
        </div>
    </header>

    <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
                {/* Image */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft">
                    <img
                        src={ERPimg}
                        alt="Below Header"
                        className="w-full max-w-[700px] max-h-80 object-cover rounded-xl border-2 border-white shadow-lg"
                    />
                </div>

                {/* Text Div */}
                <div className=" md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 p-5 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
                    <p className='text-4xl font-bold text-gray-800'>Streamline, Optimize, and Grow with ERP</p>
                    <p className=" mt-2  text-gray-600">
                    ERP applications help businesses become more efficient by linking key areas like production, finance, distribution, and human resources into a unified system. By integrating different technologies used across various departments, ERP eliminates the need for duplicate systems and ensures that all parts of the business are working in harmony. For instance, it can combine accounts payable, inventory control, order tracking, and customer data into one platform. This streamlined approach improves coordination, reduces costs, and enhances overall decision-making by providing real-time access to critical business information in one place.
                    </p>
                </div>
            </div>

            <div className='w-full mx-auto my-10 text-center'>
                <div className='text-4xl font-bold text-gray-800'>Boost Collaboration and Efficiency with Gemba InfoTech ERP</div>
                <div className='text-gray-600 my-2 mx-6'>Gemba InfoTech's ERP solutions streamline business processes, boost operational efficiency, and fuel growth. By integrating key functions, Gemba helps businesses operate smarter and scale effortlessly.
</div>
           
<ERPData/>
</div>

<div className="flex flex-col w-full px-6 my-10 md:flex-row justify-between">
<div className='w-2/3 max-w-[500vh] mt-10 md:mt-0 text-start'>
                    <div className='text-4xl font-bold text-gray-800'>Modular ERP Solutions</div>
                    <div className='text-gray-600'>
                    These modules together form a comprehensive ERP system that integrates various business functions into one unified platform.
                    </div>
              
            
            <div/>
            <div className='w-full'>
            <ol className="pt-2 mx-10 list-decimal text-gray-600">
                {ModuleItems.map((item) => (
                    <li key={item.id} className="p-1 rounded-lg">
                        <div className="text-md font-custom">
                            {item.name}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
        </div>
        <div className="w-1/3 my-2  md:w-[700px]">
          <img
            src={ERPMimg}
            alt="2"
            className="w-full h-[75vh] object-contain "
          />
        </div>
        </div>

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

export default ERP