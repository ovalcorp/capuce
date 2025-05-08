# CAPUCE - Sitio Web Corporativo

Este es el sitio web corporativo de CAPUCE, una empresa especializada en soluciones integrales de electricidad, ciberseguridad y alta tensión.

## Tecnologías Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- next-themes (para el modo oscuro)

## Requisitos Previos

- Node.js 18.17 o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/capuce.git
cd capuce
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env.local` en la raíz del proyecto y agrega las siguientes variables:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=TU_NUMERO_DE_WHATSAPP
```

4. Agrega las imágenes necesarias en la carpeta `public/images/`:
- slider1.jpg
- slider2.jpg
- slider3.jpg
- slider4.jpg
- about-us.jpg
- electricidad.jpg
- ciberseguridad.jpg
- alta-tension.jpg
- solucion1.jpg
- solucion2.jpg
- solucion3.jpg
- portfolio1.jpg
- portfolio2.jpg
- portfolio3.jpg
- portfolio4.jpg
- testimonial1.jpg
- testimonial2.jpg
- testimonial3.jpg
- project1.jpg
- project2.jpg
- project3.jpg
- partner1.png
- partner2.png
- partner3.png
- partner4.png
- partner5.png
- partner6.png

5. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
capuce/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Soluciones.tsx
│   ├── Experiencia.tsx
│   ├── Partners.tsx
│   └── Contacto.tsx
├── public/
│   └── images/
├── styles/
│   └── globals.css
└── package.json
```

## Características

- Diseño responsive
- Modo oscuro/claro
- Slider de imágenes
- Secciones informativas
- Portafolio de proyectos
- Testimonios de clientes
- Integración con WhatsApp
- Optimización de imágenes
- SEO básico

## Personalización

1. Modifica los textos y contenido en los componentes correspondientes
2. Actualiza las imágenes en la carpeta `public/images/`
3. Ajusta los colores en los archivos CSS o en las clases de Tailwind
4. Actualiza la información de contacto en el componente `Contacto.tsx`

## Despliegue

El proyecto está configurado para ser desplegado en Vercel. Para desplegar:

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno en el panel de Vercel
4. Vercel desplegará automáticamente tu sitio

## Contribución

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. # capuce
