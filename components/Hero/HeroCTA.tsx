"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

export function HeroCTA() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
      >
        Cyber threats won’t wait <br /> Neither should you. Start defending today.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="-mb-40"
        >
        <HoverBorderGradient
            containerClassName="rounded-full mt-10"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
        >
            <Link href="/contact">Enroll Now</Link>
        </HoverBorderGradient>  
      </motion.div>  
    </LampContainer>
  );
}
