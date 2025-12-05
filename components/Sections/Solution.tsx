import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import Button from '../UI/Button';
import { getDriveDirectLink } from '../../utils/googleDrive';

const Solution: React.FC = () => {
  // Google Drive Link for the Solution Diagram
  const diagramRawLink = "https://drive.google.com/file/d/1egK1Q7aUo3EUDy1j27pZZA-o2wTD13nZ/view?usp=drive_link";
  const diagramUrl = getDriveDirectLink(diagramRawLink);

  return (
    <section id="solucao" className="py-20 bg-brand-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
               <ShieldCheck className="text-brand-orange w-6 h-6"/>
               <span className="font-bold text-brand-blue tracking-wider">SISTEMA POLIC<span className="text-brand-orange">IA</span></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue mb-6">
              Gestão Integrada e Modular.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Baseado na filosofia <strong>Lean Policing</strong> (Policiamento Enxuto), o Polic<span className="text-brand-orange font-semibold">IA</span> elimina desperdícios administrativos e foca no que importa: o resultado operacional. Tudo isso coordenado por uma Inteligência Aplicada. Nossa arquitetura modular permite que sua instituição comece pelo que é prioritário e expanda conforme a necessidade.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Integração nativa com sistemas de despacho (CAD).",
                "Auditoria contínua (LGPD e Senasp).",
                "Aderência a normas estaduais e federais.",
                "Redução de até 30% em custos de horas extras."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button>Solicitar Proposta Técnica</Button>
          </div>

          {/* Image/Diagram */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full opacity-50 blur-3xl z-0"></div>
              
              <img 
                src={diagramUrl} 
                alt="Diagrama isométrico mostrando o fluxo de dados: Planejamento, Escala, Viatura CAD e Relatórios"
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;