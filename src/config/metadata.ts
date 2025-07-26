import { Metadata } from "next";

export const mainMetadata: Metadata = {
  title: {
    template: '%s | KSQ Pergamino S.A',
    default: 'KSQ Pergamino | Fertilizantes Sustentables con Nanotecnología',
  },
  description:
    'KSQ Pergamino distribuye fertilizantes ecológicos y sustentables de Kioshi Stone. Tecnología nanométrica aplicada al agro para cultivos más saludables, alto rendimiento y mínimo impacto ambiental. Productos bio, eco-friendly y responsables con el suelo y el entorno.',
  keywords: [
    'fertilizantes sustentables',
    'fertilizantes ecológicos',
    'fertilizantes bio',
    'nanotecnología agrícola',
    'agricultura sustentable',
    'KSQ Pergamino',
    'Kioshi Stone',
    'biofertilizantes',
    'distribuidora agropecuaria',
    'suelo saludable',
    'tecnología para el agro',
    'eco-friendly',
    'productos naturales para cultivos',
    'rendimiento agrícola',
    'reducción de huella de carbono',
    'nutrientes para plantas',
    'fertilizantes amigables con el ambiente'
  ],
  openGraph: {
    title: 'KSQ Pergamino | Distribuidor regional Kioshi Stone',
    description:
      'Distribuidor regional de Kioshi Stone en la región. Fertilizantes bio y ecológicos de última generación para una agricultura regenerativa, rentable y consciente del medioambiente.',
    url: 'https://ksqpergamino.com.ar', // Cambiar al dominio real
    siteName: 'KSQ Pergamino',
    images: [
      {
        url: 'https://ksqpergamino.com.ar/og-image.svg', // Imagen real del sitio
        width: 1200,
        height: 630,
        alt: 'KSQ Pergamino - Distribuidor regional Kioshi Stone',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSQ Pergamino | Distribuidor regional Kioshi Stone',
    description:
      'Soluciones agrícolas responsables: fertilizantes bio con nanotecnología de Kioshi Stone. Más rendimiento, menos impacto. Distribución en zona Pergamino y alrededores.',
    images: ['https://ksqpergamino.com.ar/og-image.svg'], // Imagen real
    creator: '@ksqpergamino', // Agregar si existe cuenta de Twitter
  },
  authors: [{ name: 'KSQ Pergamino', url: 'https://ksqpergamino.com.ar' }],
  category: 'Agricultura sustentable, Tecnología verde, Biofertilizantes, Nanotecnología, Kioshi Stone, Mist, Biome, Kioshi',
  generator: 'Next.js',
  applicationName: 'KSQ Pergamino',
  metadataBase: new URL('https://ksqpergamino.com.ar'),
};