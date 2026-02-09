"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBrain,
  FaHeart,
  FaSadTear,
  FaUsersCog,
  FaBolt,
  FaBalanceScale,
} from "react-icons/fa";

const specialties = [
  {
    icon: FaSadTear,
    title: "Ansiedad y Estrés",
    description:
      "Técnicas especializadas para manejar la ansiedad, ataques de pánico y estrés crónico, recuperando tu tranquilidad.",
    stats: "85% de mejoría",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaHeart,
    title: "Depresión",
    description:
      "Tratamiento integral para superar estados depresivos, recuperar motivación y redescubrir el sentido de tu vida.",
    stats: "90% efectividad",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FaBrain,
    title: "Autoestima",
    description:
      "Fortalecimiento de la confianza personal, autocuidado y desarrollo de una imagen positiva de ti mismo.",
    stats: "92% satisfacción",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: FaUsersCog,
    title: "Relaciones Interpersonales",
    description:
      "Mejora tus habilidades sociales, comunicación asertiva y construcción de relaciones saludables.",
    stats: "88% mejora",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: FaBolt,
    title: "Manejo de Crisis",
    description:
      "Intervención y apoyo inmediato en situaciones de crisis emocional, duelo o cambios vitales significativos.",
    stats: "Atención urgente",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: FaBalanceScale,
    title: "Equilibrio Emocional",
    description:
      "Desarrollo de inteligencia emocional, autorregulación y estrategias para mantener el balance en tu vida.",
    stats: "Bienestar integral",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const Specialties = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="especialidades"
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
              Áreas de Especialización
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Especialidades Clínicas
            <span className="gradient-text block mt-2">
              Basadas en Evidencia
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Tratamientos especializados con técnicas probadas científicamente
            para abordar diferentes desafíos emocionales y mentales.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${specialty.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <specialty.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all">
                    {specialty.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Stats Badge */}
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${specialty.gradient} bg-opacity-10 backdrop-blur-sm`}
                  >
                    <span className="text-sm font-semibold text-slate-700">
                      {specialty.stats}
                    </span>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${specialty.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div
          className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Necesitas ayuda inmediata?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Ofrecemos sesiones de evaluación sin costo para determinar el
                mejor plan terapéutico para ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contacto"
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Agenda tu Evaluación Gratuita
                </a>
                <a
                  href="tel:+525559876543"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
