"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, MoveRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonial";
import ProjectSlider from "./components/ProjectSlider";

const heroImages = [
  { 
    id: 1, 
    color: "group-hover:bg-orange-500", 
    gradient: "from-orange-400 to-red-500", 
    label: "Mobile Apps" 
  },
  { 
    id: 2, 
    color: "group-hover:bg-emerald-500", 
    gradient: "from-emerald-400 to-teal-500", 
    label: "Web Platforms" 
  },
  { 
    id: 3, 
    color: "group-hover:bg-blue-500", 
    gradient: "from-blue-400 to-indigo-500", 
    label: "Design Systems" 
  },
  { 
    id: 4, 
    color: "group-hover:bg-gray-800", 
    gradient: "from-gray-700 to-black", 
    label: "Prototypes" 
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="tracking-tighter bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* --- HERO SECTION START --- */}
      <main className="pt-32 pb-20 px-6 md:px-8 mx-auto w-full grow flex flex-col justify-between">
        
        {/* 1. Main Headline Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 md:mb-32">
          <div className="max-w-4xl relative z-10">
            
            {/* Avatar / Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-500">Based in Awka, Nigeria</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-gray-900">
              I'm Emeka Victor, <br />
              <span className="text-gray-500">Full Stack Developer.</span>
            </h1>

            {/* Subtext with Interactive Highlight */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed"
            >
              Specializing in creating{" "}
              <span className="relative inline-block group cursor-pointer text-gray-900 font-semibold transition-colors hover:text-orange-500">
                user-friendly
                {/* Underline decoration */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>{" "}
              mobile apps and digital experiences that balance function with aesthetics.
            </motion.p>
          </div>


        </div>
        <ProjectSlider/>
        {/* 2. Minimalist Image Grid */}
        <div className="w-full">
          <div className="flex justify-between items-end mb-6">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">My Skills</span>
              <span className="text-sm font-semibold text-gray-400 hidden md:block">01 — 04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-125 md:h-100">
              {heroImages.map((item) => (
                  <motion.div
                      key={item.id}
                      onHoverStart={() => setHoveredProject(item.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (item.id * 0.1), duration: 0.5 }}
                      className={`
                          relative rounded-3xl overflow-hidden cursor-pointer group bg-gradient-to-b ${item.gradient} border border-transparent transition-all duration-500
                          ${hoveredProject !== null && hoveredProject !== item.id ? 'opacity-40 scale-95' : 'opacity-100 scale-100'}
                      `}
                  >
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500 rounded-3xl" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                          {/* Top Number */}
                          <div className="flex justify-between items-start">
                              <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                                  0{item.id}
                              </span>
                              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                  <MoveRight size={14} className="text-white" />
                              </div>
                          </div>

                          {/* Bottom Label */}
                          <div>
                             <h3 className="text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-300 translate-y-2 group-hover:translate-y-0">
                                  {item.label}
                             </h3>
                          </div>
                      </div>

                      {/* Simple geometric placeholder for image */}
                      <div className="absolute right-[-20%] bottom-[-20%] w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500" />
                  </motion.div>
              ))}
          </div>
        </div>
      </main>
      <Testimonials/>
      {/* --- HERO SECTION END --- */}

      <Footer />
    </div>
  );
}