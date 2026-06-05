import { Header } from '../components/layout/Header';
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp';
import { LandingHero } from '../components/sections/LandingHero';
import { Identification } from '../components/sections/Identification';
import { TheSolution } from '../components/sections/TheSolution';
import { Benefits } from '../components/sections/Benefits';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Qualification } from '../components/sections/Qualification';
import { LeadFormSection } from '../components/sections/LeadFormSection';
import { Footer } from '../components/layout/Footer';

export function Ingresso() {
  return (
    <div className="bg-brand-black min-h-screen font-sans selection:bg-brand-gold selection:text-brand-black flex flex-col">
      <Header />
      <FloatingWhatsApp />
      <main className="flex-grow pt-20">
        <LandingHero />
        <Identification />
        <TheSolution />
        <Benefits />
        <HowItWorks />
        <Qualification />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
