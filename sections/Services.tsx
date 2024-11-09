'use client'

import { HoverEffect } from "../components/ui/card-hover-effect";

export function Services() {
  return (
    <section className="container isolate relative">
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative right-0 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(90% 10%, 100% 30%, 85% 50%, 100% 70%, 80% 90%, 60% 85%, 50% 75%, 40% 90%, 20% 75%, 10% 50%)', 
            backgroundPosition: 'bottom right',
            backgroundSize: 'cover', 
          }}
        ></div>
      </div>

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
