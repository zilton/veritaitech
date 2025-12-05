import React from 'react';

const Authority: React.FC = () => {
  const clients = [
    "Polícias Militares",
    "Polícias Civis",
    "Bombeiros Militares",
    "Guardas Municipais",
    "Forças Armadas",
    "Segurança Institucional"
  ];

  return (
    <section className="py-10 bg-brand-gray border-b border-gray-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-semibold tracking-widest uppercase mb-8">
          Solução escalável desenhada para
        </p>
        
        {/* Layout Adjustment: Flex Column on Mobile (1 per line), Flex Row on MD+ (Wrapped) */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-y-6 md:gap-y-8 gap-x-12 opacity-70">
           {clients.map((client, index) => (
             <div key={index} className="group cursor-default w-full md:w-auto flex justify-center">
                <span className="text-lg lg:text-xl font-heading font-bold text-gray-400 group-hover:text-brand-blue transition-colors duration-300 flex items-center gap-2">
                   {/* Dot visible only on hover, helps centering on mobile if always present but invisible */}
                   <div className="w-2 h-2 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity"/>
                   {client}
                </span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;