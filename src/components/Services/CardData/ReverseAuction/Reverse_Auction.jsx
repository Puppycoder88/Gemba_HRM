import React from 'react';
import Auction from '../../../../assets/AuctionSoft.jpg';
import  AuctionData from './AuctionData';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";


const Reverse_Auction = () => {
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
                       Reverse Auction Procurement Software
                    </div>
                </div>
            </header>

            <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-6">
                {/* Image */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-1/2 animate-slideInLeft">
                    <img
                        src={Auction}
                        alt="Below Header"
                        className="w-full max-w-[700px] max-h-[320px] object-cover rounded-xl border-2 border-white shadow-lg"
                    />
                </div>

                {/* Text Div */}
                <div className=" md:mt-0 md:ml-4 max-w-[63%] max-h-[320px] bg-slate-200 p-4 rounded-xl shadow-lg z-10 overflow-hidden w-1/2 animate-slideInRight">
                    <p className='text-4xl font-bold text-gray-800'>Achieve Better Deals Faster with Reverse Auctions</p>
                    <p className=" mt-1  text-gray-600">
                    A reverse auction is a dynamic online event where buyers solicit competitive bids from suppliers in real-time. Unlike traditional auctions, where the price rises, reverse auctions drive prices down as participants compete to offer the lowest bid for specific goods or services. To ensure a successful auction, sourcing professionals invest considerable effort in preparation. This includes organizing preliminary information-gathering activities to assess and qualify potential suppliers, which helps streamline the auction process and enhance its effectiveness.Proper preparation helps streamline the auction process, making it more efficient and effective for both buyers and suppliers.
                    </p>
                </div>
            </div>

            <div className='w-full mx-auto my-8 text-center'>
                <div className='text-4xl font-bold text-gray-800'>Your Needs, Our Focus: Procurement Software Redefined</div>
                <div className='text-gray-600 my-2 px-6'>Provide your procurement team with advanced tools designed to optimize processes and enhance productivity, ensuring top-tier efficiency. These solutions help streamline operations, reduce costs, and improve decision-making within the industry.</div>
            </div>
<AuctionData/>

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

export default Reverse_Auction