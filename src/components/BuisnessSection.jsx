import React from 'react';
import { IoBusinessOutline, IoStatsChartOutline, IoShieldCheckmarkOutline, IoAnalyticsOutline } from "react-icons/io5";

const BuisnessSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
    localStorage.setItem('contactDescription', 'Solicitar acceso anticipado');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-24 rounded-xl">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6">
            <span className="text-blue-300 text-sm font-medium">Acceso Anticipado Disponible</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Eres parte de una empresa de seguridad?
            <span className="block text-blue-400 mt-2">¿Representas un edificio, comunidad o inmobiliaria?</span>
            <span className="block text-teal-400 mt-2">¿Eres representante de una junta de vecinos?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            Alartia no solo protege a vecinos: también entrega herramientas inteligentes para quienes toman decisiones.
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Estamos en etapa de desarrollo y buscamos colaboradores para probar nuestra plataforma. 
            ¡Únete ahora y obtén acceso anticipado con funcionalidades exclusivas!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-blue-500/20 p-4 rounded-xl inline-block mb-6">
              <IoStatsChartOutline className="text-4xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Reportes Geográficos</h3>
            <p className="text-blue-100">
              Visualiza y analiza datos de seguridad en tiempo real por zonas específicas.
            </p>
          </div>
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-purple-500/20 p-4 rounded-xl inline-block mb-6">
              <IoAnalyticsOutline className="text-4xl text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Estadísticas Detalladas</h3>
            <p className="text-blue-100">
              Toma decisiones informadas basadas en datos precisos y actualizados.
            </p>
          </div>
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="bg-teal-500/20 p-4 rounded-xl inline-block mb-6">
              <IoShieldCheckmarkOutline className="text-4xl text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Alertas Inteligentes</h3>
            <p className="text-blue-100">
              Recibe notificaciones instantáneas sobre incidentes en zonas prioritarias.
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-medium text-blue-100 mb-8">
            Porque la seguridad no se improvisa. Se construye con información.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Acceso Anticipado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessSection;
