"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, LocateIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    const formData = {
      name: (e.currentTarget.name as unknown as HTMLInputElement).value,
      email: (e.currentTarget.email as unknown as HTMLInputElement).value,
      message: (e.currentTarget.message as unknown as HTMLTextAreaElement).value,
    };

    try {
      // Pointing to the new API route
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: 'error', message: 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column (Info) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 text-gray-900">
              Let's start a <br />
              <span className="text-gray-500">project together.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-md leading-relaxed mb-12">
              Have a project in mind? I'd love to hear about it.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <Mail size={20} className="text-gray-400 group-hover:text-orange-500" />
                </div>
                <div>
                   <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</span>
                  <a href="mailto:victoremeka.dev@outlook.com"> <span className="text-lg font-medium text-gray-900">victoremeka.dev@outlook.com</span></a>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <LocateIcon size={20} className="text-gray-400 group-hover:text-orange-500" />
                </div>
                <div>
                   <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</span>
                  <a href="https://maps.app.goo.gl/tJTabK1ykZtMgUv6A"> <span className="text-lg font-medium text-gray-900">Awka, Nigeria</span></a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-4">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">Your Name</label>
                  <input name="name" id="name" type="text" required 
                    className="w-full pb-4 bg-transparent border-b border-gray-200 text-xl font-medium outline-none focus:border-orange-500 transition-colors" 
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">Your Email</label>
                  <input name="email" id="email" type="email" required 
                    className="w-full pb-4 bg-transparent border-b border-gray-200 text-xl font-medium outline-none focus:border-emerald-500 transition-colors" 
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">Message</label>
                <textarea name="message" id="message" rows={4} required 
                  className="w-full bg-transparent border-b border-gray-200 text-xl font-medium outline-none resize-none focus:border-blue-500 transition-colors" 
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg text-sm font-bold ${status.type === 'error' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
                  {status.message}
                </div>
              )}

              <div className="pt-4">
                <button disabled={loading} className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg disabled:opacity-70">
                   {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}