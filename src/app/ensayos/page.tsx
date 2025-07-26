import { FC, PropsWithChildren } from "react";
import { CardsContainer, TrialCard } from "@/components/cards";
import { PageContainer, PageTitle } from "@/components/common";
import { trials } from "@/data/trail.data";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Biblioteca de Ensayos | KSQ Pergamino",
  description:
    "Explorá nuestra colección de ensayos agrícolas realizados en campo. Comprobá cómo los fertilizantes nanométricos de Kioshi Stone mejoran la productividad de manera sustentable.",
  alternates: {
    canonical: "https://ksqpergamino.com.ar/ensayos",
  },
  openGraph: {
    title: "Biblioteca de Ensayos | KSQ Pergamino",
    description:
      "Resultados reales en campo que validan el uso de fertilizantes con nanotecnología. Conocé los ensayos de Kioshi Stone en distintos cultivos y regiones.",
    url: "https://ksqpergamino.com.ar/ensayos",
    siteName: "KSQ Pergamino",
    images: [
      {
        url: "https://ksqpergamino.com.ar/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ensayos agrícolas Kioshi Stone",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblioteca de Ensayos | KSQ Pergamino",
    description:
      "Comprobá cómo los fertilizantes nanométricos de Kioshi Stone transforman la productividad agrícola. Ensayos reales, datos concretos.",
    images: ["https://ksqpergamino.com.ar/og-image.svg"],
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
        <PageContainer>
            <PageTitle>Ensayos</PageTitle>
            <div className="text-muted flex flex-col gap-2 text-sm">
                <p>En <b>KSQ Pergamino</b>, creemos en el respaldo científico de cada una de nuestras soluciones. Por eso, te compartimos una selección de ensayos realizados en distintos cultivos y regiones, donde se evidencia el impacto real de los <b>fertilizantes nanométricos</b> de Kioshi Stone. Resultados concretos, validados en campo, con datos que hablan por sí solos.</p>
                <p>Cada ensayo es una prueba viva de cómo la <b>tecnología sustentable</b> puede transformar el agro. Nuestros fertilizantes, desarrollados con nanotecnología y formulados para cuidar el medioambiente, demuestran en cada análisis su capacidad para <b>regenerar suelos y potenciar la productividad</b> sin comprometer el futuro.</p>
                <p>Probamos en campo lo que ofrecemos. Acá podés ver cómo nuestros productos actúan en <b>situaciones reales</b>, en cultivos extensivos e intensivos, y cómo acompañan al productor en el camino hacia una agricultura más <b>eficiente, rentable y sustentable.</b></p>
            </div>
            <section className="w-full mt-8">
                <CardsContainer>
                    {
                        trials.map(({ pdf_url, thumbnail, title }) => <TrialCard pdf_url={pdf_url} thumbnail={thumbnail} title={title} key={title} />)
                    }
                </CardsContainer>
            </section>
        </PageContainer>
    )
}