import { PageContainer, PageSubtitle, PageTitle } from "@/components/common";
import { Metadata } from "next";

import standImage from '@/assets/stand.jpeg';
import Image from "next/image";

export const metadata: Metadata = {
    title: "Nosotros | KSQ Pergamino",
    description:
        "Conocé quiénes somos en KSQ Pergamino. Una empresa comprometida con la innovación, la sustentabilidad y la transformación del agro argentino mediante nanotecnología aplicada a la fertilización.",
    alternates: {
        canonical: "https://ksqpergamino.com.ar/nosotros",
    },
    openGraph: {
        title: "Nosotros | KSQ Pergamino",
        description:
            "Somos una empresa argentina que apuesta a la ciencia y la sustentabilidad para regenerar suelos y potenciar cultivos. Conocé nuestra visión, misión y equipo.",
        url: "https://ksqpergamino.com.ar/nosotros",
        siteName: "KSQ Pergamino",
        images: [
            {
                url: "https://ksqpergamino.com.ar/og-image.svg",
                width: 1200,
                height: 630,
                alt: "KSQ Pergamino - Nosotros",
            },
        ],
        locale: "es_AR",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nosotros | KSQ Pergamino",
        description:
            "En KSQ Pergamino trabajamos por un agro más rentable, eficiente y ecológico. Conocé nuestra historia y compromiso.",
        images: ["https://ksqpergamino.com.ar/og-image.svg"],
        site: "@KSQPergamino", // opcional
    },
    metadataBase: new URL("https://ksqpergamino.com.ar"),
    robots: {
        index: true,
        follow: true,
    },
    category: "empresa agrícola",
};

export default function Page() {
    return (
        <PageContainer>
            <div className="flex flex-col gap-2">
                <PageTitle>Nosotros</PageTitle>
                <PageSubtitle>Distribuimos soluciones agrícolas basadas en nanotecnología, orientadas a regenerar suelos, optimizar cultivos y acompañar al productor con conocimiento, innovación y compromiso real con el medioambiente.</PageSubtitle>
            </div>
            <div className="flex justify-between gap-8 flex-col lg:flex-row">
                <div className="flex flex-col gap-4">
                    <p>
                        En <b>KSQ Pergamino</b> somos una empresa argentina comprometida con transformar el agro a través de la <b>nanotecnología, la sustentabilidad y la ciencia aplicada</b>. Desarrollamos soluciones fertilizantes innovadoras que <b>regeneran suelos, potencian cultivos y acompañan al productor</b> en el desafío de producir más, con menos impacto.
                    </p>
                    <p>
                        Creemos en una agricultura que no solo sea <b>rentable y eficiente</b>, sino también <b>responsable y consciente</b>. Por eso, cada producto que desarrollamos está respaldado por ensayos reales, conocimiento técnico y un propósito claro: <b>mejorar la tierra sin comprometer el futuro</b>.
                    </p>
                    <p>
                        Sabemos que el verdadero cambio nace en el campo, junto a quienes lo trabajan todos los días. Por eso, más que vender productos, <b>buscamos generar alianzas con los productores</b>, aportando herramientas concretas, asesoramiento cercano y tecnología que responda a las exigencias reales del suelo y del clima. En cada aplicación, apostamos por una agricultura <b>más viva, regenerativa y preparada para lo que viene</b>.
                    </p>
                </div>
                <div className="relative rounded-lg overflow-hidden border-2">
                    <Image src={standImage} alt="Stand de KSQ Pergamino en La Rural" />
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-2 mb-6">
                    <PageTitle>Fabrica - Kioshi Stone</PageTitle>
                </div>
                <div className="flex justify-between gap-8 flex-col lg:flex-row">
                    <div className="flex flex-col gap-8">
                        <div className="relative rounded-lg overflow-hidden border-2 flex flex-col gap-8">
                            <Image src={'https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Pagina-principal-produccion-y-fabrica.jpg'} width={800} height={800} alt="Fabrica de Kioshi Stone" />
                        </div>
                        <div className="relative rounded-lg overflow-hidden border-2 flex flex-col gap-8">
                            <Image src={'https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Pagina-principal-Campo-tecnico.jpg'} width={800} height={800} alt="Fabrica de Kioshi Stone" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:w-3/4">
                        <p>
                            Somos una empresa líder en el campo de la <b>fabricación de fertilizantes sustentables</b> con una innovadora aplicación de <b>nanotecnología en minerales</b>. Nos dedicamos a desarrollar soluciones agrícolas que maximizan el rendimiento de los cultivos mientras minimizan el impacto ambiental.
                        </p>
                        <p>
                            Con sede en zona sur de Buenos Aires, nuestras oficinas centrales son el epicentro de la investigación y el desarrollo de nuestros productos. Aquí, nuestro equipo de expertos en nanotecnología trabaja para crear formulaciones únicas que impulsen el crecimiento y la salud de las plantas.
                        </p>
                        <p>
                            Además, contamos con una fábrica de producción ubicada en Benito Juárez, donde implementamos <b>procesos de vanguardia para fabricar nuestros productos</b>. Estamos comprometidos con la calidad, y cada producto que sale de nuestras instalaciones cumple con los más altos estándares de excelencia.
                        </p>
                        <p>
                            Ofreciendo una combinación de <b>nutrientes esenciales y minerales en forma nanométrica</b>, lo que permite una absorción eficiente por parte de las plantas. Esto se traduce en cultivos más saludables, mayor productividad y una reducción significativa en el uso de recursos naturales.
                        </p>
                        <p>
                            En Kioshi Stone y KSQ Pergamino, <b>creemos en el poder de la sustentabilidad y la responsabilidad ambiental</b>. Nuestros fertilizantes están diseñados para ser amigables con el medio ambiente y ayudar a preservar los recursos naturales a largo plazo. Estamos <b>comprometidos con la agricultura sustentable</b> y trabajamos en colaboración con agricultores y profesionales del campo para brindarles soluciones efectivas y respetuosas con el entorno.
                        </p>
                    </div>

                </div>
            </div>
        </PageContainer>
    )
}