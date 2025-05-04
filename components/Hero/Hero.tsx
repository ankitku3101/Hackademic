"use client";
import React from "react";
import { motion } from "framer-motion";
import EncryptButton from "../EncryptButton";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-[#010101] relative w-full isolate overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0 opacity-40 lg:opacity-70 hero-video"
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
          <h2 className="text-5xl md:text-7xl text-white font-[sansation-bold]">
            HACKADEMIC
          </h2>
          <p className="text-2xl font-normal text-neutral-200 max-w-[490px] mt-2 mb-8 font-[sansation] text-center">
          Where Cybersecurity Meets <span className="text-red-500 font-semibold relative top-[1.5px]">Mastery</span>
          </p>
          <p className="tracking-wide text-neutral-200 max-w-[490px] text-justify font-[sansation-italic] mb-6"> 
          "At Hackademic, Our mission is to equip businesses and governments with the knowledge, tools, & tactical skills needed to withstand cyber warfare.
           We don’t just train professionals — we forge cyber guardians who anticipate, neutralize, and outsmart threats before they strike. Because in the digital age, 
           security isn’t optional — it’s survival."
          </p>
          <EncryptButton />
        </motion.div>
      </div>
    </section>
  );
}
