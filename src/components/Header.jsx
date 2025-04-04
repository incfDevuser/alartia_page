import React, { useState } from "react";
import logoApp from "../../public/images/LOGOAPP_-_copia-removebg-preview.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex justify-evenly items-center relative z-50 ">
      <div className="flex items-center">
        <img src={logoApp} alt="alartialogo.jpg" className="w-18" />
        <p className="text-2xl font-bold">Alartia</p>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div className="hidden md:flex space-x-8">
        <a
          onClick={scrollToContact}
          className="text-gray-700 hover:text-blue-600 font-semibold cursor-pointer"
        >
          ¿Quieres accedo anticipado?
        </a>
        <Link
          to="/alianzas"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          Alianzas
        </Link>
        <Link
          to="/quienes-somos"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          Nosotros
        </Link>
      </div>
      <div
        className={`absolute top-full left-0 right-0 flex-col items-center bg-white w-full shadow-lg md:hidden font-semibold overflow-hidden transition-all duration-500 ease-out ${
          isOpen 
            ? "max-h-[300px] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="py-4">
          <a
            onClick={scrollToContact}
            className="w-full text-center py-3 hover:bg-gray-100 cursor-pointer block"
          >
            ¿Quieres accedo anticipado?
          </a>
          <Link
            to="/alianzas"
            className="w-full text-center py-3 hover:bg-gray-100 block"
          >
            Alianzas
          </Link>
          <Link
            to="/quienes-somos"
            className="w-full text-center py-3 hover:bg-gray-100 block"
          >
            Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
