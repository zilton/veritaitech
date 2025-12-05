import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  TrendingUp, 
  Award, 
  BarChart3, 
  Sliders, 
  Smartphone, 
  FileText, 
  Lock, 
  Zap,
  Target,
  Users,
  AlertTriangle
} from 'lucide-react';
import Button from '../UI/Button';

interface ProductivityModuleProps {
  onClose: () => void;
}

const ProductivityModule: React.FC<ProductivityModuleProps> = ({ onClose }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple state for the interactive slider demo
  const [sliderValue, setSliderValue] = useState(75);

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
          <span>Módulo Produtividade</span>
        </div>
        <Button variant="primary" className="py-2 px-4 text-sm hidden sm:block">
          Solicitar Demo do Score
        </Button>
      </nav>

      {/* SEÇÃO 1: HERO MODULE (Gamificação) */}
      <section className="relative py-20 lg:py-32 bg-brand-blue overflow-hidden">
        {/* Background Particles/Network */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E65C20 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-black/40 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs tracking-wider mb-6 border border-brand-orange/20">
              MERITOCRACIA EM TEMPO REAL
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
              Mensure o Intangível. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">
                Valorize quem Produz.
              </span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              O módulo de Produtividade do Polic<span className="text-brand-orange font-bold">IA</span> elimina a subjetividade na avaliação de desempenho. Transforme ações operacionais, assiduidade e resultados em um Score auditável, justo e motivador.
            </p>
            <Button variant="primary">Conhecer a Metodologia</Button>
          </div>

          {/* Player Card Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-80 bg-gradient-to-br from-gray-900 to-brand-blue rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Card Header */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-brand-blue/90 z-10"></div>
              <img src="https://placehold.co/400x500/334155/ffffff/png?text=Policial" alt="Foto do Policial" className="w-full h-64 object-cover object-top" />
              
              {/* Score Badge */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center border-2 border-brand-orange shadow-[0_0_15px_rgba(230,92,32,0.5)] z-20">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white leading-none">98</span>
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">Score</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-20 bg-gray-900/80 backdrop-blur-md p-6 pt-2">
                <h3 className="text-2xl font-bold text-white">Cb. Silva</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">2º Batalhão de Choque</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Operacional</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[95%]"></div>
                    </div>
                    <span className="font-bold text-green-400">95</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Técnica</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[88%]"></div>
                    </div>
                    <span className="font-bold text-blue-400">88</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Assiduidade</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange w-[100%]"></div>
                    </div>
                    <span className="font-bold text-brand-orange">100</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A LÓGICA DO SCORE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-brand-blue mb-12">
            Como calculamos a excelência?
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16">
            
            {/* Input */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 text-brand-blue border border-gray-200">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Esforço (Input)</h3>
              <p className="text-gray-600 text-sm">
                Horas trabalhadas, disponibilidade, participação em escalas extras e missões especiais.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-16 h-1 bg-gray-200"></div>

            {/* The Algorithm (Center) */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full"></div>
              <div className="relative w-32 h-32 bg-brand-blue rounded-full flex flex-col items-center justify-center text-white border-4 border-brand-orange z-10 shadow-xl">
                 <span className="text-4xl font-bold">1-100</span>
                 <span className="text-xs uppercase tracking-widest mt-1">Algoritmo</span>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-16 h-1 bg-gray-200"></div>

            {/* Output */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 text-brand-blue border border-gray-200">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Resultado (Output)</h3>
              <p className="text-gray-600 text-sm">
                Prisões efetuadas, armas apreendidas, ocorrências finalizadas e atendimento à comunidade.
              </p>
            </div>

          </div>
          
          <div className="mt-16 max-w-2xl mx-auto bg-brand-orange/5 p-6 rounded-xl border border-brand-orange/20">
             <div className="flex items-center justify-center gap-3 mb-2">
                <Sliders className="text-brand-orange" size={20} />
                <h4 className="font-bold text-brand-blue">Estratégia (Peso)</h4>
             </div>
             <p className="text-gray-600">
               O Comando define o que importa. Se o foco é prevenção, a "Visita Comunitária" vale mais. Se é repressão, a "Apreensão" sobe de peso.
             </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: VISÃO DO COMANDANTE */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                 Gestão de Alta Performance para Unidades.
               </h2>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <div className="bg-white p-2 rounded-lg shadow-sm h-fit"><Users className="text-brand-orange w-6 h-6"/></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Ranking de Unidades</h4>
                     <p className="text-sm text-gray-600">Compare batalhões e companhias. Quem está entregando mais resultados com os mesmos recursos?</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="bg-white p-2 rounded-lg shadow-sm h-fit"><Target className="text-brand-orange w-6 h-6"/></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Identificação de Talentos</h4>
                     <p className="text-sm text-gray-600">O sistema destaca automaticamente os "Top Performers" para premiações e promoções.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="bg-white p-2 rounded-lg shadow-sm h-fit"><AlertTriangle className="text-brand-orange w-6 h-6"/></div>
                   <div>
                     <h4 className="font-bold text-brand-blue">Radar de Melhoria</h4>
                     <p className="text-sm text-gray-600">Identifique policiais com queda brusca de produtividade (possível burnout) antes que se torne um problema disciplinar.</p>
                   </div>
                 </li>
               </ul>
             </div>
             <div className="flex-1 w-full">
               <img 
                 src="https://placehold.co/800x500/ffffff/e2e8f0/png?text=Dashboard+Gestao+de+Tropa" 
                 alt="Dashboard largo mostrando gráficos de barras comparando unidades policiais"
                 className="w-full rounded-xl shadow-lg border border-gray-200"
               />
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: VISÃO DO POLICIAL (Mobile App) */}
      <section className="py-20 bg-brand-blue text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Mockup Mobile */}
            <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-1">
               <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                 {/* App Screen Content */}
                 <div className="w-full h-full bg-gray-50 text-gray-800 pt-12 px-6 flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                       <span className="font-bold text-brand-blue">Olá, Cb Silva</span>
                       <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-xs">S</div>
                    </div>
                    
                    <div className="bg-brand-blue text-white p-6 rounded-2xl shadow-lg mb-6 text-center">
                       <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Meu Score Atual</p>
                       <span className="text-6xl font-bold block mb-2">98</span>
                       <div className="flex items-center justify-center gap-1 text-green-400 text-sm">
                         <TrendingUp size={14} />
                         <span>+2.4 pts vs mês anterior</span>
                       </div>
                    </div>

                    <div className="flex-1 overflow-hidden">
                       <p className="font-bold text-brand-blue mb-4">Minhas Metas</p>
                       <div className="space-y-3">
                         <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                            <span className="text-sm">Abordagens</span>
                            <span className="text-xs font-bold text-brand-orange">85/100</span>
                         </div>
                         <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                            <span className="text-sm">Assiduidade</span>
                            <span className="text-xs font-bold text-green-600">100%</span>
                         </div>
                         <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                            <span className="text-sm">Registro TCO</span>
                            <span className="text-xs font-bold text-brand-orange">4/5</span>
                         </div>
                       </div>
                    </div>
                    <div className="pb-8 pt-4 border-t border-gray-200">
                      <div className="w-full bg-brand-orange text-white py-3 rounded-xl text-center font-bold text-sm">
                        Ver Extrato Detalhado
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Content */}
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-3xl font-heading font-bold mb-6">
                O Fim da "Avaliação Subjetiva".
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Dê ao policial o controle da sua própria carreira com total transparência.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                    <Smartphone className="text-brand-orange mb-4 w-8 h-8" />
                    <h4 className="font-bold mb-2">Meu Score</h4>
                    <p className="text-sm text-blue-200">Acesso individual e sigiloso à própria pontuação via app.</p>
                 </div>
                 <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                    <Target className="text-brand-orange mb-4 w-8 h-8" />
                    <h4 className="font-bold mb-2">Metas Claras</h4>
                    <p className="text-sm text-blue-200">O policial sabe exatamente o que precisa fazer para melhorar sua nota.</p>
                 </div>
                 <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                    <TrendingUp className="text-brand-orange mb-4 w-8 h-8" />
                    <h4 className="font-bold mb-2">Histórico de Evolução</h4>
                    <p className="text-sm text-blue-200">Gráficos que mostram a progressão profissional mês a mês.</p>
                 </div>
                 <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                    <Lock className="text-brand-orange mb-4 w-8 h-8" />
                    <h4 className="font-bold mb-2">Feedback Justo</h4>
                    <p className="text-sm text-blue-200">Pontuação matemática baseada em registros (RAT/OM), sem política.</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5: O "LEVER" ESTRATÉGICO (Interactive) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
               <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                 Induza Comportamentos com um Clique.
               </h2>
               <p className="text-gray-600 mb-8">
                 A estratégia da segurança pública muda. Seu sistema de avaliação deve mudar junto. O módulo de Administração de Pesos permite calibrar a 'bússola' da corporação.
               </p>
               
               <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-brand-orange">
                 <h4 className="font-bold text-brand-orange mb-2">Cenário de Exemplo:</h4>
                 <p className="text-sm text-gray-700 italic">
                   "Aumento de furtos na zona comercial. O Comando aumenta o peso da variável 'Patrulha Comercial' e 'Abordagem Preventiva'. A tropa redireciona o esforço naturalmente para maximizar o score."
                 </p>
               </div>
            </div>

            {/* Interactive Slider Demo */}
            <div className="flex-1 w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                 <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">Configuração de Pesos</span>
                 <Sliders size={18} className="text-brand-blue" />
               </div>

               <div className="space-y-6">
                 <div>
                   <div className="flex justify-between mb-2">
                     <span className="font-bold text-brand-blue text-sm">Ocorrências Violentas</span>
                     <span className="text-brand-orange font-bold text-sm">High</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-brand-blue h-2 rounded-full w-[80%]"></div>
                   </div>
                 </div>

                 <div>
                   <div className="flex justify-between mb-2">
                     <span className="font-bold text-brand-blue text-sm">Policiamento Comunitário</span>
                     <span className="text-brand-orange font-bold text-sm">{sliderValue}%</span>
                   </div>
                   <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sliderValue} 
                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                   />
                   <p className="text-xs text-gray-400 mt-1">Arraste para ajustar o peso estratégico</p>
                 </div>

                 <div>
                   <div className="flex justify-between mb-2">
                     <span className="font-bold text-brand-blue text-sm">Tráfico de Drogas</span>
                     <span className="text-brand-orange font-bold text-sm">Med</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-gray-400 h-2 rounded-full w-[50%]"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: RELATÓRIOS E INTEGRAÇÃO */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-brand-blue mb-10">Dados Prontos para Decisão.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-red-500">
                <FileText />
              </div>
              <h4 className="font-bold text-brand-blue mb-2">Exportação Oficial</h4>
              <p className="text-sm text-gray-500">Relatórios em PDF prontos para Diário Oficial ou boletins internos.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-500">
                <Lock />
              </div>
              <h4 className="font-bold text-brand-blue mb-2">Compliance</h4>
              <p className="text-sm text-gray-500">Logs de cálculo auditáveis. Nenhuma nota é alterada sem rastro digital.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-green-500">
                <Zap />
              </div>
              <h4 className="font-bold text-brand-blue mb-2">Integração Nativa</h4>
              <p className="text-sm text-gray-500">Alimenta-se automaticamente do módulo de Missão e Escala. Sem digitação manual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-orange-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8">
            Substitua o "Achismo" pela Ciência de Dados.
          </h2>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button className="bg-white text-brand-orange hover:bg-gray-100">
              Solicitar Demonstração do Score
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

export default ProductivityModule;
