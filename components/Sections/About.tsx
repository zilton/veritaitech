import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-block mb-6">
           {/* Simple Logo Representation */}
           <div className="flex items-center gap-2 font-heading font-bold text-3xl text-brand-blue justify-center">
             <span>VERIT<span className="text-brand-orange">AI</span></span>
           </div>
           <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mt-1 block">Tech Solutions</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Inteligência Artificial para quem protege a sociedade.
        </h3>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          A <strong>VERITAI Tech Solutions</strong> é especializada no desenvolvimento de soluções de IA para a Segurança Pública. Nossa missão é fornecer ferramentas que garantam a supremacia da informação para as forças da lei, combinando tecnologia de ponta com profundo conhecimento da rotina policial e administrativa das corporações.
        </p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default About;