import { useParams } from 'react-router-dom';
// import CIO_Gallery from './CIO_Gallery';

const Gallery = () => {
  const { title } = useParams(); // Access the title from the URL

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Here you can map and display the individual images for the selected gallery */}
        <p>Display pictures for {title} gallery here.</p>
      </div>
    </div>
  );
};

export default Gallery;
