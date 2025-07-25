import { BenefitCard } from '../cards/benefits-card'
import { PageContainer, PageSubtitle, PageTitle } from '../common'

export const HeroBanner = () => {
    return (
        <PageContainer>
            <div className='w-full flex flex-col gap-3'>
                <PageTitle textCenter>Innovación nano para una agricultura más eficiente y ecológica</PageTitle>
                <PageSubtitle textCenter>Desarrollamos soluciones nanotecnológicas que mejoran la salud del suelo, optimizan los rendimientos y reducen drásticamente la huella de carbono.</PageSubtitle>
            </div>
            <article className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
                <BenefitCard alt='Icono de Tarjeta' imagePath="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Conocenos%20Icono%20-1.svg">
                    <p className='text-muted-foreground'><span className='font-bold'>KIOSHI STONE SA, es la primera empresa en llevar adelante procesos nano tecnológicos industriales para el agro.</span> Posee una vasta experiencia en I+D+i que permite la generación continua de más herramientas para una agricultura de altos rendimientos, baja logística y de una imperceptible huella de carbono (CO2-eq), en relación con otras tecnologías de práctica.</p>
                </BenefitCard>
                <BenefitCard alt='Icono de Tarjeta' imagePath="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Conocenos%20Icono%20-2.svg">
                    <p className='text-muted-foreground'><span className='font-bold'>Nuestros productos actúan y proporcionan importantes mejoras de salud del suelo (biota);</span> su interacción inmediata y efecto sinérgico con los ecosistemas logran <span className='font-bold'>altos rendimientos en todos los cultivos</span> (extensivos e intensivos); incrementando la actividad biológica y favoreciendo su desarrollo.</p>
                </BenefitCard>
                <BenefitCard alt='Icono de Tarjeta' imagePath="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Conocenos%20Icono%20-3.svg">
                    <p className='text-muted-foreground'>Es por ello, que <span className='font-bold'>en KIOSHI STONE, día a día seguimos evaluando los beneficios que proporcionan el uso de minerales en tamaño nanométrico,</span> logrando aprovechar su gran capacidad de reacción, con muy bajo requerimiento de energía, en procesos biológicos tan importantes.</p>
                </BenefitCard>
            </article>
        </PageContainer>
    )
}