import { FadeIn } from '../animations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-[#111] to-brand-black -z-20" />
      
      {/* Overlay Background Image */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(/images/temple_hallway.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent z-0" />

      <div className="max-w-5xl mx-auto text-center z-10 pt-40 md:pt-48 relative">
        <FadeIn>
          <span className="inline-block text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8 border border-brand-gold/30 px-4 py-1.5 rounded-sm bg-brand-black/50 backdrop-blur-sm">
            Grande Oriente Maçônico Universal
          </span>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-white font-medium drop-shadow-xl">
            Unindo a Força da <span className="text-brand-gold">Tradição</span> <br className="hidden md:block"/>
            à Dinâmica do <span className="text-brand-gold">Futuro.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Uma Potência Maçônica moderna, fundamentada em princípios seculares e comprometida com a formação integral, a fraternidade e a contínua busca pelo saber em pleno século XXI.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link 
            to="/ingresso"
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Conheça a Fraternidade
          </Link>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-medium hover:bg-white/5 hover:border-brand-gold transition-colors flex items-center justify-center gap-2 rounded-sm"
          >
            Saiba Mais
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
