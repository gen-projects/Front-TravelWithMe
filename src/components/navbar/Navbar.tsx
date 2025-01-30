import React from "react";
import Button from "../button/Button";

const Navbar: React.FC = () => {
  return (
    <header className="bg-slate-950 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="https://ik.imagekit.io/p5vclikd1/logotravel.png?updatedAt=1738248279581" 
            alt="Travel With Me Logo" 
            className="h-16 w-16"  // Aumenta o tamanho da logo 3x
          />
          <h1 className="text-xl font-bold">Travel-with-me</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg">
          <a href="#" className="hover:underline">Início</a>
          <a href="#" className="hover:underline">Sobre</a>
          <a href="#" className="hover:underline">Como Funciona</a>
          <a href="#" className="hover:underline">Contato</a>
        </nav>

        {/* Login Button */}
        <Button className="bg-white text-green-600 hover:bg-green-100 px-6 py-2 rounded-md">Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
