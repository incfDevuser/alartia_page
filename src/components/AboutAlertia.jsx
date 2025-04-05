import React from "react";

const AboutAlertia = () => {
  const features = [
    {
      title: "Alertas en Tiempo Real",
      description:
        "Recibe notificaciones instantáneas sobre incidentes en tu área",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Icono de alertas en tiempo real"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      color: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Comunidad Segura",
      description:
        "Conecta con tus vecinos para crear una red de seguridad efectiva",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Icono de comunidad segura"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Geolocalización",
      description:
        "Visualiza incidentes cercanos y zonas seguras en tiempo real",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Icono de geolocalización"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="py-16 bg-gray-50" id="acerca-de">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Acerca de Alartia
          </h2>
          <p className="text-blue-600 font-semibold text-xl mb-4">
            Tecnología colaborativa para comunidades más seguras
          </p>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Construimos tecnología que conecta y protege comunidades, creando
            entornos más seguros a través de la colaboración vecinal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} p-6 rounded-lg shadow-sm ${feature.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-transparent hover:border-gray-200`}
            >
              <div className={`${feature.iconColor} rounded-full p-3 inline-block mb-4 bg-white shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAlertia;
