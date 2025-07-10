

import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';


// import Image from 'next/image';
// import Count from './component/Count';
// import Register from './component/Register';

export default function App() {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
  //       const data = await response.json();
  //       const imageUrls = data.map(item => item.download_url);
  //       setImages(imageUrls);
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //       // Fallback to random images if API fails
  //       const fallbackImages = Array.from({ length: 5 }, () => `https://picsum.photos/200/300?random=${Math.random()}`);
  //       setImages(fallbackImages);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  return (
    <>
      {/* <Count />
      <Image src="/globe.svg" alt="Logo" width={100} height={100} />
      <Register /> */}

      {/* <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Random ${index}`} width={200} height={300} />
        ))}
      </div> */}
      <Navbar />
      <Home/>
      <Footer />
    </>
  );
}