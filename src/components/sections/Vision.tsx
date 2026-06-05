import { FadeIn } from '../animations';
import { Eye } from 'lucide-react';

export const Vision = () => {
  return (
    <section className="py-24 px-4 bg-brand-charcoal relative border-y border-brand-gold/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-charcoal to-brand-charcoal pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <Eye className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-80" strokeWidth={1} />
          <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-12">Nossa Visão</h2>
          
          <h3 className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-8 font-medium flex-wrap">
            Ser reconhecida como a Potência Maçônica de <span className="text-brand-gold border-b border-brand-gold">referência nacional</span> em qualidade institucional.
          </h3>
          
          <div className="w-24 h-[1px] bg-brand-gold/30 mx-auto mb-8"></div>
          
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Almejamos uma Ordem alicerçada na excelência administrativa, no rigor litúrgico e na genuína união fraterna, capaz de legar ao futuro não apenas uma instituição sólida, mas uma verdadeira escola de líderes dedicados ao bem da Pátria e da Humanidade.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
