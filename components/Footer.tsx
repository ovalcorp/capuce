'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0035a4] text-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CAPUCE</h3>
            <p className="text-gray-300">
              Soluciones integrales en electricidad, ciberseguridad y alta tensión.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre-nosotros" className="text-gray-300 hover:text-[#34c1f9]">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#soluciones" className="text-gray-300 hover:text-[#34c1f9]">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="text-gray-300 hover:text-[#34c1f9]">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-gray-300 hover:text-[#34c1f9]">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-[#34c1f9]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@capuce.com</li>
              <li>Teléfono: +1234567890</li>
              <li>Dirección: Tu dirección aquí</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CAPUCE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 