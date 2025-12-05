import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  AlertTriangle, 
  Clock, 
  ShieldAlert, 
  Bot, 
  CheckCircle2, 
  RefreshCw, 
  Car, 
  Radio, 
  FileSearch, 
  BarChart,
  Users
} from 'lucide-react';
import Button from '../UI/Button';
import { getDriveDirectLink } from '../../utils/googleDrive';

interface RosterModuleProps {
  onClose: () => void;
}

const RosterModule: React.FC<RosterModuleProps> = ({ onClose }) => {
  // Google Drive Link for the Roster Module Mockup
  const rosterImageRawLink = "https://drive.google.com/file/d/1PxlIzvxR2KHmcUaFtwEJ0qnXx1cIPf8j/view?usp=drive_link";
  const rosterImageUrl = getDriveDirectLink(rosterImageRawLink);

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
          <span>Módulo Escala</span>
        </div>
        <Button variant="primary" className="py-2 px-4 text-sm hidden sm:block">
          Ver a Automação
        </Button>
      </nav>

      {/* SEÇÃO 1: HERO MODULE */}
      <section className="relative py-20 lg:py-32 bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-[#0b1230] opacity-95 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs tracking-wider mb-6 border border-brand-orange/20">
              OFICIALIZE O FIM DAS PLANILHAS
            </span>
            <h1 className="text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-6">
              A Escala Perfeita: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
                Compliance Automático.
              </span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              O módulo de Gestão de Escalas do Polic<span className="text-brand-orange font-bold">IA</span> cruza disponibilidade, competências e legislação para gerar turnos à prova de erros. Elimine o retrabalho administrativo e garanta que cada viatura tenha a guarnição certa.
            </p>
            <Button variant="white">Ver a Automação em Ação</Button>
          </div>

          <div className="flex-1 relative w-full">
            {/* Image Container */}
            <div className="relative rounded-lg shadow-2xl border border-gray-700 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-[#0f1633]">
               <img 
                 src={rosterImageUrl} 
                 alt="Interface do Sistema PolicIA - Módulo Gestão de Escalas mostrando calendário e alertas"
                 className="w-full h-auto object-cover"
               />
               
               {/* Decorative Overlay for context (optional, kept purely aesthetic) */}
               <div className="absolute bottom-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Sugestão IA Ativa
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A DOR (O Problema) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-4">
              Por que a gestão manual custa caro?
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
               <ShieldAlert className="w-10 h-10 text-brand-orange mb-4" />
               <h3 className="font-bold text-brand-blue mb-2">Risco Jurídico</h3>
               <p className="text-sm text-gray-600">Escalar policiais sem respeitar o descanso interjornada ou férias gera passivos trabalhistas.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
               <Clock className="w-10 h-10 text-brand-orange mb-4" />
               <h3 className="font-bold text-brand-blue mb-2">Ineficiência</h3>
               <p className="text-sm text-gray-600">Horas gastas por gestores montando escalas que mudam no minuto seguinte.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
               <AlertTriangle className="w-10 h-10 text-brand-orange mb-4" />
               <h3 className="font-bold text-brand-blue mb-2">Furos na Cobertura</h3>
               <p className="text-sm text-gray-600">Viaturas paradas por falta de motorista habilitado ou operador específico.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
               <BarChart className="w-10 h-10 text-brand-orange mb-4" />
               <h3 className="font-bold text-brand-blue mb-2">Banco de Horas</h3>
               <p className="text-sm text-gray-600">Pagamento indevido de horas extras por falta de controle preciso e centralizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: AUTOMAÇÃO INTELIGENTE */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="flex items-center gap-2 mb-4 text-brand-orange font-bold">
                  <Bot size={24} />
                  <span>AUTOMAÇÃO INTELIGENTE</span>
               </div>
               <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                 Deixe a IA Montar o Tabuleiro.
               </h2>
               <p className="text-gray-600 mb-8">
                 O algoritmo do PolicIA analisa o histórico da unidade e as regras de negócio para sugerir a escala ideal em segundos.
               </p>

               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="bg-white p-2 rounded shadow-sm h-fit"><CheckCircle2 className="text-brand-blue" /></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Sugestão Inteligente</h4>
                     <p className="text-sm text-gray-600">O sistema propõe o efetivo baseando-se em ciclos, grupos e histórico anterior.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="bg-white p-2 rounded shadow-sm h-fit"><ShieldAlert className="text-brand-blue" /></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Validação de Competências</h4>
                     <p className="text-sm text-gray-600">Alerta se tentar escalar motorista com CNH vencida ou operador sem curso de tiro.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="bg-white p-2 rounded shadow-sm h-fit"><AlertTriangle className="text-brand-blue" /></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Gestão de Restrições</h4>
                     <p className="text-sm text-gray-600">Respeito automático a licenças médicas, férias e dispensas.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
               <div className="bg-white p-2 rounded-xl shadow-xl border border-gray-200 max-w-sm w-full">
                  <div className="bg-gray-800 rounded-lg p-6 text-center">
                     <Bot className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                     <h3 className="text-white font-bold text-lg mb-2">Gerador de Escala</h3>
                     <p className="text-gray-400 text-sm mb-6">Analisando 1.240 variáveis...</p>
                     <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                        <div className="bg-brand-orange h-2 rounded-full w-[75%]"></div>
                     </div>
                     <button className="w-full bg-brand-orange text-white py-3 rounded font-bold hover:bg-orange-600 transition-colors">
                        Gerar Sugestão
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: ROTINA OPERACIONAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
           <h3 className="text-2xl font-bold text-brand-blue mb-10 text-center">Dinamismo da Chamada ao Encerramento.</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all">
                 <Users className="w-10 h-10 text-brand-blue mb-4" />
                 <h4 className="font-bold text-lg mb-2">Chamada Digital</h4>
                 <p className="text-gray-600 text-sm">
                   Realize a chamada no tablet. Registre atrasos e substitua ausentes com recálculo automático da equipe.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all relative overflow-hidden group">
                 <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">Highlight</div>
                 <RefreshCw className="w-10 h-10 text-brand-orange mb-4 group-hover:rotate-180 transition-transform duration-500" />
                 <h4 className="font-bold text-lg mb-2">Gestão de Permutas</h4>
                 <p className="text-gray-600 text-sm">
                   Processo 100% digital. O policial solicita, o par aceita, o sistema valida regras e o comando aprova.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all">
                 <Radio className="w-10 h-10 text-brand-blue mb-4" />
                 <h4 className="font-bold text-lg mb-2">Anúncio Multicanal</h4>
                 <p className="text-gray-600 text-sm">
                   Publicou a escala? O sistema notifica a tropa via App e WhatsApp com o "Cartão Programa".
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 5: INTEGRAÇÃO LOGÍSTICA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Homem e Máquina no Lugar Certo.</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-12">
            A escala não é apenas de pessoas. O PolicIA gerencia o binômio Policial + Viatura.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex-1 max-w-sm mx-auto">
                <Car className="w-8 h-8 text-brand-orange mb-4 mx-auto" />
                <h4 className="font-bold mb-2">Check de Frota</h4>
                <p className="text-sm text-gray-300">Sugestão de viaturas baseada em rodízio de quilometragem e manutenção.</p>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex-1 max-w-sm mx-auto">
                <Radio className="w-8 h-8 text-brand-orange mb-4 mx-auto" />
                <h4 className="font-bold mb-2">Vínculo CAD</h4>
                <p className="text-sm text-gray-300">A viatura escalada aparece automaticamente disponível no despacho.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: AUDITORIA E BANCO DE HORAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                 Controle Absoluto e Transparência.
               </h2>
               <ul className="space-y-4">
                 <li className="flex gap-3">
                   <FileSearch className="text-brand-orange mt-1 shrink-0" />
                   <div>
                     <h4 className="font-bold text-brand-blue">Rastreabilidade Total</h4>
                     <p className="text-sm text-gray-600">Logs auditáveis de quem alterou a escala, quando e por quê.</p>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <Clock className="text-brand-orange mt-1 shrink-0" />
                   <div>
                     <h4 className="font-bold text-brand-blue">Banco de Horas Preciso</h4>
                     <p className="text-sm text-gray-600">Cômputo automático de ordinárias, extras, abonos e faltas.</p>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <BarChart className="text-brand-orange mt-1 shrink-0" />
                   <div>
                     <h4 className="font-bold text-brand-blue">Planejado vs. Executado</h4>
                     <p className="text-sm text-gray-600">Dashboards comparando a escala teórica com a realidade da rua.</p>
                   </div>
                 </li>
               </ul>
            </div>
            <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-200 w-full">
               <div className="flex justify-between items-end mb-4">
                  <h4 className="font-bold text-brand-blue">Aderência à Escala</h4>
                  <span className="text-2xl font-bold text-green-500">92%</span>
               </div>
               {/* Fake Chart */}
               <div className="flex gap-2 items-end h-40">
                  <div className="w-full bg-blue-200 rounded-t h-[60%] relative group"><div className="absolute -top-6 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100">60%</div></div>
                  <div className="w-full bg-blue-300 rounded-t h-[80%] relative group"><div className="absolute -top-6 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100">80%</div></div>
                  <div className="w-full bg-brand-blue rounded-t h-[92%] relative group"><div className="absolute -top-6 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100">92%</div></div>
                  <div className="w-full bg-blue-300 rounded-t h-[75%] relative group"><div className="absolute -top-6 left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100">75%</div></div>
               </div>
               <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-orange-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8">
            Sua Tropa no Lugar Certo, na Hora Certa.
          </h2>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button variant="white">
              Solicitar Demonstração
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

export default RosterModule;