import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b102b] text-white pt-16 pb-8 border-t border-brand-blue/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 font-heading font-bold text-2xl text-white mb-4">
               <span>VERIT<span className="text-brand-orange">AI</span></span>
             </div>
             <p className="text-gray-400 text-sm mb-6">
               Tech Solutions para um mundo mais seguro e eficiente.
             </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="text-brand-orange font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#solucao" className="hover:text-white transition-colors">O Sistema</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Módulos</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="text-brand-orange font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-brand-orange font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@veritaitech.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <span>/company/veritai</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Belo Horizonte, MG - Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; 2026 VERITAI Tech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;