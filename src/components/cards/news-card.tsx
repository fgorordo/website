import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface NewsCardProps {
    title: string;
    slug: string;
    image_url: string;
    description: string;
}

export const NewsCard: FC<NewsCardProps> = ({ description, slug, image_url, title }) => {
    return (
        <Link href={`noticias/${slug}`}>
            <Card className="w-[320px] min-w-[320px] max-w-xs">
                <CardHeader className="relative h-[140px] mx-3 rounded-lg overflow-hidden">
                    <Image
                        alt={`Portada de noticia: ${title}`}
                        src={image_url}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-base font-semibold">{title}</CardTitle>
                    <CardDescription
                        className="mt-2 text-sm text-muted truncate text-ellipsis line-clamp-5"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 5,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>
        </Link>
    )
}