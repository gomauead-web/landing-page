import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { ArrowRight } from 'lucide-react';

export const TheSolution = () => {
  return (
    <section className="py-24 px-4 bg-brand-black relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 font-medium">A Resposta Através da Fraternidade.</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              A Maçonaria tem sido, há séculos, a resposta para homens que buscam transcender. No Grande Oriente Maçônico Universal, oferecemos a lapidação do caráter através do estudo, rituais e a convivência entre irmãos.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Ambiente de confiança mútua e absoluto respeito;",
                "Desenvolvimento intelectual com estudos filosóficos profundos;",
                "Engajamento em ações sociais com real impacto positivo."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-white/60">
                  <ArrowRight className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
          <img src="/images/brotherhood_handshake.png" alt="Aperto de mão maçônico" className="w-full h-full object-cover rounded-sm border border-brand-gold/20 grayscale-[0.2]" />
        </div>
      </div>
    </section>
  );
};
