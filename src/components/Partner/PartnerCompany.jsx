import React from 'react';
import img1 from '../../assets/Agrachain.png';
import img2 from '../../assets/Applex_us.jpeg';
import img3 from '../../assets/epack-logo.png';
import img4 from '../../assets/GEO_Drive.png';
import img5 from '../../assets/M3M.png';
import img6 from '../../assets/sparkMinda.jpeg';
import img7 from '../../assets/mobility.jpeg';
import img8 from '../../assets/delawarel.png';
import img9 from '../../assets/punjab_chemicals.jpeg';
import img10 from '../../assets/PKC.jpeg';
import img11 from '../../assets/Qcent.png';
import img12 from '../../assets/smartworld.png';
import img13 from '../../assets/vikalps.gif';
import img14 from '../../assets/centurion.jpg';



const images = [
    { id: 1, src: img1, title: 'Image 1', description: 'Description 1' },
    { id: 2, src: img2, title: 'Image 2', description: 'Description 2' },
    { id: 3, src: img3, title: 'Image 3', description: 'Description 3' },
    { id: 4, src: img4, title: 'Image 4', description: 'Description 3' },
    { id: 5, src: img5, title: 'Image 5', description: 'Description 3' },
    { id: 6, src: img6, title: 'Image 6', description: 'Description 3' },
    { id: 7, src: img7, title: 'Image 7', description: 'Description 3' },
    { id: 8, src: img8, title: 'Image 8', description: 'Description 3' },
    { id: 9, src: img9, title: 'Image 9', description: 'Description 3' },
    { id: 10, src: img10, title: 'Image 10', description: 'Description 3' },
    { id: 11, src: img11, title: 'Image 11', description: 'Description 3' },
    { id: 12, src: img12, title: 'Image 12', description: 'Description 3' },
    { id: 13, src: img13, title: 'Image 13', description: 'Description 3' },
    { id: 14, src: img14, title: 'Image 14', description: 'Description 3' },
  ];

function PartnerCompany() {
    return (
       
        <div className=' items-center justify-center text-center bg-gradient-to-r from-gray-300 to-gray-200 p-8'>
         <h1 className='text-gray-800 text-center text-6xl font-semibold'><ins>Our Trusted Partners</ins></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-1 my-14 mx-28">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-[60vh] h-[30vh] bg-white shadow-lg p-8"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              <h2 className="text-lg font-semibold">{image.title}</h2>
              <p className="text-sm">{image.description}</p>
            </div> */}
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default PartnerCompany;
  