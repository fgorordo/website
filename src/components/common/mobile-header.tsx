import { MobileHeaderLayout } from "./mobile-header-layout"
import { MobileNavigation } from "./mobile-navigation"

const links = [
    {
        href: "/",
        text: "Inicio"
    },
    {
        href: "/nosotros",
        text: "Empresa"
    },
    {
        href: "/noticias",
        text: "Noticias"
    },
    {
        href: "/productos",
        text: "Productos"
    },
    {
        href: "/protocolos",
        text: "Protocolos"
    },
    {
        href: "/ensayos",
        text: "Ensayos"
    },
    {
        href: "/contacto",
        text: "Contacto"
    },
]

export const MobileHeader = () => {
    return (
        <MobileHeaderLayout>
            {
                links.map(e => <MobileNavigation href={e.href} text={e.text} key={e.text}/>)
            }
        </MobileHeaderLayout>
    )
}