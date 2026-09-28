import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { submitLead } from '../../lib/firebase';
import { FadeIn } from '../animations';
import { LeadPayload } from '../../types';

const ADMIN_WHATSAPP = "553196672979";
const ADMIN_WHATSAPP_DISPLAY = "+55 31 9667-2979";

export const LeadFormSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [directUrl, setDirectUrl] = useState('');

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    whatsapp: '',
    city: '',
    state: '',
    profession: '',
    age: '',
    motivation: '',
  });

  const formatPhoneBR = (val: string) => {
    let v = val.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 10) {
      v = v.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (v.length > 5) {
      v = v.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    } else if (v.length > 0) {
      v = v.replace(/^(\d*)/, '($1');
    }
    return v;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, whatsapp: formatPhoneBR(value) }));
    } else if (name === 'state') {
      setFormData(prev => ({ ...prev, state: value.toUpperCase() }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const cityState = formData.state.trim() 
      ? `${formData.city.trim()} / ${formData.state.trim().toUpperCase()}` 
      : formData.city.trim();

    const payload: Omit<LeadPayload, 'createdAt'> = {
      fullname: formData.fullname.trim(),
      email: formData.email.trim(),
      whatsapp: formData.whatsapp.trim(),
      city_state: cityState,
      profession: formData.profession.trim(),
      age: formData.age.trim(),
      motivation: formData.motivation.trim(),
    };

    // Format WhatsApp message with the exact fields requested
    const message = `*Manifestação de Interesse - GOMAU*

• *Nome:* ${payload.fullname}
• *E-mail:* ${payload.email}
• *WhatsApp:* ${payload.whatsapp}
• *Cidade/Estado:* ${payload.city_state}
• *Profissão:* ${payload.profession}
• *Idade:* ${payload.age} anos

*Motivação:*
${payload.motivation}`;

    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    setDirectUrl(whatsappUrl);

    try {
      // Save lead into Firebase
      await submitLead(payload);
    } catch (err) {
      console.warn('Registro local ou offline no Firebase:', err);
    }

    setStatus('success');

    // Transmit directly to WhatsApp (+55 31 9667-2979)
    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // In case browser popup blocker activates
    }
  };

  const handleReset = () => {
    setFormData({
      fullname: '',
      email: '',
      whatsapp: '',
      city: '',
      state: '',
      profession: '',
      age: '',
      motivation: '',
    });
    setDirectUrl('');
    setStatus('idle');
  };

  return (
    <section id="lead-form" className="py-32 px-4 bg-brand-black border-t border-brand-gold/10 isolate relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-black to-brand-black -z-10" />
      
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs uppercase tracking-[0.25em] font-medium block mb-2">
              Ingresso e Admissão
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-medium mb-4 filter drop-shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              Aplicação de Ingresso
            </h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Manifeste seu interesse preenchendo as informações abaixo. Os dados serão formatados e transmitidos diretamente para nossa triagem via WhatsApp ({ADMIN_WHATSAPP_DISPLAY}).
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-brand-charcoal/95 backdrop-blur-xl p-8 md:p-10 border-t-2 border-brand-gold shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-black/50 pointer-events-none" />
            
            <div className="relative z-10">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl text-brand-gold font-serif mb-2">Informações Formatadas com Sucesso!</h3>
                    <div className="w-16 h-[1px] bg-brand-gold/40 mx-auto my-4"></div>
                    <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed">
                      Seus dados foram organizados e preparados para envio direto à nossa equipe de triagem no WhatsApp.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-brand-gold/20 p-5 rounded-md max-w-md mx-auto space-y-3">
                    <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold flex items-center justify-center gap-1.5">
                      <MessageSquare className="w-4 h-4" /> Envio Direto via WhatsApp
                    </p>
                    <p className="text-xs text-white/60">
                      Caso o WhatsApp não tenha aberto automaticamente na sua janela, clique no botão abaixo para concluir o envio:
                    </p>
                    <a
                      href={directUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm rounded shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Transmitir para WhatsApp ({ADMIN_WHATSAPP_DISPLAY})
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-brand-gold/70 hover:text-white transition-colors text-xs uppercase tracking-widest font-medium pt-4 inline-block"
                  >
                    ← Preencher outro formulário
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-brand-gold/10 pb-2 flex justify-between items-center">
                    <h3 className="text-brand-gold/90 text-xs font-semibold tracking-widest uppercase">
                      Dados do Interessado
                    </h3>
                    <span className="text-[11px] text-white/40 tracking-wider">
                      Transmissão direta para {ADMIN_WHATSAPP_DISPLAY}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Nome Completo */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label htmlFor="fullname" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Nome Completo <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        maxLength={200}
                        id="fullname"
                        name="fullname"
                        type="text"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    {/* E-mail */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        E-mail <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        maxLength={150}
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor="whatsapp" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        WhatsApp (com DDD) <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        maxLength={30}
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    {/* Cidade */}
                    <div className="space-y-1.5">
                      <label htmlFor="city" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Cidade <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        maxLength={100}
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm"
                        placeholder="Ex: Belo Horizonte"
                      />
                    </div>

                    {/* Estado / UF */}
                    <div className="space-y-1.5">
                      <label htmlFor="state" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Estado (UF) <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        maxLength={20}
                        id="state"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm uppercase"
                        placeholder="Ex: MG"
                      />
                    </div>

                    {/* Profissão */}
                    <div className="space-y-1.5">
                      <label htmlFor="profession" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Profissão <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        maxLength={150}
                        id="profession"
                        name="profession"
                        type="text"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm"
                        placeholder="Ex: Advogado, Empresário..."
                      />
                    </div>

                    {/* Idade */}
                    <div className="space-y-1.5">
                      <label htmlFor="age" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Idade <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        required
                        min={18}
                        max={120}
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm"
                        placeholder="Ex: 35 (mínimo 18)"
                      />
                    </div>

                    {/* Motivação */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label htmlFor="motivation" className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Motivação <span className="text-brand-gold">*</span>
                      </label>
                      <textarea
                        required
                        maxLength={2000}
                        rows={3}
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/50 focus:outline-none transition-all rounded-sm text-sm resize-none"
                        placeholder="Descreva o que motiva seu interesse em ingressar no Grande Oriente Maçônico Universal..."
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs bg-red-950/30 border border-red-500/20 p-3 rounded-sm">
                      Ocorreu um erro no processamento. Por favor, confira os campos e tente novamente.
                    </p>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-brand-gold text-brand-black uppercase text-xs sm:text-sm tracking-widest font-bold hover:bg-white transition-all disabled:opacity-70 flex justify-center items-center gap-2 rounded-sm shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-pointer"
                    >
                      {status === 'loading' ? (
                        'Preparando Transmissão...'
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Transmitir Aplicação via WhatsApp
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-white/40 mt-3 tracking-wider">
                      Ao clicar em enviar, os dados serão transmitidos diretamente para o WhatsApp oficial da comissão: {ADMIN_WHATSAPP_DISPLAY}.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
