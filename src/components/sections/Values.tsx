import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { Scale, BookOpen, HeartHandshake, ShieldCheck, Link, Globe2 } from 'lucide-react';

const values = [
  {
    title: 'Fraternidade',
    description: 'Laços indissolúveis que unem homens diferentes em torno de um propósito comum, garantindo suporte e lealdade mútua.',
    icon: HeartHandshake,
  },
  {
    title: 'Liberdade',
    description: 'O estímulo ao livre pensamento e à emancipação intelectual, respeitando a consciência e o arbítrio de cada indivíduo.',
    icon: Globe2,
  },
  {
    title: 'Igualdade',
    description: 'A premissa basilar de que todos os irmãos trilham o mesmo nível de consideração, despidos de vaidades ou distinções profanas.',
    icon: Scale,
  },
  {
    title: 'Integridade',
    description: 'A retidão de caráter que baliza o comportamento ético rigoroso, imprescindível para a convivência dentro e fora das Lojas.',
    icon: ShieldCheck,
  },
  {
    title: 'Busca do Saber',
    description: 'A investigação constante da verdade por meio do estudo da simbologia, história e filosofia em um fluxo de aprendizado perene.',
    icon: BookOpen,
  },
  {
    title: 'Amor à Humanidade',
    description: 'A prática filantrópica e o compromisso silencioso de atuar como vetor de progresso, aliviando agruras e iluminando caminhos.',
    icon: Link,
  },
];

export const Values = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-brand-black relative">
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/2 h-full z-0 overflow-hidden">
        <img src="/images/wisdom_light.png" alt="Light" className="object-cover w-full h-full mix-blend-screen scale-150 transform translate-y-1/4 translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-4">Nossos Valores</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-white font-medium">Os Princípios Inegociáveis</h3>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {values.map((value, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-brand-charcoal/50 backdrop-blur-sm border border-brand-gold/10 p-10 h-full rounded-sm hover:-translate-y-2 transition-transform duration-500 hover:border-brand-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 border border-brand-gold/20 flex items-center justify-center rounded-full mb-8 bg-brand-black">
                     <value.icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl text-white font-serif mb-4 font-medium">{value.title}</h4>
                  <p className="text-white/60 font-light leading-relaxed">{value.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
