import { FC, PropsWithChildren } from "react";
import { TrialCard } from "@/components/cards";
import { PageContainer, PageTitle } from "@/components/common";
import { trials } from "@/data/trail.data";

export const CardsContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[32px]">
            {children}
        </div>
    )
}

export default function Page() {
    return (
        <PageContainer>
            <PageTitle>Ensayos</PageTitle>
            <div className="text-muted flex flex-col gap-2 text-sm">
                <p>En <b>KSQ Pergamino</b>, creemos en el respaldo científico de cada una de nuestras soluciones. Por eso, te compartimos una selección de ensayos realizados en distintos cultivos y regiones, donde se evidencia el impacto real de los <b>fertilizantes nanométricos</b> de Kioshi Stone. Resultados concretos, validados en campo, con datos que hablan por sí solos.</p>
                <p>Cada ensayo es una prueba viva de cómo la <b>tecnología sustentable</b> puede transformar el agro. Nuestros fertilizantes, desarrollados con nanotecnología y formulados para cuidar el medioambiente, demuestran en cada análisis su capacidad para <b>regenerar suelos y potenciar la productividad</b> sin comprometer el futuro.</p>
                <p>Probamos en campo lo que ofrecemos. Acá podés ver cómo nuestros productos actúan en <b>situaciones reales</b>, en cultivos extensivos e intensivos, y cómo acompañan al productor en el camino hacia una agricultura más <b>eficiente, rentable y sustentable.</b></p>
            </div>
            <section className="w-full">
                <CardsContainer>
                    {
                        trials.map(({ pdf_url, thumbnail, title }) => <TrialCard pdf_url={pdf_url} thumbnail={thumbnail} title={title} key={title} />)
                    }
                </CardsContainer>
            </section>
        </PageContainer>
    )
}