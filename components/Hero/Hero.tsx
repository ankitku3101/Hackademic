"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-[#010101] relative w-full isolate overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover md:object-cover z-0 md:opacity-70 opacity-40 custom-object-position"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
          <p className="text-2xl font-normal text-neutral-200 max-w-md mt-2 mb-8">
          Where Cybersecurity Meets <span className="text-red-500 font-semibold relative top-[1.5px]">Mastery</span>
          </p>
          <p className="tracking-wide text-neutral-200 max-w-md text-justify italic font-serif"> 
          "At Hackademic, Our mission is to equip businesses and governments with the knowledge, tools, & tactical skills needed to withstand cyber warfare.
           We don’t just train professionals—we forge cyber guardians who anticipate, neutralize, and outsmart threats before they strike. Because in the digital age, 
           security isn’t optional<br/>—it’s survival."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
