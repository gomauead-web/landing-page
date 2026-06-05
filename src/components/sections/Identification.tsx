import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { Target, AlertCircle, Compass } from 'lucide-react';

export const Identification = () => {
  return (
    <section className="py-24 px-4 bg-brand-charcoal relative border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <Target className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-80" strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 font-medium">Você busca algo mais profundo?</h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Muitos homens sentem que falta um propósito maior em suas vidas. Uma sensação de que o sucesso material não é suficiente sem o verdadeiro aprimoramento moral e intelectual.
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-12 text-left">
          <StaggerItem>
            <AlertCircle className="w-8 h-8 text-brand-gold mb-4" />
            <h3 className="text-white text-xl font-serif mb-3">Isolamento</h3>
            <p className="text-white/50 text-sm">A dificuldade de encontrar um círculo de confiança com homens que compartilham dos mesmos valores elevados.</p>
          </StaggerItem>
          <StaggerItem>
            <Compass className="w-8 h-8 text-brand-gold mb-4" />
            <h3 className="text-white text-xl font-serif mb-3">Estagnação</h3>
            <p className="text-white/50 text-sm">A estagnação moral e filosófica diante das futilidades da vida moderna.</p>
          </StaggerItem>
          <StaggerItem>
            <Target className="w-8 h-8 text-brand-gold mb-4" />
            <h3 className="text-white text-xl font-serif mb-3">Falta de Legado</h3>
            <p className="text-white/50 text-sm">O desejo de deixar uma marca positiva na sociedade, mas sem as ferramentas certas para agir.</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
