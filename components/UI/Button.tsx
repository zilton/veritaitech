import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  children: React.ReactNode;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-[#d54e15] shadow-lg hover:shadow-xl focus:ring-brand-orange border border-transparent",
    secondary: "bg-transparent text-white border border-white hover:bg-white/10 focus:ring-white",
    outline: "bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue group",
    ghost: "bg-transparent text-brand-blue hover:bg-brand-gray",
    white: "bg-white text-brand-orange hover:bg-gray-50 shadow-lg hover:shadow-xl border border-transparent focus:ring-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;