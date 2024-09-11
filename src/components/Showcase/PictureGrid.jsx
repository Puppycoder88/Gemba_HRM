import React from 'react';
import { useParams } from 'react-router-dom';
import img12 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.55.jpeg';
import cake from '../../assets/pictures/Cake.jpeg';
import union from '../../assets/pictures/15August.jpeg';

const pictureData = {
  "CIO Gallery": img12,
  "Birthday Gallery": cake,
  "Reunion Gallery": union,
};

const PicturePage = () => {
  const { title } = useParams(); // Get the title from the route parameter
  const imageSrc = pictureData[title]; // Find the corresponding image

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">{title}</h1>
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="w-full max-w-xl object-cover rounded-lg shadow-lg" />
      ) : (
        <p className="text-xl text-red-500">Image not found</p>
      )}
    </div>
  );
};

export default PicturePage;
