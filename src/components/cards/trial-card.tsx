import { Trial } from "@/data/models/trail.model";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DownloadIcon } from 'lucide-react';

interface TrialCardProps extends Trial { }

export const TrialCard: FC<TrialCardProps> = ({ pdf_url, thumbnail, title }) => {
    return (
        <Card className="pt-0 overflow-hidden">
            <Image className="max-h-[140px]" style={{objectFit: "cover"}} width={500} height={200} alt={`Portada de ensayo: ${title}`} src={thumbnail} about={`Imagen de la tarjeta del ensayo: ${title}`} />
            <CardContent className="h-full">
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <CardFooter className="ml-auto">
                <Button size={"sm"} className="font-normal" asChild>
                    <Link href={pdf_url} target="_blank">Obtener ensayo <span><DownloadIcon /></span></Link>
                </Button>
            </CardFooter>
        </Card>
    )
};
