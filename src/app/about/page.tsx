"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Globe, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

// Experience Data
const experience = [
  {
    year: "2025 — Present",
    role: "Lead Frontend  Dev",
    company: "openQuanta",
    description:
      "Built a scalable web3 application and high-fidelity prototype for openQuanta launch. Specializing in Next.js and integrating Solana.",
  },
  {
    year: "2025",
    role: "Designer",
    company: "VIHub/VAF",
    description:
      "Led the design system overhaul for a tech hub, improving user retention by 25%.",
  },
  {
    year: "2025",
    role: "Founder",
    company: "teamCobuild",
    description:
      "A software company creating tools to solve community problems, starting from Aba.",
  },
    {
    year: "2025",
    role: "Lead Designer",
    company: "Blutech Innovations",
      description:
      "Collaborated on UI/UX designs for client projects, enhancing user engagement through intuitive interfaces.",
  
    },
  
];

const education = [
  {
    year: "2025 — Present",
    role: "M.Eng Computer Engineering",
    description:
      "Nnamdi Azikiwe University, Nigeria.",
  },
  {
    year: "2019 — 2025",
    role: "Secondary Education",
    description:
      "Supreme Competence Academy - Oxford International School, Aba.",
  },
  {
    year: "2025",
    role: "Frontend Developer Certification",
    description:
      "Innovation Growth Hub, Aba.",
  },
  {
    year: "2025",
    role: "Javascript Certification",
    description:
      "Udemy.",
  },
    {
    year: "2025",
    role: "Cowrywise Ambassador",
    description:
      "Cowrywise.",
  },
];
// Philosophy/Values Data
const values = [
  {
    id: 1,
    title: "Precision",
    icon: Code,
    text: "Clean code is non-negotiable. I write maintainable, scalable software that stands the test of time.",
    color: "group-hover:text-orange-500",
    bg: "group-hover:bg-orange-50",
    border: "group-hover:border-orange-200",
  },
  {
    id: 2,
    title: "Aesthetics",
    icon: PenTool,
    text: "Functionality needs form. I ensure every pixel serves a purpose and every interaction feels natural.",
    color: "group-hover:text-emerald-500",
    bg: "group-hover:bg-emerald-50",
    border: "group-hover:border-emerald-200",
  },
  {
    id: 3,
    title: "Performance",
    icon: Globe,
    text: "Speed is a feature. I optimize for core web vitals to ensure instant load times and smooth framerates.",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-50",
    border: "group-hover:border-blue-200",
  },
];

export default function About() {
  return (
    <div className="tracking-tighter bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-8 mx-auto w-full flex-grow">
        {/* --- HEADER --- */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-gray-900"
          >
            More than just <br />
            <span className="text-gray-500">pixels & code.</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }} // Changed 'w' to 'width'
            animate={{ width: "100%" }} // Changed 'w' to 'width'
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gray-200 w-full max-w-xs md:max-w-md mt-8"
          />
        </div>

        {/* --- BIO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-32 items-start">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-gray-200 rounded-full blur-[80px] opacity-100 transition-opacity duration-700" />

            {/* Hover Reveal Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

            {/* Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 z-20">
              <User size={64} strokeWidth={1} className="mb-4" />
              <span className="font-bold text-xl uppercase tracking-widest">
                Portrait
              </span>
            </div>

            {/* profile image */}
            <Image
              src="/images/emeka.jpg"
              alt="Emeka Victor"
              fill
              className="object-cover z-30 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center h-full">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-6"
            >
              The Journey
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-xl md:text-2xl text-gray-500 leading-relaxed"
            >
              <p>
                My tech journey began in the media department of my local
                church, upgrading systems and exploring graphic design. I spent
                years obsessing over visuals in Photoshop before I wrote a
                single line of code. This background gave me a unique edge when
                I transitioned into engineering. As a graduate of the IGHub
                Developers Fellowship, I don't just look at the code; I look at
                the experience. I understand that a great application needs to
                be functional and beautiful. My Stack: ReactNative, Next.js,
                JavaScript, Wordpress, Python, Rust!. My Philosophy: Start with
                a vision, break things if you have to, and don't stop until it
                works.
              </p>
            </motion.div>

            {/* Signature / Decorative Element */}
            <div className="mt-12 opacity-50">
              <span className="font-serif italic text-4xl text-gray-400">
                Emeka V.
              </span>
            </div>
          </div>
        </div>

        {/* --- EXPERIENCE TIMELINE --- */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Experience
            </h2>
            <span className="hidden md:block text-gray-400 text-sm font-medium">
              {/* (2022 — 2025) */}
            </span>
          </div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-100 hover:border-gray-300 transition-colors"
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {item.role}
                  </h4>
                  <span className="text-gray-500">{item.company}</span>
                </div>
                <div className="md:w-1/3">
                  <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* --- Education TIMELINE --- */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Education
            </h2>
            <span className="hidden md:block text-gray-400 text-sm font-medium">
              {/* (2022 — 2025) */}
            </span>
          </div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-100 hover:border-gray-300 transition-colors"
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {item.role}
                  </h4>
                  {/* <span className="text-gray-500">{item.company}</span> */}
                </div>
                <div className="md:w-1/3">
                  <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                </div>
                
              </motion.div>
              
            ))}
            <a className="p-5 border rounded-2xl border-gray-400" href="https://clover-citipati-df5.notion.site/Chukwumeka-Victor-229c04572bfa80e3af53d60d61cb121a?source=copy_link"><button>CV/Resume</button></a>
          </div>
        </div>
        {/* --- PHILOSOPHY GRID --- */}
        <div>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              My Approach
            </h2>
            <p className="text-xl text-gray-500">
              I don't just write code. I adhere to a set of core principles that
              ensure quality and consistency in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`
                            group p-10 rounded-[2rem] bg-gray-50 border border-transparent transition-all duration-300
                            ${val.bg} ${val.border} hover:shadow-xl
                        `}
              >
                <div
                  className={`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm transition-colors ${val.color}`}
                >
                  <val.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {val.title}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {val.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
