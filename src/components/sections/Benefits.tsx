import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { ShieldCheck, Users, Flame } from 'lucide-react';

const benefits = [
  {
    icon: Flame,
    title: 'Transformação Moral',
    description: 'A base da nossa Ordem é a transformação pessoal diária, vencendo paixões cegas e submetendo suas vontades aos ditames morais.'
  },
  {
    icon: ShieldCheck,
    title: 'Fraternidade Genuína',
    description: 'Vínculos sólidos com homens honrados, formando uma rede de apoio baseada na lealdade incondicional.'
  },
  {
    icon: Users,
    title: 'Ordem e Estrutura',
    description: 'Trabalhos litúrgicos padronizados, gestão transparente e seriedade na administração de nossas Lojas.'
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-brand-charcoal border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 font-medium">Os Benefícios da Jornada</h2>
          <p className="text-white/60 mx-auto max-w-2xl text-lg">Integre uma aliança de homens que assumiram a responsabilidade sobre si mesmos e sobre o mundo ao seu redor.</p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="border border-brand-gold/10 bg-brand-black/50 p-10 h-full rounded-sm hover:-translate-y-2 transition-transform duration-500 hover:border-brand-gold/30 flex flex-col items-center text-center">
                 <item.icon className="w-12 h-12 text-brand-gold mb-6" strokeWidth={1} />
                 <h3 className="text-xl text-white font-serif mb-4">{item.title}</h3>
                 <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
