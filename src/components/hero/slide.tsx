import { Button } from "@/components/ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface HeroSlideProps extends PropsWithChildren {
    buttonUrl: string;
    buttonText: string;
    imageUrl: string | StaticImport;
    imageAlt: string;
  }
  
  export const HeroSlide = ({ imageUrl, buttonText, buttonUrl, children, imageAlt }: HeroSlideProps) => {
    return (
      <section className='min-w-full'>
        <article className='h-[calc(80vh_-_128px)] md:h-[calc(80vh_-_128px)] text-background relative bg-black/40 flex items-start justify-center flex-col px-10 md:px-28 lg:px-36'>
          <Image priority  quality={100} fill className={`absolute top-0 right-0 bottom-0 left-0 -z-10 bg-cover bg-center object-cover h-full w-full`} src={imageUrl} alt={imageAlt}/>
          <div className='lg:max-w-4/12 mb-10 md:mb-12 text-center md:text-start'>
            { children }
          </div>
          <Button asChild size={"lg"} className='mx-auto md:mx-0 bg-background/15 hover:bg-background/20 transition-all duration-200 border-2'><Link href={buttonUrl}>{buttonText}</Link></Button>
        </article>
      </section>
    )
  }