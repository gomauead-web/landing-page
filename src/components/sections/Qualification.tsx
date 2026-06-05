import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { X, Check } from 'lucide-react';

const requirements = [
  { text: "Ser homem, livre e maior de idade.", type: 'check' },
  { text: "Ter reputação ilibada e bons costumes.", type: 'check' },
  { text: "Crer em um Princípio Criador (Deus).", type: 'check' },
  { text: "Dispor de estabilidade ética e moral familiar.", type: 'check' },
  { text: "Capacidade financeira para custear mensalidades da Loja sem prejudicar o sustento familiar.", type: 'check' },
  { text: "Buscar enriquecimento financeiro através de networking.", type: 'x' },
  { text: "Esperar privilégios ou facilidades jurídicas/profissionais.", type: 'x' },
  { text: "Estar filiado a organizações subversivas.", type: 'x' },
];

export const Qualification = () => {
  return (
    <section className="py-24 px-4 bg-brand-charcoal relative border-y border-brand-gold/10">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-4">Qualificação</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 font-medium">Este caminho é para você?</h3>
          <p className="text-white/60 mx-auto max-w-2xl text-lg">A Maçonaria exige comprometimento, retidão e disposição para servir. Verifique os critérios essenciais abaixo.</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-4">
          {requirements.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className={`p-4 rounded-sm border ${item.type === 'check' ? 'border-brand-gold/20 bg-brand-black/40' : 'border-red-900/20 bg-red-900/5'} flex items-start gap-4`}>
                <div className={`mt-0.5 rounded-full p-1 ${item.type === 'check' ? 'bg-brand-gold/20' : 'bg-red-500/20'}`}>
                  {item.type === 'check' ? <Check className="w-4 h-4 text-brand-gold" /> : <X className="w-4 h-4 text-red-500" />}
                </div>
                <p className={`text-sm ${item.type === 'check' ? 'text-white/80' : 'text-white/60'}`}>{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
