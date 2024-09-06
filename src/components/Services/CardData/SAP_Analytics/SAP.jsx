import React from "react";
import SAPCloud from "../../../../assets/SAPCloud.jpg";
import SAPA from "../../../../assets/SAPA.png"
import SAP_items from "./SAP_Data";
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const SAP = () => {
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
            SAP Analytics
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft">
          <img
            src={SAPCloud}
            alt="Below Header"
            className="w-full max-w-[700px] max-h-[320px] object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className=" md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 px-3 py-3 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
          <p className="text-4xl font-bold text-gray-800">
            Real-Time Insights, Smarter Decisions
          </p>
          <p className=" mt-1  text-gray-600">
            SAP Business Technology Platform provides real-time insights using
            machine learning, AI, and business intelligence. It analyzes past
            and present data while simulating future scenarios for valuable
            business outcomes. The SAP Business Intelligence suite integrates
            and transforms data from multiple sources for visual analytics.
            Visual analytics eliminate guesswork and help monitor key business metrics. SAP Analytics and embedded machine learning accelerate
            digital transformation. Gemba InfoTech helps businesses automate
            processes and unlock growth by uncovering insights from all data
            types.
          </p>
        </div>
      </div>

      <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>SAP Business Intelligence and Analytics Solutions</div>
                <div className='text-gray-600 my-2'>Empowering businesses with real-time data insights and advanced analytics, SAP BI and Analytics Solutions drive informed decision-making. These solutions enable organizations to optimize processes, predict trends, and unlock growth through data-driven strategies.</div>
            </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 mb-10">
 
  <div className="w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg">
    <h2 className="text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center">SAP BW Offerings</h2>
    <p className="text-gray-600 my-2">
      SAP BW provides a BI platform for data warehousing, analysis, and reporting.
      Supports management decision-making.
      Gemba InfoTech delivers comprehensive end-to-end SAP BW services.
    </p>
  </div>

  
  <div className="w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg">
    <h2 className="text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center">SAP HANA Offerings</h2>
    <p className="text-gray-600 my-2">
      Gemba InfoTech specializes in In-Memory Computing and SAP HANA integration.
      Services include strategy, consulting, licensing, implementation, reporting, performance optimization, and support.
      
    </p>
  </div>

 
  <div className="w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg">
    <h2 className="text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center">SAP Business Objects</h2>
    <p className="text-gray-600 my-2">
      Expertise in strategy, implementation, and management of SAP Business Objects.
      Gemba InfoTech excels at integrating SAP Business Objects with SAP BW and SAP HANA.
    </p>
  </div>
</div>

<div className="flex flex-col w-full px-6 my-10 md:flex-row justify-between">
        <div className="w-1/2 max-w-[500vh] mt-10 md:mt-0 text-start ">
          <div className="text-4xl font-bold text-gray-800">
          Analytics on The Cloud
          </div>
          <div className="text-gray-600 my-2">
          Enhance your enterprise's decision-making with SAP Analytics Cloud. Explore our comprehensive capabilities, including:
          </div>

          <div className="w-full ">
            <ol className="pt-2 mx-10 list-decimal text-gray-600">
              {SAP_items.map((item) => (
                <li key={item.id} className="p-1 rounded-lg ">
                  <div className="text-md font-custom">{item.name}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-1/2 my-2  md:w-[700px] bg-black shadow-lg rounded-xl">
          <img
            src={SAPA}
            alt="2"
            className="w-full h-[48vh] object-contain "
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
  
  );
};

export default SAP;
