import React from "react";
import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div id="contact" className="p-8 md:p-12 md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm">
      <div className="h-full flex flex-col justify-between items-center max-w-2xl mx-auto">
        <div className="text-center w-full mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Mantente en contacto con nosotros
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Síguenos en LinkedIn para mantenerte al día con nuestras
            últimas actualizaciones y novedades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-xl mt-6">
          <a
            href="mailto:alartiacontacto@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center px-8 py-4 border-2 border-gray-800 bg-white text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-gray-200 opacity-0 group-hover:opacity-20 group-hover:blur-sm transition-all duration-300"></span>
              <IoMailOutline className="text-2xl mr-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-medium">Contáctanos por email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/company/alartia-chile/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center px-8 py-4 border-2 border-gray-800 bg-white text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-gray-200 opacity-0 group-hover:opacity-20 group-hover:blur-sm transition-all duration-300"></span>
              <IoLogoLinkedin className="text-2xl mr-3 group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        <div className="mt-10 w-full">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <p className="text-gray-500 text-sm mt-6 text-center">
            Estamos listos para responder a tus consultas y ayudarte en lo que necesites
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
