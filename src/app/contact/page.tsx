"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 mx-auto w-full flex-grow">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT COL: Header & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 text-gray-900">
              Let's start a <br />
              <span className="text-gray-500">project together.</span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-md leading-relaxed mb-12">
              Have a project in mind? I'd love to hear about it. I'm currently available for freelance projects and open to new opportunities.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                  <Mail size={20} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</span>
                  <span className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">victoremeka.dev@outlook.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-300">
                  <MapPin size={20} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</span>
                  <span className="text-lg font-medium text-gray-900 group-hover:text-emerald-500 transition-colors">Awka, Nigeria</span>
                </div>
              </div>
            </div>
          </motion.div>


          {/* RIGHT COL: The Minimalist Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-4"
          >
            <form className="space-y-8">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${focusedField === 'name' ? 'text-orange-500' : 'text-gray-400'}`}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder=""
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pb-4 bg-transparent border-b border-gray-200 text-xl font-medium placeholder-gray-300 outline-none focus:border-orange-500 transition-colors duration-300"
                  />
                </div>

                <div className="relative group">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${focusedField === 'email' ? 'text-emerald-500' : 'text-gray-400'}`}>
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    placeholder=""
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pb-4 bg-transparent border-b border-gray-200 text-xl font-medium placeholder-gray-300 outline-none focus:border-emerald-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="relative">
                 <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'}`}>
                    Tell me about your project
                  </label>
                  <textarea 
                    rows={4}
                    placeholder=""
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-gray-200 text-xl font-medium placeholder-gray-300 outline-none resize-none focus:border-blue-500 transition-colors duration-300"
                  />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full md:w-auto px-10 py-5 bg-black text-white rounded-full font-bold text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.button>
              </div>

            </form>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}