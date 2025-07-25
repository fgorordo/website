import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import mistImage from '@/assets/mist-drake-logo.svg'
import { BadgeCheckIcon } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/data/models';

interface ProductCardProps extends Partial<Product> {
    isOrganicCertificated?: boolean;
}

export const ProductCard = async ({slug, category, image_url, name, sub_category, isOrganicCertificated = false }: ProductCardProps) => {
    return (
        <Link href={`/productos/${slug}`} className='group:hover'>
            <Card className="hover:shadow-xl transition-all duration-300 group h-full overflow-hidden bg-gradient-to-b from-secondary/30 via-muted/20 to-muted/10">
                <CardHeader className='flex items-center justify-center relative'>
                    <Image width={200} height={150} alt="Producto #1" src={image_url || ""} className="z-20 group-hover:scale-105 transition-transform duration-400" />
                    <Image src={mistImage} alt='Logo de MIST' className='opacity-20 absolute right-1/2 top-1/2 left-1/2' height={600} />
                </CardHeader>
                <CardContent className="z-20">
                    <div className=''>
                        <CardTitle className='text-2xl font-bold text-start'>{name}</CardTitle>
                        {
                            isOrganicCertificated
                                ? (<div className='flex items-center gap-1 font-bold text-primary my-1'><BadgeCheckIcon size={18} /><p className='text-xs'>{`${"Producto orgánico certificado (Letis-NOP)"}`}</p></div>)
                                : ""
                        }
                    </div>
                    <CardDescription className='font-semibold text-black text-start'>Correción de suelo</CardDescription>
                    <CardDescription className='text-start'>{sub_category ? sub_category : '-'}</CardDescription>
                </CardContent>
                <CardFooter className='flex flex-col items-start'>
                </CardFooter>
            </Card>
        </Link>
    )
}