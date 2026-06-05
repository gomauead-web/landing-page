import { FadeIn } from '../animations';

export const TraditionInnovation = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-brand-black border-y border-brand-gold/20">
      <div className="absolute inset-0 opacity-40 z-0">
         <img src="/images/stone_pillar.png" alt="Stone Pillar" className="w-full h-full object-cover mix-blend-luminosity grayscale-[0.5]" />
      </div>
      <div className="absolute inset-0 bg-brand-black/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
         <FadeIn>
            <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-10 font-medium leading-[1.2] drop-shadow-md pb-[-1rem]">
              "Preservamos princípios permanentes enquanto utilizamos ferramentas modernas para fortalecer a Maçonaria."
            </h2>
            <p className="text-white/80 uppercase tracking-widest text-sm font-medium">A Síntese GOMAU</p>
         </FadeIn>
      </div>
    </section>
  );
};
