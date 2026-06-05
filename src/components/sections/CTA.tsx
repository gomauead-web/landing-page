import { FadeIn } from '../animations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-32 px-4 bg-brand-charcoal relative border-t border-brand-gold/10">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-charcoal to-brand-charcoal pointer-events-none" />
       
       <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
             <h2 className="text-4xl md:text-5xl font-serif text-white font-medium mb-8 leading-tight">
               Pronto para dar o primeiro passo em direção ao aperfeiçoamento?
             </h2>
             <p className="text-white/60 font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
               A porta do templo abriga aqueles que batem com firmeza e propósito. Se você busca desenvolvimento real apoiado pela força da fraternidade, inicie hoje o seu processo.
             </p>
             <Link 
               to="/ingresso"
               className="inline-flex px-10 py-5 bg-brand-gold text-brand-black text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] mx-auto"
             >
               Conhecer a Fraternidade
               <ArrowRight className="w-5 h-5 ml-2" />
             </Link>
          </FadeIn>
       </div>
    </section>
  );
};
