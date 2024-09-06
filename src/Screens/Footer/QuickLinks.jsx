/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="text-2xl font-bold text-center text-slate-800">Quick Links</h3>
      <nav className="mt-2 ">
        <ul className="text-justify list-disc list-inside">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="hover:text-teal-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
               navigate('/about');
              }}
              className="hover:text-teal-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/careers');
              }}
              className="hover:text-teal-500"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="hover:text-teal-500"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services');
              }}
              className="hover:text-teal-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/faq');
              }}
              className="hover:text-teal-500"
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
