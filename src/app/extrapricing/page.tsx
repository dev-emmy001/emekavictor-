"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Monitor,
  Briefcase,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    id: "branding",
    title: "Brand Identity",
    price: "Starts at $1,200",
    description:
      "A complete visual identity system to help your business stand out in a crowded market.",
    icon: Layers,
    theme: "orange",
    deliverables: [
      "Logo Design (3 Concepts)",
      "Typography & Color Palette",
      "Brand Guidelines (PDF)",
      "Social Media Assets",
      "Business Card Design",
      "3 Revisions",
    ],
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    price: "Starts at $1,800",
    description:
      "Custom, high-performance WordPress sites tailored to your specific business needs.",
    icon: Monitor,
    theme: "emerald",
    deliverables: [
      "Custom Theme Development",
      "Speed & SEO Optimization",
      "CMS Training Session",
      "Plugin Configuration",
      "Mobile Responsiveness",
      "1 Month Maintenance",
    ],
  },
  {
    id: "contract",
    title: "Retainer & Contract",
    price: "$50 / hour",
    description:
      "Flexible engineering and design support for teams needing extra hands on deck.",
    icon: Briefcase,
    theme: "blue",
    deliverables: [
      "Frontend Engineering (React/Next.js)",
      "UI/UX Design Audits",
      "Feature Implementation",
      "Bug Fixing & Refactoring",
      "Weekly Progress Reports",
      "Direct Slack Access",
    ],
  },
];

export default function ServicesPricing() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="tracking-tighter bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-8 mx-auto w-full flex-grow">
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6 text-gray-900"
          >
            Project based <br />
            <span className="text-gray-300">solutions.</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-xl">
            Tailored packages for specific needs. Whether you need a fresh look,
            a CMS platform, or ongoing support.
          </p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="h-full bg-gray-50 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:border-transparent">
                {/* 1. Header Section */}
                <div>
                  {/* Icon Bubble */}
                  <div
                    className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500
                    bg-white shadow-sm text-gray-900
                    group-hover:bg-${service.theme}-500 group-hover:text-white
                  `}
                  >
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 min-h-[3rem]">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gray-200 mb-8 group-hover:bg-gray-100 transition-colors" />

                  {/* Price Tag */}
                  <div className="mb-8">
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Estimated Cost
                    </span>
                    <span
                      className={`text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-${service.theme}-600 transition-colors`}
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-10">
                    <span className="block text-sm font-bold text-gray-900 mb-4">
                      What's included:
                    </span>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle2
                            size={18}
                            className={`shrink-0 mt-0.5 text-gray-300 group-hover:text-${service.theme}-500 transition-colors duration-300`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. CTA Button */}
                <button
                  className={`
                    w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
                    bg-white border border-gray-200 text-gray-900
                    group-hover:bg-black group-hover:text-white group-hover:border-transparent
                `}
                >
                  Inquire Now <ArrowUpRight size={16} />
                </button>

                {/* Decorative Background Blob (Hidden by default, visible on hover) */}
                <div
                  className={`
                    absolute top-0 right-0 w-64 h-64 bg-${service.theme}-500 rounded-full blur-[100px] opacity-0 
                    group-hover:opacity-10 transition-opacity duration-700 pointer-events-none
                `}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-24 p-12 bg-gray-900 rounded-[3rem] text-center relative overflow-hidden">
          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need something purely custom?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              If your project doesn't fit into these boxes, I'm happy to create
              a bespoke proposal for you.
            </p>
            <a
              href="mailto:hello@emekavictor.com"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
