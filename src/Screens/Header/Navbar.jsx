import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/GEMBA_LOGO.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${scrolled ? " shadow-md" : "bg-transparent"}`}>
        {/* Topbar */}
        <div className={`bg-gray-800 text-white ${scrolled ? "hidden" : "block"}`}>
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            <div className="flex space-x-4 text-sm">
              <a href="tel:+91-172-4659657" className="hover:text-gray-400">
                +91-172-4659657
              </a>
              <a
                href="mailto:sales-team@gembainfotech.com"
                className="hover:text-gray-400"
              >
                sales-team@gembainfotech.com
              </a>
            </div>
            <div className="hidden md:flex">
              <ul className="">
                <li>
                  <a
                    href="https://www.linkedin.com/company/gemba-infotech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <div className={`bg-white font-sans shadow-md duration-1000 ${scrolled ? "mt-0" : "mt-0"}`}>
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex space-x-6">
              <div className="text-lg font-semibold flex space-x-1 items-center font-sans">
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 flex items-center"
                  to="/"
                  activeClassName="bg-white"
                >
                  Home
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/about"
                  activeClassName="bg-white"
                >
                  About Us
                </NavLink>
                
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/services"
                  activeClassName="bg-white"
                >
                  Services
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/product"
                  activeClassName="bg-white"
                >
                  Products
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/event"
                  activeClassName="bg-white"
                >
                  Events
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/partner"
                  activeClassName="bg-white"
                >
                  Partners
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/contact"
                  activeClassName="bg-white"
                >
                  Contact
                </NavLink>
              </div>
              <a
                href="https://gembainfotech.com/hrm/admin/users/login"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-green-500 font-semibold text-md px-6 py-2 rounded-full hover:bg-red-500"
              >
                ESS/MSS
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
