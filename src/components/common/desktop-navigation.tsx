"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { protocols, trials } from '@/data'
import Image from 'next/image'

import KSQLogo from '@/assets/header-logo.svg'
import clsx from 'clsx'


export function DesktopNavigation() {

    const trailsToRender = trials.slice(0, 3);

    return (
        <NavigationMenu viewport={false} className='md:px-10 lg:mx-auto'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Image alt='Logo de KSQ Pergamino' src={KSQLogo} className='-translate-x-5 my-auto' />
                                        <p className="text-xs leading-tight font-medium">
                                            Distribuidor regional de Kioshi Stone en Argentina.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/empresa" title="Empresa">
                                Más de 6 años de experiencia en el sector agropecuario.
                            </ListItem>
                            <ListItem href="/noticias" title="Noticias">
                                Enterate de las últimas novedades y lanzamientos. Ademas de nuestras participaciones en eventos.
                            </ListItem>
                            <ListItem href="/contacto" title="Contacto">
                                Estamos emocionados de poder ayudarte a mejorar tu producción. Nuestros asesores están listos para brindarte la mejor atención.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/productos">Productos</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Protocolos de aplicación</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {
                                protocols.map((p) => (
                                    <ListItem
                                        key={p.slug}
                                        title={p.crop_name}
                                        href={"/protocolos/" + p.slug}
                                        image={p.cover_img}
                                    >
                                        Procolo de aplicación para cultivos de {p.crop_name}. Incluye recomendaciones de productos y dosis.
                                    </ListItem>
                                ))
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Ensayos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                {
                                    trailsToRender.map(t => (
                                        <NavigationMenuLink asChild key={t.title}>
                                            <Link href={t.pdf_url} target="_blank">
                                                <div className="font-medium">{t.title}</div>
                                                <div className="text-muted-foreground">
                                                    Descargar documento del ensayo.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    ))
                                }

                                <NavigationMenuLink asChild>
                                    <Link href="/ensayos">
                                        <div className="font-medium">Ver todos los ensayos</div>
                                        <div className="text-muted-foreground">
                                            Accede a nuestra biblioteca de ensayos.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/contacto">Contacto</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    image,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, image?: string }) {
    return (
        <li {...props} className='overflow-hidden'>
            <NavigationMenuLink asChild className=''>
                <Link href={href} className='relative overflow-hidden'>
                    {image && (
                        <>
                            <Image
                                alt={`Imagen de protocolo - ${title}`}
                                src={image}
                                fill
                                className='relative transition-all duration-200'
                            />
                            <div className='bg-black/60 absolute top-0 left-0 right-0 bottom-0' />
                        </>

                    )}
                    {
                        image
                            ? (
                                <div className='z-10 text-background'>
                                    <div className="text-sm leading-none font-medium mb-2">{title}</div>
                                    <p className="text-gray-200 line-clamp-2 text-sm leading-snug">
                                        {children}
                                    </p>
                                </div>
                            )
                            : (
                                <div className=''>
                                    <div className="text-sm leading-none font-medium mb-2">{title}</div>
                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                        {children}
                                    </p>
                                </div>
                            )
                    }
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
