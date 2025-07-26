import { Slider } from './slider'
import { HeroSlide } from './slide'



export const HeroSection = () => {
    return (
        <>
            <Slider loop>
                <HeroSlide buttonText='Saber más' buttonUrl='/empresa' imageAlt='Imagen de soja joven' imageUrl="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Pagina-principal-1.jpg">
                    <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Nanotecnología</span> aplicada al agro.</h2>
                    <p className='text-base lg:text-xl'>Potencia tus cosechas, maximiza tus rindes y facilita la logística con MIST.</p>
                </HeroSlide>
                <HeroSlide buttonText='Ver ensayos' buttonUrl='/ensayos' imageAlt='Imagen de floracion' imageUrl="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Pagina-principal-2.jpg">
                    <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Comprometidos</span> con la innovación.</h2>
                    <p className='text-base lg:text-xl'>Explora nuestra biblioteca de ensayos y estudios.</p>
                </HeroSlide>
                <HeroSlide buttonText='Ver productos' buttonUrl='/productos' imageAlt='Imagen de campo de Maíz' imageUrl="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Pagina-principal-3.jpg">
                    <h2 className='text-4xl lg:text-5xl mb-2'>Línea <span className='font-bold'>MIST/BIOME.</span></h2>
                    <p className='text-base lg:text-xl'>Explora nuestro catálogo.</p>
                </HeroSlide>
                <HeroSlide buttonText='Saber más' buttonUrl='/contacto' imageAlt='Imagen de campo de girasoles' imageUrl="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Pagina-principal-4.jpg">
                    <h2 className='text-4xl lg:text-5xl mb-2'><span className='font-bold'>Menos coste</span> mayor produccion.</h2>
                    <p className='text-base lg:text-xl'>Descubre como podemos ayudarte a reducir costes de logística y maximizar tu producción.</p>
                </HeroSlide>
            </Slider>
            {/* <BenefitsBanner /> */}
            {/* <div className='flex flex-col gap-12 p-4 md:p-8 lg:p-20'>
                <FeaturedProduct />
                <LastArticle />
            </div> */}
        </>
    )
}