import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-4 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Brand / About */}
        <div className="space-y-6 lg:pr-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="GOMAU Logo" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            O desenvolvimento verdadeiro e o espírito de corpo, fundamentados na tradição e adequados ao nosso tempo. Uma fraternidade séria para homens livres e de bons costumes que cansaram do modelo automático e buscam alinhamento ético e valores sólidos.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">Navegação</h3>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">A Fraternidade</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Nossa Visão</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">Princípios Fundamentais</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all text-brand-gold/80 font-medium">Aplicação de Ingresso</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">Contato</h3>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-gold/70 shrink-0 mt-0.5" />
              <a href="https://wa.me/5531989690748" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                +55 (31) 98969-0748<br/>
                <span className="text-xs text-white/40">Triagem e Atendimento</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-gold/70 shrink-0 mt-0.5" />
              <a href="mailto:gomau.ead@gmail.com" className="hover:text-white transition-colors break-all">
                gomau.ead@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Localização */}
        <div>
          <h3 className="text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">Estrutura</h3>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-gold/70 shrink-0 mt-0.5" />
              <span>
                Sede Central<br/>
                <span className="text-white/80">Belo Horizonte / MG</span><br/>
                <span className="text-xs text-white/40">Atuação permanente em prol do desenvolvimento nacional.</span>
              </span>
            </li>
          </ul>
          <div className="mt-8 flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-gold/10 hover:border-brand-gold/50 hover:text-brand-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <span>© {new Date().getFullYear()} GOMAU. Todos os direitos reservados.</span>
        <div className="flex gap-4">
          <span className="hidden sm:inline-block">Tecnologia, Honra e Tradição.</span>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};
