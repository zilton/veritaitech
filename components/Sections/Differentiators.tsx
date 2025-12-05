import React from 'react';
import { ShieldCheck, BadgeDollarSign, Server } from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <section id="compliance" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold max-w-lg">
            Mais que Software: <br/>
            <span className="text-brand-orange">Governança e Segurança.</span>
          </h2>
          <p className="text-blue-100 max-w-xl text-lg">
             A tecnologia é o meio. O fim é a proteção jurídica da corporação e a eficiência do gasto público.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <ShieldCheck className="w-10 h-10 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold mb-3">Blindagem Jurídica</h3>
            <p className="text-blue-100/80 leading-relaxed">
              Rastreabilidade total de trocas de serviço, faltas e abonos. Esteja sempre pronto para auditorias externas e questionamentos legais.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <BadgeDollarSign className="w-10 h-10 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold mb-3">Eficiência Orçamentária</h3>
            <p className="text-blue-100/80 leading-relaxed">
              Controle rigoroso de horas trabalhadas. O sistema frequentemente se paga apenas com a economia gerada na gestão mais eficiente da folha.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <Server className="w-10 h-10 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold mb-3">Alta Disponibilidade</h3>
            <p className="text-blue-100/80 leading-relaxed">
              Infraestrutura em nuvem segura, criptografada ponta a ponta e preparada para operações de missão crítica 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;