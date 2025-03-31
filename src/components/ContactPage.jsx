import React, { useEffect, useState } from "react";
import { IoLogoLinkedin, IoSendOutline } from "react-icons/io5";

const ContactPage = () => {
  const [description, setDescription] = useState("");
  useEffect(() => {
    const savedDescription = localStorage.getItem("contactDescription");
    if (savedDescription) {
      setDescription(savedDescription);
      localStorage.removeItem("contactDescription");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="relative bg-gray-50 py-24 rounded-2xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos aquí para responder tus dudas, si quieres colaborar o alianza
          </p>
        </div>

        <div className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-8 md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow"
                      placeholder="Tu apellido"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Número Telefónico
                    </label>
                    <input
                    type="tel"
                    className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow"
                    placeholder="+56 1 2345 6789"
                    required
                    />
                    </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">
                  Tipo
                  </label>
                  <select
                  className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow"
                  required
                  >
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="adminstracion">Administración</option>
                    <option value="particular">Particular</option>
                  </select>

                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                   Propiedad
                   </label>
                   <select
                    className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow"
                    required
                    >
                      <option value="" disabled selected>Selecciona una opción</option>
                      <option value="condominio">Condominio</option>
                      <option value="edificio">Edificio</option>
                      <option value="poblacion">Población</option>
                    </select>
                 </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    className="mt-1 w-full px-4 py-3 bg-gray-50 border-0 rounded focus:ring-1 focus:ring-gray-900 transition-shadow h-32"
                    placeholder="¿Cómo podemos ayudarte?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <IoSendOutline className="text-lg" />
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="p-8 md:col-span-2 bg-gray-50">
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Conecta con nosotros
                  </h3>
                  <p className="text-gray-600">
                    Síguenos en LinkedIn para mantenerte al día con nuestras
                    últimas actualizaciones y novedades.
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/company/alartia-chile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 mt-8 border border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-all group"
                >
                  <IoLogoLinkedin className="text-xl mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
