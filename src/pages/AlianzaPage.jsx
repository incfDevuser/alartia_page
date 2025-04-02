import React from "react";
import {
  FaShieldAlt,
  FaBuilding,
  FaUsers,
  FaLandmark,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const AlianzaPage = () => {
  const sectorSolutions = [
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Empresas de Seguridad",
      description:
        "Optimiza tus operativos y maximiza la eficiencia de tu personal",
      benefits: [
        "Mapas de calor de zonas críticas en tiempo real",
        "Predicción de horarios de mayor riesgo",
        "Rutas óptimas para patrullaje",
        "Reducción de hasta 40% en tiempos de respuesta",
      ],
      features: [
        "Dashboard especializado para control de operaciones",
        "Integración con sistemas de radio y GPS",
        "Reportes automáticos de cobertura",
      ],
      gradient: "from-blue-500 to-blue-600",
      metrics: "Mejora hasta un 60% la efectividad de tus operativos",
      pricing: {
        suggested: "$150.000 CLP",
      },
    },
    {
      icon: <FaLandmark className="w-12 h-12" />,
      title: "Municipalidades",
      description: "Gestión inteligente de la seguridad ciudadana",
      benefits: [
        "Análisis predictivo para prevención del delito",
        "Coordinación eficiente entre seguridad municipal y vecinos",
        "Mapeo territorial de incidentes",
        "Estadísticas por sector y tipo de incidente",
      ],
      features: [
        "Centro de monitoreo integrado",
        "Reportes para toma de decisiones estratégicas",
        "Sistema de alertas tempranas",
      ],
      gradient: "from-purple-500 to-blue-500",
      metrics: "Reduce hasta 35% los incidentes en zonas críticas",
      pricing: {
        suggested: "$500.000 CLP",
      },
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Edificios y Condominios",
      description: "Seguridad comunitaria integrada y eficiente",
      benefits: [
        "Control de accesos inteligente",
        "Comunicación directa entre vecinos y conserjería",
        "Registro digital de visitas e incidentes",
        "Alertas instantáneas a la comunidad",
      ],
      features: [
        "Panel de administración para conserjes",
        "App personalizada para residentes",
        "Integración con cámaras y porteros eléctricos",
      ],
      gradient: "from-teal-500 to-blue-500",
      metrics: "Aumenta 45% la satisfacción de los residentes",
      pricing: {
        suggested: "$265.000 CLP",
      },
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      title: "Comunidades Vecinales",
      description: "Red de seguridad colaborativa entre vecinos",
      benefits: [
        "Sistema de alertas comunitarias",
        "Comunicación directa con servicios de emergencia",
        "Reportes vecinales georreferenciados",
        "Red de apoyo vecinal coordinada",
      ],
      features: [
        "Chat comunitario seguro",
        "Botón de pánico con geolocalización",
        "Directorio de contactos de emergencia",
      ],
      gradient: "from-blue-400 to-indigo-600",
      metrics: "Respuesta comunitaria un 50% más rápida",
      pricing: {
        suggested: "$40.000CLP",
      },
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
              ¿Eres una empresa de seguridad? ¿Una municipalidad? ¿Un edificio o
              proyecto inmobiliario?
              <span className="block font-semibold mt-2">
                Alartia puede cambiar por completo la forma en que proteges a tu
                comunidad.
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
              reales, decisiones informadas y en una red de colaboración que
              hace que la prevención sea más inteligente que nunca.
            </p>
            <p>
              Aliarte con nosotros significa acceso exclusivo a reportes en
              tiempo real, mapas de calor interactivos, tendencias de riesgo por
              zona y herramientas pensadas para actuar antes de que pase algo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {sectorSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`h-2 w-32 rounded-full bg-gradient-to-r ${solution.gradient} mb-8`}
                />
                <div className="text-blue-600 mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Beneficios Clave
                  </h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Características
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-blue-700 font-semibold">
                    {solution.metrics}
                  </p>
                </div>

                <div className="mt-6 border-t pt-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Inversión
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Valor de Integracion:
                      </span>
                      <span className="font-medium">
                        {solution.pricing.suggested}
                      </span>
                    </div>
                  </div>
                </div>
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
              Si estás en el mundo de la seguridad, la prevención o la
              comunidad, no puedes quedarte fuera.
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
