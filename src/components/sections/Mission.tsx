import { FadeIn } from '../animations';
import { Compass } from 'lucide-react';

export const Mission = () => {
  return (
    <section className="py-24 px-4 bg-brand-black relative">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <Compass className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-80" strokeWidth={1} />
          <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-12">Nossa Missão</h2>
          
          <h3 className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-8 font-medium">
            Prover um ambiente de extrema excelência para o aprimoramento moral, intelectual e espiritual de nossos membros.
          </h3>
          
          <div className="w-24 h-[1px] bg-brand-gold/30 mx-auto mb-8"></div>
          
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Garantimos as ferramentas iniciáticas, filosóficas e estruturais necessárias para que cada maçom atinja sua plenitude e colabore ativamente na construção de uma sociedade mais justa e irmanada, guiada pelos perenes valores iluministas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
