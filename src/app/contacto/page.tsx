import { ContactSection } from '@/components/contact/contact';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Contacto | KSQ Pergamino",
    description: "¿Querés más información sobre nuestros productos o asesoramiento técnico? Contactanos y un representante de KSQ Pergamino se comunicará con vos.",
    alternates: {
        canonical: "https://ksqpergamino.com.ar/contacto",
    },
    openGraph: {
        title: "Contacto | KSQ Pergamino",
        description: "Ponete en contacto con nuestro equipo técnico-comercial para conocer más sobre nuestras soluciones agrícolas sustentables.",
        url: "https://ksqpergamino.com.ar/contacto",
        siteName: "KSQ Pergamino",
        images: [
            {
                url: "https://ksqpergamino.com.ar/og-image.png", // Podés usar otra específica si querés diferenciarla
                width: 1200,
                height: 630,
                alt: "Contacto KSQ Pergamino",
            },
        ],
        locale: "es_AR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacto | KSQ Pergamino",
        description: "Contactate con nosotros para obtener asesoramiento sobre fertilización sustentable y nanotecnología aplicada al agro.",
        images: ["https://ksqpergamino.com.ar/og-image.png"],
        site: "@KSQPergamino", // opcional
    },
    metadataBase: new URL("https://ksqpergamino.com.ar"),
    robots: {
        index: true,
        follow: true,
    },
    category: "agricultura",
};

export default function Page() {
    return (
        <ContactSection containerMain />
    )
}