import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Star, 
  Menu, 
  X 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const companyInfo = {
    name: "Resolve Ar Condicionado",
    slogan: "Chama que a gente resolve.",
    whatsapp: "5519998453733",
    phone: "(19) 98765-4321",
    location: "Limeira - SP e região",
    hours: "07:00 às 18:00 (Atendimento Emergencial 24h)"
  };

  const handleWhatsAppRedirect = (text) => {
    const encodedText = encodeURIComponent(text);
    window.open(`[https://wa.me/$](https://wa.me/$){companyInfo.whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 bg-[#1D3F5A] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            <div className="flex items-center space-x-3">
              <div className="bg-[#96CAD3] p-2 rounded-lg text-[#1D3F5A]">
                <Wrench className="h-8 w-8"/>
              </div>
              <div>
                <span className="text-xl font-bold block leading-tight tracking-wide">
                  RESOLVE
                </span>
                <span className="text-xs text-[#96CAD3] tracking-widest block font-medium">
                  AR CONDICIONADO
                </span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#inicio" className="hover:text-[#96CAD3] transition">Início</a>
              <a href="#servicos" className="hover:text-[#96CAD3] transition">Serviços</a>
              <a href="#sobre" className="hover:text-[#96CAD3] transition">Sobre</a>
              <a href="#orcamento" className="hover:text-[#96CAD3] transition">Orçamento</a>
            </nav>

            <div className="hidden md:flex">
              <a 
                href="#orcamento" 
                className="bg-[#96CAD3] hover:bg-white text-[#1D3F5A] font-bold px-5 py-2.5 rounded-lg shadow transition"
              >
                Solicitar orçamento
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white hover:text-[#96CAD3]"
              >
                {isMenuOpen ? <X className="h-7 w-7"/> : <Menu className="h-7 w-7"/>}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#1D3F5A] border-t border-[#437B98] px-4 pt-2 pb-6 space-y-3">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white">Início</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white">Serviços</a>
            <a href="#orcamento" onClick={() => setIsMenuOpen(false)} className="block py-2 text-[#96CAD3] font-bold">Solicitar orçamento</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative bg-[#1D3F5A] text-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="inline-block bg-[#437B98] text-[#E8F2F1] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Mais de 10 anos de experiência
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Conforto que faz a diferença.
              </h1>
              <p className="text-lg text-slate-300 max-w-lg">
                Instalação, manutenção e higienização de ar-condicionado com garantia, qualidade e procedência em {companyInfo.location}.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#orcamento" 
                  className="bg-[#96CAD3] text-[#1D3F5A] text-center font-bold px-6 py-3.5 rounded-lg shadow-lg hover:bg-white transition"
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white">Precisando de ajuda rápida?</h2>
              <p className="text-slate-300 mb-6">
                Fale diretamente com nossa equipe no WhatsApp para atendimento imediato.
              </p>
              <button 
                onClick={() => handleWhatsAppRedirect("Olá! Gostaria de um orçamento para ar-condicionado.")}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-lg flex items-center justify-center space-x-2 shadow-lg transition"
              >
                <MessageSquare className="h-5 w-5"/>
                <span>Chama que a gente resolve</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#1D3F5A] text-slate-400 py-8 text-center text-sm border-t border-slate-700">
        <p>© 2026 {companyInfo.name}. {companyInfo.slogan}</p>
        <p className="mt-1">{companyInfo.location} • WhatsApp: {companyInfo.phone}</p>
      </footer>

    </div>
  );
}