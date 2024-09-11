/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  //   FaFacebook,
  //   FaTwitter,
  FaLinkedin,
  //   FaGithub,
} from "react-icons/fa";
// import logo from "../../assets/GEMBA_LOGO.png";
import BackToTop from "./BacktoTop";
import LocationMap from "./LocationMap"; 
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-6 z-10 bottom-0 w-full font-custom">
     
        <div className="flex justify-between">
          {/* Logo */}
         
            {/* <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-12 w-auto " />
            </div> */}

            {/* Quick Links  */}
            <QuickLinks />
         

          {/* Connect with Us  */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              Connect with Us
            </h3>
            <div>
              <p className="flex  mt-4">
                <span className="mr-2">
                  <FaMapMarkerAlt />
                </span>
                Gemba Infotech, Quark Atrium,
                <br />
                Phase 8B, Mohali, India
              </p>
              <p className="flex items-center mt-2">
                <span className="mr-2">
                  <FaMapMarkerAlt />
                </span>
                SCO 224, Level 1&2, Sector 37C,
                <br />Chandigarh CH 160036 INDIA
              </p>
              <p className="flex items-center mt-2">
                <span className="mr-2">
                  <FaPhone />
                </span>
                +91-172-4659657
              </p>
              <p className="flex items-center mt-2">
                <span className="mr-2">
                  <FaEnvelope />
                </span>
                sales-team@gembainfotech.com
              </p>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-800 ">Follow Us</h3>
                <p className="pt-2 text-2xl">
                  <a href="https://www.linkedin.com/company/gemba-infotech/" className="text-blue-700 hover:text-teal-500 ">
                    <FaLinkedin />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-96">
            <LocationMap />
          </div>
        </div>
     
      <br />
      <div className="flex items-center border-t border-slate-300 py-2 ">
        <p>&copy; 2022 Gemba Infotech. All Rights Reserved.</p>
        <div className="ml-auto">
          <BackToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
