import React, { useState } from 'react';
import logoIcon from '../assets/logo.svg';
import logoName from '../assets/logo_name.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full min-h-[80px] md:h-[137px] flex items-center justify-between px-[20px] md:px-[45px] py-[20px] md:py-[40px] bg-[#F9F9F9]/50 backdrop-blur-sm sticky top-0 z-50 font-['Inter']">
      
      {/* Logo Section */}
      <div className="flex items-start gap-[12px] md:gap-[16px] z-50">
        <div className="flex-shrink-0 w-[40px] md:w-auto">
          <img src={logoIcon} alt="BriskTek Icon" className="w-full h-full object-contain" />
        </div>
        <div className="flex items-center h-[30px] md:h-auto">
          <img 
            src={logoName} 
            alt="BriskTek Solution" 
            className="h-full w-auto object-contain" 
          />
        </div>
      </div>

      {/* Hamburger Icon - Only visible on small screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50 p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className={`block w-8 h-0.5 bg-brisk-navy-100 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-brisk-navy-100 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-brisk-navy-100 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Navigation Links */}
      <ul className={`
        /* Desktop Design */
        md:flex md:flex-row md:items-center md:static md:bg-transparent md:p-0 md:gap-[32px] md:w-auto md:h-auto
        
        /* Mobile Hamburger Design */
        fixed top-0 left-0 w-full h-screen bg-[#F9F9F9] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {['Home', 'About Us', 'Services', 'Contact us'].map((item) => (
          <li key={item} onClick={() => setIsOpen(false)}>
            <a 
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
              className="text-[24px] font-medium text-brisk-navy-100 leading-[130%] hover:text-point-purple transition-all"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;