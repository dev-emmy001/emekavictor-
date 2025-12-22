"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Linkedin, Instagram, Twitter } from 'lucide-react';

// Define variants outside so both the main component and sub-components can use them
const itemVariants: Variants = {
  initial: { opacity: 0, x: -15 },
  enter: { opacity: 1, x: 0 }
};

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Work", href: "#" },
  { title: "About", href: "#" },
  { title: "Pricing", href: "#" },
//   { title: "FAQ", href: "#" },
  { title: "Contact", href: "#" },
];

// Updated SocialIcon to be a motion component
// This fixes the issue of passing variants to a component that couldn't handle them
const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <motion.a 
    variants={itemVariants}
    href="#" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-colors"
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
      <div className="max-w-7xl mx-auto flex justify-between items-start relative">
        
        {/* Logo - Hanzo Pill */}
        <div className="bg-white px-6 py-2.5 rounded-full shadow-sm z-50">
          <span className="font-bold text-lg text-black tracking-tight">Emeka Victor</span>
        </div>

        {/* Right Side Container */}
        <div className="relative z-50">
          
          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <Menu size={24} color="black" strokeWidth={1.5} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="absolute top-0 right-0 bg-white rounded-3xl shadow-2xl p-8 w-[300px] md:w-[320px] flex flex-col items-start origin-top-right"
              >
                {/* Close Button Header */}
                <div className="w-full flex justify-end mb-6">
                   <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 -mr-2 -mt-2 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <X size={24} color="black" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-5 w-full">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      href={link.href}
                      className="text-xl font-medium text-gray-800 hover:text-gray-500 transition-colors"
                    >
                      {link.title}
                    </motion.a>
                  ))}
                </div>

                {/* Social Icons Footer */}
                <div className="flex gap-3 mt-10">
                  <SocialIcon Icon={Twitter} /> 
                  <SocialIcon Icon={Linkedin} />
                  <SocialIcon Icon={Instagram} />
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}