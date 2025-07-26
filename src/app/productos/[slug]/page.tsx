import { PageContainer, PageHeader, ShareButtons } from '@/components/common'
import { Button } from '@/components/ui/button';
import { Product } from '@/data/models';
import { products } from '@/data/product.data';
import { DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return products.map((product: Product) => ({
        cultivo: product.slug,
    }));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) return {};

    const title = `${product.name} | KSQ Pergamino`;
    const description = product.html_content.descripction;
    const url = `https://www.ksqpergamino/productos/${product.slug}`;
    const image = product.image_url;

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
            siteName: 'KSQ Pergamino',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `Imagen de producto - ${product.name}`,
                },
            ],
            locale: 'es_AR',
            tags: ["Kioshi Stone", "Kioshi", "Mist", product.name, product.slug, "Fertilizantes", "Nanotecnología", "KSQ", "Pergamino", "KSQ Pergamino"]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            site: '@KSQPergamino', // opcional
        },
        metadataBase: new URL('https://www.ksqpergamino.com.ar'), // 🔁 cambiá esto por tu dominio
        category: 'agricultura',
        robots: {
            index: true,
            follow: true,
        },
        other: {
            'og:type': 'product',
            'product:brand': 'Kioshi Stone',
            'product:retailer_item_id': product.slug,
        },
    };
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params;

    const product = products.find(
        (p) => p.slug === slug
    );

    if (!product) {
        return (
            <PageContainer mainComponent>
                <PageHeader title='Protocolo no encontrado' />
                <p className='text-center'>El protocolo para el cultivo solicitado no existe.</p>
            </PageContainer>
        );
    }

    return (
        <PageContainer mainComponent>
            <article className='w-full'>
                <div className='items-center justify-center flex mb-8 md:hidden'>
                    <Image width={223} height={185} alt={`Imagen de producto - ${product.name}`} src={product.image_url} />
                </div>
                <div className='flex gap-8 w-full justify-between mb-8'>
                    <div className='md:w-1/2'>
                        <div className='flex justify-between xl:items-center mb-6 flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between'>
                            <h1 className='text-4xl lg:text-5xl font-medium z-20 mb-0'>{product.name}</h1>
                            <div className='flex flex-row gap-4'>
                                <Button asChild><Link href={product.pdf_url} target='_blank'>Ver Ficha técnica<DownloadIcon /></Link></Button>
                                <Button asChild><Link href={'#'} target='_blank'>Contactar asesor</Link></Button>
                            </div>
                        </div>
                        <p>{`${product.html_content.descripction}`}</p>
                    </div>
                    <div className='md:w-1/2 items-center justify-center hidden md:flex'>
                        <Image width={223} height={185} alt={`Imagen de producto - ${product.name}`} src={product.image_url} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='grid grid-cols-1 gap-4'>
                        {
                            product.html_content.effects && (
                                <div>
                                    <h3 className='font-bold mb-2'>EFECTOS BENÉFICOS</h3>
                                    <ol className='list-decimal flex flex-col mb-2'>
                                        {
                                            product.html_content.effects && product.html_content.effects.list?.map(e => <li key={e}>{e}</li>)
                                        }
                                    </ol>
                                </div>
                            )
                        }
                        <div>
                            <h3 className='font-bold mb-2'>CONTENIDO Y RIQUEZA GARANTIZADA:</h3>
                            <ul className='flex flex-col mb-2'>
                                {
                                    product.html_content.content && product.html_content.content.list?.map(e => <li key={e}>{e}</li>)
                                }
                            </ul>
                        </div>
                        {
                            product.html_content.properties && (
                                <div>
                                    <h3 className='font-bold mb-2'>PROPIEDADES FÍSICO-QUÍMICAS:</h3>
                                    <ul className='flex flex-col mb-2'>
                                        {
                                            product.html_content.properties && product.html_content.properties.list?.map(e => <li key={e}>{e}</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        {
                            product.html_content.storage && (
                                <div>
                                    <h3 className='font-bold mb-2'>CONDICIONES DE ALMACENAMIENTO:</h3>
                                    <ul className='flex flex-col mb-2 list-inside list-["-_"]'>
                                        {
                                            product.html_content.storage && product.html_content.storage.list?.map(e => <li key={e}>{e}</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        {
                            product.html_content.volume && (
                                <div>
                                    <h3 className='font-bold mb-2'>VOLUMEN:</h3>
                                    <ul className='flex flex-col mb-2 list-inside list-["-_"]'>
                                        {
                                            product.html_content.volume && product.html_content.volume.list?.map(e => <li key={e}>{e}</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        {
                            product.html_content.packaging && (
                                <div>
                                    <h3 className='font-bold mb-2'>PACKAGING DE DESPACHO:</h3>
                                    <ul className='flex flex-col mb-2 list-inside list-["-_"]'>
                                        {
                                            product.html_content.packaging && (<li>{product.html_content.packaging}</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        {
                            product.html_content.application_dosage && (
                                <div>
                                    <h3 className='font-bold mb-2'>APLICACIÓN Y DOSIS:</h3>
                                    <ul className='flex flex-col mb-2 list-inside list-["-_"]'>
                                        {
                                            product.html_content.application_dosage.extensive_industrial_fruits && (
                                                <>
                                                    <li className='font-semibold'>{product.html_content.application_dosage.extensive_industrial_fruits.title}</li>
                                                    <li>{product.html_content.application_dosage.extensive_industrial_fruits.type}</li>
                                                    <li>{product.html_content.application_dosage.extensive_industrial_fruits.dose}</li>
                                                </>
                                            )
                                        }
                                        {
                                            product.html_content.application_dosage.intensive && (
                                                <>
                                                    <li className='font-semibold'>{product.html_content.application_dosage.intensive.title}</li>
                                                    {
                                                        product.html_content.application_dosage.intensive.type && (
                                                            <li>{product.html_content.application_dosage.intensive.type}</li>
                                                        )
                                                    }

                                                    <li>{product.html_content.application_dosage.intensive.dose}</li>
                                                </>
                                            )
                                        }
                                        {
                                            product.html_content.application_dosage.others && (
                                                product.html_content.application_dosage.others.map(e => <li key={e}>{e}</li>)
                                            )
                                        }
                                        {
                                            product.html_content.application_dosage.image_url && (
                                                <div className='mt-4'>
                                                    <Image alt='Tabla de aplicación de Mist K' src={product.html_content.application_dosage.image_url} width={600} height={300} />
                                                </div>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            product.html_content.reccommendations && (
                                <div>
                                    <h3 className='font-bold mb-2'>RECOMENDACIONES DE USO:</h3>
                                    {
                                        product.html_content.reccommendations?.text && (
                                            <p className='mb-2'>{product.html_content.reccommendations.text}</p>
                                        )
                                    }

                                    {
                                        product.html_content.reccommendations?.pulverization && (
                                            <p className='mb-2'>{product.html_content.reccommendations.pulverization}</p>
                                        )
                                    }
                                    {
                                        product.html_content.reccommendations?.aereo && (
                                            <p className='mb-2'>{product.html_content.reccommendations.aereo}</p>
                                        )
                                    }
                                </div>
                            )
                        }
                        {
                            product.html_content.cautions_and_warnings && (
                                <div className='mt-8'>
                                    <h3 className='font-bold mb-2'>PRECAUCIONES Y ADVERTENCIAS:</h3>
                                    <p className='mb-2'>
                                        {product.html_content.cautions_and_warnings.text}
                                    </p>
                                </div>
                            )
                        }

                        <div className='mt-10'>
                            <ShareButtons url={product.slug} title={product.name + ' - Fertilizante | KSQ Pergamino'}/>
                        </div>
                    </div>
                </div>
            </article>
        </PageContainer>
    );
}