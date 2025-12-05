import React from 'react';
import { motion } from 'framer-motion';
import { Scale, TrendingDown, Radio } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Scale size={32} />,
      title: "Risco Jurídico & Compliance",
      description: "Escalas manuais sem rastro de auditoria expõem o comando a questionamentos do Ministério Público e passivos trabalhistas significativos."
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Ineficiência Orçamentária",
      description: "O pagamento de horas extras indevidas e a falta de controle rigoroso sobre abonos e permutas drenam o orçamento da segurança pública."
    },
    {
      icon: <Radio size={32} />,
      title: "Desconexão Tática",
      description: "Planejamento feito em papel ou planilhas isoladas que não conversam com a realidade da rua e o despacho de viaturas em tempo real."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-blue mb-4">
            A Gestão Operacional Tradicional <br /> Gera Riscos Invisíveis.
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;