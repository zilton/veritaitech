import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-blue overflow-hidden">
      {/* Background Gradient/Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-[#121a40] to-black opacity-90 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/30 skew-x-12 translate-x-20 z-0 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs tracking-wider mb-6 border border-brand-orange/20">
              INTELIGÊNCIA ARTIFICIAL APLICADA À SEGURANÇA PÚBLICA
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
              Transforme Dados em <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Operações de Missão Crítica.
              </span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O Sistema Polic<span className="text-brand-orange">IA</span> é a plataforma definitiva para gestão de efetivo, planejamento operacional e compliance jurídico. Otimize recursos, blinde sua instituição e eleve a produtividade policial.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" className="w-full sm:w-auto gap-2 group">
                Conhecer a Plataforma
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto gap-2">
                <PlayCircle size={18} />
                Ver Vídeo Institucional
              </Button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 bg-[#0f1633]">
                 {/* Placeholder for High-End Dashboard Mockup */}
                 <img 
                  src="https://placehold.co/800x600/1e293b/ffffff/png?text=PolicIA+Dashboard+Mockup" 
                  alt="Interface do Sistema PolicIA exibindo mapas de calor e dados de efetivo em tablet robusto e monitor desktop"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                 />
                 {/* Decorative UI elements overlay */}
                 <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 hidden md:block">
                    <div className="flex justify-between items-center text-white text-xs">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> Status: Operacional</span>
                        <span>Atualizado: Agora</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;