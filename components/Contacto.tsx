'use client';

const Contacto = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/TUNUMERO', '_blank');
  };

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0035a4] dark:text-[#34c1f9] mb-12">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#0035a4] dark:text-[#34c1f9] mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0035a4] dark:text-[#34c1f9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Teléfono
                  </p>
                  <p className="text-lg font-medium text-[#0035a4] dark:text-[#34c1f9]">
                    +1234567890
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0035a4] dark:text-[#34c1f9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Email
                  </p>
                  <p className="text-lg font-medium text-[#0035a4] dark:text-[#34c1f9]">
                    info@capuce.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0035a4] dark:text-[#34c1f9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Dirección
                  </p>
                  <p className="text-lg font-medium text-[#0035a4] dark:text-[#34c1f9]">
                    Tu dirección aquí
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#0035a4] dark:text-[#34c1f9] mb-6 text-center">
              ¿Tienes alguna pregunta?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
              Contáctanos por WhatsApp para una respuesta inmediata
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              <span>Chat por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto; 