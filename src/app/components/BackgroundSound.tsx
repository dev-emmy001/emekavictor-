"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BackgroundSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.2; // Keep it subtle
        audioRef.current.play()
          .then(() => {
            setHasInteracted(true); // It played! Stop trying.
            console.log("Audio started successfully 🦉");
          })
          .catch((error) => {
            console.log("Audio blocked, waiting for more interaction...", error);
          });
      }
    };

    // Browsers require a user gesture. We listen to ALL of them.
    window.addEventListener("click", playAudio);
    window.addEventListener("scroll", playAudio);
    window.addEventListener("keydown", playAudio);
    window.addEventListener("mousemove", playAudio);
    window.addEventListener("touchstart", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("keydown", playAudio);
      window.removeEventListener("mousemove", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, [hasInteracted]);

  return (
    <audio
      ref={audioRef}
      src="/sounds/hooting.mp3"
      loop
      preload="auto"
    />
  );
}