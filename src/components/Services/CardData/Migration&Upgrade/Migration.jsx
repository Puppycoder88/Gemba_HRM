import React from "react";
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import upgradeimg from "../../../../assets/upgrades.png";

const Migration = () => {
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
            Migration and Upgrades
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row mt-[-25px] mx-6 justify-between">
        
        <div className=" md:mt-0 max-w-[49%] max-h-[330px] bg-slate-200 p-6 rounded-xl shadow-lg z-10 animate-slideInLeft ">
          <p className="text-4xl font-bold text-gray-800">Migration</p>
          <ul className=" my-2  text-gray-600 list-disc">
            <li>
              SAP ECC 6.0 and SAP S/4HANA depend on underlying systems like
              operating systems and databases, often from third-party providers.
            </li>
            <li>
              Regular updates from these providers necessitate SAP migrations to
              newer versions of these systems.
            </li>
            <li>
              Hardware refreshes may also require complete migration to new
              setups.
            </li>
            <li>
              SAP's introduction of the HANA database has prompted customers to
              upgrade, creating various migration scenarios.
            </li>
            <li>
              Customers need expert support and end-to-end services for seamless
              migrations with minimal downtime and no business disruption.
            </li>
            <li>
              Our team has extensive experience in successfully managing these
              projects.
            </li>
          </ul>
        </div>

        
        <div className="md:mt-0  max-w-[49%] max-h-[330px] bg-slate-200 p-6 rounded-xl shadow-lg z-10  animate-slideInRight">
          <p className="text-4xl font-bold text-gray-800">Upgrades</p>
          <ul className=" my-2  text-gray-600 list-disc">
            <li>
              SAP regularly updates its applications to meet evolving business
              needs and fix bugs.
            </li>
            <li>
              Adapting to changes in taxation and government policies often
              requires new solutions and patches.
            </li>
            <li>
              Deploying these updates without disrupting business operations is
              a complex task.
            </li>
            <li>
              We specialize in seamless implementation, ensuring minimal
              downtime and non-disruptive updates.
            </li>
            <li>
              Our team is skilled in managing intricate SAP environments, making
              deployments smooth and efficient.
            </li>
            <li>We ensure uninterrupted business continuity during updates.</li>
          </ul>
        </div>
      </div>

      <div className='w-full max-w-[800px] mx-auto mt-12 text-center'>
      <div className='text-4xl font-bold text-gray-800'>SAP Cloud Migration</div>
                <div className="text-gray-600 my-2">Cloud technologies are rapidly adopted due to their CAPEX savings and flexible, on-demand infrastructure. SAP's cloud offerings provide significant business value, driving rapid customer adoption. In 2015, SAP's cloud sales doubled to €2.3 billion, with expectations of a 2.6x increase by 2020 compared to 2016 sales.</div>
            </div>

            <div className='w-full max-w-[800px] mx-auto my-8 text-center px-6'>
                <div className='text-4xl font-bold text-gray-800'>Type of Upgrades</div>
                <div className='text-gray-600 my-2'>Migrations and upgrades can be broadly categorized as follows. With extensive experience in managing various types of migrations, we are well-equipped and ready to assist you with any of these challenges.</div>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mb-10'>
                
                <div className='w-full sm:w-[400px] h-[200px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>OS/DB Migrations </div>
                    <div className='mt-5 text-gray-600'>
                        <p>These migrations involve moving from Windows to Unix/Linux or switching databases from Oracle, DB2, Sybase, etc., to HANA DB.</p>
                    </div>
                </div>

                
                <div className='w-full sm:w-[400px] h-[200px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Process Improvements </div>
                    <div className='mt-5 text-gray-600'>
                        <p>While the technical platform stays the same, the client seeks to enhance processes, activate new features, and modify workflows.</p>
                    </div>
                </div>

                
                <div className='w-full sm:w-[400px] h-[200px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Platform Migration </div>
                    <div className='mt-5 text-gray-600'>
                        <p>Platform migrations may involve hardware upgrades, hardware changes, on-premise to cloud transitions, or DR site setups.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between w-full mx-6 mt-10 md:flex-row'>
                <div className=' md:w-[700px] w-1/2'>
                    <img className='w-full h-[47vh] rounded-md' src={upgradeimg} alt='second-pic' />
                </div>
                {/* Text-content */}
                <div className=' md:w-[45%] md:mr-[60px] mt-5 md:mt-0 w-1/2 px-6'>
                    <div className='text-4xl font-bold text-gray-800'>Why Gemba InfoTech for Upgrades and Migrations</div>
                    <p className='w-full mt-5 text-gray-600'>We have been working on improving our processes and methodologies to make upgrades non-disruptive and result oriented. We have helps many customers in keeping them updated.</p>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 mx-6 mt-5 my-10'>
               
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Non-Disruptive Change </div>
                    <div className='mt-5 text-gray-600'>
                        <p>Our proven methods for upgrades and migrations minimize business disruption and require minimal downtime.</p>
                    </div>
                </div>
               
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Comprehensive Updates  </div>
                    <div className='mt-5 text-gray-600'>
                        <p>We not only transition you to the new platform but also maximize its potential by activating all relevant features and leveraging the latest advancements.</p>
                    </div>
                </div>

               
                <div className='w-full sm:w-[400px] h-[216px] bg-slate-200 p-5 rounded-lg shadow-lg'>
                    <div className='text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Smooth Transition </div>
                    <div className='mt-5 text-gray-600'>
                        <p>We ensure a smooth transition through rigorous testing, near-real-time simulations, and comprehensive training.</p>
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
  );
};

export default Migration;
