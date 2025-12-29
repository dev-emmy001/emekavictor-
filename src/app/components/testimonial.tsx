"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MoveLeft, MoveRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dennis Kenneth",
    role: "Founder at openQuanta.",
    text: "Working with Victor has been an absolute pleasure. His creativity, attention to detail, and commitment to delivering quality designs on time truly stood out. He consistently took feedback well and went above and beyond to bring ideas to life. I highly recommend his services.",
    color: "group-hover:border-orange-500",
    text_color: "group-hover:text-orange-500",
    bg_color: "group-hover:bg-orange-50",
    quote_color: "text-orange-500"
  },
  {
    id: 2,
    name: "Franklin Issac",
    role: "Founder, Blutech",
    text: "I've had the pleasure of working with Victor a few times, and every experience just reinforces how talented he is in branding. He consistently delivers high-quality work with impressive attention to detail, whether it's eye-catching slide decks, compelling flyers, or clean webpages. If you need someone reliable, creative, and skilled in branding and design, I highly recommend Victor. His work truly speaks for itself, and he's definitely who you want for your projects.",
    color: "group-hover:border-emerald-500",
    text_color: "group-hover:text-emerald-500",
    bg_color: "group-hover:bg-emerald-50",
    quote_color: "text-emerald-500"
  },
  {
    id: 3,
    name: "Elizabeth Chijioke",
    role: "Preciding officer JCI Aba Protem",
    text: "Working with Chukwuemeka Victor has been truly impressive. From modest beginnings, he has honed his craft into a consistent display of creativity and precision. What sets him apart is not just his improved design skills but his unwavering reliability. He always delivers quality work on time.",
    color: "group-hover:border-blue-500",
    text_color: "group-hover:text-blue-500",
    bg_color: "group-hover:bg-blue-50",
    quote_color: "text-blue-500"
  },
  {
    id: 4,
    name: "Mr Nwabueze",
    role: "Lead Product Designer",
    text: "Every project Victor touches turns into a perfect blend of design and purpose. He crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
    color: "group-hover:border-gray-800",
    text_color: "group-hover:text-gray-800",
    bg_color: "group-hover:bg-gray-100",
    quote_color: "text-gray-800"
  }
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Calculate draggable width constraint
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden cursor-default">
      <div className="mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-6">
              Don't just take <br />
              <span className="text-gray-500">my word for it.</span>
            </h2>
            <p className="text-lg text-gray-500">
              Feedback from teams and founders I've collaborated with.
            </p>
          </div>
          
          {/* Visual Drag Indicator */}
          <div className="hidden md:flex items-center gap-4 text-gray-400 text-sm font-medium">
            <MoveLeft size={16} />
            <span>Drag to explore</span>
            <MoveRight size={16} />
          </div>
        </div>

        {/* Draggable Slider */}
        <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing">
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6 md:gap-10"
          >
            {testimonials.map((t) => (
              <motion.div 
                key={t.id}
                className={`
                  group min-w-[320px] md:min-w-[500px] p-8 md:p-12 rounded-[2rem] h-fit bg-gray-50 
                  border border-transparent transition-all duration-500 
                  ${t.color} hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50
                `}
              >
                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote 
                    size={48} 
                    className={`text-gray-200 transition-colors duration-500 ${t.text_color} fill-current opacity-20`} 
                  />
                </div>

                {/* Text */}
                <p className="text-l md:text-xl font-medium text-gray-800 leading-relaxed mb-10">
                  {t.text}
                </p>

                {/* Footer / Author */}
                <div className="flex items-center gap-4">
                  {/* Initials Avatar */}
                  <div className={`w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold transition-colors duration-500 ${t.bg_color} ${t.text_color}`}>
                    {t.name.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className={`font-bold text-gray-900 transition-colors duration-500 ${t.text_color}`}>
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}