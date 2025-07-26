import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProtocolCardProps {
    title: string;
    image: string;
    href: string;
}

export const ProtocolCard: FC<ProtocolCardProps> = ({ href, image, title }) => {
    return (
        <Link href={href} className="relative overflow-hidden rounded-lg border-1 w-full min-h-[80px] flex items-center justify-center group">
            <Image
                alt={`Imagen de protocolo - ${title}`}
                src={image}
                fill
                className='relative transition-all duration-200 lg:grayscale-75 group-hover:grayscale-0'
            />
            <div className='bg-black/60 group-hover:bg-black/50 absolute top-0 left-0 right-0 bottom-0' />
            <div className="z-10 flex flex-col gap-2 items-center p-4 group-hover:scale-105 transition-all duration-200">
                <p className="text-gray-300 group-hover:text-white text-xl z-10 font-semibold ">Protocolo de aplicación para:</p>
                <p className="text-gray-300 group-hover:text-white text-2xl z-10 font-light">{title}</p>
            </div>

        </Link>
    )
}