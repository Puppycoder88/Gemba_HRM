import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../assets/homeimg1.jpg";
import Image2 from "../../assets/homeimg2.jpg";
import Image3 from "../../assets/homeimg3.jpg";

const images = [
  { src: Image1, alt: 'Image 1' },
  { src: Image2, alt: 'Image 2' },
  { src: Image3, alt: 'Image 3' },
];

const ImageSlider = () => {
  const settings = {
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    fade: true,
  };

  return (
    <div className="h-[65vh] top-0 transform shadow-md relative" >
      <Slider {...settings} className="w-full h-[65vh]">
        {images.map((image, index) => (
          <div key={index} className="h-[65vh]">
            <img src={image.src} alt={image.alt} className="w-full h-[65vh] object-cover" />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 w-full h-[65vh] bg-black bg-opacity-40 flex flex-col ">
        <div className="px-12 py-40 contrast-200 ">
          <h1 className="text-white text-6xl font-bold animate-slideInLeft">Empowering  You </h1> 
        <h2 className="text-6xl font-bold pb-3 animate-slideInRight text-white">  to Build <span className="text-green-600 ">with Ease</span></h2>
          <p className="text-white font-semibold text-xl animate-slideInLeft">Thriving Together in the Future You Create</p>
      
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
