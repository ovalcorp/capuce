'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Juan Pérez',
    position: 'Director de Operaciones',
    company: 'Empresa Industrial XYZ',
    image: '/images/electricidad.jpg',
    text: 'CAPUCE ha sido fundamental en la modernización de nuestros sistemas eléctricos. Su profesionalismo y experiencia son incomparables.',
  },
  {
    name: 'María González',
    position: 'Gerente de IT',
    company: 'Tech Solutions SA',
    image: '/images/electricidad.jpg',
    text: 'La implementación de sus soluciones de ciberseguridad nos ha dado la tranquilidad que necesitábamos para proteger nuestros datos.',
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Supervisor de Mantenimiento',
    company: 'Energía Plus',
    image: '/images/electricidad.jpg',
    text: 'El equipo de alta tensión de CAPUCE es excepcional. Su atención al detalle y cumplimiento de normas es impresionante.',
  },
];

const projects = [
  {
    title: 'Modernización Eléctrica',
    description: 'Actualización completa del sistema eléctrico de una planta industrial.',
    image: '/images/portfolio1.jpg',
    stats: {
      clients: '5+',
      projects: '20+',
      satisfaction: '98%',
    },
  },
  {
    title: 'Seguridad Digital',
    description: 'Implementación de sistemas de ciberseguridad para una empresa tecnológica.',
    image: '/images/portfolio2.jpg',
    stats: {
      clients: '3+',
      projects: '15+',
      satisfaction: '100%',
    },
  },
  {
    title: 'Sistema de Alta Tensión',
    description: 'Diseño e instalación de sistema de alta tensión para una subestación.',
    image: '/images/portfolio3.jpg',
    stats: {
      clients: '4+',
      projects: '25+',
      satisfaction: '99%',
    },
  },
];

const Experiencia = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="experiencia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-12">
          Nuestra Experiencia
        </h2>

        {/* Testimonios */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-8">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'transform scale-105 border-2 border-[#0035a4] dark:border-[#34c1f9]'
                    : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0035a4] dark:text-[#34c1f9]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos Destacados */}
        <div>
          <h3 className="text-2xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-8">
            Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#0035a4] dark:text-[#34c1f9] mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-[#0035a4] dark:text-[#34c1f9]">
                        {project.stats.clients}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Clientes
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#0035a4] dark:text-[#34c1f9]">
                        {project.stats.projects}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Proyectos
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#0035a4] dark:text-[#34c1f9]">
                        {project.stats.satisfaction}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Satisfacción
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia; 