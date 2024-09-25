import React from 'react';
import { MdOutlineHealthAndSafety, MdOutlineInventory } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaUsersGear, FaGears } from "react-icons/fa6";

const products = [
    {
      icon: <MdOutlineHealthAndSafety size={40} className="text-green-500" />,
      title: "Healthcare Management",
      description: "Our Healthcare Management solutions optimize patient care with advanced, integrated technology.",
    },
   
    {
        icon: <GrUserManager size={40} className="text-green-500" />,
        title: "HRMS Management",
        description: "Our HRMS management solutions streamline human resources processes with cutting-edge technology.",
      },
      {
        icon: <MdOutlineInventory size={40} className="text-green-500" />,
        title: "Inventory Management",
        description: "Our inventory management solutions ensure seamless operations through advanced automation.",
      },
      {
        icon: <LiaFileInvoiceDollarSolid size={40} className="text-green-500" />,
        title: "Assets Management",
        description: "Our asset management solutions provide comprehensive tracking and efficiency of your assets.",
      },
      {
        icon: <FaUsersGear size={40} className="text-green-500" />,
        title: "CRM",
        description: "Our CRM solutions boost growth by enhancing customer relationships through personalized, data-driven insights.",
      },
      {
        icon: <FaGears  size={40} className="text-green-500" />,
        title: "ERP",
        description: "Our ERP solutions integrate and streamline business processes to enhance efficiency and drive informed decision-making.",
      }
  ];
  
  const ProductCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-tl-2xl rounded-br-2xl ">
    <div className="mb-4 items-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
  </div>
  );
  
  const ProductGrid = () => {
    return (
        <div className='bg-gradient-to-b from-gray-100 to-slate-200 pb-10'>
        <div className="bg-gray-100 w-full">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-6 py-6 text-gray-700 text-start lg:text-center">Our Ever-Growing Products</h1>
            <p className="bg-gradient-to-b from-gray-100 to-slate-200 text-gray-600 px-4 sm:px-6 text-start">Our diverse range of solutions spans across various key business functions, including Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Inventory Management, Assets Management, HRMS, and Healthcare Management. Each tool is designed to seamlessly integrate into your operations, providing a unified platform that improves visibility, automates tasks, and reduces inefficiencies. By streamlining workflows and offering real-time insights, our solutions empower businesses to make informed decisions, optimize processes, and enhance overall productivity across all departments.
</p>
            </div>
            
            <div className="bg-gray-200 py-6 px-4 md:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
    {products.map((Product, index) => (
      <div
        key={index}
        className="w-full md:w-[350px] lg:w-[400px] transform translate-y-4 animate-fadeInUp delay-[100ms]"
      >
        <ProductCard key={index} {...Product} />
      </div>
    ))}
  </div>
</div>

      </div>
    );
  };

export default ProductGrid;