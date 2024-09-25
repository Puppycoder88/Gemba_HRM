import React from 'react';
import { useNavigate } from 'react-router-dom';
import img12 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.38.55.jpeg';
import cake from '../../assets/pictures/Cake.jpeg';
import union from '../../assets/pictures/15August.jpeg';

const picture = [
  {
    image: img12,
    title: "CIO Gallery",
  },
  {
    image: cake,
    title: "Birthday Gallery",
  },
  {
    image: union,
    title: "Reunion Gallery",
  },
];

const PictureCard = ({ image, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${title}`); 
    // Fixed the path
  };

  return (
    <div
      className="bg-white p-6 shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-tl-2xl rounded-br-2xl"
      onClick={handleClick}
    >
      <div className="mb-4 items-center">
        {/* Display image using img tag */}
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-600">{title}</h3>
    </div>
  );
};

const PictureGrid = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-slate-200 pb-10">
      <div className=" w-full justify-center items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold p-6 text-gray-700 text-center hover:underline">Our Memory Wall</h1>
      </div>

      <div className=" py-4 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
    {picture.map((Picture, index) => (
      <div key={index} className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
        <PictureCard {...Picture} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default PictureGrid;
