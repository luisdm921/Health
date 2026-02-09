"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaDirections,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "50px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Teléfono",
      content: "+52 555 000 0100",
      link: "tel:+5255500100",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+52 555 000 0100",
      link: "https://wa.me/5255500100",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "contacto@psicologia-integral.com",
      link: "mailto:contacto@psicologia-integral.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicación",
      content: "Av. Insurgentes Sur 1234, CDMX",
      link: "https://maps.google.com",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM" },
    { day: "Sábado", hours: "10:00 AM - 2:00 PM" },
    { day: "Domingo", hours: "Cerrado" },
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div
            className={`mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Contacto
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Comienza Tu Camino
            <span className="gradient-text block mt-2">Hacia el Bienestar</span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Agenda tu primera consulta o contáctanos para resolver cualquier
            duda. Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Quick Contact Cards - Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform mb-4`}
                >
                  <info.icon className="text-2xl" />
                </div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  {info.title}
                </div>
                <div className="font-bold text-slate-800 group-hover:text-primary-600 transition-colors text-lg">
                  {info.content}
                </div>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form - Takes 2 columns */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Agenda tu Primera Consulta
                </h3>

                {submitStatus === "success" ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <FaCheckCircle className="text-4xl text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">
                      ¡Mensaje Enviado!
                    </h4>
                    <p className="text-slate-600 mb-6">
                      Gracias por contactarnos. Te responderemos en las próximas
                      24 horas.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Enviar Otro Mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="+52 555 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Servicio de Interés *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors bg-white"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="individual">Terapia Individual</option>
                          <option value="pareja">Terapia de Pareja</option>
                          <option value="familiar">Terapia Familiar</option>
                          <option value="online">Terapia Online</option>
                          <option value="infantil">Psicología Infantil</option>
                          <option value="organizacional">
                            Psicología Organizacional
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntanos brevemente tu situación o lo que necesitas..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Agendar Consulta
                        </>
                      )}
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      Al enviar este formulario, aceptas nuestra política de
                      privacidad. Tus datos están protegidos.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {/* Schedule */}
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-primary-500">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaClock className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold">Horario</h3>
                  </div>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-xl backdrop-blur-sm"
                      >
                        <span className="font-medium text-sm">{item.day}</span>
                        <span className="font-bold text-sm">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-slate-700">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-500/20 rounded-2xl mb-4">
                    <FaWhatsapp className="text-3xl text-accent-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    ¿Necesitas Ayuda Urgente?
                  </h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">
                    Si estás en crisis o necesitas atención inmediata,
                    contáctanos por WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/5255500100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaWhatsapp className="text-xl" />
                    Chatear Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 border-b border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FaMapMarkerAlt className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Visítanos en Nuestro Consultorio
                      </h3>
                      <p className="text-slate-600 text-lg">
                        Av. Insurgentes Sur 1234, Col. Del Valle
                      </p>
                      <p className="text-slate-500 text-sm">
                        Ciudad de México, CDMX 03100
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//Av.+Insurgentes+Sur+1234,+Del+Valle,+Ciudad+de+México,+CDMX/@19.382932741893157,-99.17894492464964,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 whitespace-nowrap"
                  >
                    <FaDirections className="text-xl" />
                    Cómo Llegar
                  </a>
                </div>
              </div>
              <div className="relative w-full h-[500px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9534025987484!2d-99.17894492464964!3d19.382932741893157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAv.%20Insurgentes%20Sur%2C%20Del%20Valle%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1707386400000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del consultorio"
                  className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
