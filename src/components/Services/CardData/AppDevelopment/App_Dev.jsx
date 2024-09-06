import React from 'react';
import items from './ItemData';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const App_Dev = () => {
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
                        Application Development
                    </div>
                </div>
            </header>

            {/* New Image Below Header */}
            <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
                {/* Image */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft">
                    <img
                        src="https://www.gembainfotech.com/wp-content/uploads/2022/09/corporate-training-1536x1024.jpg"  // Replace with your image URL
                        alt="Below Header"
                        className="w-full max-w-[700px] max-h-80 object-cover rounded-xl border-2 border-white shadow-lg"
                    />
                </div>

                {/* Text Div */}
                <div className="mt-5 md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 p-4 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
                    <p className='text-4xl font-bold text-gray-800'>Business Intelligence and Analytics Consulting</p>
                    <p className=" mt-2  text-gray-600">
                        We have highly skilled ABAP Consultants and Solutions Architects to develop solutions needed by customers. We understand how SAP ERP can be enhanced using User Exists, BADIs, BAPIs, BDC, RFC, OData etc. We have expertise in integrating SAP with any SAP/Non SAP application. The business needs of organisations are quite complex and fitting everything into one solution is quite an impossible task. The ERPs cover most of the common business practices and functions but they need to be enhanced to build customer-specific functionalities or even industry-specific modules as per need.
                    </p>
                </div>
            </div>

            {/* Other sections remain unchanged */}
            <div className='w-full max-w-[500px] mx-auto mt-12 text-center text-gray-600'>
                <div>We excel in extending ERPs to business partners through cutting-edge technologies such as SAP Cloud Platform, SAP Cloud Integration, and SAP HANA DB. Our deep expertise ensures seamless integration and enhanced functionality for your ERP systems.
</div>
            </div>

            <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>Application Development As a Service</div>
                <div className='text-gray-600 my-2'>We have deep expertise in extending ERPs to business partners using state-of-art technologies like SAP Cloud Platform, SAP Cloud Integration, SAP HANA DB etc.</div>
            </div>

            {/* Full Width Div Below Left and Right Div */}
            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mb-10'>
                {/* Outsourced RICEFW Development */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center'>Outsourced RICEFW Development</div>
                    <div className='mt-5 text-gray-600'>
                        <p>Complete development from implementation to go-live with dedicated end-to-end project management.</p>
                    </div>
                </div>

                {/* Extensions on SAP Cloud Platform */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center'>Extensions on SAP Cloud Platform</div>
                    <div className='mt-5 text-gray-600'>
                        <p>Proven experience in Application Development on SAP Cloud Platform for extending ERP and customizing cloud solutions.</p>
                    </div>
                </div>

                {/* Business Analytics */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px]  text-center items-center justify-center'>Business Analytics</div>
                    <div className='mt-5 text-gray-600'>
                        <p>We have deep experience in SAP Business Intelligence (BI/BO), Cloud Analytics, BW on HANA, Embedded Analytics etc.</p>
                    </div>
                </div>
            </div>

            {/* Application Development As a Service */}
            <div className="relative w-full h-[50vh] overflow-hidden mt-10">
                <img
                    src="https://sivandesign.com/wp-content/uploads/2016/11/SD-Top-Slides-HOME-1920x520.jpg"  // Replace with your image URL
                    alt="Footer Background"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-center p-6 bg-black bg-opacity-40">
                    <div className='text-4xl font-semibold text-white font-custom pt-2 h-[64px]'>Application Development As a Service</div>
                    <p className="my-4 text-lg text-white">
                        We have a well-matured application development methodology and practices which can produce complex applications with zero defects and within predictable timelines.
                    </p>
                </div>
            </div>

            {/* Check-box-2 */}
            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 mb-10'>
                {/* Mobility Applications */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center'>Mobility Applications</div>
                    <div className='mt-5 text-gray-600'>
                        <p>We have been working on using SAP Mobile Platforms, SAP Fiori to enhance user experience, provide user-friendly UIs and enable mobility in organisations.</p>
                    </div>
                </div>

                {/* Application Integrations */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center'>Application Integrations</div>
                    <div className='mt-5 text-gray-600'>
                        <p>We are experts in system integrations using SAP Cloud Integration Services, OData Services, WSDL, Soap UI etc.</p>
                    </div>
                </div>

                {/* HANA Services */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center'>HANA Services</div>
                    <div className='mt-5 text-gray-600'>
                        <p>Expertise in SAP HANA DB optimization and developments. We can optimize your reporting and developments post-migrations using Calculation and Analytics Views etc.</p>
                    </div>
                </div>
            </div>

            {/* SECOND IMAGE */}
            <div className='flex flex-col items-start justify-between w-full mx-6 mt-10 md:flex-row'>
                <div className=' md:w-[700px] w-1/2'>
                    <img className='w-full h-[47vh] rounded-md' src='https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg' alt='second-pic' />
                </div>
                {/* Text-content */}
                <div className=' md:w-[45%] md:mr-[60px] mt-5 md:mt-0 w-1/2 px-6'>
                    <div className='text-4xl font-bold text-gray-800'>Why Gemba InfoTech for Application Development ?</div>
                    <p className='w-full mt-5 text-gray-600'>We have developed CMM Based Application Developed Practices and have established ourselves by delivery of numerous solutions to our esteemed clients.</p>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 mb-10'>
                {/* Mobility Applications */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center'>Agile Approach </div>
                    <div className='mt-5 text-gray-600'>
                        <p>We have been working on using SAP Mobile Platforms, SAP Fiori to enhance user experience, provide user-friendly UIs and enable mobility in organisations.</p>
                    </div>
                </div>
                {/* Mobility Applications */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center'>Project Management </div>
                    <div className='mt-5 text-gray-600'>
                        <p>We have been working on using SAP Mobile Platforms, SAP Fiori to enhance user experience, provide user-friendly UIs and enable mobility in organisations.</p>
                    </div>
                </div>

                {/* Application Integrations */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center'>Knowledge Management</div>
                    <div className='mt-5 text-gray-600'>
                        <p>We are experts in system integrations using SAP Cloud Integration Services, OData Services, WSDL, Soap UI etc.</p>
                    </div>
                </div>
                </div>

                {/* HANA Services */}
               

                {/* Div to be positioned below */}
                <div className='w-full max-w-[500vh] mx-6 mt-10 md:mt-0 text-start'>
                    <div className='text-4xl font-bold text-gray-800'>How Does it help you ?</div>
                    <div className='text-gray-600'>
                        By outsourcing your application developments we help in by taking care of your development needs and making you're free for managing operations and handling business.
                    </div>
                </div>
            
            <div/>
            <div className='w-full bg-slate-200 mt-4'>
            <ol className="pt-5 mx-10 list-decimal text-gray-600">
                {items.map((item) => (
                    <li key={item.id} className="p-4 rounded-lg mt-[-25px]">
                        <div className="text-md font-custom">
                            {item.name}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
            {/* Footer Section */}
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

export default App_Dev;

