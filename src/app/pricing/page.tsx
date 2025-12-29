"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Flame, Zap, ChefHat } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    id: "design",
    name: "Design Sprint",
    description: "Rapid, high-fidelity prototypes to validate your big idea.",
    label: "Custom Scope",
    features: [
      "2-Week Turnaround",
      "High-Fidelity Prototype",
      "User Flow Mapping",
      "Figma Source Files",
      "2 Revision Rounds",
    ],
    highlight: false,
  },
  {
    id: "dev",
    name: "Full Build",
    description: "The complete engineering package. From zero to deployed.",
    label: "Cooking", // The user requested specific replacement
    features: [
      "Next.js 14 Architecture",
      "Supabase Backend",
      "Stripe Payments",
      "SEO & Analytics",
      "30 Days Support",
    ],
    highlight: true, // The "Hot" plan
  },
  {
    id: "retainer",
    name: "Retainer",
    description: "Dedicated developer access for scaling teams.",
    label: "Hourly / Monthly",
    features: [
      "20+ Hours / Month",
      "Priority Slack Access",
      "Same-Day Bug Fixes",
      "Feature Implementation",
      "Code Reviews",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 mx-auto w-full flex-grow max-w-7xl">
        
        {/* --- HEADER (Toned Down) --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-gray-100"
          >
            <ChefHat size={14} strokeWidth={2} />
            Tailored Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1] mb-6 text-gray-900"
          >
            Value based <br />
            <span className="text-gray-400">development.</span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Every project is unique. I don't sell off-the-shelf products; I cook up custom solutions tailored to your specific appetite.
          </p>
        </div>

        {/* --- CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHoveredCard(plan.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group h-full"
            >
              {/* "Cooking" Glow Effect for Highlighted Card */}
              {plan.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-b from-orange-500 to-red-600 rounded-[2.5rem] blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              )}

              <div 
                className={`
                  relative h-full flex flex-col justify-between p-8 md:p-10 rounded-[2rem] border transition-all duration-500
                  ${plan.highlight 
                    ? "bg-gray-900 text-white border-transparent" 
                    : "bg-gray-50 text-gray-900 border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent"
                  }
                `}
              >
                {/* Header */}
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-transform duration-500 group-hover:scale-110
                      ${plan.highlight ? "bg-white/10 text-orange-400" : "bg-white text-gray-900 shadow-sm"}
                    `}>
                        {i + 1}
                    </div>
                    
                    {/* Badge for the Hot Plan */}
                    {plan.highlight && (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-orange-500/20">
                            <Flame size={10} fill="currentColor" />
                            Hot
                        </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <p className={`text-sm leading-relaxed mb-10 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.description}
                  </p>

                  {/* PRICE REPLACEMENT */}
                  <div className="mb-10">
                    <span className={`text-4xl md:text-5xl font-bold tracking-tighter leading-none 
                        ${plan.highlight 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500" 
                            : "text-gray-900"
                        }
                    `}>
                        {plan.label}
                    </span>
                    <p className={`mt-3 text-xs font-bold uppercase tracking-widest ${plan.highlight ? "text-gray-500" : "text-gray-400"}`}>
                        {plan.highlight ? "Price depends on ingredients" : "Based on requirements"}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className={`
                                p-1 rounded-full shrink-0
                                ${plan.highlight ? "bg-orange-500/20 text-orange-400" : "bg-gray-200 text-gray-600"}
                            `}>
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className={`text-sm font-medium ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>
                                {feature}
                            </span>
                        </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className={`
                    w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300
                    ${plan.highlight 
                        ? "bg-white text-black hover:bg-orange-500 hover:text-white" 
                        : "bg-black text-white hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30"
                    }
                `}>
                    Get a Quote <ArrowUpRight size={16} />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- EXTRA LINK --- */}
        <div className="mt-20 text-center">
             <p className="text-gray-500 mb-6">Looking for specific one-off services?</p>
             <a
                href="/services" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-full font-bold transition-colors"
             >
                View Service Menu <ArrowUpRight size={18} />
             </a>
        </div>

      </main>
      <Footer />
    </div>
  );
}