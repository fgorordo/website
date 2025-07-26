"use client";

import { FC, useEffect, useState } from 'react';
import { PageHeader } from '../common';
import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRightIcon } from 'lucide-react';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';
import { ScrollArea } from '../ui/scroll-area';

interface CatalogLinkProps {
    href: string;
    text: string;
    childrens?: CatalogLinkProps[];
}

const CatalogLink: FC<CatalogLinkProps> = ({ href, text, childrens }) => {

    if (childrens) {
        return (
            <li className={clsx('text-md group w-full', false ? 'font-bold' : '')}>
                <Link href={href} className='w-full group text-md hover:border-b-primary border-b-2 border-transparent transition-all duration-200'>{text}</Link>
                <ul className='flex gap-2 flex-col pl-3 mt-2'>
                    {
                        childrens.map(e => (<CatalogLink href={e.href} text={e.text} key={e.href} />))
                    }
                </ul>
            </li>
        )
    } else {
        return (
            <li className={clsx('group text-md hover:border-b-primary border-b-2 border-transparent transition-all duration-200', false ? 'font-bold border-b-primary' : '')}><Link href={href} className='flex items-center gap-1 justify-between'>{text} <ChevronRightIcon className={clsx('group-hover:opacity-100 transition-opacity duration-200', false ? 'opacity-100' : 'opacity-0 text-gray-400')} /></Link></li>
        )
    }
}

export const CatalogFilters: FC = () => {
    return (
        <div className='md:w-[290px]'>
            <PageHeader title='Filtros' />
            <ScrollArea className='h-[60vh] bg-muted-foreground/20 px-4 mt-4 rounded-lg'>
                <div className='mt-4'>
                    <p className='text-lg lg:text-2xl font-medium'>Categorias</p>
                    <hr className='border-primary rounded-lg mt-1' />
                    <ul className='mt-4 flex gap-3 flex-col'>
                        <CatalogLink href='/productos?' text='Todos los productos' />
                        <CatalogLink href='/productos?categoria=arrancador de cultivos' text='Arrancador de cultivos' />
                        <CatalogLink href='/productos?categoria=corrección de suelos' text='Corrección de suelos' />
                        <CatalogLink href='/productos?categoria=vivificante de semillas' text='Vivificante de semillas' />
                        <CatalogLink href='/productos?categoria=nutrición' text='Nutrición' childrens={[{ href: '/productos?subcategoria=microelementos', text: '- Microelementos' }, { href: '/productos?subcategoria=macroelementos', text: '- Macroelementos' }, { href: '/productos?subcategoria=balanceados', text: '- Balanceados' }]} />
                    </ul>
                </div>

                <div className='mt-8'>
                    <p className='text-lg lg:text-2xl font-medium'>Cultivos</p>
                    <hr className='border-primary rounded-lg mt-1' />
                    <ul className='mt-4 flex gap-3 flex-col'>
                        <CatalogLink href='/productos?cultivo=Pasturas' text='Pasturas' />
                        <CatalogLink href='/productos?cultivo=Frutales' text='Frutales' />
                        <CatalogLink href='/productos?cultivo=Yerba Mate' text='Yerba Mate' />
                        <CatalogLink href='/productos?cultivo=Cítricos' text='Cítricos' />
                        <CatalogLink href='/productos?cultivo=Cebada' text='Cebada' />
                        <CatalogLink href='/productos?cultivo=Girasol' text='Girasol' />
                        <CatalogLink href='/productos?cultivo=Trigo' text='Trigo' />
                        <CatalogLink href='/productos?cultivo=Maíz' text='Maíz' />
                        <CatalogLink href='/productos?cultivo=Algodón' text='Algodón' />
                        <CatalogLink href='/productos?cultivo=Soja' text='Soja' />
                        <div className='my-1'/>
                    </ul>
                </div>
            </ScrollArea>
        </div>
    )
}