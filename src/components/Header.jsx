import React, { useState, useEffect } from "react";
import logoApp from "../../public/images/LOGOAPP_-_copia-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-evenly items-center z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-lg shadow-md py-3" 
        : "bg-white/60 backdrop-blur-sm py-4"
    }`}>
      <div 
        onClick={scrollToTop} 
        className="flex items-center gap-2 group cursor-pointer"
      >
        <img 
          src={logoApp} 
          alt="alartialogo.jpg" 
          className="w-18 group-hover:scale-105 transition-transform" 
        />
        <p className="text-2xl font-bold -to-r text to-black bg-clip-text">Alartia</p>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
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
          className="text-gray-700 hover:text-blue-600 font-semibold cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
        >
          ¿Quieres accedo anticipado?
        </a>
        <Link
          to="/alianzas"
          className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
        >
          Alianzas
        </Link>
        <Link
          to="/quienes-somos"
          className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
        >
          Nosotros
        </Link>
      </div>
      <div
        className={`absolute top-full left-0 right-0 flex-col items-center backdrop-blur-md bg-white/90 w-full shadow-lg md:hidden font-semibold overflow-hidden transition-all duration-500 ease-out ${
          isOpen 
            ? "max-h-[300px] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="py-4">
          <a
            onClick={scrollToContact}
            className="w-full text-center py-3 hover:bg-blue-50 cursor-pointer block transition-colors duration-200"
          >
            ¿Quieres accedo anticipado?
          </a>
          <Link
            to="/alianzas"
            className="w-full text-center py-3 hover:bg-blue-50 block transition-colors duration-200"
          >
            Alianzas
          </Link>
          <Link
            to="/quienes-somos"
            className="w-full text-center py-3 hover:bg-blue-50 block transition-colors duration-200"
          >
            Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
