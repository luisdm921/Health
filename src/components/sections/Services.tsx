"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaUsers,
  FaHome,
  FaLaptop,
  FaChild,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaUser,
    title: "Terapia Individual",
    description:
      "Sesiones personalizadas enfocadas en tus necesidades específicas, ayudándote a superar obstáculos emocionales y alcanzar tu bienestar.",
    features: [
      "Evaluación psicológica inicial",
      "Plan terapéutico personalizado",
      "Seguimiento continuo",
      "Técnicas basadas en evidencia",
    ],
    color: "from-primary-500 to-primary-600",
    bgColor: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: FaUsers,
    title: "Terapia de Pareja",
    description:
      "Fortalece tu relación y mejora la comunicación. Trabajamos juntos para resolver conflictos y construir una relación más sana.",
    features: [
      "Mejora de comunicación",
      "Resolución de conflictos",
      "Reconstrucción de confianza",
      "Estrategias de convivencia",
    ],
    color: "from-secondary-500 to-secondary-600",
    bgColor: "bg-secondary-50",
    iconColor: "text-secondary-600",
  },
  {
    icon: FaHome,
    title: "Terapia Familiar",
    description:
      "Mejora la dinámica familiar y fortalece los vínculos. Abordamos conflictos y creamos espacios de comunicación saludable.",
    features: [
      "Mediación familiar",
      "Dinámicas grupales",
      "Fortalecimiento de vínculos",
      "Resolución de crisis",
    ],
    color: "from-accent-500 to-accent-600",
    bgColor: "bg-accent-50",
    iconColor: "text-accent-600",
  },
  {
    icon: FaLaptop,
    title: "Terapia Online",
    description:
      "Accede a terapia profesional desde la comodidad de tu hogar. Misma calidad de servicio con mayor flexibilidad y comodidad.",
    features: [
      "Sesiones por videollamada",
      "Flexibilidad horaria",
      "Plataforma segura",
      "Misma efectividad",
    ],
    color: "from-primary-400 to-secondary-500",
    bgColor: "bg-gradient-to-br from-primary-50 to-secondary-50",
    iconColor: "text-primary-500",
  },
  {
    icon: FaChild,
    title: "Psicología Infantil",
    description:
      "Apoyo especializado para niños y adolescentes. Trabajamos con técnicas lúdicas adaptadas a cada etapa del desarrollo.",
    features: [
      "Evaluación del desarrollo",
      "Técnicas lúdicas",
      "Orientación a padres",
      "Seguimiento escolar",
    ],
    color: "from-secondary-400 to-primary-500",
    bgColor: "bg-gradient-to-br from-secondary-50 to-primary-50",
    iconColor: "text-secondary-500",
  },
  {
    icon: FaBriefcase,
    title: "Psicología Organizacional",
    description:
      "Mejora el clima laboral y el bienestar de tu equipo. Evaluaciones, talleres y estrategias para ambientes laborales saludables.",
    features: [
      "Evaluación de clima laboral",
      "Talleres corporativos",
      "Prevención de burnout",
      "Desarrollo de liderazgo",
    ],
    color: "from-accent-400 to-secondary-500",
    bgColor: "bg-gradient-to-br from-accent-50 to-secondary-50",
    iconColor: "text-accent-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Nuestros Servicios
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Servicios Profesionales de
            <span className="gradient-text block mt-2">
              Psicología y Terapia
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Ofrecemos una amplia gama de servicios terapéuticos diseñados para
            atender tus necesidades específicas con profesionalismo y empatía.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`text-3xl ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span
                        className={`${service.iconColor} mt-1 flex-shrink-0`}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contacto"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${service.iconColor} hover:gap-3 transition-all group/btn`}
                >
                  Más Información
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="text-lg text-slate-600 mb-6">
            ¿No estás seguro de qué servicio necesitas?
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Agenda una Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
