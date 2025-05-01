"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundGradient from "../BackgroundGradient";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-[#010101] relative w-full isolate overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0 md:opacity-60 opacity-30"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Gradient */}
      {/* <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="top left" id={3} /> */}
      
      {/* Content */}
      <div className="mx-auto w-full relative h-[20rem] md:h-[40rem] px-16 z-10 flex items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center md:text-left w-full" 
        >
          <h2 className="text-5xl md:text-7xl tracking-tighter font-bold text-white">
            HACKADEMIC
          </h2>
          <p className="tracking-tighter text-2xl font-normal text-neutral-200 max-w-md mt-2">
            Never compromise on <span className="text-red-500 font-semibold">security</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}