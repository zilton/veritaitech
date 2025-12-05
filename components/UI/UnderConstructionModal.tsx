import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import Button from './Button';

interface UnderConstructionModalProps {
  onClose: () => void;
}

const UnderConstructionModal: React.FC<UnderConstructionModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
      >
        <div className="bg-brand-blue p-8 text-center relative overflow-hidden">
           {/* Background decoration */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           
           <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
             <Construction className="text-brand-orange w-10 h-10" />
           </div>
           <h2 className="text-2xl font-heading font-bold text-white mb-2">Em Construção</h2>
           <p className="text-blue-200 text-sm">Estamos preparando algo incrível para você.</p>
        </div>
        
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-8 leading-relaxed">
            A página detalhada da plataforma está sendo finalizada por nossa equipe de engenharia para oferecer a melhor experiência possível. Em breve estará disponível.
          </p>
          
          <Button variant="primary" onClick={onClose} className="w-full justify-center gap-2">
            <ArrowLeft size={18} />
            Voltar
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderConstructionModal;