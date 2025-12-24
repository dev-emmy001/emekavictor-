"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

// Categories for the filter
const categories = ["All", "Mobile App", "Web Dev", "UI/UX Design"];

// Project Data
const projects = [
  {
    id: 1,
    title: "Apex Fitness",
    category: "Mobile App",
    description: "A comprehensive workout tracking application with real-time analytics.",
    theme: "orange",
    gradient: "from-orange-400 to-red-500",
    bg: "bg-orange-50",
  },
  {
    id: 2,
    title: "EcoStream",
    category: "Web Dev",
    description: "Next.js platform for monitoring environmental data sensors.",
    theme: "emerald",
    gradient: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    id: 3,
    title: "Nexus Fintech",
    category: "UI/UX Design",
    description: "Complete design system and high-fidelity prototyping for a banking app.",
    theme: "blue",
    gradient: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    title: "Mono Architecture",
    category: "Web Dev",
    description: "Minimalist portfolio website for an award-winning architecture firm.",
    theme: "gray",
    gradient: "from-gray-700 to-black",
    bg: "bg-gray-50",
  },
  {
    id: 5,
    title: "Swift Pay",
    category: "Mobile App",
    description: "P2P payment integration with seamless Supabase backend.",
    theme: "indigo",
    gradient: "from-indigo-400 to-purple-500",
    bg: "bg-indigo-50",
  },
  {
    id: 6,
    title: "Loomi Dashboard",
    category: "UI/UX Design",
    description: "SaaS analytics dashboard focusing on data visualization.",
    theme: "teal",
    gradient: "from-teal-400 to-cyan-500",
    bg: "bg-teal-50",
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter logic
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="tracking-tighter bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-8 mx-auto w-full flex-grow">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-6 text-gray-900"
            >
              Curated <br />
              <span className="text-gray-300">experiments.</span>
            </motion.h1>
          </div>

          {/* Filter Pills */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border
                  ${activeCategory === cat 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- PROJECT GRID --- */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 mb-6">
                  
                  {/* 1. Abstract Placeholder Background (Visible when no image) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                  
                  {/* 2. Glow Blob (Follows theme) */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr ${project.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 scale-75 group-hover:scale-100`} />

                  {/* 3. Placeholder Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-300 font-bold text-lg uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                      </span>
                  </div>

                  {/* 4. Real Image (Uncomment when ready) */}
                  {/* <Image 
                    src={`/images/project-${project.id}.jpg`} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  /> 
                  */}

                  {/* Overlay for Arrow */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                        <ArrowUpRight size={20} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-lg text-gray-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-32 pt-20 border-t border-gray-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Want to see more details?</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                I have detailed case studies available for specific projects upon request.
            </p>
            <a href="mailto:hello@emekavictor.com" className="inline-flex items-center gap-2 text-orange-500 font-bold text-lg hover:underline decoration-2 underline-offset-4">
                Request Case Studies <ArrowUpRight size={18} />
            </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}