import React, { useState } from "react";
import mockupImage from "../../public/images/PaginaPrincipal.png";
import mockupImage2 from "../../public/images/MapaPage.png";
import onboarding from '../../public/images/Onboarding.png';
const Hero = () => {
  const [swapped, setSwapped] = useState(false);
  

  const scrollToComoFunciona = () => {
    document.getElementById('como-funciona').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="flex-1 max-w-2xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Conectamos Comunidades
              <span className="block text-blue-600">Protegemos Vidas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Únete a nuestra red de seguridad vecinal y ayúdanos a construir
              un país más seguro y conectado. Mantén tu comunidad protegida 
              con nuestra tecnología de participación colaborativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-blue-600 text-white rounded-lg 
                hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold cursor-pointer"
                onClick={scrollToContact}   //para q el boton se redireccione a la seccion de contacto 
              >
                Protege tu Comunidad
              </button>
              <button
                className="px-8 py-4 bg-white border-2 border-blue-600 
                text-blue-600 rounded-lg hover:bg-blue-50 
                transition-colors duration-300 text-lg font-semibold cursor-pointer"
                onClick={scrollToComoFunciona}
              >
                ¿Cómo Funciona Nuestra App?
              </button>
            </div>
          </div>
          <div 
            className="flex-1 flex justify-center items-center relative h-[500px]"
          >
            <div 
              className={`absolute transition-all duration-1400 ease-in-out ${
                swapped ? 'left-[60%] top-[15%] z-10' : 'left-[30%] top-[0%] z-20'
              }`}
              onClick={() => setSwapped(prev => !prev)}
            >
              <img
                src={mockupImage || "/placeholder.svg"}
                alt="Mobile App Mockup 1"
                className="w-[280px] md:w-[320px] transform hover:scale-105 transition-transform duration-300 rounded-[30px] cursor-pointer"
              />
            </div>
            <div 
              className={`absolute transition-all duration-1400 ease-in-out ${
                swapped ? 'left-[30%] top-[0%] z-20' : 'left-[60%] top-[15%] z-10'
              }`}
              onClick={() => setSwapped(prev => !prev)}
            >
              <img
                src={mockupImage2 || "/placeholder.svg"}
                alt="Mobile App Mockup 2"
                className="w-[280px] md:w-[320px] transform hover:scale-105 transition-transform duration-300 rounded-[30px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
