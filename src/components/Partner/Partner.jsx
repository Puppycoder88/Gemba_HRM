import React from 'react';
import partnerimg from '../../assets/Partner.png';
import  PartnerCompany from './PartnerCompany';

function Partner() {
  return (
    <div className='pt-20'>
      <div
        className="h-[70vh] relative place-items-center"
        style={{
          backgroundImage: `url(${partnerimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right-top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent bg-opacity-25">
          <div className="px-12 py-28 h-full flex flex-col justify-end">
            <h1 className="text-5xl font-bold text-green-600 animate-fadeInLeft py-4 animate-slideInLeft">
              Our Partners
            </h1>
            <p className="text-md animate-fadeInRight text-gray-600 max-w-xl animate-slideInRight">
              At <strong>Gemba InfoTech</strong>, we believe in forming partnerships that drive success through collaboration and innovation. As your trusted partner, we are dedicated to understanding your unique business needs and delivering tailored solutions that empower your growth. Together, we’ll navigate challenges and seize opportunities, ensuring your business thrives in a rapidly evolving landscape.
            </p>
          </div>
        </div>
      </div>
      <PartnerCompany/>
    </div>
  );
}

export default Partner;
