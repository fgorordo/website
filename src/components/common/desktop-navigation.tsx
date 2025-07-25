"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

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

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Sorgo",
        href: "/protcolos/sorgo",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Trigo",
        href: "/protocolos/trigo",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Maíz",
        href: "/protocolos/maiz",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Soja",
        href: "/protocolos/soja",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Girasol",
        href: "/protocolos/girasol",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
]

export function DesktopNavigation() {

    const trailsToRender = trials.slice(0, 3);

    return (
        <NavigationMenu viewport={false} className='w-full mx-auto'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-primary/50 to-primary flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            KSQ - Pergamino
                                        </div>
                                        <p className="text-sm leading-tight">
                                            Distribuidor principal de Kioshi Stone en Argentina.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/empresa" title="Nosotros">
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
                    <NavigationMenuTrigger>Protocolos de aplicación</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {
                                protocols.map((p) => (
                                    <ListItem
                                        key={p.slug}
                                        title={p.crop_name}
                                        href={"/protocolos/" + p.slug}
                                    >
                                        Procolo de aplicación para cultivos de {p.crop_name}. Incluye recomendaciones de productos y dosis.
                                    </ListItem>
                                ))
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/productos">Productos</Link>
                    </NavigationMenuLink>
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
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
