/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import BackToTop from "./BacktoTop";
import LocationMap from "./LocationMap"; 
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-6 z-10 bottom-0 w-full font-custom">
  <div className="flex flex-row md:flex-row justify-between space-y-6 md:space-y-0">
    
    {/* Quick Links */}
    <div className="w-full md:w-1/3">
      <QuickLinks />
    </div>

    {/* Connect with Us */}
    <div className="w-full md:w-1/3">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Connect with Us</h2>
      <div className="mt-4 text-sm sm:text-base">
        <p className="flex items-start mt-2">
          <span className="mr-2">
            <FaMapMarkerAlt />
          </span>
          Gemba Infotech, Quark Atrium, <br /> Phase 8B, Mohali, India
        </p>
        <p className="flex items-start mt-2">
          <span className="mr-2">
            <FaMapMarkerAlt />
          </span>
          SCO 224, Level 1&2, Sector 37C, <br /> Chandigarh CH 160036 INDIA
        </p>
        <p className="flex items-start mt-2">
          <span className="mr-2">
            <FaPhone />
          </span>
          +91-172-4659657
        </p>
        <p className="flex items-start mt-2">
          <span className="mr-2">
            <FaEnvelope />
          </span>
          sales-team@gembainfotech.com
        </p>

        {/* Social Media */}
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Follow Us</h2>
          <p className="pt-2 text-xl sm:text-2xl">
            <a href="https://www.linkedin.com/company/gemba-infotech/" className="text-blue-700 hover:text-teal-500">
              <FaLinkedin />
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* Location Map */}
    <div className="w-full md:w-1/3">
      <LocationMap />
    </div>
  </div>

  <br />

  <div className="flex flex-row md:flex-row items-center justify-between border-t border-slate-300 py-4">
  <p className="text-sm sm:text-base text-gray-500">
    &copy; 2022 Gemba Infotech. All Rights Reserved.
  </p>
  <div className=" md:ml-auto text-sm sm:text-base">
    <BackToTop />
  </div>
</div>

</footer>

  );
};

export default Footer;
