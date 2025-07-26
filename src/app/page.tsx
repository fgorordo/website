import { HeroBanner, ProtocolsSection } from '@/components/banners';
import { NanoBanner } from '@/components/banners/nano-banner';
import { ContactSection } from '@/components/contact/contact';
import { FeaturedProducts } from '@/components/featured-products';
import { HeroSection } from '@/components/hero';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroBanner />
      <FeaturedProducts />
      <ProtocolsSection />
      <NanoBanner />
      <ContactSection />
    </main>
  );
}
