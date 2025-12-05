import React, { useState } from 'react';
import { Target, CalendarClock, Radio, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PlanningModule from '../Modules/PlanningModule';
import ProductivityModule from '../Modules/ProductivityModule';
import RosterModule from '../Modules/RosterModule';
import CadModule from '../Modules/CadModule';

const Modules: React.FC = () => {
  const [showPlanningModule, setShowPlanningModule] = useState(false);
  const [showProductivityModule, setShowProductivityModule] = useState(false);
  const [showRosterModule, setShowRosterModule] = useState(false);
  const [showCadModule, setShowCadModule] = useState(false);

  const modules = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Planejamento & Ordem de Missão",
      description: (
        <>
          Do estratégico ao operacional. Crie Ordens de Missão digitais baseadas em Prevenção Qualificada. Utilize mapas de calor para direcionar o policiamento para onde é necessário. Nossa poderosa <span className="text-brand-orange font-bold">IA</span> consegue prever a ocorrência de crimes com uma confiança acima de 90% em diferentes níveis, inclusive rua.
        </>
      ),
      feature: "Vínculo automático: Planejamento x Execução",
      isClickable: true,
      onClick: () => setShowPlanningModule(true)
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-white" />,
      title: "Gestão Inteligente de Escalas",
      description: "Adeus às planilhas. Realize o cômputo de carga horária de militares, controle permutas e hipotecas. O sistema cruza a disponibilidade do efetivo (férias, licenças, punições) com a necessidade operacional, garantindo cobertura sem furos.",
      feature: "Travas automáticas de descanso legal",
      isClickable: true,
      onClick: () => setShowRosterModule(true)
    },
    {
      icon: <Radio className="w-8 h-8 text-white" />,
      title: "Integração CAD",
      description: "Automação total. Quando a missão começa, o sistema integra com o despacho de viaturas. O status do recurso muda de 'Planejado' para 'Empenhado' em tempo real.",
      feature: "Sincronização automática de horários",
      isClickable: true,
      onClick: () => setShowCadModule(true)
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Produtividade & Meritocracia",
      description: "Mensure o intangível. Crie scores de produtividade individuais e coletivos baseados em critérios objetivos (prisões, apreensões). Valorize quem entrega resultado.",
      feature: "Dashboards para tomada de decisão",
      isClickable: true,
      onClick: () => setShowProductivityModule(true)
    }
  ];

  return (
    <>
      <section id="modulos" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue mb-4">
              Módulos Operacionais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma suíte completa de ferramentas desenhada para cobrir todo o ciclo de vida da atividade policial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, index) => (
              <motion.div 
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-blue/20 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden ${mod.isClickable ? 'cursor-pointer ring-2 ring-transparent hover:ring-brand-orange/50' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={mod.onClick}
              >
                {/* Hover Background Accent */}
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/[0.02] transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>

                <div className="relative z-10 flex flex-col items-start h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand-blue flex items-center justify-center shadow-lg group-hover:bg-brand-orange transition-colors duration-300 mb-6">
                    {mod.icon}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors flex items-center gap-2">
                    {mod.title}
                    {mod.isClickable && <span className="text-xs bg-brand-orange text-white px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Ver Detalhes</span>}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {mod.description}
                  </p>

                  <div className="w-full pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      Destaque:
                    </span>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {mod.feature}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Render Planning Module Overlay */}
      <AnimatePresence>
        {showPlanningModule && (
          <PlanningModule onClose={() => setShowPlanningModule(false)} />
        )}
      </AnimatePresence>

      {/* Render Productivity Module Overlay */}
      <AnimatePresence>
        {showProductivityModule && (
          <ProductivityModule onClose={() => setShowProductivityModule(false)} />
        )}
      </AnimatePresence>

      {/* Render Roster Module Overlay */}
      <AnimatePresence>
        {showRosterModule && (
          <RosterModule onClose={() => setShowRosterModule(false)} />
        )}
      </AnimatePresence>

      {/* Render Cad Module Overlay */}
      <AnimatePresence>
        {showCadModule && (
          <CadModule onClose={() => setShowCadModule(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Modules;