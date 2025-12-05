import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Radio, 
  Zap, 
  Unplug, 
  AlertOctagon, 
  MicOff, 
  CalendarClock, 
  ArrowRight, 
  PlayCircle, 
  CheckCircle2, 
  Timer, 
  Car, 
  RefreshCcw, 
  TrafficCone, 
  Map, 
  Headphones, 
  BarChart3, 
  MousePointer2 
} from 'lucide-react';
import Button from '../UI/Button';

interface CadModuleProps {
  onClose: () => void;
}

const CadModule: React.FC<CadModuleProps> = ({ onClose }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto font-sans"
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
        <div className="flex items-center gap-2 font-heading font-bold text-xl text-brand-blue hidden sm:flex">
          <span>Módulo Integração CAD</span>
        </div>
        <Button variant="primary" className="py-2 px-4 text-sm hidden sm:block">
          Integrar Minha Operação
        </Button>
      </nav>

      {/* SEÇÃO 1: HERO MODULE */}
      <section className="relative py-20 lg:py-32 bg-brand-blue text-white overflow-hidden">
        {/* Abstract Data Stream Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-brand-blue to-[#0f172a] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(230, 92, 32, 0.1) 50%)', backgroundSize: '100px 100%' }}></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs tracking-wider mb-6 border border-brand-orange/20">
              SINCRONIA EM TEMPO REAL
            </span>
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6">
              Da Escala para o Despacho em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
                Milissegundos.
              </span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              O Módulo de Integração CAD do Polic<span className="text-brand-orange font-bold">IA</span> elimina o abismo entre o administrativo e o operacional. Recursos humanos e logísticos planejados tornam-se automaticamente disponíveis para empenho no segundo em que o turno começa.
            </p>
            <Button variant="primary">Integrar Minha Operação</Button>
          </div>

          <div className="flex-1 relative w-full flex justify-center">
             {/* Concept Visual: Connector */}
             <div className="relative w-full max-w-lg aspect-video bg-gradient-to-br from-gray-900 to-brand-blue rounded-xl border border-gray-700 shadow-2xl p-6 flex items-center justify-between overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                
                {/* Left Side: Planning */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 mb-2">
                      <CalendarClock className="text-blue-300 w-8 h-8" />
                   </div>
                   <span className="text-xs font-bold text-blue-300 uppercase">Escala</span>
                </div>

                {/* Center: Stream */}
                <div className="flex-1 h-2 mx-4 bg-gray-700 rounded-full relative overflow-hidden">
                   <div className="absolute top-0 left-0 h-full w-1/3 bg-brand-orange blur-sm animate-slide-right"></div>
                </div>

                {/* Right Side: CAD */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center backdrop-blur-md border border-brand-orange/50 mb-2 shadow-[0_0_15px_rgba(230,92,32,0.5)]">
                      <Radio className="text-brand-orange w-8 h-8" />
                   </div>
                   <span className="text-xs font-bold text-brand-orange uppercase">Despacho</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O GARGALO DA INFORMAÇÃO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-4">
              O Risco da Desconexão Operacional.
            </h2>
            <p className="text-gray-600">
              Em sistemas tradicionais, a escala é um papel na parede e o despacho é uma ilha isolada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <Unplug className="w-10 h-10 text-gray-400 mb-6 group-hover:text-brand-orange transition-colors" />
              <h3 className="text-xl font-bold text-brand-blue mb-3">Recursos Fantasmas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                O despachante tenta acionar uma viatura que está na oficina, mas consta como "disponível" no sistema antigo.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <MicOff className="w-10 h-10 text-gray-400 mb-6 group-hover:text-brand-orange transition-colors" />
              <h3 className="text-xl font-bold text-brand-blue mb-3">Burocracia no Rádio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Minutos preciosos perdidos cantando prefixos e integrantes da guarnição para abrir o turno via rádio.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <AlertOctagon className="w-10 h-10 text-gray-400 mb-6 group-hover:text-brand-orange transition-colors" />
              <h3 className="text-xl font-bold text-brand-blue mb-3">Dados Inconsistentes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                O planejamento diz uma coisa, a rua faz outra. A estatística final não reflete a realidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: AUTOMAÇÃO DO FLUXO */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-4">
              Automação que Salva Vidas e Tempo.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 relative">
             {/* Flow Steps */}
             {[
               { icon: <CalendarClock />, title: "Planejamento", desc: "Escala aprovada no PolicIA." },
               { icon: <Timer className="text-brand-orange" />, title: "Gatilho Temporal", desc: "Sistema identifica início do turno.", highlight: true },
               { icon: <Zap className="text-brand-orange" />, title: "Ação Automática", desc: "PolicIA 'injeta' a viatura no CAD.", highlight: true },
               { icon: <CheckCircle2 />, title: "Resultado", desc: "Pronto para Empenho / RAT Aberto." }
             ].map((step, idx, arr) => (
               <React.Fragment key={idx}>
                 <div className={`flex-1 min-w-[200px] max-w-[250px] bg-white p-6 rounded-xl shadow-sm border ${step.highlight ? 'border-brand-orange/50 shadow-brand-orange/10' : 'border-gray-200'} flex flex-col items-center text-center z-10`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.highlight ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-blue/10 text-brand-blue'}`}>
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-brand-blue mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                 </div>
                 {idx < arr.length - 1 && (
                   <ArrowRight className="text-gray-300 w-6 h-6 hidden lg:block" />
                 )}
                 {idx < arr.length - 1 && (
                   <ArrowRight className="text-gray-300 w-6 h-6 lg:hidden rotate-90 my-2" />
                 )}
               </React.Fragment>
             ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: FUNCIONALIDADES CRÍTICAS */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center lg:text-left">
            Funcionalidades Críticas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-brand-orange/20 rounded-lg flex items-center justify-center shrink-0">
                    <PlayCircle className="text-brand-orange w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Abertura e Fechamento de RAT</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed">
                      O sistema gera o Registro de Atividade (RAT) no início da missão e o encerra automaticamente, contabilizando horas exatas.
                    </p>
                 </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-brand-orange/20 rounded-lg flex items-center justify-center shrink-0">
                    <Car className="text-brand-orange w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Sincronização de Frota</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed">
                      Se uma viatura é baixada para manutenção no módulo de Frota, ela fica indisponível imediatamente no CAD.
                    </p>
                 </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-brand-orange/20 rounded-lg flex items-center justify-center shrink-0">
                    <RefreshCcw className="text-brand-orange w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Atualização Dinâmica</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed">
                      Troca de última hora na chamada? O PolicIA atualiza a guarnição no CAD instantaneamente, sem aviso via rádio.
                    </p>
                 </div>
               </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-brand-orange/20 rounded-lg flex items-center justify-center shrink-0">
                    <TrafficCone className="text-brand-orange w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Gestão de Status</h3>
                    <p className="text-blue-100/70 text-sm leading-relaxed">
                      Monitoramento inteligente. Se a viatura está em ocorrência, o sistema aguarda liberação para encerrar o turno administrativo.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: CONSCIÊNCIA SITUACIONAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
               <img 
                 src="https://placehold.co/800x600/f1f5f9/192459/png?text=Mapa+da+Forca+em+Tempo+Real" 
                 alt="Mockup de tela de Mapa da Força mostrando localização de viaturas"
                 className="w-full rounded-xl shadow-xl border border-gray-200"
               />
            </div>
            <div className="flex-1 order-1 lg:order-2">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Map className="w-8 h-8 text-brand-blue" />
               </div>
               <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                 Visibilidade Total da Força.
               </h2>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                 O comando sabe exatamente onde cada recurso está e o que está fazendo. A integração permite visualizar o deslocamento e o status de cada viatura, cruzando dados de GPS com a escala planejada.
               </p>
               
               <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-brand-blue mb-2">Benefício Real:</h4>
                  <p className="text-sm text-gray-700 italic">
                    "Uma viatura baixada na oficina não pode ser despachada para uma emergência. Nossa integração nativa garante que o status logístico da frota se reflita instantaneamente na tela do despachante."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: BENEFÍCIOS ESTRATÉGICOS */}
      <section className="py-20 bg-brand-orange text-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                 <Headphones className="w-12 h-12 mx-auto mb-4 text-white/90" />
                 <h3 className="text-xl font-bold mb-3">Redução de Carga de Voz</h3>
                 <p className="text-white/80 text-sm">Menos tráfego de rádio para rotinas administrativas (abertura/fechamento de serviço).</p>
              </div>
              <div className="p-6 border-l border-r border-white/20">
                 <BarChart3 className="w-12 h-12 mx-auto mb-4 text-white/90" />
                 <h3 className="text-xl font-bold mb-3">Precisão Estatística</h3>
                 <p className="text-white/80 text-sm">Dados de tempo de resposta e empenho 100% auditáveis e livres de erro humano.</p>
              </div>
              <div className="p-6">
                 <MousePointer2 className="w-12 h-12 mx-auto mb-4 text-white/90" />
                 <h3 className="text-xl font-bold mb-3">Agilidade no Despacho</h3>
                 <p className="text-white/80 text-sm">O operador foca na ocorrência crítica, não no cadastro da viatura.</p>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL */}
      <section className="py-20 bg-brand-blue text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-white mb-8">
            Conecte a Inteligência à Operação.
          </h2>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button variant="primary">
              Falar com Especialista em Integração
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

export default CadModule;