import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    organizationType: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    meetingType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const SERVICE_ID = "service_b62c3il";
    const TEMPLATE_ID = "template_vkhsi1q";
    const USER_ID = "8YfqX2zsrZIj82klv";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (result) => {
        console.log("Correo enviado!", result.text);
        toast.success("¡Correo enviado con éxito!");
        setFormData({
          organizationType: "",
          description: "",
          name: "",
          email: "",
          phone: "",
          meetingType: "",
        });
      },
      (error) => {
        console.error("Error al enviar el correo:", error.text);
        toast.error(
          "Hubo un error al enviar el correo. Intenta de nuevo más tarde."
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      id="contact"
      className="p-8 md:p-12 md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm"
    >
      {/* Agrega el ToastContainer para mostrar las notificaciones */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      <div className="h-full flex flex-col justify-between items-center max-w-2xl mx-auto">
        <div className="text-center w-full mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Solicita una demostración
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
          <div className="space-y-4">
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecciona el tipo de organización</option>
              <option value="condominio">Condominio</option>
              <option value="edificio">Edificio</option>
              <option value="municipalidad">Municipalidad</option>
              <option value="villa">Villa</option>
              <option value="empresa_seguridad">Empresa de Seguridad</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Teléfono de contacto"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />

            <textarea
              name="description"
              placeholder="Describe brevemente tu necesidad..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>

            <select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecciona el tipo de reunión</option>
              <option value="demo">Coordinación para una Demo</option>
              <option value="meeting">Reunión explicativa</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Solicitar contacto
          </button>
        </form>

        <div className="mt-10 w-full">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <p className="text-gray-500 text-sm mt-6 text-center">
            También puedes contactarnos directamente:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a
              href="mailto:alartiacontacto@gmail.com"
              className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <IoMailOutline className="mr-2" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/company/alartia-chile/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <IoLogoLinkedin className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
