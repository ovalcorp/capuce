'use client';

import Image from 'next/image';

const partners = [
  {
    name: 'Empresa 1',
    logo: '/images/partner1.png',
  },
  {
    name: 'Empresa 2',
    logo: '/images/partner2.png',
  },
  {
    name: 'Empresa 3',
    logo: '/images/partner3.png',
  },
  {
    name: 'Empresa 4',
    logo: '/images/partner4.png',
  },
  {
    name: 'Empresa 5',
    logo: '/images/partner5.png',
  },
  {
    name: 'Empresa 6',
    logo: '/images/partner6.png',
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-12">
          Nuestros Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="relative w-32 h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Trabajamos con las mejores empresas del sector para brindar soluciones
            integrales de alta calidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners; 