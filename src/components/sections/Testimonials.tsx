"use client";

import { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ana García",
    role: "Paciente - Terapia Individual",
    image: "A",
    rating: 5,
    text: "La Dra. María me ayudó a superar una etapa de depresión muy difícil. Su empatía y profesionalismo hicieron toda la diferencia. Ahora veo la vida con otros ojos.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Carlos y Laura Méndez",
    role: "Pareja - Terapia de Pareja",
    image: "C+L",
    rating: 5,
    text: "Llegamos a terapia en un punto crítico de nuestra relación. Gracias al acompañamiento profesional, aprendimos a comunicarnos mejor y fortalecimos nuestro vínculo.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Roberto Fernández",
    role: "Empresario - Manejo de Estrés",
    image: "R",
    rating: 5,
    text: "Las técnicas de manejo de estrés y ansiedad que aprendí han transformado mi vida profesional y personal. Recomiendo ampliamente estos servicios.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "María López",
    role: "Madre - Terapia Familiar",
    image: "M",
    rating: 5,
    text: "La terapia familiar nos ayudó a mejorar la comunicación con nuestros hijos adolescentes. El ambiente en casa cambió completamente.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Jorge Ramírez",
    role: "Paciente - Terapia Online",
    image: "J",
    rating: 5,
    text: "La opción de terapia online fue perfecta para mi horario. La calidad del servicio es excelente y me siento muy cómodo en cada sesión.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Sandra Martínez",
    role: "Paciente - Autoestima",
    image: "S",
    rating: 5,
    text: "Trabajar en mi autoestima fue un cambio de vida. Ahora tengo herramientas para enfrentar desafíos y me siento mucho más segura de mí misma.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
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
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Testimonios
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Lo Que Dicen Nuestros
            <span className="gradient-text block mt-2">Pacientes</span>
          </h2>
          <p
            className={`text-lg text-slate-600 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Historias reales de personas que han transformado sus vidas a través
            de la terapia profesional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
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
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <FaQuoteLeft className="text-6xl text-slate-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg text-white/90">Vidas Transformadas</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-lg text-white/90">
                  Tasa de Satisfacción
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12+</div>
                <div className="text-lg text-white/90">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-lg text-slate-600 mb-6">
            ¿Listo para comenzar tu transformación?
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Agenda tu Primera Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
