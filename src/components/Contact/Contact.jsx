import React from "react";
import img14 from "../../assets/img14.jpg";
import connectimg from "../../assets/connectimg.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-24">
    
      <div className="bg-gray-900 text-white">
       
        <div
          className="relative bg-cover bg-center h-[65vh]"
          style={{ backgroundImage: `url(${connectimg})` }}
        >
          <div className="py-24 bg-black bg-opacity-40 h-[65vh]">
            <div className="max-w-md mx-16 text-center py-12 bg-gray-500 bg-opacity-50 rounded-tl-2xl rounded-br-2xl">
              <h1 className="text-4xl font-bold mb-4 text-black brightness-250">
                Welcome!
              </h1>
              <p className="text-2xl text-black mb-6 brightness-250 flex mx-6">
                <h3 className="animate-slideInLeft">Connect with Us - </h3><h4 className="animate-slideInRight">Your Voice Matters</h4>
              </p>
              <a href="/contact"  className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-yellow-500 transition duration-300">
                Send a Messaage
              </a>
              
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">OUR MAIN OFFICE</h3>
              <p className="text-gray-400 mt-2">
                
                Gemba Infotech, Quark Atrium,
                <br />
                Phase 8B, Mohali, India
              </p>
            </div>
            <div>
              <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">OUR BRANCH</h3>
              <p className="text-gray-400 mt-2">
                SCO 224, Level 1&2, Sector 37C,
                <br />
                Chandigarh CH 160036 INDIA
              </p>
            </div>
            <div>
              <FaPhoneAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">PHONE NUMBER</h3>
              <p className="text-gray-400 mt-2"> +91-172-4659657</p>
            </div>

            <div>
              <FaEnvelope className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">EMAIL</h3>
              <p className="text-gray-400 mt-2">
                <a
                  href="mailto: sales-team@gembainfotech.com"
                  className="underline"
                >
              
                  sales-team@gembainfotech.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gray-800 py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-center">
              <h2 className="text-4xl font-bold mt-16">We're here to support</h2>
              <h3 className="text-lg my-4">Your Dream, Our Expertise - Fill in Your Details, and Let's Get Started!</h3>
<div className=" bg-gray-500 rounded-tl-2xl rounded-br-2xl my-16 mx-28">
              <p className="text-white text-lg py-16 text-center md:text-center ">
                <span className="text-xl text-bold">Opening Times:</span>
                <br />
                <br />
                Mon - Fri: 09:30am - 06:30pm
                <br />
                Sat - Sun: Closed
              </p>
              </div>
            </div>
            <div>
            <h1 className="text-3xl font-bold my-4 text-center">Send Us a Message - Let's Get in Touch</h1>
            <div className="bg-gray-500 p-6 rounded-tl-2xl rounded-br-2xl">
            
  <div className="relative">
    <select className="block w-full bg-gray-800 border-b-2 border-gray-300 p-2">
      <option value="" disabled selected>
        Select
      </option>
      <option value="1">SAP</option>
      <option value="2">Oracle</option>
      <option value="3">App & Web Development</option>
      <option value="4">Web Design</option>
      <option value="5">Server Handling</option>
      <option value="6">Custom ERP</option>
      <option value="7">POS Application</option>
      <option value="8">OS Upgrade</option>
      <option value="9">Digital Marketing</option>
      <option value="10">Quality Assurance</option>
      <option value="11">Enterprise Automation</option>
      <option value="12">Graphic Design</option>
      <option value="13">Data Analytics</option>
    </select>
  </div>
  <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value.trim();
                  const email = e.target.email.value.trim();

                  if (!name || !email) {
                    alert("Please fill out both the Name and Email fields.");
                    return;
                  }
                  else if (!name) { 
                    alert("Please fill out the Name field.");
                    return;
                  }
                  else if (!email) {
                    alert("Please fill out the Email field");
                    return;
                  }
                  else {alert("Form Submitted!")}

                  // Continue with form submission logic here
                  console.log("Form submitted!");
                }}
              >
                <div className="my-4">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
                    placeholder="Enter your Name*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
                    placeholder="Enter a valid Email address*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Enter your Phone Number"
                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="url"
                    placeholder="Your Website"
                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
                    placeholder="Enter your message"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-bold p-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 w-40"
                >
                  Submit
                </button>
              </form>
</div>
</div>

          </div>
        </div>
      </div>

      <div
        className=" h-[65vh] top-0 relative"
        style={{
          backgroundImage: `url(${img14})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      <div  className="absolute top-0 w-full h-[65vh] bg-black bg-opacity-40 flex flex-col text-right ">
      <div className="px-12 py-40 contrast-200 ">
        <h1 className="text-6xl font-bold text-white">
          Stay Connected,</h1>
          <h2 className="text-6xl font-bold text-green-600"> Stay Informed 
        </h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
