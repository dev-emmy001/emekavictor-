"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startAudio = async () => {
      if (!audioRef.current) return;

      // Set volume to be subtle (optional, 0.5 is 50%)
      audioRef.current.volume = 0.3; 

      try {
        // Attempt to play immediately
        await audioRef.current.play();
      } catch (err) {
        console.log("Autoplay blocked. Waiting for user interaction...");
        
        // If blocked, wait for the first user interaction to start playing
        const enableAudio = () => {
          if (audioRef.current) {
            audioRef.current.play();
            // Remove listeners once playing starts
            document.removeEventListener("click", enableAudio);
            document.removeEventListener("keydown", enableAudio);
            document.removeEventListener("scroll", enableAudio);
          }
        };

        // Listen for any interaction
        document.addEventListener("click", enableAudio);
        document.addEventListener("keydown", enableAudio);
        document.addEventListener("scroll", enableAudio);
      }
    };

    startAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/sounds/hooting.mp3"
      loop
      hidden // This ensures no controls are visible
      preload="auto"
    />
  );
}