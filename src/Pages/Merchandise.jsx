import React, { useEffect, useRef } from 'react';
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import 'jquery';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import "../Css/style.css";

const Merchandise = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flickity = new Flickity(carouselRef.current, {
      wrapAround: true // Contoh konfigurasi Flickity
    });

    // Bersihkan Flickity saat komponen dibongkar
    return () => {
      flickity.destroy();
    };
  }, []);

  return (
    <>
      <NavigationBar />

      <div className="my-6">
        <h1 className="text-center font-bold text-2xl">SEMAFIT STORE</h1>
        <h2 className="text-center font-semibold text-xl">@toko.semafit</h2>
      </div>

      <div className="gallery js-flickity" ref={carouselRef}>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
      </div>

      <Footer/>
    </>
  );
};

export default Merchandise;
