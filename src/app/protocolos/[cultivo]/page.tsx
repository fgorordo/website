import { PageContainer, PageHeader } from '@/components/common';
import { protocols } from '@/data';
import { Protocol } from '../../../data/models/protocol.model';
import Image from 'next/image';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ cultivo: string }>
}

export async function generateStaticParams() {
    return protocols.map((protocol: Protocol) => ({
        cultivo: protocol.slug,
    }));
};

export async function generateMetadata({ params }: { params: { cultivo: string } }): Promise<Metadata> {
    const cultivo = params.cultivo;
    const protocol = protocols.find(
        (p) => p.slug === cultivo
    );

    if (!protocol) return {};

    return {
        title: 'Protocolo de ' + protocol.crop_name,
        description: 'Protocolo de aplicacición recomendado para cultivos de ' + protocol.crop_name,
    };
}

export default async function Page({ params }: PageProps) {
    const { cultivo } = await params;

    const protocol = protocols.find(
        (p) => p.slug === cultivo
    );

    if (!protocol) {
        return (
            <PageContainer mainComponent>
                <PageHeader title='Protocolo no encontrado' />
                <p className='text-center'>El protocolo para el cultivo solicitado no existe.</p>
            </PageContainer>
        );
    }

    return (
        <PageContainer mainComponent>
            <div className='flex w-full gap-4 flex-col md:flex-row md:gap-12'>
                <div className='min-w-fit order-2 md:order-1'>
                    <PageHeader title='Protocolo recomendado' />
                    <article className='mt-2'>
                        <p className='text-3xl lg:text-5xl font-light z-20'>Cultivos de: {protocol.crop_name}
                        </p>
                    </article>
                </div>
                <div className='rounded-xl overflow-hidden w-full relative min-h-[80px] order-1 md:order-2'>
                    <Image alt={`Cultivos de ${protocol.crop_name}`} src={protocol.cover_img} fill  style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <hr className="w-full h-1 mx-auto bg-primary/50 border-0 rounded-sm md:my-4" />
            <article>
                <div className='w-full mt-[32px]'>
                    <Image
                        alt={`Protocolo de aplicación para ${protocol.crop_name}`}
                        src={protocol.protocol_img}
                        width={1200} // Ajusta según la resolución de tus imágenes
                        height={1200} // Ajusta según la proporción de tus imágenes 
                        className="rounded-lg w-full"
                    />
                </div>
                <div className='mt-[32px]'>
                    {
                        protocol.captions.map((caption, index) => (
                            <p key={index} className='text-muted'>
                                {caption}
                            </p>
                        ))
                    }
                </div>
            </article>
        </PageContainer>
    );
};


