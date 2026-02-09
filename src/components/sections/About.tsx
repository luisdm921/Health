"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserMd, FaAward, FaHeart, FaLightbulb } from "react-icons/fa";

const About = () => {
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

  const highlights = [
    {
      icon: FaUserMd,
      title: "Psicóloga Certificada",
      description: "Cédula profesional y certificaciones internacionales",
    },
    {
      icon: FaAward,
      title: "12+ Años de Experiencia",
      description: "Atendiendo casos diversos con resultados comprobados",
    },
    {
      icon: FaHeart,
      title: "Enfoque Humanista",
      description: "Terapia centrada en la persona y sus necesidades únicas",
    },
    {
      icon: FaLightbulb,
      title: "Métodos Actualizados",
      description: "Técnicas basadas en evidencia científica",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10"></div>
                <img
                  src="/images/pexels-alex-green-5699454.jpg"
                  alt="Dra. María González - Psicóloga Clínica Certificada"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Content Side */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Sobre Nosotros
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Dra. María González
                <span className="block text-2xl text-primary-600 mt-2 font-medium">
                  Psicóloga Clínica Certificada
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Con más de 12 años de experiencia en psicología clínica, me
                especializo en brindar apoyo terapéutico personalizado que
                respeta la individualidad de cada persona.
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Mi metodología integra enfoques cognitivo-conductuales,
                humanistas y sistémicos, adaptándome a las necesidades
                específicas de cada paciente para lograr resultados duraderos y
                significativos.
              </p>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-gradient-to-br from-slate-50 to-primary-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 ${
                      isVisible ? "animate-scale-in" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <item.icon className="text-3xl text-primary-600 mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Credentials */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white">
                <h3 className="font-bold text-xl mb-3">Formación Académica</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>Licenciatura en Psicología - UNAM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>
                      Maestría en Psicología Clínica - Universidad
                      Iberoamericana
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>Certificación en Terapia Cognitivo-Conductual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-200">•</span>
                    <span>Cédula Profesional: 12345678</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
