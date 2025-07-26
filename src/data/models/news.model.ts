export type NewsBlock = {
    title?: string;
    image_url?: string;
    content?: string;
}

export type News = {
    slug: string;
    title: string;
    image_url: string;
    info_blocks: NewsBlock[]
    description: string;
}