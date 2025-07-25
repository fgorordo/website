import { ContactSection } from '@/components/contact/contact';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Contacto",
}

export default function Page() {
    return (
        <ContactSection containerMain />
    )
}