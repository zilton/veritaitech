import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import Button from '../UI/Button';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.013 13.197C14.685 13.061 14.445 12.989 14.204 13.352C13.968 13.712 13.275 14.522 13.065 14.762C12.855 15.003 12.645 15.032 12.285 14.852C11.925 14.672 10.763 14.291 9.387 13.064C8.283 12.081 7.54 10.867 7.329 10.506C7.119 10.147 7.309 9.957 7.489 9.778C7.649 9.617 7.847 9.358 8.026 9.148C8.206 8.938 8.266 8.788 8.386 8.548C8.506 8.308 8.446 8.098 8.356 7.918C8.266 7.738 7.545 5.968 7.245 5.248C6.954 4.545 6.66 4.641 6.436 4.634C6.223 4.628 5.98 4.623 5.74 4.623C5.5 4.623 5.109 4.713 4.779 5.073C4.449 5.433 3.518 6.303 3.518 8.073C3.518 9.843 4.809 11.553 4.989 11.793C5.169 12.033 7.519 15.663 11.119 17.213C13.679 18.318 14.218 18.101 14.757 18.012C15.689 17.859 17.112 17.093 17.412 16.253C17.712 15.413 17.712 14.693 17.622 14.543C17.532 14.382 17.292 14.292 16.932 14.112H17.472V14.382ZM12.003 21.998C10.219 21.998 8.543 21.538 7.07 20.72L6.721 20.512L2.993 21.489L3.99 17.852L3.757 17.481C2.868 16.064 2.398 14.409 2.4 12.71C2.404 7.415 6.712 3.111 12.007 3.111C14.57 3.113 16.979 4.111 18.791 5.923C20.603 7.734 21.598 10.141 21.594 12.71C21.59 18.005 17.29 22.001 11.999 22.001L12.003 21.998Z" />
  </svg>
)

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Sistema', href: '#solucao' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Quem Somos', href: '#sobre' },
  ];

  const whatsappLink = "https://wa.me/5531994814045?text=Olá, tenho interesse em uma demonstração sobre o Sistema PolicIA. Poderíamos agendar uma data, por gentileza?";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-glass py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 font-heading font-bold text-2xl text-brand-blue tracking-tight cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           <ShieldCheck className="w-8 h-8 text-brand-orange" />
           <span>VERIT<span className="text-brand-orange">AI</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            variant="outline" 
            className="py-2 px-5 text-sm gap-2"
            href={whatsappLink}
            target="_blank"
          >
            <WhatsAppIcon className="w-5 h-5 text-brand-orange transition-colors group-hover:text-white" />
            Agendar Demonstração
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-blue p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="w-full mt-2 gap-2"
            href={whatsappLink}
            target="_blank"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            Agendar Demonstração
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;