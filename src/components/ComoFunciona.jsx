import React from "react";
import { motion } from "framer-motion";
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
    arrows: true,
    adaptiveHeight: true
  };

  return (
    <div className="carousel-container p-4">
      <Slider {...settings}>
        {mockups.map((mockup, idx) => (
          <div key={idx} className="px-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl max-h-[500px] flex items-center justify-center bg-gray-100">
              <img
                src={mockup.src}
                alt={mockup.alt}
                className="w-full object-contain max-h-[500px] rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-center p-4 font-medium">
                  {mockup.alt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ComoFunciona = () => {
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
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Header Section */}
              <div className="p-8 border-b border-gray-100">
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
                  {feature.isNew && (
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                      NUEVO
                    </span>
                  )}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <p className="italic text-gray-600">
                    {feature.example}
                  </p>
                </div>
                
                <p className="text-gray-600 text-lg">
                  {feature.solution}
                </p>
              </div>

              {/* Carousel Section */}
              {feature.mockups && (
                <div className="bg-gradient-to-br from-gray-50 to-white">
                  <FeatureCarousel mockups={feature.mockups} />
                </div>
              )}

              {/* Footer Section */}
              <div className="p-6 bg-gray-50 flex justify-between items-center">
                <div className="flex gap-2">
                  {feature.mockups?.map((_, idx) => (
                    <div
                      key={idx}
                      className="w-2 h-2 rounded-full bg-blue-200"
                    />
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
                  Ver más detalles
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
    </section>
  );
};

export default ComoFunciona;
