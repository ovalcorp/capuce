'use client';

import Image from 'next/image';

const solutions = [
  {
    title: 'Electricidad Industrial',
    description: 'Instalación y mantenimiento de sistemas eléctricos industriales, cumpliendo con los más altos estándares de seguridad y eficiencia.',
    image: '/images/solucion1.jpg',
  },
  {
    title: 'Ciberseguridad',
    description: 'Protección de sistemas críticos y datos sensibles mediante soluciones avanzadas de ciberseguridad y monitoreo continuo.',
    image: '/images/solucion2.jpg',
  },
  {
    title: 'Alta Tensión',
    description: 'Diseño e implementación de sistemas de alta tensión, incluyendo subestaciones y líneas de transmisión.',
    image: '/images/solucion3.jpg',
  },
];

const portfolio = [
  '/images/portfolio1.jpg',
  '/images/portfolio2.jpg',
  '/images/portfolio3.jpg',
  '/images/portfolio4.jpg',
];

const Soluciones = () => {
  return (
    <section id="soluciones" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-12">
          Nuestras Soluciones
        </h2>
        
        {/* Soluciones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0035a4] dark:text-[#34c1f9] mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Métodos y Proceso */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-8">
            Nuestro Método
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Diagnóstico', 'Planificación', 'Implementación', 'Seguimiento'].map((step, index) => (
              <div
                key={step}
                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-[#0035a4] dark:bg-[#34c1f9] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-[#0035a4] dark:text-[#34c1f9]">
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Portafolio */}
        <div>
          <h3 className="text-2xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-8">
            Portafolio de Proyectos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolio.map((image, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`Proyecto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    Proyecto {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soluciones; 