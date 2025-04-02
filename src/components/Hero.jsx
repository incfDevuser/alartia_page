import React from "react";
import mockupImage from "../../public/images/PaginaPrincipal.png";
import mockupImage2 from "../../public/images/MapaPage.png";
import onboarding from '../../public/images/Onboarding.png';
const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ 
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
              Únete a la red de seguridad vecinal, ayudanos a crear un pais
              seguro y conectado. Mantén tu comunidad segura con nuestra
              tecnología de partiipacion colaborativa.
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
                transition-colors duration-300 text-lg font-semibold"
                onClick={scrollToFeatures}
              >
                ¿Cómo Funciona?
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            <img
              src={mockupImage}
              alt="Mobile App Mockup 1"
              className="w-[60%] md:w-[50%] transform hover:scale-105 transition-transform duration-300 z-10 rounded-[30px]"
            />
            <img
              src={mockupImage2}
              alt="Mobile App Mockup 2"
              className="absolute w-[60%] md:w-[50%] transform hover:scale-105 transition-transform duration-300 left-[40%] top-[10%] rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
