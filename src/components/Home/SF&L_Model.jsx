import React from 'react';

const Model = () => {
  return (
    
    <div className="pt-10 px-6">
    <h1 className="text-blue-800 font-bold text-lg ">OUR METHODOLOGY - SMARTER, FASTER AND LEARNER</h1>
            <hr/>
      <p className="text-4xl font-bold text-gray-700 my-4">Our proven approach for your long-term, sustainable results</p>
      <div className="flex flex-col relative bg-gray-100   rounded-xl min-h-screen w-full justify-center items-center text-center">

     <div className="mb-96 left-12 absolute text-start">
          <div className="text-blue-500 border-l-2 border-blue-500 pl-2 m-1 w-96">
            <h2 className="font-bold text-xl">SMARTER</h2>
            <p className="text-gray-600">
            The company aims to empower everyone across the value chain to make better decisions—from delivery truck drivers and forklift operators to foremen, sales executives, and the CEO—not just improving decision-making for managers and executives, but for every individual involved.
            </p>
          </div>
        </div>  

         <div className="mt-96 left-12 absolute text-start">
          <div className="text-green-500 border-l-2 border-green-500 pl-2 m-1 w-96">
            <h2 className="font-bold text-xl">FASTER</h2>
            <p className="text-gray-600">
            It reflects the organization's agility, speed, and responsiveness. By quickly addressing the needs of all stakeholders, the company gains a competitive edge and enhances its ability to adapt to changing business conditions.
            </p>
          </div>
        </div>   
      
      
      <div className="relative w-96 h-96 border border-gray-600 rounded-full ">
     

        {/* Hexagon 1 */}
        <div className="absolute -top-[15px] left-1/2 transform -translate-x-1/2 w-[100px] h-[55px] bg-blue-500 text-white font-bold flex items-center justify-center">
          <div className="absolute w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[27px] border-b-blue-500 top-[-27px]"></div>
          <div className="absolute w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[27px] border-t-blue-500 bottom-[-27px]"></div>
          SMARTER
        </div>

        {/* Hexagon 2 */}
        <div className="absolute bottom-[55px] left-[11%] transform -translate-x-1/2 w-[100px] h-[55px] bg-green-500 text-white font-bold flex items-center justify-center">
          <div className="absolute w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[27px] border-b-green-500 top-[-27px]"></div>
          <div className="absolute w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[27px] border-t-green-500 bottom-[-27px]"></div>
          FASTER
        </div>

        {/* Hexagon 3 */}
        <div className="absolute bottom-[55px] right-[11%] transform translate-x-1/2 w-[100px] h-[55px] bg-red-500 text-white font-bold flex items-center justify-center">
          <div className="absolute w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[27.5px] border-b-red-500 top-[-27px]"></div>
          <div className="absolute w-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[27.5px] border-t-red-500 bottom-[-27px]"></div>
          LEARNER
        </div>

        {/* Arrow 1 */}
        <div className="absolute -top-[3px] left-[63%] transform rotate-[195deg]">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-600"></div>
        </div>

        {/* Arrow 2 */}
        <div className="absolute bottom-[120px] left-[3%] transform rotate-[435deg] -translate-x-1/2">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-600"></div>
        </div>

        {/* Arrow 3 */}
        <div className="absolute bottom-[27px] right-[17%] transform rotate-[325deg]">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-gray-600"></div>
        </div>
      </div>
    
      <div className="mb-20 absolute right-12 text-start">
        <div className="text-red-500 border-l-2 border-red-500 pl-2 m-1 w-96">
          <h2 className="font-bold text-xl">LEARNER</h2>
          <p className="text-gray-600 ">
          To succeed, companies must first focus on becoming smarter. Enhanced decision-making reduces delays, increases agility, and boosts service levels across the organization—paving the way for greater speed. This agility also uncovers inefficiencies and unnecessary costs, allowing the company to become leaner and more streamlined.
          
          </p>
        </div>
        </div>
    
    </div>
    </div>
     
   
  );
};

export default Model;