import { FadeIn, StaggerContainer, StaggerItem } from '../animations';

const steps = [
  {
    step: '01',
    title: 'Preenchimento do Formulário',
    description: 'Inicie o processo manifestando seu interesse preenchendo todos os dados necessários no formulário de contato abaixo.'
  },
  {
    step: '02',
    title: 'Análise Preliminar',
    description: 'Nossa equipe avaliará as informações prestadas para compreender seu perfil e adequação aos princípios basilares da Ordem.'
  },
  {
    step: '03',
    title: 'Entrevistas de Sindicância',
    description: 'Você será contactado para entrevistas reservadas. É o momento de conhecimento mútuo e esclarecimento de expectativas.'
  },
  {
    step: '04',
    title: 'Aprovação e Iniciação',
    description: 'Sendo aprovado pelos irmãos da Loja, você será convidado a participar da cerimônia de Iniciação, dando seu primeiro passo real na maçonaria.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-brand-black relative">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-4">Como Funciona</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 font-medium">O Caminho para o Ingresso</h3>
          <p className="text-white/60 mx-auto max-w-2xl text-lg">Um processo seletivo pautado pelo rigor, descrição e transparência.</p>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {steps.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border border-white/5 bg-brand-charcoal/50 p-8 rounded-sm hover:border-brand-gold/30 transition-colors">
                <div className="text-4xl font-serif text-brand-gold opacity-50">{item.step}</div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl text-white font-serif mb-3">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
