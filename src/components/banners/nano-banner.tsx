import Image from 'next/image'
import { PageContainer } from '../common'
import { PageTitle } from '../common/page-title';

export const NanoBanner = () => {
    return (
        <section className='bg-secondary text-background'>
            <div className='px-6 md:px-8 lg:px-20 pb-14 pt-14 max-w-[1920px] mx-auto'>
                <div className='flex items-center justify-center w-full flex-col'>
                    <h2 className='font-semibold text-center text-2xl md:text-3xl lg:text-4xl'>Nanopartículas</h2>
                    <Image alt='Icono de nanopartículas' src="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Icono%20Nanopaticulas.svg" className='mx-auto my-8' width={100} height={100} />
                </div>
                <div className='flex flex-col gap-4 md:flex-row md:gap-6'>
                    <p className='flex-1'>KIOSHI STONE, elabora una novedosa línea de fertilizantes, enmiendas y vivificantes. Estos desarrollos facilitan obtener el máximo de sus cultivos y es el resultado de años de investigación y desarrollo (I+D+i). Estas innovaciones están más que corroboradas en diversas geografías por productores, institutos y facultades. Experiencias a campo y las más variada gama y escala de ensayos que mejoran campaña tras campaña la puesta a punto (formulas, aplicaciones, etc.) para continuar nutriendo suelo y cultivos con nuestros productos.</p>
                    <p className='flex-1'>El equipo técnico científico tiene la convicción y compromiso de continuar día a día con el desarrollo de nuevas y mejores propuestas para aumentar la producción agrícola, manteniendo siempre un profundo respeto por el suelo y el ambiente.</p>
                </div>
            </div>
        </section>
    )
}