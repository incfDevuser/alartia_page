import React from "react";
import { IoNotificationsOutline, IoStatsChartOutline, IoPeopleOutline } from "react-icons/io5";
import lazoTool from '../assets/LazoTool1.png';
import lazoTool2 from '../assets/LazoTool2.png';

const LazoTool = () => {
  return (
    <div className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-4xl font-bold text-gray-900 mb-6">
            Delimita tu zona. <span className="text-blue-600">Recibe alertas precisas.</span>
          </h4>
          <p className="text-xl text-gray-600">
            Con nuestra herramienta tipo lazo, puedes seleccionar zonas
            específicas en el mapa y recibir información personalizada sobre
            incidentes, alertas o reportes en tiempo real.
          </p>
        </div>

        <div className="flex justify-center items-center relative mb-40">
          <img
            src={lazoTool}
            alt="Lazo Tool Interface"
            className="w-[35%] transform hover:scale-105 transition-transform duration-300 z-10 rounded-[10px]"
          />
          <img
            src={lazoTool2}
            alt="Lazo Tool Features"
            className="absolute w-[35%] transform hover:scale-105 transition-transform duration-300 left-[50%] top-[15%] rounded-[10px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <IoNotificationsOutline className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-3">Alertas geográficas hiperlocales</h4>
            <p className="text-gray-600">
              Recibe notificaciones solo de las áreas que realmente te interesan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <IoStatsChartOutline className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-3">Estadísticas por zona trazada</h4>
            <p className="text-gray-600">
              Analiza datos específicos de seguridad en las áreas que has
              seleccionado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <IoPeopleOutline className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold mb-3">Colaboración entre vecinos</h4>
            <p className="text-gray-600">
              Comparte zonas de interés con tu comunidad para una vigilancia
              colectiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazoTool;
