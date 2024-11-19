'use client'

import BackgroundGradient from "@/components/BackgroundGradient";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Services() {
  return (
    <section className="container isolate relative">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="top" id={7}/>
      <div className="pt-20 tracking-tight mb-4 flex flex-col items-center md:flex-row md:justify-center text-3xl font-bold text-gray-300 md:text-4xl lg:text-5xl">
        <div className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:mr-4">
          Secure Systems
        </div>
        <div className="mt-1 md:mt-0">Protected Data</div>
      </div>
      <div className="flex justify-center text-center text-lg font-normal lg:text-xl text-gray-400">
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
    description: "Simulate real-world attacks to identify vulnerabilities and strengthen your system's security.",
    id: 1,
  },
  {
    title: "Network Security",
    description: "Secure your network with robust solutions to protect data and prevent unauthorized access.",
    id: 2,
  },
  {
    title: "IT Services",
    description: "Optimize your business with tailored IT solutions, from cloud integration to system management.",
    id: 3,
  },
  {
    title: "Courses",
    description: "Learn from experts with courses on cybersecurity, programming, and more for all skill levels.",
    id: 4,
  },
  {
    title: "Workshops",
    description: "Join interactive workshops to gain hands-on experience and practical knowledge in trending fields.",
    id: 5,
  },
  {
    title: "Digital Forensics",
    description: "Analyze and recover digital evidence to support investigations and ensure data integrity.",
    id: 6,
  },
];
