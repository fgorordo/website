import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '@/assets/header-logo.svg';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { MenuIcon, XIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { CopyrightText } from './copyright-text';



export const MobileHeaderLayout = ({ children }: PropsWithChildren) => {

    return (
        <div className='relative border-b'>
            <div className='md:hidden px-4 py-2 bg-background flex items-end justify-between h-20 z-10'>
                <div className='flex gap-4'>
                    <Link href={"/"} tabIndex={1}><Image alt='Logo de KSQ Pergamino' src={headerLogo} width={110} /></Link>
                    <div className='mt-6'>
                        <h3 className='text-xs'>Distribuidor regional <b className='text-red-900'>KIOSHI STONE.</b></h3>
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger aria-describedby='mobile-header-description' className='z-50 h-10 w-10 p-2 border rounded-lg text-primary bg-gray-200 cursor-pointer flex items-center justify-center' tabIndex={2}>
                        <span id="mobile-open-menu-button-description" className="sr-only">
                            Abrir menú de navgación móvil - KSQ Pergamino
                        </span>
                        <MenuIcon className='text-primary' size={32} />
                    </SheetTrigger>
                    <SheetContent side='left' className='min-h-dvh' aria-describedby='mobile-header-description'>
                        <span id="mobile-header-description" className="sr-only">
                            Menú de navegación móvil de KSQ Pergamino.
                        </span>
                        <SheetHeader className='sticky top-0 bg-background border-b'>
                            <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" aria-describedby='mobile-close-menu-button-description'>
                                <XIcon className="size-4" />
                                <span className="sr-only" id='mobile-close-menu-button-description'>Cerrar menú de navgación móvil - KSQ Pergamino</span>
                            </SheetClose>
                            <SheetTitle className='flex justify-between items-center'>
                                <div className='flex gap-6 items-center mt-2'>
                                    <SheetClose asChild className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs transition-opacity focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" aria-describedby='mobile-close-menu-button-description'>
                                        <Link href={"/"}><Image alt='Logo de KSQ Pergamino' src={headerLogo} width={120} /></Link>
                                    </SheetClose>
                                    <div className='mt-6'>
                                        <h3 className='text-xs'>Distribuidor regional <b className='text-red-900'>KIOSHI STONE.</b></h3>
                                    </div>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <div className='flex-1 relative flex-col flex items-start px-4 gap-4'>
                            {children}
                        </div>
                        <SheetFooter className='bg-background border-t'>
                            <CopyrightText className='text-xs text-center text-muted-foreground' />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div >
    )
}