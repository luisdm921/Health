"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaUserShield,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

const Approach = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: FaUserShield,
      title: "Espacio Seguro y Confidencial",
      description:
        "Tu privacidad es fundamental. Todas las sesiones son completamente confidenciales y se desarrollan en un ambiente de respeto y confianza.",
    },
    {
      icon: FaComments,
      title: "Escucha Activa y Empatía",
      description:
        "Te escuchamos sin juzgar. Cada sesión está centrada en comprender tu experiencia única y tus necesidades individuales.",
    },
    {
      icon: FaChartLine,
      title: "Enfoque Basado en Resultados",
      description:
        "Trabajamos con objetivos claros y medibles. Evaluamos continuamente tu progreso para ajustar las estrategias terapéuticas.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Evaluación Inicial",
      description:
        "Primera sesión gratuita para conocerte, entender tu situación y establecer objetivos terapéuticos.",
    },
    {
      number: "02",
      title: "Plan Personalizado",
      description:
        "Diseño de un plan terapéutico adaptado a tus necesidades específicas con métodos probados.",
    },
    {
      number: "03",
      title: "Proceso Terapéutico",
      description:
        "Sesiones regulares con técnicas especializadas y seguimiento continuo de tu progreso.",
    },
    {
      number: "04",
      title: "Cierre y Mantenimiento",
      description:
        "Al alcanzar tus objetivos, trabajamos estrategias de mantenimiento y prevención de recaídas.",
    },
  ];

  return (
    <section id="enfoque" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
              Nuestro Enfoque
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Metodología Terapéutica
            <span className="gradient-text block mt-2">Centrada en Ti</span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nuestro enfoque integra lo mejor de diferentes corrientes
            psicológicas, adaptándose a tus necesidades para lograr cambios
            duraderos.
          </p>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6 shadow-lg">
                <principle.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {principle.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          <h3
            className={`text-3xl font-bold text-center text-slate-800 mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Proceso Terapéutico
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>

            {/* Process Steps */}
            <div className="space-y-16">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{
                    transitionDelay: `${700 + index * 150}ms`,
                  }}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-primary-200">
                      <div
                        className={`inline-block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 mb-4 ${
                          index % 2 === 0
                            ? "md:float-right md:ml-4"
                            : "md:float-left md:mr-4"
                        }`}
                      >
                        {step.number}
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`mt-20 bg-gradient-to-br from-slate-50 to-primary-50 rounded-3xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "1300ms" }}
        >
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Nuestros Valores Fundamentales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Confidencialidad",
              "Profesionalismo",
              "Empatía",
              "Resultados",
              "Ética",
              "Respeto",
              "Actualización Continua",
              "Calidez Humana",
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <FaCheckCircle className="text-2xl text-primary-600 flex-shrink-0" />
                <span className="font-semibold text-slate-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
