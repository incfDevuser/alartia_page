import React from "react";
import {
  IoLogoLinkedin,
  IoLocationOutline,
  IoLogoGithub,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-11 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Alartia
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Transformando la seguridad comunitaria a través de la tecnología y
              la colaboración vecinal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/alartia-chile/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/alartia"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoGithub className="text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <IoLocationOutline className="text-gray-400" />
                <span className="text-gray-400">Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Alartia. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
