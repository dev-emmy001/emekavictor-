"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BackgroundSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !hasInteracted) {
        // set a low volume (30%) and attempt playback
        audioRef.current.volume = 0.3;
        // ensure we don't loop; we'll schedule plays every 15s
        audioRef.current.loop = false;
        audioRef.current.currentTime = 0;
        audioRef.current.play()
          .then(() => {
            setHasInteracted(true);
            console.log("Audio started successfully");
            // Start the interval to play every 15s
            if (intervalRef.current === null) {
              intervalRef.current = window.setInterval(() => {
                if (audioRef.current && !document.hidden) {
                  try {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                  } catch (e) {
                    console.log('Failed to play audio on interval', e);
                  }
                }
              }, 15000) as unknown as number;
            }
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
    // Pause immediately when the page becomes hidden and clear interval
    const handleVisibility = () => {
      if (document.hidden) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        // When user returns and we've already had an interaction, restart the interval
        if (hasInteracted && intervalRef.current === null) {
          intervalRef.current = window.setInterval(() => {
            if (audioRef.current && !document.hidden) {
              try {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              } catch (e) {
                console.log('Failed to play audio on visibility resume', e);
              }
            }
          }, 15000) as unknown as number;
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("keydown", playAudio);
      window.removeEventListener("mousemove", playAudio);
      window.removeEventListener("touchstart", playAudio);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hasInteracted]);

  return (
    <audio ref={audioRef} src="/sounds/hooting.mp3" preload="auto" />
  );
}