import { PageContainer, PageHeader } from '@/components/common';
import { protocols } from '@/data';
import { Protocol } from '../../../data/models/protocol.model';
import Image from 'next/image';
import { Metadata } from 'next';
import { products } from '@/data/product.data';
import { Crops } from '@/data/models';
import { CardsContainer, ProductCard } from '@/components/cards';

type PageProps = {
    params: Promise<{ cultivo: string }>;
};


export async function generateStaticParams() {
    return protocols.map((protocol: Protocol) => ({
        cultivo: protocol.slug,
    }));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const {cultivo} = await params;
    const protocol = protocols.find((p) => p.slug === cultivo);

    if (!protocol) return {};

    const title = `Protocolo de ${protocol.crop_name} | KSQ Pergamino`;
    const description = `Protocolo de aplicación recomendado para cultivos de ${protocol.crop_name} con tecnología de fertilización sustentable.`;
    const url = `https://ksqpergamino.com.ar/protocolos/${protocol.slug}`;
    const image = protocol.cover_img || "https://ksqpergamino.com.ar/og-image.svg";

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "KSQ Pergamino",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `Protocolo de ${protocol.crop_name}`,
                },
            ],
            locale: "es_AR",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            site: "@KSQPergamino", // opcional
        },
        metadataBase: new URL("https://ksqpergamino.com.ar"),
        robots: {
            index: true,
            follow: true,
        },
        category: "agricultura",
    };
}

export default async function Page({ params }: PageProps) {
    const { cultivo } = await params;
    const query  = cultivo === 'maiz' ? "Maíz" : cultivo

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

    const productsToRender = products.filter(p => p.crops.includes(`${query.charAt(0).toUpperCase() + query.slice(1)}` as Crops));

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
                    <Image alt={`Cultivos de ${protocol.crop_name}`} src={protocol.cover_img} fill style={{ objectFit: 'cover' }} loading='eager'/>
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
                        className="rounded-lg w-full max-h-[580px]"
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
            <article className='w-full'>
                <CardsContainer>
                    {
                        productsToRender.map(p => <ProductCard
                            key={p.id}
                            name={p.name}
                            image_url={p.image_url}
                            category={p.category}
                            sub_category={p.sub_category}
                            slug={p.slug}
                            product_volume_state={p.product_volume_state}
                        />)
                    }
                </CardsContainer>
            </article>
        </PageContainer>
    );
};


