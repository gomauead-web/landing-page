import { FadeIn, StaggerContainer, StaggerItem } from '../animations';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-brand-charcoal relative overflow-hidden border-t border-brand-gold/10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-brand-gold"></div>
                <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-medium">Quem Somos</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-medium leading-tight mb-8">
                Uma instituição forjada na responsabilidade de elevar o ser.
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <div className="space-y-6 text-white/70 leading-relaxed font-light">
                <p>
                  O Grande Oriente Maçônico Universal (GOMAU) é uma Potência Maçônica soberana e regular, que nasce do compromisso inabalável com a essência da maçonaria operativa e especulativa, aliada às melhores práticas de gestão e governança institucional.
                </p>
                <p>
                  Não somos apenas uma associação. Somos uma academia de pensamento e aprimoramento moral. Reunimos homens livres e de bons costumes com um propósito claro: preservar a rica tradição iniciática enquanto nos adaptamos às exigências e desafios impostos pelas dinâmicas do mundo contemporâneo.
                </p>
                <p>
                  Atuamos como um bastião de desenvolvimento intelectual e moral, onde cada detalhe — de nossos ensinamentos à nossa estrutura administrativa — é cuidadosamente arquitetado para promover o progresso individual de nossos membros e, por consequência, o progresso da humanidade.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 rounded-md overflow-hidden shadow-2xl border border-brand-gold/20">
               <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
               <img src="/images/compass_book.png" alt="Símbolos Maçônicos" className="w-full h-full object-cover object-center grayscale-[0.2]" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-black p-8 border border-brand-gold/30 shadow-2xl z-20 max-w-sm rounded-sm">
               <p className="text-brand-gold text-2xl font-serif italic mb-2">"Ordem do Caos"</p>
               <p className="text-white/60 text-sm font-light leading-relaxed">Tradição centenária aplicada com sabedoria aos dilemas éticos da atualidade.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
