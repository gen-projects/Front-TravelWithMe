import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1115] text-white py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Logo e Nome */}
        <div className="flex items-center mb-6 md:mb-0">
          <img 
            src="https://ik.imagekit.io/p5vclikd1/logotravel.png?updatedAt=1738248279581" 
            alt="Travel With Me Logo" 
            className="h-14 w-14 mr-3"  // Tamanho da logo e espaço entre a logo e o nome
          />
          <h2 className="text-2xl font-bold">Travel-with-me</h2>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-6 md:mb-0">
          <a href="#" className="hover:underline">Notícias</a>
          <a href="#" className="hover:underline">Influencers</a>
          <a href="#" className="hover:underline">Seja um Motorista</a>
          <a href="#" className="hover:underline">Seja um Cliente</a>
        </div>
      </div>

      {/* Download App */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold">Baixe o app</h3>
        <div className="flex justify-center space-x-6 mt-3">
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
            alt="Download on the App Store" 
            className="h-10" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
            alt="Get it on Google Play" 
            className="h-10" 
          />
        </div>
        {/* Ratings */}
        <div className="mt-6">
          <p className="text-xl font-bold">4.8 ★★★★★ <span className="text-sm">Avaliações App Store</span></p>
          <p className="text-xl font-bold">4.7 ★★★★★ <span className="text-sm">Avaliações Google Play</span></p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" className="text-2xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-2xl">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
