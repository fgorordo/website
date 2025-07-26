import { PageContainer, PageSubtitle, PageTitle } from "../common"
import { protocols } from "@/data";
import { ProtocolCard } from "../cards/protocol-card";



export const ProtocolsSection = () => {
    return (
        <PageContainer>
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