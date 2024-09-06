import React from "react";
import AppMang from "../../../../assets/AppMang.jpeg";
import SAPbasis from "../../../../assets/SAPbasis.png";
import TechnicalSupport from "./TechnicalSupport";
import FunctionalSupport from "./FunctionalSupport";
import app_items from "./AppMangData";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const AppManagement = () => {
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
            Application Management Services
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft max-h-[320px]">
          <img
            src={AppMang}
            alt="Below Header"
            className="w-full max-w-[700px] max-h-[320px] object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="mt-5 md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 p-4 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
          <p className="text-4xl font-bold text-gray-800">
            Optimized Management, Guaranteed Results
          </p>
          <p className=" mt-2  text-gray-600">
            For over a decade, Gemba InfoTech has empowered businesses by
            simplifying IT processes and reducing costs. We work with
            organizations of all sizes, crafting tailored solutions that
            seamlessly integrate with existing infrastructure while boosting
            operational efficiency. Beyond IT management, we provide strategic
            insights and innovative methods to streamline business processes and
            enhance decision-making. Our expertise ensures you stay competitive
            in a rapidly evolving market. With Gemba InfoTech, you gain more
            than just technical support—you gain a strategic partner committed
            to your success.
          </p>
        </div>
      </div>

      <TechnicalSupport />
      <FunctionalSupport />

      <div className="flex flex-col w-full px-6 mt-8 md:flex-row pt-4 justify-between">
        <div className="w-1/2 max-w-[500vh] mt-10 md:mt-0 text-start ">
          <div className="text-4xl font-bold text-gray-800">
            SAP Basis Administration Services
          </div>
          <div className="text-gray-600 my-2">
            We deploy highly skilled, problem-solving consultants to ensure the
            most effective and optimized use of your SAP landscape.
          </div>

          <div className="w-full ">
            <ol className="pt-2 mx-10 list-decimal text-gray-600">
              {app_items.map((item) => (
                <li key={item.id} className="p-1 rounded-lg ">
                  <div className="text-md font-custom">{item.name}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-1/2 py-6  md:w-[700px] ">
          <img
            src={SAPbasis}
            alt="2"
            className="w-full h-[76vh] object-cover"
          />
        </div>
      </div>
      <div className="relative w-full h-[50vh] overflow-hidden  mt-10">
        <img
          src="https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg" // Replace with your image URL
          alt="Footer Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 justify-center p-6 pt-24 bg-black bg-opacity-40 contrast-200">
          <h2 className="mb-4 text-5xl font-bold text-white">Want more?</h2>
          <div className="flex justify-between ">
            <h3 className=" font-semibold text-green-600 text-4xl">
              Speak to our experts
            </h3>

            <button className=" bg-blue-700 hover:bg-blue-900 flex text-center text-white rounded-3xl w-40 h-12 font-semibold items-center justify-evenly">
              {" "}
              <NavLink to="/contact"> Contact Us </NavLink>{" "}
              <FaArrowRightLong className=" text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppManagement;
