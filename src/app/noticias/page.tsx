import { NewsCard } from "@/components/cards";
import { PageContainer, PageSubtitle, PageTitle } from "@/components/common";
import { news } from "@/data/news.data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Noticias | KSQ Pergamino",
    description:
        "Enterate de las últimas novedades del agro, lanzamientos de productos, avances en nanotecnología y noticias institucionales de KSQ Pergamino.",
    alternates: {
        canonical: "https://ksqpergamino.com.ar/noticias",
    },
    openGraph: {
        title: "Noticias | KSQ Pergamino",
        description:
            "Novedades sobre fertilización sustentable, ensayos, tecnología y el impacto de Kioshi Stone en el campo argentino.",
        url: "https://ksqpergamino.com.ar/noticias",
        siteName: "KSQ Pergamino",
        images: [
            {
                url: "https://ksqpergamino.com.ar/og-image.svg", // Podés reemplazar por una imagen específica si querés destacarla más
                width: 1200,
                height: 630,
                alt: "Noticias KSQ Pergamino",
            },
        ],
        locale: "es_AR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Noticias | KSQ Pergamino",
        description:
            "Las últimas noticias del agro y avances en fertilización con nanotecnología. Leé más en KSQ Pergamino.",
        images: ["https://ksqpergamino.com.ar/og-image.svg"],
        site: "@tuTwitterEmpresa", // opcional
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
                <PageTitle>Noticias</PageTitle>
                <PageSubtitle> Somos una empresa argentina con raíces en el campo y la mirada puesta en el futuro. En <b>KSQ Pergamino</b>, creemos que la tecnología, la ciencia y la sustentabilidad son las claves para una nueva forma de producir: más eficiente, regenerativa y responsable.</PageSubtitle>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    news.map(n => <NewsCard description={n.description} image_url={n.image_url} slug={n.slug} title={n.title} key={n.slug} />)
                }
            </section>
        </PageContainer>
    )
}