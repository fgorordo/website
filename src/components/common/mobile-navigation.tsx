"use client";

import { FC } from "react";
import { Button } from "../ui/button"
import { SheetClose } from "../ui/sheet"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface MobileNavigationProps {
    href: string;
    text: string;
}

export const MobileNavigation:FC<MobileNavigationProps> = ({href, text}) => {

    const path = usePathname();

    return (
        <SheetClose asChild className={clsx("ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden w-full bg-gray-200 disabled:pointer-events-none", path === href ? 'bg-primary/20' : 'bg-gray-200')} aria-describedby='mobile-close-menu-button-description'>
            <Button asChild variant={"link"} className={clsx("border-2 rounded-lg", path === href ? 'border-primary' : 'border-gray-300')}><Link href={href} className="w-full">{text}</Link></Button>
        </SheetClose>
    )
}