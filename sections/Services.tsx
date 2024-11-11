'use client'

import BackgroundGradient from "@/components/BackgroundGradient";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Services() {
  return (
    <section className="container isolate relative">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="top" id={7}/>
      <div className="pt-20 tracking-tight mb-4 flex justify-center text-2xl font-bold text-white md:text-4xl lg:text-6xl">
        <div className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4">Secure Systems</div>
        Protected Data
      </div>
      
      <div className="flex justify-center text-lg font-normal lg:text-xl text-gray-400">
        We offer a wide range of services for your system's privacy and safety
      </div>  
      
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={services} />
      </div>
    </section>
  );
}

export const services = [
  {
    title: "Penetration Testing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    id: 1
  },
  {
    title: "Network Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    id: 2
  },
  {
    title: "Web Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    id: 3
  },
  {
    title: "Cloud Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    id: 4
  },
  {
    title: "Server Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    id: 5
  },
  {
    title: "Threat Intelligence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    id: 6
  },
];
