import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Target, 
  BrainCircuit, 
  GitMerge, 
  ShieldAlert, 
  Lightbulb, 
  Calendar, 
  Radio, 
  BarChart3, 
  FileCheck, 
  Fingerprint, 
  LayoutDashboard 
} from 'lucide-react';
import Button from '../UI/Button';
import { getDriveDirectLink } from '../../utils/googleDrive';

interface PlanningModuleProps {
  onClose: () => void;
}

const PlanningModule: React.FC<PlanningModuleProps> = ({ onClose }) => {
  // Google Drive Link for the Tactical Map
  const mapImageRawLink = "https://drive.google.com/file/d/1shIqHMP99r7gquHAUtgWm_YI6IwJIATF/view?usp=drive_link";
  const mapImageUrl = getDriveDirectLink(mapImageRawLink);

  // Google Drive Link for Audit Report
  const auditReportRawLink = "https://drive.google.com/file/d/1rgK1vxBqPRuVLzNK6VTz-HdKuU0oivsu/view?usp=drive_link";
  const auditReportUrl = getDriveDirectLink(auditReportRawLink);

  // Google Drive Link for Predictive AI Dashboard
  const predictiveDashboardRawLink = "https://drive.google.com/file/d/1jD6Vx1CrTROVjr9oafFqhFyQ743xuzz5/view?usp=drive_link";
  const predictiveDashboardUrl = getDriveDirectLink(predictiveDashboardRawLink);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      {/* Internal Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 px-6 py-4 flex justify-between items-center">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-brand-blue font-bold hover:text-brand-orange transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para Módulos
        </button>
        <div className="flex items-center gap-2 font-heading font-bold text-xl text-brand-blue">
          <span>Módulo Planejamento</span>
        </div>
        <Button variant="primary" className="py-2 px-4 text-sm hidden sm:block">
          Solicitar Demo
        </Button>
      </nav>

      {/* SEÇÃO 1: HERO MODULE */}
      <section className="relative py-20 lg:py-32 bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-black opacity-90 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs tracking-wider mb-6 border border-brand-orange/20">
              O FIM DO POLICIAMENTO ALEATÓRIO
            </span>
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6">
              Planejamento Cirúrgico Guiado por <span className="text-brand-orange">IA</span>.
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Transforme estratégias de comando em ações de rua com precisão matemática. O módulo de Planejamento & Ordem de Missão do Polic<span className="text-brand-orange font-bold">IA</span> unifica a cadeia de comando, prevê crimes com confiança superior a 90% e audita cada passo da operação.
            </p>
            <Button variant="white">Agendar Apresentação Técnica</Button>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src={mapImageUrl} 
              alt="Render flutuante de mapa tático digital com manchas de calor pulsando"
              className="relative rounded-lg shadow-2xl border border-white/10 w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O PODER DA IA PREDITIVA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <img 
                src={predictiveDashboardUrl} 
                alt="Dashboard mostrando gráfico de probabilidade criminal vs horário"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                Antecipe o Crime Antes que Ele Aconteça.
              </h2>
              <p className="text-gray-600 mb-6">
                Nossa <span className="text-brand-orange font-bold">IA</span> proprietária analisa milhões de pontos de dados históricos e contextuais para identificar padrões ocultos.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-orange pl-6">
                  <h4 className="text-lg font-bold text-brand-blue mb-2">Predição de Alta Confiança</h4>
                  <p className="text-gray-600">
                    Algoritmos que atingem <span className="text-brand-orange font-bold text-xl">&gt;90%</span> de assertividade na previsão de ocorrências, descendo até o nível de rua.
                  </p>
                </div>
                <div className="border-l-4 border-brand-blue pl-6">
                  <h4 className="text-lg font-bold text-brand-blue mb-2">Prevenção Qualificada</h4>
                  <p className="text-gray-600">
                    O sistema não apenas diz "onde", mas sugere "o que fazer". Diagnóstico automático de causas-raiz para atuar na origem do problema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: FLUXO DE COMANDO E CONTROLE */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-12">
            Da Estratégia à Execução em Segundos.
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-orange to-brand-blue/20 -z-10 transform -translate-y-1/2"></div>

            {[
              { title: "Nível Estratégico", desc: "O Alto Comando define as diretrizes e grandes operações." },
              { title: "Nível Tático", desc: "Regiões e Batalhões desdobram a missão para a realidade local." },
              { title: "Nível Operacional", desc: "Companhias e Pelotões recebem a ordem pronta, com alvos claros." },
              { title: "Execução na Ponta", desc: "O policial recebe a Ordem de Missão digital no tablet." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md w-full md:w-64 min-h-[200px] flex flex-col items-center border border-gray-100 hover:border-brand-orange transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-brand-blue mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DUALIDADE OPERACIONAL */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Lado A: Repressão */}
        <div className="bg-brand-blue p-12 lg:p-20 text-white flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Ordem de Missão (Operacional)</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Foco em ações de resposta imediata, operações de choque, trânsito e grandes eventos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Definição clara de recursos e logística.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Integração com órgãos apoiados.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lado B: Prevenção */}
        <div className="bg-gray-50 p-12 lg:p-20 text-brand-blue flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8">
              <Lightbulb className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Prevenção Qualificada (Metodologia A3)</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Não basta patrulhar; é preciso resolver. Policiamento Orientado à Solução de Problemas (POP).
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-sm">
              <div className="flex items-center gap-2 font-bold mb-2">
                <GitMerge className="w-4 h-4 text-brand-orange" />
                Diagnóstico Estruturado:
              </div>
              <p className="text-gray-500">
                Definição do Problema &gt; Análise de Causa Raiz &gt; Plano de Ação &gt; Monitoramento de Resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: INTEGRAÇÃO TOTAL */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Um Sistema, Múltiplas Conexões.
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              A Ordem de Missão não é um documento estático em PDF. É um comando vivo que aciona todo o ecossistema.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <Calendar className="w-10 h-10 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Integração com Escala</h3>
              <p className="text-sm text-blue-100/80">
                O sistema verifica se o efetivo escalado é compatível com a missão. Bloqueia recursos indisponíveis e evita conflitos.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <Radio className="w-10 h-10 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Automação CAD</h3>
              <p className="text-sm text-blue-100/80">
                A missão "acorda" o sistema de despacho. O status da viatura muda automaticamente e o registro (RAT) é aberto sem intervenção humana.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <BarChart3 className="w-10 h-10 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Auditoria de Produtividade</h3>
              <p className="text-sm text-blue-100/80">
                Ao fim da missão, o sistema cruza planejado vs. executado. Quantas horas empenhadas? Qual a produtividade vinculada?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: SEGURANÇA JURÍDICA E COMPLIANCE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                 Rastreabilidade e Governança.
               </h2>
               <p className="text-gray-600 text-lg mb-8">
                 Proteja o comando e a tropa com um sistema auditável. Acabe com a informalidade nos registros.
               </p>

               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="mt-1"><Fingerprint className="text-brand-orange" /></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Assinatura Digital</h4>
                     <p className="text-sm text-gray-500">Validação jurídica de quem planejou, quem autorizou e quem executou.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><FileCheck className="text-brand-orange" /></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Padronização (DIAO)</h4>
                     <p className="text-sm text-gray-500">Classificação automática baseada em diretrizes oficiais (Grupos, Classes e Subclasses).</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><LayoutDashboard className="text-brand-orange" /></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Carta de Situação Automática</h4>
                     <p className="text-sm text-gray-500">Dashboards em tempo real de todas as operações na jurisdição.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="flex-1 bg-gray-50 p-8 rounded-xl border border-gray-100">
               <img 
                 src={auditReportUrl} 
                 alt="Exemplo de relatório de auditoria digital e assinatura eletrônica"
                 className="shadow-lg rounded-lg w-full" 
               />
               <p className="text-center text-xs text-gray-400 mt-4 italic">
                 Interface simplificada para fins ilustrativos.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL */}
      <section className="py-20 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-6">
          <ShieldAlert className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8">
            O Policiamento do Futuro Começa no Planejamento.
          </h2>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button variant="white">
              Agendar Apresentação Técnica
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Voltar ao Início
            </Button>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default PlanningModule;