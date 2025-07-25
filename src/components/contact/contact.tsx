import { FC } from 'react'
import { PageContainer } from '../common'
import { PageSubtitle, PageTitle } from '../common/page-title';
import { ContactForm } from './form';

interface ContactSectionProps {
    containerMain?: boolean;
}
export const ContactSection: FC<ContactSectionProps> = ({ containerMain }) => {
    return (
        <PageContainer mainComponent={containerMain}>
            <div className='flex gap-8 md:gap-24 w-full flex-col md:flex-row'>
                <div className='flex flex-col gap-3 w-full'>
                    <PageTitle>Contacto</PageTitle>
                    <PageSubtitle>Si tienes alguna consulta, no dudes en contactarnos. Estamos aquí para ayudarte.</PageSubtitle>
                    <div className='mt-4'>
                        <h3 className='text-primary text-lg mb-2 md:text-xl'>Información de contacto</h3>
                        <p><span className='font-bold'>Email:</span> contacto@ksqpergamino.com.ar</p>
                        <p><span className='font-bold'>Oficinas comerciales:</span> Ruta 8, 841 - Pergamino, Buenos Aires</p>
                        <p><span className='font-bold'>Horario de atención:</span> Lunes a Sábados de 8:00 a 19:00</p>
                    </div>

                    <div className='mt-4'>
                        <h3 className='text-primary text-lg md:text-xl mb-2'>Teléfonos</h3>
                        <p className='font-bold'>Gustavo Marian: <span className='font-normal'>+54 9 2477 56-6991</span></p>
                        <p className='font-bold'>Cristian Renzoni: <span className='font-normal'>+54 9 2477 63-7280</span></p>
                    </div>
                </div>
                <div className='w-full'>
                    <ContactForm />
                </div>
            </div>
        </PageContainer>
    )
}