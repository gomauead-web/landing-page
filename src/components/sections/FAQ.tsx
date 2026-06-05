import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "O que é a Maçonaria?",
    answer: "A Maçonaria é uma instituição essencialmente filosófica, filantrópica, educativa e progressista. Constitui-se como uma escola de moral e virtudes, dedicada ao aperfeiçoamento contínuo de seus membros e ao bem-estar da humanidade, utilizando a simbologia dos antigos construtores."
  },
  {
    question: "A GOMAU é uma Potência Maçônica?",
    answer: "Sim, o Grande Oriente Maçônico Universal (GOMAU) é uma Potência Maçônica soberana, devidamente constituída e operando na mais absoluta regularidade de origem e de princípios."
  },
  {
    question: "Quem pode ingressar?",
    answer: "Podem postular o ingresso homens livros, maiores de idade, com reputação ilibada, que creiam em um Princípio Criador (Grande Arquiteto do Universo) e que possuam estabilidade financeira e familiar, além da vontade sincera de cooperar para o seu próprio aperfeiçoamento e o de seus irmãos."
  },
  {
    question: "Como funciona o processo de ingresso?",
    answer: "O processo inicia-se mediante convite ou através da submissão da manifestação de interesse por meio desta página oficial. Todos os candidatos passam por um rigoroso processo de sindicância e entrevistas conduzidas com descrição por nossos avaliadores."
  },
  {
    question: "Existem custos?",
    answer: "Sim. Como toda instituição privada que mantém sua própria estrutura, a GOMAU e suas Lojas jurisdicionadas recolhem contribuições financeiras regulares de seus membros, cujos valores são discutidos, aprovados e aplicados com estrita transparência."
  },
  {
    question: "Onde a GOMAU atua?",
    answer: "A GOMAU possui Lojas Simbólicas espalhadas em diversos Estados da Federação, compondo uma forte rede nacional interligada que permite mobilidade e integração constantes para os irmãos de nossa obediência."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-brand-black relative">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url(/images/sequence_02_corridor.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16 relative z-10">
        <div className="w-full text-center">
          <FadeIn>
            <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-4">Perguntas Frequentes</h2>
            <h3 className="font-serif text-3xl md:text-5xl text-white font-medium mb-4">Esclarecimentos Iniciais</h3>
            <p className="text-white/60 mx-auto max-w-2xl font-light">As respostas abaixo elucidam dúvidas fundamentais sobre a instituição maçônica e sobre o Grande Oriente Maçônico Universal.</p>
          </FadeIn>
        </div>
        
        <div className="w-full">
          <StaggerContainer className="space-y-6">
            {faqs.map((faq, idx) => (
              <StaggerItem key={idx}>
                 <details className="group border border-brand-gold/10 bg-brand-charcoal/50 backdrop-blur-sm rounded-sm [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white">
                       <h3 className="text-lg font-serif font-medium">{faq.question}</h3>
                       <span className="relative size-5 shrink-0">
                          <ChevronDown className="absolute inset-0 size-5 text-brand-gold transition-transform duration-300 group-open:-rotate-180" />
                       </span>
                    </summary>
                    <div className="px-6 pb-6 text-white/60 font-light leading-relaxed">
                       <p>{faq.answer}</p>
                    </div>
                 </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
