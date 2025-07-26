import { CatalogFilters, DynamicCatalog } from '@/components/catalog';
import { PageContainer, PageHeader } from "@/components/common";
import { Metadata } from "next";
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: "Catálogo de Productos | KSQ Pergamino",
    description: "Explorá nuestro catálogo completo de fertilizantes y soluciones para cultivos. Tecnología, innovación y sustentabilidad al servicio del agro.",
    alternates: {
        canonical: "https://www.ksqpergamino.com.ar/productos", // 🔁 reemplazar por dominio real
    },
    openGraph: {
        title: "Catálogo de Productos | KSQ Pergamino",
        description: "Explorá nuestro catálogo completo de fertilizantes y soluciones para cultivos. Tecnología, innovación y sustentabilidad al servicio del agro.",
        url: "https://www.ksqpergamino.com.ar/productos", // 🔁 reemplazar por dominio real
        siteName: "KSQ Pergamino",
        images: [
            {
                url: "https://www.ksqpergamino.com.ar/images/og-image.png", // 🔁 imagen destacada del catálogo (ideal: 1200x630)
                width: 1200,
                height: 630,
                alt: "Catálogo de Productos KSQ Pergamino",
            },
        ],
        locale: "es_AR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Catálogo de Productos | KSQ Pergamino",
        description: "Explorá nuestro catálogo completo de fertilizantes y soluciones para cultivos.",
        images: ["www.ksqpergamino.com.ar/og-image.png"],
        site: "@KSQPergamino", // opcional
    },
    metadataBase: new URL("https://www.ksqpergamino.com.ar"), // 🔁 dominio real
    robots: {
        index: true,
        follow: true,
    },
    category: "agricultura",
}

export default async function Page() {
    return (
        <PageContainer>
            <div className='flex gap-8 w-full flex-col md:flex-row'>
                <div className='block md:hidden'><PageHeader title='Catálogo de Productos' /></div>
                <CatalogFilters />
                <div className='flex flex-col gap-2 flex-1'>
                <div className='hidden md:block'><PageHeader title='Catálogo de Productos' /></div>
                <Suspense fallback={<p>Cargando...</p>}>
                    <DynamicCatalog />
                </Suspense>
                </div>
            </div>
        </PageContainer>
    )
}