import React from 'react';

const LocationMap = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 text-center">Location Map</h2>
      <div className="w-full h-52 mt-4 md:h-52 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3430.6024182516485!2d76.69403007467537!3d30.701460587144894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzA1LjIiTiA3NsKwNDEnNDcuOCJF!5e0!3m2!1sen!2sin!4v1723102982165!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
       
      </div>
    </div>
  );
};

export default LocationMap;
