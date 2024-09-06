import React from "react";
import backgroundImage from '../../assets/emp.jpg'

const Aemp = () => {
  return (
    <>
    
      <div className="flex px-6 py-12 bg-gray-100">
        <div
          className="bg-cover bg-center h-[48vh] w-[50%] rounded-l-3xl"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="w-[50%] bg-white p-6 justify-between rounded-r-3xl h-[48vh]">
            <h1 className="text-blue-800 font-bold text-lg ">WHO WE ARE ?</h1>
            <hr />
            <br />
          <p className="font-bold text-gray-700 text-4xl pl-3">Driven by Innovation, Defined by Expertise</p>
          
            <p className=" p-3 text-gray-600">Gemba is where innovation thrives. Our team of industry-leading experts collaborates to create groundbreaking solutions for purpose-driven clients, accelerating their journey with cutting-edge technology. We combine deep expertise and a commitment to efficiency to drive smarter, faster, and leaner digital transformations.</p>
        </div>
      </div>
      
    </>
  );
};

export default Aemp;
