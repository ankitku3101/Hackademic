"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import BackgroundGradient from "@/components/BackgroundGradient";

export function Testimonials() {
  return (
    <section className="relative">
        <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={2}/>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="pb-4  font-bold text-6xl text-center text-gray-300">
                Reviews
            </h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-300 text-center">
              What Our Clients Share About Staying Protected
            </p> 
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "As a student of ethical hacking, I find it a fascinating field that sharpens problem-solving skills while learning to protect systems from cyber threats and enhance security practices. Highly recommended!",
    name: "KAUSHIK THAPA",
    title: "Ethical Hacking",
  },
  {
    quote:
      "As a student, penetration testing gave me hands-on experience with real-world cybersecurity threats. It was an eye-opening way to understand vulnerabilities and the importance of proactive defense. Highly recommended!",
    name: "VAIBHAV LEKHWAR",
    title: "Pentesting & Vulnerability",
  },
  {
    quote: "As a student of network security, I find it essential for understanding how to safeguard networks from cyberattacks, prevent data breaches, and maintain secure communication across systems and devices. Highly recommended!",
    name: "BIJENDAR RANA",
    title: "Network Security",
  },
  {
    quote: "As a CCNA student, I find the course highly valuable for building foundational knowledge in networking, including routing, switching, and network troubleshooting, which are essential for a career in IT . Highly recommended!",
    name: "SHALINI DEVRARI",
    title: "CCNA",
  },
  {
    quote:
      "As a student of ethical hacking, I find it an exciting field that teaches how to identify and fix vulnerabilities, improving security skills and preparing for a career in cybersecurity. Highly recommended!",
    name: "SHIVANG SEMWAL",
    title: "Ethical Hacking",
  },
];
