import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useClerk , UserButton  ,useUser} from '@clerk/clerk-react'   
import {Link } from 'react-router-dom'

interface HeaderProps {
  className?: string;
}



export const Navbar: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    
  };
// const navigate= useNavigate()
    const {user} =useUser()
    const {openSignIn}=useClerk()
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10", className)}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="flex items-center">

             <img 
    src="/pu.png" // Update with your logo path
    alt="Logo"
    className="h-12 w-12 mr-2 " // Adjust size and margin as needed
  />

            <div className="relative group">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-400/80 rounded-full animate-pulse"></span>
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 tracking-wide">
                  PU API
                </span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-400/80 rounded-full animate-pulse"></span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300 -z-10"></div>
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="#docs">Docs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>


          <div className="flex items-center space-x-4">
            {!user ? (
              <button className="hidden sm:inline-flex relative group font-medium text-white/90 hover:text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 backdrop-blur-sm" onClick={() => openSignIn()}>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-pulse"></span>
                  <span className="tracking-wide">Get Started</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
              </button>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}


            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>


        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-md rounded-lg mt-2 border border-white/10">
            <MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMobileMenu}>Services</MobileNavLink>
            <MobileNavLink href="#docs" onClick={toggleMobileMenu}>Docs</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
            <div className="pt-4">
              {!user ? (
                <button className="w-full relative group font-medium text-white/90 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 backdrop-blur-sm" onClick={() => openSignIn()}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-pulse"></span>
                    <span className="tracking-wide">Get Started</span>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
                </button>
              ) : (
                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      to={href}
      className={cn(
        "text-white/70 hover:text-white text-sm md:text-base font-medium transition-all duration-300 relative group",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};


const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick }) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "block px-3 py-2 text-white/70 hover:text-white text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-md",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;