'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-[#0035a4] dark:text-[#34c1f9] font-bold text-xl">
              CAPUCE
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="#sobre-nosotros" className="text-gray-700 dark:text-gray-300 hover:text-[#0035a4] dark:hover:text-[#34c1f9]">
              Sobre Nosotros
            </Link>
            <Link href="#soluciones" className="text-gray-700 dark:text-gray-300 hover:text-[#0035a4] dark:hover:text-[#34c1f9]">
              Soluciones
            </Link>
            <Link href="#experiencia" className="text-gray-700 dark:text-gray-300 hover:text-[#0035a4] dark:hover:text-[#34c1f9]">
              Experiencia
            </Link>
            <Link href="#partners" className="text-gray-700 dark:text-gray-300 hover:text-[#0035a4] dark:hover:text-[#34c1f9]">
              Partners
            </Link>
            <Link href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-[#0035a4] dark:hover:text-[#34c1f9]">
              Contacto
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 