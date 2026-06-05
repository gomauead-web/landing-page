import React, { useState } from 'react';
import { submitLead } from '../../lib/firebase';
import { FadeIn } from '../animations';

export const LeadFormSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [cepLoading, setCepLoading] = useState(false);
  const [isBrazil, setIsBrazil] = useState(true);
  const [cpfVal, setCpfVal] = useState('');
  const [cepVal, setCepVal] = useState('');
  const [phoneVal, setPhoneVal] = useState('');
  
  const [address, setAddress] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    country: 'Brasil'
  });

  const formatCPF = (val: string) => {
    let v = val.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return v;
  };

  const formatCEP = (val: string) => {
    let v = val.replace(/\D/g, '');
    if (v.length > 8) v = v.slice(0, 8);
    v = v.replace(/^(\d{5})(\d)/, '$1-$2');
    return v;
  };

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

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isBrazil) setCpfVal(formatCPF(e.target.value));
    else setCpfVal(e.target.value);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isBrazil) {
      const formatted = formatCEP(e.target.value);
      setCepVal(formatted);
      const plainCep = formatted.replace(/\D/g, '');
      if (plainCep.length === 8) {
        fetchAddress(plainCep);
      } else {
        setAddress(prev => ({
          ...prev,
          street: '',
          neighborhood: '',
          city: '',
          state: ''
        }));
      }
    } else {
      setCepVal(e.target.value);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isBrazil) setPhoneVal(formatPhoneBR(e.target.value));
    else setPhoneVal(e.target.value);
  };

  const fetchAddress = async (cep: string) => {
    setCepLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress(prev => ({
          ...prev,
          street: data.logradouro || '',
          neighborhood: data.bairro || '',
          city: data.localidade || '',
          state: data.uf || ''
        }));
      }
    } catch (error) {
      console.error('Error fetching CEP:', error);
    } finally {
      setCepLoading(false);
    }
  };

  const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (!isBrazil) return;
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      fetchAddress(cep);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setStatus('loading');
    
    try {
      const data = {
        fullname: formData.get('fullname') as string,
        cpf: formData.get('cpf') as string,
        whatsapp: formData.get('whatsapp') as string,
        email: formData.get('email') as string,
        profession: formData.get('profession') as string,
        country: isBrazil ? 'Brasil' : formData.get('country') as string,
        cep: formData.get('cep') as string,
        street: formData.get('street') as string,
        number: formData.get('number') as string,
        complement: formData.get('complement') as string,
        neighborhood: formData.get('neighborhood') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        seeking_reason: formData.get('seeking_reason') as string,
        attention_reason: formData.get('attention_reason') as string,
      };
      
      // Save to Firebase first
      await submitLead(data);
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();

      // Format WhatsApp message
      const adminPhone = "5521984750005"; // Remove plus, spaces, and dashes
      const message = `*Manifestação de Interesse - GOMAU*

*Nome:* ${data.fullname}
*CPF:* ${data.cpf}
*WhatsApp:* ${data.whatsapp}
*E-mail:* ${data.email}
*Profissão:* ${data.profession}

*Endereço:*
${data.street}, ${data.number} ${data.complement ? `- ${data.complement}` : ''}
Bairro: ${data.neighborhood}
Cidade/Estado: ${data.city}/${data.state}
CEP/Zip Code: ${data.cep}
País: ${data.country}

*Buscando:* 
${data.seeking_reason}

*Atenção:* 
${data.attention_reason}`;

      const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in a new tab so the user can send the pre-filled message directly
      window.open(whatsappUrl, '_blank');
      
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="lead-form" className="py-32 px-4 bg-brand-black border-t border-brand-gold/10 isolate relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-black to-brand-black -z-10" />
      
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-medium mb-4 filter drop-shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              Aplicação de Ingresso
            </h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              O ingresso não é automático ou garantido. Se você compreende nossos princípios e deseja iniciar seu processo, manifeste interesse abaixo. Nossa comissão avaliará seu perfil com total discrição.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-brand-charcoal/95 backdrop-blur-xl p-8 md:p-10 border-t-2 border-brand-gold shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-black/50 pointer-events-none" />
            
            <div className="relative z-10">
              {status === 'success' ? (
                 <div className="text-center py-16">
                   <h3 className="text-2xl text-brand-gold font-serif mb-4">Informações recebidas.</h3>
                   <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
                   <p className="text-white/70 mb-4">
                     Nossa equipe de triagem analisará o seu perfil.
                   </p>
                   <p className="text-white font-medium">
                     Uma aba do WhatsApp foi aberta. Envie a mensagem pré-formatada para nossa equipe de triagem iniciar seu atendimento.
                   </p>
                   <button onClick={() => setStatus('idle')} className="mt-12 text-brand-gold hover:text-white transition-colors text-sm uppercase tracking-widest font-medium border border-brand-gold/30 hover:border-white px-6 py-2 rounded-sm">Voltar ao início</button>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Seletor de Localidade */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-sm">
                    <span className="text-sm font-medium text-brand-gold uppercase tracking-widest">Local de Residência:</span>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="residence" checked={isBrazil} onChange={() => setIsBrazil(true)} className="form-radio text-brand-gold focus:ring-brand-gold bg-black/20 border-white/20" />
                        <span className="text-white/80 text-sm">Brasil</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="residence" checked={!isBrazil} onChange={() => setIsBrazil(false)} className="form-radio text-brand-gold focus:ring-brand-gold bg-black/20 border-white/20" />
                        <span className="text-white/80 text-sm">Exterior (Outro País)</span>
                      </label>
                    </div>
                  </div>

                  {/* Dados Pessoais */}
                  <div className="space-y-6">
                    <h3 className="text-brand-gold/80 text-sm font-medium tracking-widest uppercase border-b border-brand-gold/10 pb-2">Dados Pessoais</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="fullname" className="text-xs font-medium text-white/50 uppercase tracking-wider">Nome Completo</label>
                        <input required maxLength={200} id="fullname" name="fullname" type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cpf" className="text-xs font-medium text-white/50 uppercase tracking-wider">{isBrazil ? 'CPF' : 'Documento de Identificação'}</label>
                        <input required maxLength={50} id="cpf" name="cpf" type="text" value={cpfVal} onChange={handleCpfChange} className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder={isBrazil ? "000.000.000-00" : "Passaporte / ID"} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-xs font-medium text-white/50 uppercase tracking-wider">WhatsApp</label>
                        <input required maxLength={30} id="whatsapp" name="whatsapp" type="tel" value={phoneVal} onChange={handlePhoneChange} className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder={isBrazil ? "(00) 00000-0000" : "+1 234 567 8900"} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">E-mail</label>
                        <input required maxLength={150} id="email" name="email" type="email" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="profession" className="text-xs font-medium text-white/50 uppercase tracking-wider">Profissão</label>
                        <input required maxLength={150} id="profession" name="profession" type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="Ex: Advogado, Empresário..." />
                      </div>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div className="space-y-6">
                    <h3 className="text-brand-gold/80 text-sm font-medium tracking-widest uppercase border-b border-brand-gold/10 pb-2">Endereço</h3>
                    
                    <div className="grid md:grid-cols-12 gap-6">
                      {!isBrazil && (
                        <div className="space-y-2 md:col-span-12">
                          <label htmlFor="country" className="text-xs font-medium text-white/50 uppercase tracking-wider">País de Residência</label>
                          <input required maxLength={150} id="country" name="country" type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="Ex: Portugal, Estados Unidos" />
                        </div>
                      )}

                      <div className="space-y-2 md:col-span-4 relative">
                        <label htmlFor="cep" className="text-xs font-medium text-white/50 uppercase tracking-wider">{isBrazil ? 'CEP' : 'Zip/Postal Code'} {cepLoading && <span className="text-brand-gold text-[10px] ml-2">(Buscando...)</span>}</label>
                        <input required maxLength={20} id="cep" name="cep" type="text" value={cepVal} onChange={handleCepChange} onBlur={handleCepBlur} className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder={isBrazil ? "00000-000" : ""} />
                      </div>
                      
                      <div className="space-y-2 md:col-span-8">
                        <label htmlFor="street" className="text-xs font-medium text-white/50 uppercase tracking-wider">Rua / Logradouro</label>
                        <input required maxLength={150} id="street" name="street" value={address.street} onChange={handleAddressChange} type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="" />
                      </div>

                      <div className="space-y-2 md:col-span-4">
                        <label htmlFor="number" className="text-xs font-medium text-white/50 uppercase tracking-wider">Número</label>
                        <input required maxLength={20} id="number" name="number" type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="" />
                      </div>

                      <div className="space-y-2 md:col-span-8">
                        <label htmlFor="complement" className="text-xs font-medium text-white/50 uppercase tracking-wider">Complemento (Opcional)</label>
                        <input maxLength={100} id="complement" name="complement" type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="Apto, Bloco..." />
                      </div>

                      <div className="space-y-2 md:col-span-4">
                        <label htmlFor="neighborhood" className="text-xs font-medium text-white/50 uppercase tracking-wider">{isBrazil ? 'Bairro' : 'Distrito/Região'}</label>
                        <input required maxLength={100} id="neighborhood" name="neighborhood" value={address.neighborhood} onChange={handleAddressChange} type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="" />
                      </div>

                      <div className="space-y-2 md:col-span-5">
                        <label htmlFor="city" className="text-xs font-medium text-white/50 uppercase tracking-wider">Cidade</label>
                        <input required maxLength={100} id="city" name="city" value={address.city} onChange={handleAddressChange} type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm" placeholder="" />
                      </div>
                      
                      <div className="space-y-2 md:col-span-3">
                        <label htmlFor="state" className="text-xs font-medium text-white/50 uppercase tracking-wider">{isBrazil ? 'Estado (UF)' : 'Estado/Província'}</label>
                        <input required maxLength={isBrazil ? 2 : 100} id="state" name="state" value={address.state} onChange={handleAddressChange} type="text" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all rounded-sm uppercase" placeholder={isBrazil ? "MG" : ""} />
                      </div>
                    </div>
                  </div>

                  {/* Informações Complementares */}
                  <div className="space-y-6">
                    <h3 className="text-brand-gold/80 text-sm font-medium tracking-widest uppercase border-b border-brand-gold/10 pb-2">Informações Complementares</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="seeking_reason" className="text-xs font-medium text-white/50 uppercase tracking-wider">O que você busca hoje?</label>
                        <textarea required maxLength={2000} id="seeking_reason" name="seeking_reason" rows={3} className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all resize-none rounded-sm" placeholder="Qual o seu principal objetivo em buscar a fraternidade?" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="attention_reason" className="text-xs font-medium text-white/50 uppercase tracking-wider">Por que nossa página chamou sua atenção?</label>
                        <textarea required maxLength={2000} id="attention_reason" name="attention_reason" rows={3} className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-white/20 focus:border-brand-gold focus:bg-black/40 focus:outline-none transition-all resize-none rounded-sm" placeholder="Seja breve e direto." />
                      </div>
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-brand-red/90 text-sm bg-brand-red/10 border border-brand-red/20 p-4 rounded-sm">Ocorreu um erro ao enviar suas informações. Verifique sua conexão e os dados inseridos e tente novamente.</p>
                  )}

                  <div className="pt-6">
                    <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-brand-gold text-brand-black uppercase text-sm tracking-widest font-bold hover:bg-white transition-colors disabled:opacity-70 flex justify-center items-center gap-2 rounded-sm shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      {status === 'loading' ? 'Transmitindo Aplicação...' : 'Submeter Aplicação'}
                    </button>
                    <p className="text-[10px] text-center text-white/30 uppercase mt-4 tracking-widest">
                      Seus dados serão tratados de forma confidencial.
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

