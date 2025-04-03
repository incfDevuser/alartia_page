import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Primera feature
import CrearZona from '../assets/img_funcionamiento/CrearZona.png'
import FormCrearZona from '../assets/img_funcionamiento/FormCrearZona.png'

//Segunda feature
import ConsultarZona from '../assets/img_funcionamiento/ConsultarZona.png'
import ZonaConsultada from '../assets/img_funcionamiento/ZonaConsutada.png'

//Tercera feature
import RutaEscape from '../assets/img_funcionamiento/RutaEscape.png'
import RutaEscapeForm from '../assets/img_funcionamiento/RutaEscapeForm.png'

//Cuarta feature
import CrearComunidad from '../assets/img_funcionamiento/Crear comunidad Form.png'
import MisComunidades from '../assets/img_funcionamiento/Vista _Mis Comunidades_.png'
import ComunidadChat from '../assets/img_funcionamiento/Comunidad chat ( mapa ).png'

const features = [
  {
    icon: "📍",
    example:
      "“En la plaza de tu barrio han ocurrido varios robos, pero las alertas se mezclan con las de otras zonas y nadie actúa a tiempo.”",
    title: "Crea zonas con precisión",
    solution:
      "Dibuja un lazo alrededor de tu zona específica (como una plaza o manzana) y recibe alertas solo de ese sector. Precisión total, sin ruido innecesario.",
    isNew: true,
    step: "Paso 1",
    buttonLabel: "Crear una zona",
    buttonAction: "modal",
    modalContent: {
      title: "Crear zonas personalizadas",
      description: "Con Alartia, puedes dibujar zonas personalizadas en el mapa para recibir alertas específicas solo de esas áreas. Esta función te permite enfocarte en los lugares que realmente te importan.",
      steps: [
        "Abre la aplicación y toca el botón de dibujar zona",
        "Traza el perímetro del área que te interesa vigilar",
        "Dale un nombre reconocible a tu zona",
        "Configura las preferencias de notificaciones"
      ]
    },
    mockups: [
      {
        src: CrearZona,
        alt: "Interfaz de creación de zona"
      },
      {
        src: FormCrearZona,
        alt: "Formulario de zona"
      }
    ]
  },
  {
    icon: "🗺️",
    example:
      "“Antes de arrendar en un barrio nuevo, quieres saber si es una zona segura.”",
    title: "Consulta áreas específicas",
    solution:
      "Traza un área en el mapa como si jugaras, y obtén un resumen de actividad: reportes, alertas, nivel de seguridad y participación comunitaria.",
    isNew: false,
    step: "Paso 2",
    buttonLabel: "Consultar un área",
    buttonAction: "modal",
    modalContent: {
      title: "Consulta de seguridad por zonas",
      description: "Antes de visitar, mudarte o invertir en una zona, conoce su nivel de seguridad y actividad comunitaria con datos reales y actualizados.",
      steps: [
        "Selecciona la herramienta de consulta en la aplicación",
        "Dibuja el área que quieres analizar",
        "Revisa las estadísticas de seguridad y actividad",
        "Guarda la consulta para futuras referencias"
      ]
    },
    mockups: [
      {
        src: ConsultarZona,
        alt: "Consulta de zona"
      },
      {
        src: ZonaConsultada,
        alt: "Resultados de zona consultada"
      }
    ]
  },
  {
    icon: "🚨",
    example:
      "“Presenciaste un robo y viste hacia dónde escapó el ladrón, pero nadie más lo sabe.”",
    title: "Traza rutas de escape",
    solution:
      "Tú o la persona afectada puede marcar la dirección de huida del delincuente. La alerta se envía a vecinos en ese trayecto para prevenir y actuar.",
    isNew: false,
    step: "Paso 3",
    buttonLabel: "Reportar una ruta",
    buttonAction: "modal",
    modalContent: {
      title: "Trazado de rutas de escape",
      description: "Reporta la dirección de huida de un delincuente para alertar a los vecinos en esa trayectoria y prevenir nuevos incidentes.",
      steps: [
        "Inicia un reporte de emergencia en la aplicación",
        "Selecciona la opción de 'Ruta de escape'",
        "Dibuja la dirección hacia donde viste huir al sospechoso",
        "La alerta se enviará inmediatamente a los usuarios en esa ruta"
      ]
    },
    mockups: [
      {
        src: RutaEscape,
        alt: "Trazado de ruta de escape"
      },
      {
        src: RutaEscapeForm,
        alt: "Formulario de ruta de escape"
      }
    ]
  },
  {
    icon: "👥",
    example:
      "“Tu condominio no tiene comunicación organizada y los vecinos no saben qué pasa.”",
    title: "Crea y une comunidades",
    solution:
      "Crea una comunidad, ubícala en el mapa, habilita su chat privado, alertas internas, estadísticas y fortalece la seguridad local entre todos.",
    isNew: true,
    step: "Paso 4",
    buttonLabel: "Crear comunidad",
    buttonAction: "modal",
    modalContent: {
      title: "Comunidades seguras y conectadas",
      description: "Organiza a tus vecinos en una comunidad digital para mejorar la comunicación y la seguridad colaborativa en tu entorno.",
      steps: [
        "Selecciona 'Crear comunidad' en el menú principal",
        "Define el perímetro de tu comunidad en el mapa",
        "Invita a tus vecinos mediante código o enlace",
        "Configura los canales de comunicación y alertas"
      ]
    },
    mockups: [
      {
        src: CrearComunidad,
        alt: "Crear nueva comunidad"
      },
      {
        src: MisComunidades,
        alt: "Vista de mis comunidades"
      },
      {
        src: ComunidadChat,
        alt: "Chat de la comunidad"
      }
    ]
  },
];

const FeatureCarousel = ({ mockups }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false, 
    adaptiveHeight: true,
    customPaging: function(i) {
      return (
        <div className="dot-indicator w-2 h-2 mx-1 rounded-full bg-blue-200 hover:bg-blue-400 transition-colors"></div>
      );
    },
    dotsClass: "slick-dots custom-dots flex justify-center gap-2 mt-4"
  };

  return (
    <div className="carousel-container p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl"></div>
      <div className="relative z-10">
        <Slider {...settings}>
          {mockups.map((mockup, idx) => (
            <div key={idx} className="px-4 py-6">
              <div className="relative flex items-center justify-center">
                <div className="relative mx-auto transform hover:scale-105 transition-transform duration-300 shadow-xl rounded-xl overflow-hidden">
                  <img
                    src={mockup.src}
                    alt={mockup.alt}
                    className="w-full object-contain max-h-[500px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-md"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-md"></div>
      </div>
    </div>
  );
};

const FeatureModal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <h3 className="text-2xl font-bold">{content.title}</h3>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-200"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6">{content.description}</p>
              
              <h4 className="font-bold text-gray-800 mb-3">Cómo funciona:</h4>
              <ol className="space-y-2 mb-6">
                {content.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              
              <div className="mt-6 text-center">
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                            text-white px-6 py-2 rounded-full shadow-md"
                  onClick={onClose}
                >
                  Entendido
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ComoFunciona = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = (feature) => {
    if (feature.buttonAction === "modal") {
      setActiveModal(feature.modalContent);
    } else if (feature.buttonAction === "navigate") {
      console.log(`Navigate to: ${feature.buttonLink}`);
    } else if (typeof feature.buttonAction === "function") {
      feature.buttonAction();
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-blue-50" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            💡 Descubre cómo funciona
          </span>
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Seguridad Inteligente,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Simple y Efectiva
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una plataforma diseñada para hacer la diferencia en tu comunidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 border-b border-gray-100 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <div>
                      <span className="text-blue-600 text-sm font-semibold px-3 py-1 bg-blue-50 rounded-full">
                        {feature.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 mt-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {feature.isNew && (
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                        NUEVO
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl mb-6 min-h-[80px] flex items-center">
                  <p className="italic text-gray-600">
                    {feature.example}
                  </p>
                </div>
                
                <p className="text-gray-600 text-lg min-h-[80px]">
                  {feature.solution}
                </p>
              </div>

              {feature.mockups && (
                <div className="bg-gradient-to-br from-gray-50 to-white">
                  <FeatureCarousel mockups={feature.mockups} />
                </div>
              )}

              <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 flex justify-center items-center">
                <button 
                  className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                           font-medium flex items-center gap-2 group px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
                  onClick={() => handleButtonClick(feature)}
                >
                  {feature.buttonLabel}
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <FeatureModal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        content={activeModal} 
      />
    </section>
  );
};

export default ComoFunciona;
