"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSlider from "./components/ProjectSlider";
import Testimonials from "./components/testimonial";
import PhysicsSkills from "./components/PhysicsSkills";

export default function Home() {
  return (
    <div className="tracking-tighter bg-gray-950 min-h-screen flex flex-col font-sans selection:bg-orange-900/50 selection:text-orange-100 overflow-x-hidden">
      <Navbar />

      <main className="mx-auto w-full grow px-6 pb-20 pt-32 md:px-8">
        {/* --- HERO SECTION --- */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center text-center pb-32 md:pb-48">
          {/* Physics layer — pills rain from the top of the hero */}
          <PhysicsSkills />

          <div className="relative z-10 flex flex-col items-center px-2">
            {/* Intro pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 inline-flex items-center gap-3 md:gap-4"
            >
              <span className="font-medium text-3xl md:text-5xl text-gray-300">
                Hey, I&apos;m
              </span>
              <div className="relative h-12 w-20 md:h-16 md:w-28 overflow-hidden rounded-full bg-gray-800">
                <Image
                  src="/images/emekavictor.png"
                  alt="Emeka Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-3xl md:text-5xl text-gray-300">
                Emeka
              </span>
            </motion.div>

            {/* Massive headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-6xl sm:text-7xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white"
            >
              FULL STACK
              <br />
              WEB &amp; MOBILE
              <br />
              DEVELOPER
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-500 md:mt-10 md:text-lg"
            >
              Currently designing complex B2B workflows and user-friendly mobile
              apps.
            </motion.p>
          </div>
        </section>

        <ProjectSlider />
      </main>

      <Testimonials />

      <Footer />
    </div>
  );
}
