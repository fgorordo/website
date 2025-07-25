import Link from "next/link"
import Image from "next/image"
import { DesktopNavigation } from './desktop-navigation';
import headerLogo from '@/assets/header-logo.svg';


export const DesktopHeader = () => {
    return (
        <div className='hidden md:block'>
            {/* <Image className='opacity-30 absolute -z-10 -top-1/12 bottom-0 -left-1/18 h-full' src={mistBgImage} alt='Logo Mist - Kioshi Stone'/> */}
            <div className='flex justify-between'>
                <div className='flex gap-12 items-center md:ml-8 lg:ml-20 py-2'>
                    {/* Optimizar Link para Screen readers only */}
                    <Link href={"/"} className='-translate-y-2'><Image alt='Logo de KSQ Pergamino' src={headerLogo} width={112} /></Link>
                    <div className=''>
                        <h2 className='text-primary font-bold text-xl'>Nanotecnología en minerales.</h2>
                        <h3 className='text-xl'>Distribuidor regional <b className='text-red-900'>KIOSHI STONE.</b></h3>
                    </div>
                </div>
                <div className='bg-[url(../assets/header-image.svg)] h-[80px] bg-no-repeat bg-cover w-3/12' />
            </div>
            <nav className='mx-auto w-full border py-2'>
                <DesktopNavigation />
            </nav>
        </div>
    );
};
