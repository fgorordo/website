import { HeroBanner } from '@/components/banners';
import { NanoBanner } from '@/components/banners/nano-banner';
import { BenefitCard } from '@/components/cards/benefits-card';
import { PageContainer, PageSubtitle, PageTitle } from "@/components/common";
import { ContactSection } from '@/components/contact/contact';
import { HeroSection } from '@/components/hero';
import { Metadata } from 'next';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroBanner />
      <NanoBanner />
      <ContactSection />
    </main>
  );
}
