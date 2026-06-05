import { FadeIn, StaggerContainer, StaggerItem } from '../animations';

const pillars = [
  {
    number: '01',
    title: 'Formação Humana',
    description: 'Transformamos homens comuns em exemplos de retidão através da pedagogia dos símbolos, lapidando virtudes e combatendo vícios em um processo contínuo de autoconhecimento e aperfeiçoamento moral.',
  },
  {
    number: '02',
    title: 'Conhecimento',
    description: 'Fomentamos grupos focados em erudição e pesquisa. A Sabedoria Maçônica deve ultrapassar graus superficiais para compor uma verdadeira base filosófica que sustente decisões justas diante da vida.',
  },
  {
    number: '03',
    title: 'Fraternidade',
    description: 'Cultivamos uma rede onde as relações extrapolam o tempo dentro de Loja. Em caso de aflição, o maçom sabe que jamais estará desamparado. Em momentos de triunfo, há os irmãos para aplaudir.',
  },
  {
    number: '04',
    title: 'Serviço à Sociedade',
    description: 'De nada valem os ensinamentos se circunscritos aos templos. Orientamos nossa ordem a irradiar o bem, promover ações beneméritas e defender instituições que garantam as liberdades individuais.',
  },
];

export const Pillars = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-brand-black border-y border-brand-gold/10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-black -z-10" />

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h2 className="text-sm text-brand-gold tracking-[0.2em] uppercase font-medium mb-4">Nossos Pilares</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-white font-medium max-w-3xl mx-auto">As colunas de fundação da nossa obra</h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StaggerContainer className="contents">
            {pillars.map((pillar, idx) => (
              <StaggerItem key={idx} className="flex flex-col">
                 <div className="text-4xl font-serif text-brand-gold opacity-20 mb-6">{pillar.number}</div>
                 <h4 className="text-xl text-brand-gold font-serif mb-4 flex-grow-0">{pillar.title}</h4>
                 <p className="text-white/60 font-light leading-relaxed flex-grow">{pillar.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
