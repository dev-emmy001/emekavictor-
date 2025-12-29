"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-6">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] -z-10" />
        
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Animated 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-[12rem] mt-10 md:text-[20rem] font-bold leading-none tracking-tighter text-gray-900 select-none">
              404
            </h1>
            
            {/* Overlay Gradient Text Effect */}
            {/* <h1 className="absolute inset-0 text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-transparent to-white/80 select-none pointer-events-none">
              404
            </h1> */}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative -mt-4 md:-mt-12 z-10"
          >
            <h2 className="text-2xl md:text-4xl tracking-tighter font-bold text-gray-900 mb-6">
              You've wandered off the map.
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
              The page you are looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/">
                <button className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300">
                  <Home size={18} /> Back to Home
                </button>
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300"
              >
                <ArrowLeft size={18} /> Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}