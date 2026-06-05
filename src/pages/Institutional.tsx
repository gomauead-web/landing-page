import { Header } from '../components/layout/Header';
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Mission } from '../components/sections/Mission';
import { Vision } from '../components/sections/Vision';
import { Values } from '../components/sections/Values';
import { Pillars } from '../components/sections/Pillars';
import { Differentials } from '../components/sections/Differentials';
import { TraditionInnovation } from '../components/sections/TraditionInnovation';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';
import { Footer } from '../components/layout/Footer';

export function Institutional() {
  return (
    <div className="bg-brand-black min-h-screen font-sans selection:bg-brand-gold selection:text-brand-black flex flex-col">
      <Header />
      <FloatingWhatsApp />
      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Mission />
        <Vision />
        <Values />
        <Pillars />
        <Differentials />
        <TraditionInnovation />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
