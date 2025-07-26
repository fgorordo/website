import { PageContainer, PageHeader } from "@/components/common";
import { news as newsData } from "@/data/news.data";
import { News, NewsBlock } from '@/data/models/news.model'
import { Metadata } from "next";
import Image from "next/image";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return newsData.map((n: News) => ({
        slug: n.slug,
    }));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const {slug} = await params;
    const article = newsData.find((p) => p.slug === slug);

    if (!article) return {};

    const title = `${article.title} | KSQ Pergamino`;
    const description = article.description;
    const url = `https://www.ksqpergamino/noticias/${article.slug}`;
    const image = article.image_url;

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
                    alt: `Imagen de portada noticia - ${article.title}`,
                },
            ],
            locale: 'es_AR',
            tags: ["Kioshi Stone", "Kioshi", "Mist", "Fertilizantes", "Nanotecnología", "KSQ", "Pergamino", "KSQ Pergamino"]
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
            'product:retailer_item_id': article.slug,
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    const article = newsData.find(
        (p) => p.slug === slug
    );

    if (!article) {
        return (
            <PageContainer mainComponent>
                <PageHeader title='Protocolo no encontrado' />
                <p className='text-center'>Parece que la noticia que buscas no existe, vuelve a intentarlo</p>
            </PageContainer>
        );
    }

    return (
        <PageContainer mainComponent>
            <div className="flex flex-col gap-6 text-sm">
                <ArticleHeader
                    description={article.description}
                    image_url={article.image_url}
                    title={article.title}
                />
                {
                    article.info_blocks.map((ib, i) => <ArticleBlock key={i} content={ib.content} image_url={ib.image_url}
                        title={ib.title} />)
                }
            </div>
        </PageContainer>
    )
}


const ArticleHeader = (article: Partial<News>) => {
    return (
        <div>
            <div className="w-full h-[200px] relative mb-6">
                <Image objectFit="cover" className="rounded-lg" alt={`Portada para noticia: ${article.title}`} src={article.image_url!} fill />
            </div>
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4">{article.title}</h1>
            <p className="font-medium">{article.description}</p>
        </div>
    )
};

const ArticleBlock = ({ content, image_url, title }: NewsBlock) => {
    return (
        <div className="flex gap-2 flex-col">
            {title && (
                <p className="font-medium text-sm">{content}</p>
            )}
            {content && (
                <p>{content}</p>
            )}
            {
                image_url && (
                    <div className="h-[400px] relative mb-6 max-w-[800px] mx-auto">
                        <Image objectFit="cover" className="rounded-lg" alt={`Foto ilustrativa de noticia`} src={image_url!} fill />
                    </div>
                )
            }
        </div>
    )
}