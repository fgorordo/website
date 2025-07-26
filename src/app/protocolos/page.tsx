import { ProtocolCard } from "@/components/cards/protocol-card";
import { PageContainer, PageSubtitle, PageTitle } from "@/components/common";
import { protocols } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Protocolos de aplicación',
    description: "Cómo aplicar nuestros productos de la línea MIST de manera efectiva, maximizando los beneficios para tu cultivo y minimizando cualquier impacto negativo en el entorno.",
    alternates: {
        canonical: "https://www.ksqpergamino.com.ar",
    },
    openGraph: {
        title: "Protocolos de aplicación",
        description: "Cómo aplicar nuestros productos de la línea MIST de manera efectiva, maximizando los beneficios para tu cultivo y minimizando cualquier impacto negativo en el entorno.",
        url: "https://www.ksqpergamino.com.ar",
        siteName: "KSQ Pergamino",
        images: [
            {
                url: "https://ksqpergamino.com.ar/og-image.png",
                width: 1200,
                height: 630,
                alt: `Biblioteca de protocols`,
            },
        ],
        locale: "es_AR",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Protocolos de aplicación",
        description: "Cómo aplicar nuestros productos de la línea MIST de manera efectiva, maximizando los beneficios para tu cultivo y minimizando cualquier impacto negativo en el entorno.",
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
        <PageContainer mainComponent>
            <div className="flex flex-col gap-2">
                <PageTitle>Protocolos de aplicación</PageTitle>
                <PageSubtitle>Cómo aplicar nuestros productos de la línea MIST de manera efectiva, maximizando los beneficios para tu cultivo y minimizando cualquier impacto negativo en el entorno.</PageSubtitle>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                {protocols.map(p => <ProtocolCard key={p.slug} href={`/protocolos/${p.slug}`} image={p.cover_img} title={p.crop_name} />)}
            </div>
        </PageContainer>
    )
}