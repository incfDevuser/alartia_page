import React from "react";
import { FaChartLine, FaPlug, FaCompass, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const AlianzaPage = () => {
  const cards = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Reportes Avanzados por Zona",
      description:
        "Visualiza incidentes, frecuencia, horarios críticos y zonas calientes al instante.",
    },
    {
      icon: <FaPlug className="w-8 h-8" />,
      title: "Integración con tus sistemas",
      description:
        "API, CRMs, apps propias... Alartia se adapta a ti, no al revés.",
    },
    {
      icon: <FaCompass className="w-8 h-8" />,
      title: "Inteligencia Territorial en Tiempo Real",
      description:
        "Detecta patrones de comportamiento y toma decisiones con visión de futuro.",
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Soporte dedicado para instituciones",
      description:
        "Desde juntas de vecinos hasta ministerios: te acompañamos en cada paso.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Link
          to="/"
          className="fixed top-6 left-6 bg-blue-600 px-6 py-3 rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 z-50 text-white hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al inicio
        </Link>

        <div className="relative pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 text-sm font-medium">
                Alianzas Estratégicas
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              🤝 Alianzas que transforman{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                barrios en fortalezas inteligentes
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              ¿Eres una empresa de seguridad? ¿Una municipalidad? ¿Un edificio o proyecto inmobiliario?
              <span className="block font-semibold mt-2">
                Alartia puede cambiar por completo la forma en que proteges a tu comunidad.
              </span>
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto text-center text-lg text-gray-600 space-y-6 mb-16"
          >
            <p>
              En Alartia no creemos en soluciones a medias. Creemos en datos
              reales, decisiones informadas y en una red de colaboración que hace
              que la prevención sea más inteligente que nunca.
            </p>
            <p>
              Aliarte con nosotros significa acceso exclusivo a reportes en tiempo
              real, mapas de calor interactivos, tendencias de riesgo por zona y
              herramientas pensadas para actuar antes de que pase algo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: "📡",
                title: "No reaccionamos",
                description: "Anticipamos",
                color: "bg-blue-100",
              },
              {
                icon: "🧠",
                title: "No improvisamos",
                description: "Analizamos",
                color: "bg-purple-100",
              },
              {
                icon: "🔐",
                title: "No trabajamos solos",
                description: "Creamos redes de protección colaborativa",
                color: "bg-teal-100",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`${item.color} p-4 rounded-xl inline-block mb-6 text-3xl`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-6 text-3xl">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-8 rounded-3xl text-center mb-24"
          >
            <h2 className="text-3xl font-bold mb-6">
              Si estás en el mundo de la seguridad, la prevención o la comunidad,
              no puedes quedarte fuera.
            </h2>
            <p className="text-xl mb-8">
              🚀 Solicita una demo, explora nuestros reportes, únete a la
              revolución <span className="font-semibold">Alartia</span>
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AlianzaPage;
