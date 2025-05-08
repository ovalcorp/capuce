'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Soluciones from '@/components/Soluciones';
import Experiencia from '@/components/Experiencia';
import Partners from '@/components/Partners';
import Contacto from '@/components/Contacto';

const images = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
];

const services = [
  {
    title: 'Electricidad',
    image: '/images/electricidad.jpg',
    description: 'Soluciones integrales en sistemas eléctricos',
  },
  {
    title: 'Ciberseguridad',
    image: '/images/ciberseguridad.jpg',
    description: 'Protección y seguridad digital',
  },
  {
    title: 'Alta Tensión',
    image: '/images/alta-tension.jpg',
    description: 'Sistemas de alta tensión y distribución',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState('Electricidad');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Soluciones Integrales
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Innovación y excelencia en cada proyecto
                </p>
                <button className="bg-[#0035a4] hover:bg-[#34c1f9] text-white px-8 py-3 rounded-full transition-colors">
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0035a4] dark:text-[#34c1f9] mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Somos una empresa líder en soluciones integrales, especializada en
                electricidad, ciberseguridad y sistemas de alta tensión. Nuestra
                experiencia y compromiso con la excelencia nos han convertido en
                el socio confiable de empresas en todo el país.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Con un equipo de profesionales altamente capacitados y tecnología
                de vanguardia, garantizamos soluciones eficientes y seguras para
                cada proyecto.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/ciberseguridad.jpg"
                alt="Sobre Nosotros"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lo que hacemos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-12">
            Lo que hacemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`cursor-pointer transition-all duration-300 ${
                  activeService === service.title
                    ? 'transform scale-105 shadow-lg'
                    : ''
                }`}
                onClick={() => setActiveService(service.title)}
              >
                <div className="relative h-64 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0035a4] dark:text-[#34c1f9] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones Section */}
      <Soluciones />

      {/* Experiencia Section */}
      <Experiencia />

      {/* Partners Section */}
      <Partners />

      {/* Contacto Section */}
      <Contacto />
    </div>
  );
} 