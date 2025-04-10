import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoRocketOutline,
  IoHeartOutline,
  IoEarthOutline,
} from "react-icons/io5";
import PageTransition from "../components/PageTransition";

const QuienesSomosPage = () => {
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
                Nuestra Historia
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando la
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Seguridad Digital
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nacidos en las aulas universitarias, impulsados por la innovación y
              el compromiso social. Un equipo de estudiantes de cuarto año de
              Ingeniería Civil Informática de la Universidad Andrés Bello, unidos
              por la visión de transformar la seguridad ciudadana.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Misión",
                description:
                  "Transformar la seguridad ciudadana mediante soluciones tecnológicas innovadoras y accesibles.",
                icon: <IoRocketOutline className="text-4xl text-blue-600" />,
                color: "bg-blue-100",
              },
              {
                title: "Visión",
                description:
                  "Liderar la revolución de la seguridad digital en Latinoamérica, creando comunidades más seguras y conectadas.",
                icon: <IoEarthOutline className="text-4xl text-purple-600" />,
                color: "bg-purple-100",
              },
              {
                title: "Valores",
                description:
                  "Innovación constante, compromiso social inquebrantable y excelencia tecnológica en todo lo que hacemos.",
                icon: <IoHeartOutline className="text-4xl text-teal-600" />,
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
                <div className={`${item.color} p-4 rounded-xl inline-block mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestro Equipo Fundador
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Somos un equipo de estudiantes de cuarto año de Ingeniería Civil
              Informática de la Universidad Andrés Bello, unidos por nuestra
              pasión por la tecnología y el compromiso con la seguridad ciudadana.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Martin Gomez",
                  role: "CEO - Director General y Arquitecto de Software",
                  description:
                    "Líder visionario especializado en arquitectura de sistemas seguros y desarrollo de soluciones innovadoras. Impulsor de la transformación digital.",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  name: "Cristobal Hachim",
                  role: "CEO - Director Ejecutivo y Especialista en Datos",
                  description:
                    "Estratega digital enfocado en el crecimiento empresarial y la optimización de procesos. Experto en la implementación de soluciones basadas en datos.",
                  gradient: "from-blue-600 to-blue-700",
                },
                {
                  name: "Cristopher Arredondo",
                  role: "CTO - Director de Tecnología y Analista de Datos",
                  description:
                    "Pionero en la implementación de tecnologías emergentes y sistemas predictivos. Especialista en integración de soluciones de seguridad avanzadas.",
                  gradient: "from-blue-600 to-blue-700",
                },
                {
                  name: "Benjamin Peña",
                  role: "CMO - Director de Marketing y Analista de Negocios",
                  description:
                    "Estratega de marketing digital con enfoque en el análisis de datos y comportamiento del usuario. Experto en desarrollo de estrategias de crecimiento basadas en métricas.",
                  gradient: "from-purple-500 to-blue-500",
                },
                {
                  name: "Matias Muñoz",
                  role: "CFO - Director Financiero y Científico de Datos",
                  description:
                    "Especialista en análisis financiero y gestión de recursos empresariales. Experto en la optimización de costos y previsión financiera mediante análisis de datos.",
                  gradient: "from-teal-500 to-blue-500",
                },
                {
                  name: "Cristobal Flores",
                  role: "COO - Director de Operaciones y Analista de Sistemas",
                  description:
                    "Maestro en la optimización de procesos operativos y gestión de recursos tecnológicos. Especializado en la implementación de sistemas de monitoreo en tiempo real.",
                  gradient: "from-blue-400 to-indigo-600",
                },
                {
                  name: "Francisco Morales",
                  role: "CIO - Director de Innovación y Diseñador de Experiencia de Usuario",
                  description:
                    "Innovador en diseño de interfaces centradas en el usuario y experiencias digitales. Especialista en la creación de soluciones tecnológicas intuitivas y accesibles.",
                  gradient: "from-indigo-500 to-purple-600",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`h-2 w-32 mx-auto rounded-full bg-gradient-to-r ${member.gradient} mb-8`}
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default QuienesSomosPage;
