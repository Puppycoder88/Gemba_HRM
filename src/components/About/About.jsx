import React from "react";
import bgImage from "../../assets/img4.webp";
import img12 from "../../assets/img12.jpg";
import img3 from "../../assets/img3.jpg";
import img from "../../assets/img.jpg";
import img6 from "../../assets/img6.jpg";
import TriangleSection from "./TriangleSection";
import {FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Statistics from "./DataStatistics";
import BrochureCard from "./BrochureCard";


const About = () => {
  return (
   
    <div className="pt-20">
      <div
        className=" h-[65vh] top-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

<div className="font-custom">
      <div className="flex justify-between bg-slate-100 py-10 px-6 ">
        <div className="pr-6 w-1/2 font-custom">
          <h2 className="text-blue-800 font-semibold text-lg ">OVERVIEW</h2>
          <hr />
          <br />
          <h1 className="text-4xl font-bold text-gray-700">Your Challenges, Our Solutions</h1>
          <br />
          <p className="text-gray-700 transition duration-500 ease-in-out">
          <strong>Gemba®</strong> is a full IT Service Provider, offering organizations the technology, content, and expertise for featuring comprehensive IT and Business Services through AI and Machine Learning, automation, and advanced Analytics for performance-driven and holistic digital transformation projects to evolve companies into an intelligent Enterprise.
          </p>
        </div>

        <div className="w-1/2  ">
          <img
            src={img3}
            className="w-full h-[40vh] rounded-3xl shadow-lg"
            alt="..."
          />
        </div>
      </div>



<div className="flex bg-slate-100 py-10 px-6 justify-between items-start">
  <div className="w-1/2">
    <img
      src={img}
      className="w-full h-[73vh] rounded-3xl shadow-lg"
      alt="..."
    />
  </div>
  <div className="pl-8 w-1/2 font-custom">
    <h2 className="text-blue-800 font-semibold text-lg">OUR PRESENT FOCUS</h2>
    <hr/>
    <br />
    <h1 className="text-4xl font-bold text-gray-700">
      Crafting Tomorrow's Digital Solutions Today
    </h1>
    <br />
    <div className="flex justify-between mt-4">
      <p className="w-64 text-gray-700">
        In today's dynamic digital landscape, our top priority is delivering exceptional service, precisely tailored to the unique needs of our clients. We achieve this by seamlessly integrating cutting-edge technology, skilled professionals, and industry-leading practices. Our unwavering commitment to service excellence empowers businesses to thrive in an ever-evolving digital world.
      </p>
      <BrochureCard />
    </div>
  </div>
</div>

<div className="bg-gradient-to-b from-slate-100 to-slate-500">
      <Statistics />
</div>
      

      
      <div className=" bg-slate-500 py-10 px-6 justify-between ">
        <h2 className="text-gray-100 font-bold text-lg pb-3 ">EXPLORE COMPANY</h2>
        <hr />
        <br />
        <h1 className="text-4xl font-bold text-gray-100 ">
         Your trusted partner in technology
        </h1>
        <br />
        <TriangleSection />
      </div>

      <div className=" bg-slate-100 py-10 px-6 justify-between ">
        <h2 className="text-blue-800 font-semibold text-lg pb-3 ">EXPLORE COMPANY</h2>
        <hr />
        <br />
        <h1 className="text-4xl font-bold text-gray-700 font-sans">
        Transforming Digital Landscapes, Starting with People.
        </h1>
        <br />
        <div className="flex ">
        <div className="w-1/2">
        <FaCheckCircle className="text-slate-300 rounded-full w-12 h-12  translate-x-2 translate-y-10 " size={36} />
        <p className="pr-6 mt-10 text-gray-700">
        Gemba is a place for ideas. And a place consisting of the right people who have come together to build incredible things for purpose-driven clients—helping businesses move at the speed of progress. We are a team of experts with some of the industry's best technology talent. Together we are taking everything we know about digital transformations smarter, faster, and leaner. 
          </p>
          </div>
          <div className="w-1/2 lg:w-1/2 ">
          <img
            src={img6}
            className="w-full h-[42vh] rounded-3xl shadow-lg"
            alt="..."
          />
        </div>
        </div>
      </div>

      <div
        className=" h-[65vh] "
        style={{
          backgroundImage: `url(${img12})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.7",
         
        }}
      >
      <div className="px-12 pt-24 contrast-200 bg-black bg-opacity-25 h-[65vh]">
      <h1 className="text-white font-bold "><u className="pb-2">CONNECT WITH US</u></h1>
      <br />
      <div className="flex justify-between ">
        <p className="text-6xl font-bold text-start text-white">We are committed <br />to delivering only <br/><span className="text-green-600">the best</span></p>
        <button className=" font-sans my-12 bg-blue-700 hover:bg-blue-900 flex text-center text-white rounded-3xl w-40 h-12 font-semibold items-center justify-evenly"> <NavLink to="/contact" > Get Started </NavLink> <FaArrowRightLong className=" text-xl"/></button>
      </div>
      </div>
      </div>

      </div>
      </div>
  );
};

export default About;
