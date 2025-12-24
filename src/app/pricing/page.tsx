"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Pricing Data
const plans = [
  {
    id: "design",
    name: "Design",
    description: "Perfect for startups needing a high-fidelity prototype.",
    price: { monthly: 900, yearly: 750 },
    features: [
      "UI/UX Design",
      "Figma Source Files",
      "Interactive Prototype",
      "2 Revisions",
      "Design System",
    ],
    theme: "orange",
    popular: false,
  },
  {
    id: "dev",
    name: "Development",
    description: "For those who have a design and need it built perfectly.",
    price: { monthly: 1500, yearly: 1250 },
    features: [
      "Next.js & React",
      "Supabase Integration",
      "Responsive & Mobile First",
      "SEO Optimization",
      "1 Month Support",
    ],
    theme: "emerald",
    popular: true, // This one gets the cool effect
  },
  {
    id: "full",
    name: "Full Stack",
    description: "Concept to launch. The complete package.",
    price: { monthly: 2200, yearly: 1850 },
    features: [
      "Everything in Design & Dev",
      "Backend Architecture",
      "Payment Integration",
      "Analytics Setup",
      "3 Months Support",
    ],
    theme: "blue",
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="tracking-tighter bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 mx-auto w-full flex-grow">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6 text-gray-900"
          >
            Invest in your <br />
            <span className="text-gray-300">digital presence.</span>
          </motion.h1>
          <p className="text-xl text-gray-500 mb-10">
            Transparent pricing. No hidden fees. Pause or cancel anytime.
          </p>

          {/* --- TOGGLE SWITCH --- */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-bold ${
                billingCycle === "monthly" ? "text-black" : "text-gray-400"
              }`}
            >
              Monthly
            </span>

            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className="relative w-16 h-8 bg-gray-100 rounded-full p-1 transition-colors hover:bg-gray-200"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full bg-white shadow-sm ${
                  billingCycle === "monthly" ? "ml-0" : "ml-8"
                }`}
              />
            </button>

            <span
              className={`text-sm font-bold ${
                billingCycle === "yearly" ? "text-black" : "text-gray-400"
              }`}
            >
              Yearly{" "}
              <span className="text-orange-500 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* --- PRICING CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(plan.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* THE COOL EFFECT: 
                 If popular, we add a rotating gradient border behind the card.
              */}
              {plan.popular && (
                <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 opacity-70 blur-sm animate-gradient-xy" />
              )}

              {/* Card Container */}
              <div
                className={`
                relative h-full p-8 md:p-10 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between
                ${
                  plan.popular
                    ? "bg-black text-white border-transparent"
                    : "bg-white text-gray-900 border-gray-100 hover:border-gray-200 hover:shadow-xl"
                }
              `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Sparkles size={12} fill="currentColor" /> Recommended
                  </div>
                )}

                <div>
                  {/* Theme Icon / Dot */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-300
                        ${
                          plan.popular
                            ? "bg-white/10 text-emerald-400"
                            : `bg-gray-50 text-${plan.theme}-500 group-hover:bg-${plan.theme}-50`
                        }
                    `}
                  >
                    <div className={`w-3 h-3 rounded-full bg-current`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm mb-8 leading-relaxed ${
                      plan.popular ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Animation */}
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billingCycle}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-5xl font-bold tracking-tighter"
                      >
                        {billingCycle === "monthly"
                          ? plan.price.monthly
                          : plan.price.yearly}
                      </motion.span>
                    </AnimatePresence>
                    <span
                      className={`text-sm font-medium ${
                        plan.popular ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      /mo
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check
                          size={18}
                          className={
                            plan.popular
                              ? "text-emerald-400"
                              : `text-${plan.theme}-500`
                          }
                        />
                        <span
                          className={`text-sm font-medium ${
                            plan.popular ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`
                    w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      plan.popular
                        ? "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                        : "bg-gray-50 text-black hover:bg-black hover:text-white"
                    }
                `}
                >
                  Get Started <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <a
          href="/extrapricing"
          className="px-8 py-4 border border-gray-200 rounded-[2rem] mt-12 w-fit mx-auto flex items-center gap-2 text-sm font-bold text-gray-900 hover:bg-gray-100 transition-all duration-300"
        >
          Veiw all other plans <ArrowUpRight size={16} />
        </a>
        {/* --- FAQ SECTION (Minimal) --- */}
        <div className="mt-32 max-w-3xl mx-auto border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Can I pause my subscription?",
                a: "Yes, you can pause your development subscription at any time and resume when you have new tasks.",
              },
              {
                q: "What is your turnaround time?",
                a: "Most design requests are completed within 2 days. Development tasks typically take 3-5 business days.",
              },
              {
                q: "Do you offer refunds?",
                a: "Due to the high quality nature of the work, refunds are not issued once work has commenced.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="pb-8 border-b border-gray-100 last:border-0"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.q}
                </h4>
                <p className="text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
