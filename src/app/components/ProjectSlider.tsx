"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MoveRight } from 'lucide-react';

const projects = [
  {
    id: 2,
    title: "teamCobuild",
    category: "Web Platform",
    theme: "emerald",
    placeholderBg: "bg-neutral-300",
    hoverGradient: "from-emerald-500/80 to-teal-600/80",
    bg: "/images/teamcobuild-.png",
  },
  {
    id: 3,
    title: "QwikHelp",
    category: "Web App",
    theme: "blue",
    placeholderBg: "bg-neutral-200",
    hoverGradient: "from-blue-500/80 to-indigo-600/80",
    bg: "/images/qwikhelp.png",
  },
  {
    id: 1,
    title: "openQuanta",
    category: "Web Platform",
    theme: "orange",
    placeholderBg: "bg-neutral-200",
    bg: "/images/openquanta.jpg",
  },
  {
    id: 4,
    title: "Constitui",
    category: "Web App",
    theme: "gray",
    placeholderBg: "bg-neutral-300",
    hoverGradient: "from-gray-700/80 to-black/90",
    bg: "/images/constitui.png",
  },
];

export default function ProjectSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-2">
            Selected <span className="text-gray-500">Work.</span>
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs font-medium uppercase tracking-widest animate-pulse">
          Scroll <MoveRight size={14} />
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pl-6 pb-12 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group snap-center shrink-0"
            style={{ x }}
          >
            {/* Reduced Card Dimensions */}
            <div className="w-[80vw] md:w-[480px] h-[400px] md:h-[550px] relative rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-100">
              
              {/* --- IMAGE --- */}
              <img 
                src={project.bg} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end">
                <div>
                  <span className={`block text-xs font-bold uppercase tracking-widest mb-2 text-gray-200 group-hover:text-${project.theme}-100 transition-colors`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Smaller Arrow Button */}
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-${project.theme}-600 transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110 shadow-lg`}>
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>

            </div>
          </motion.div>
        ))}
        
        <div className="shrink-0 w-4 md:w-8" />
      </div>
    </section>
  );
}