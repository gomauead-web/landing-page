import { FadeIn, StaggerContainer, StaggerItem } from '../animations';
import { Network, ArrowUpRight, BookMarked, Landmark, Computer, Shield } from 'lucide-react';

const differentials = [
  {
    title: 'Gestão Moderna e Austera',
    description: 'Administramos recursos com total eficiência, adotando práticas gerenciais contemporâneas que respeitam as contribuições dos obreiros, com redução de burocracias inúteis.',
    icon: Landmark
  },
  {
    title: 'Transparência Institucional',
    description: 'Previsibilidade orçamentária, clareza nas tomadas de decisão estruturais e comunicação aberta. Não existem zonas sombrias em nossa administração.',
    icon: Shield
  },
  {
    title: 'Formação Contínua',
    description: 'Programas de capacitação padronizada para ritualistas, oradores e veneráveis mestres, garantindo uniformidade e excelência nos trabalhos litúrgicos.',
    icon: BookMarked
  },
  {
    title: 'Tecnologia Aplicada',
    description: 'Sistemas inteligentes para controle de presenças, documentação administrativa e repositórios digitais privativos que modernizam o dia a dia maçônico.',
    icon: Computer
  },
  {
    title: 'Integração entre Lojas',
    description: 'Uma rede articulada e fortalecida com visitas regulares e eventos conjunturais. As Lojas não trabalham como ilhas, mas como corpos interligados de uma mesma potência.',
    icon: Network
  },
  {
    title: 'Visão de Futuro',
    description: 'Preparar a maçonaria para herdar e guiar as próximas gerações, acolhendo talentos modernos e desenvolvendo respostas justas para os novos desafios da humanidade.',
    icon: ArrowUpRight
  }
];

export const Differentials = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-brand-charcoal relative">
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
       
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-20 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-4">Diferenciais GOMAU</h2>
              <h3 className="font-serif text-3xl md:text-5xl text-white font-medium mb-8">Por que construímos nossa própria via?</h3>
              <p className="text-white/60 font-light leading-relaxed">Não somos apenas mais uma obediência maçônica. Implementamos aquilo que há muito é debatido: uma matriz administrativa moderna e funcional suportando a mais bela das tradições.</p>
            </FadeIn>
         </div>

         <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, idx) => (
              <StaggerItem key={idx}>
                 <div className="border border-white/5 bg-brand-black p-8 rounded-sm hover:border-brand-gold/40 transition-colors duration-300 h-full">
                    <item.icon className="w-8 h-8 text-brand-gold mb-6" strokeWidth={1} />
                    <h4 className="text-white text-lg font-serif mb-4">{item.title}</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{item.description}</p>
                 </div>
              </StaggerItem>
            ))}
         </StaggerContainer>
       </div>
    </section>
  );
};
