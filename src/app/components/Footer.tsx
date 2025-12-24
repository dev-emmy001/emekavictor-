"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: "https://x.com/devemmy001_", color: "hover:text-blue-500", bg: "hover:bg-blue-50" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/victor-chukwuemeka-a70156310/", color: "hover:text-blue-700", bg: "hover:bg-blue-50" },
  { icon: Instagram, href: "https://www.instagram.com/devemmy001_/", color: "hover:text-orange-500", bg: "hover:bg-orange-50" }, 
  { icon: Github, href: "https://github.com/dev-emmy001", color: "hover:text-emerald-600", bg: "hover:bg-emerald-50" },
];

const footerLinks = [
  { title: "Home", href: "/", color: "hover:text-orange-500" },
  { title: "Work", href: "/works", color: "hover:text-emerald-500" },
  { title: "About", href: "/about", color: "hover:text-blue-500" },
  { title: "Contact", href: "/contact", color: "hover:text-orange-500" },
];

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="w-full px-6 py-20 md:px-8 md:py-0 mx-auto font-sans overflow-hidden">
      
      {/* 1. Main Typography CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
            Let's create <br />
            <span className="text-gray-500">something iconic.</span>
          </h2>
        </div>

        {/* Interactive Button Container */}
        <div className="relative group">
          {/* Colorful Blur Background - Appears on Hover */}
          <div 
            className={`absolute inset-0 bg-linear-to-r from-orange-400 via-emerald-400 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110`} 
          />
          
          <motion.a
            href="mailto:victoremeka.dev@outlook.com"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-4 px-10 py-6 bg-black text-white rounded-full text-xl font-medium transition-all"
          >
            <span>Get in touch</span>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-200 mb-12" />

      {/* 2. Minimalist Grid Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
        
        {/* Col 1: Copyright */}
        <div className="md:col-span-4 flex flex-col justify-between h-full">
          {/* <div>
            <h3 className="text-lg font-bold text-black mb-2">Emeka Victor</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences with focus on motion and usability.
            </p>
          </div> */}
          <p className="text-gray-500 text-sm mt-8 md:mt-0">© 2025 All Rights Reserved.</p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-4 md:pb-12 flex flex-col gap-4">
          <span className="text-sm font-semibold text-gray-600 uppercase mb-2">Sitemap</span>
          {footerLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className={`text-2xl md:text-3xl font-medium tracking-tighter text-gray-400 transition-colors duration-300 ${link.color}`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Col 3: Socials */}
        <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
           <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 md:text-right">Socials</span>
           <div className="flex gap-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className={`p-3 rounded-full bg-gray-50 text-gray-500 transition-all duration-300 ${social.bg} ${social.color}`}
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
           </div>
        </div>

      </div>
    </footer>
  );
}