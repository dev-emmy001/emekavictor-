"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Linkedin, Instagram, Twitter, Sparkle } from 'lucide-react';

// Define variants outside
const itemVariants: Variants = {
  initial: { opacity: 0, x: -15 },
  enter: { opacity: 1, x: 0 }
};

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/works" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

// social links icons
const SocialIcon = ({ Icon, href }: { Icon: React.ElementType; href: string }) => (
  <motion.a 
    variants={itemVariants}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 
    hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300"
  >
    <Icon size={18} strokeWidth={1.5} />
  </motion.a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    initial: { 
      scale: 0.9, 
      opacity: 0,
      y: -20,
      transformOrigin: "top right"
    },
    enter: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05
      }
    },
    exit: { 
      scale: 0.9, 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.2,
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8">
      <div className="mx-auto flex justify-between items-start relative">
        
        {/* Logo - Glassy Pill */}
        <div className="bg-white/70 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full shadow-sm z-50">
          <span className="text-lg font-semibold text-black flex gap-2 tracking-tight cursor-default hover:text-orange-500 transition-colors">
             <Sparkle/>
            Emeka Victor
          </span>
        </div>

        {/* Right Side Container */}
        <div className="relative z-50">
          
          {/* Menu Toggle Button - Glassy Circle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-12 h-12 bg-white/70 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-sm hover:scale-105 hover:bg-white/90 transition-all duration-200 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <Menu size={24} color="black" strokeWidth={1.5} />
          </button>

          {/* Dropdown Menu - Glassy Card */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                // Added backdrop-blur, semi-transparent white, and subtle border
                className="absolute top-0 right-0 bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 w-[300px] md:w-[320px] flex flex-col items-start origin-top-right"
              >
                {/* Close Button Header */}
                <div className="w-full flex justify-end mb-6">
                   <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 -mr-2 -mt-2 bg-transparent rounded-full flex items-center justify-center hover:bg-black/5 hover:text-orange-500 transition-colors"
                  >
                    <X size={24} className="text-black hover:text-orange-500 transition-colors" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-5 w-full">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      href={link.href}
                      // Added hover:text-orange-500
                      className="text-xl font-medium text-gray-800 hover:text-orange-500 active:text-orange-600 transition-colors duration-200"
                    >
                      {link.title}
                    </motion.a>
                  ))}
                </div>

                {/* Social Icons Footer */}
                <div className="flex gap-3 mt-10">
                  <SocialIcon Icon={Twitter} href="https://x.com/devemmy001_" /> 
                  <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/victor-chukwuemeka-a70156310/" />
                  <SocialIcon Icon={Instagram} href="https://www.instagram.com/devemmy001_/" />
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}