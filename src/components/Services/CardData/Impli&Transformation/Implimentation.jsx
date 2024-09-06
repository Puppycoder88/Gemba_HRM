import React from 'react';
import impli from '../../../../assets/impli.jpeg';
import portfolio from '../../../../assets/portfolio.png';
import SAP_Mng from '../../../../assets/SAP_Mng.png';
import trans from '../../../../assets/trans.jpeg';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Implimentation = () => {
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
            Implementation and Transformations
            </div>
        </div>
    </header>

    <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
                {/* Image */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft">
                    <img
                        src= {impli}
                        alt="Below Header"
                        className="w-full max-w-[700px] max-h-72 object-cover rounded-xl border-2 border-white shadow-lg"
                    />
                </div>

                {/* Text Div */}
                <div className="mt-5 md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 p-4 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
                    <p className='text-4xl font-bold text-gray-800'>Empowering Change with Expert Implementation</p>
                    <p className=" mt-2  text-gray-600">
                    ERPs are crucial for organizations, streamlining operations by eliminating redundancy, enhancing transparency, and providing a unified truth. Implementing an ERP system is complex and requires significant commitment and expertise. At Gemba InfoTech, we guide you through every stage of this transformative journey. From initial evaluation and planning to digital transformation, stabilization, and ongoing support, we ensure a smooth and successful implementation. Our goal is to help you achieve operational excellence and reach your business objectives efficiently and effectively.
                    </p>
                </div>
            </div>

            <div className='w-full max-w-[600px] mx-auto mt-12 text-center text-gray-600'>
                <div>We specialize in driving digital transformation through SAP ERP solutions, including SAP S/4HANA. With numerous successful implementations, we have perfected the art and science of delivering impactful results.</div>
            </div>

            <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>Implementation Portfolio</div>
                <div className='text-gray-600 my-2'>Gemba InfoTech transforms your business with advanced SAP technologies, preparing you for future success.</div>
                <div className='bg-gray-100 py-8'>
                <img src={portfolio} alt="1" className='px-6 w-full'/>
                </div>
            </div>

            <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>SAP S/4 HANA - Enterprise Management</div>
                <div className=' px-6 py-4'>
                <img src={SAP_Mng} alt="1" className=' w-[180vh] h-[80vh] mx-auto '/>
                </div>
                </div>

                <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>Why Choose Gemba InfoTech</div>
                <div className='text-gray-600 my-2'>Customers choose us for their transformation journey largely due to our key value-added benefits.</div>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mb-10'>
               
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Faster Realization</div>
                    <div className='mt-5 text-gray-600'>
                        <p>Our deep industry expertise and proven methodologies enable faster realization of your goals, ensuring a smoother and more efficient transformation process.</p>
                    </div>
                </div>

               
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>
                    Consultative Approach</div>
                    <div className='mt-5 text-gray-600'>
                        <p>We apply industry best practices, customized to your company's unique needs, and carefully evaluate options to guide you in making the right process decisions.</p>
                    </div>
                </div>

               
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px]  text-center items-center justify-center'>
                    Optimized Costs </div>
                    <div className='mt-5 text-gray-600'>
                        <p>We achieve cost efficiencies through effective knowledge management, reusable components, a blended onsite-offshore model, and customizable solutions.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 mb-10'>
                {/* Mobility Applications */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>
                    Process Transformation</div>
                    <div className='mt-5 text-gray-600'>
                        <p>We facilitate change management and the adoption of best practices, leveraging our deep expertise in the field.</p>
                    </div>
                </div>

                {/* Application Integrations */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>
                    Project Management </div>
                    <div className='mt-5 text-gray-600'>
                        <p>Our goal-driven project management, combined with clear milestones, KPIs, and robust monitoring and control mechanisms, ensures a risk-free transformation.</p>
                    </div>
                </div>

                {/* HANA Services */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Minimal Disruption </div>
                    <div className='mt-5 text-gray-600'>
                        <p>Our migration strategy and cutover techniques ensure minimal business disruption during deployment and transitions.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between w-full mx-6 mt-10 md:flex-row'>
                <div className=' md:w-[700px] w-1/2'>
                    <img className='w-full h-[47vh] rounded-md' src={trans} alt='second-pic' />
                </div>
                {/* Text-content */}
                <div className=' md:w-[45%] md:mr-[60px] mt-5 md:mt-0 w-1/2 px-6'>
                    <div className='text-4xl font-bold text-gray-800'>Empowering Business with Gemba InfoTech</div>
                    <p className='w-full mt-5 text-gray-600'>Empowering your business with Gemba InfoTech's cutting-edge solutions and industry expertise. We turn complex challenges into growth opportunities, driving your transformation with precision and innovation. Trust us to deliver tailored strategies that enhance your success and secure a competitive edge.</p>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 mb-10'>
                {/* Mobility Applications */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>No Risk </div>
                    <div className='mt-5 text-gray-600'>
                        <p>We deliver implementation services with a strong guarantee of success. Our expert approach ensures seamless execution, achieving your objectives and delivering exceptional results.</p>
                    </div>
                </div>
                {/* Mobility Applications */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Satisfied Users </div>
                    <div className='mt-5 text-gray-600'>
                        <p>Our transformation services enhance workflows and boost productivity, driving greater efficiency and enabling users to achieve more with less effort.</p>
                    </div>
                </div>

                {/* Application Integrations */}
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>
                    Controlled Budgets </div>
                    <div className='mt-5 text-gray-600'>
                        <p>Our project management approach minimizes extensions and escalations by maintaining strict control, ensuring projects stay on schedule and within scope for timely, successful completion.</p>
                    </div>
                </div>
                </div>

                <div className="relative w-full h-[50vh] overflow-hidden  mt-10">
                <img
                    src="https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"  // Replace with your image URL
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

export default Implimentation