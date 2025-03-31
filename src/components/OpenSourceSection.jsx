import React from "react";
import { IoLogoGithub, IoPeople, IoCodeSlash } from "react-icons/io5";

const OpenSourceSection = () => {
  return (
    <div className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full">
              <IoCodeSlash className="text-blue-600 text-xl" />
              <span className="text-blue-600 font-medium">Open source</span>
            </div>

            <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
              Alartia es open source, transparente y pensada para el bien común.
            </h2>

            <p className="text-gray-600 text-lg">
              Nuestra misión es que cualquier comunidad, sin importar su tamaño,
              pueda mejorar su seguridad sin pagar por herramientas cerradas o
              privadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300">
                <IoPeople className="mr-2 text-xl" />
                Unirse a la comunidad
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                  <IoPeople className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Hecha por y para vecinos
                  </h3>
                  <p className="text-gray-600">
                    Una plataforma construida desde la comunidad para la comunidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg">
                  <IoCodeSlash className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    ¡Únete o colabora con el proyecto!
                  </h3>
                  <p className="text-gray-600">
                    Contribuye con código, ideas o retroalimentación para mejorar la seguridad de todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceSection;
