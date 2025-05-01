import BackgroundGradient from '@/components/BackgroundGradient';
import React from 'react';
import { BookOpen, Code, Shield, Users, Brain, Target, Cloud } from 'lucide-react'
import Link from 'next/link';

function page() {
  return (
    <div className="container h-auto pb-20 mt-16">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12} />
      <div className="p-8">
        <div className="bg-[url('/assets/workshop-bg.jpg')] bg-cover bg-center bg-gray-900 bg-blend-overlay rounded-md py-12">
          <h1 className="p-4 text-3xl text-center font-bold tracking-tight text-gray-200 md:text-5xl">
              Join our Workshops
          </h1>
          <p className="p-4 text-center tracking-tight text-base md:text-xl font-normal text-gray-300 max-w-2xl mx-auto">
            Empower your team with hands-on learning experiences designed to enhance your organization's security posture.
          </p>
        </div>
        <div className="my-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Are Workshops Needed?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <li className="flex items-start">
              <Shield className="mr-4 text-blue-400 flex-shrink-0" />
              <span>Rapidly evolving threat landscape requires continuous learning and adaptation</span>
            </li>
            <li className="flex items-start">
              <Users className="mr-4 text-green-400 flex-shrink-0" />
              <span>Hands-on experience is crucial for developing practical cybersecurity skills</span>
            </li>
            <li className="flex items-start">
              <Code className="mr-4 text-purple-400 flex-shrink-0" />
              <span>Interactive learning environments foster better retention of complex security concepts</span>
            </li>
            <li className="flex items-start">
              <Brain className="mr-4 text-red-400 flex-shrink-0" />
              <span>Workshops provide opportunities to learn from industry experts and peers</span>
            </li>
            <li className="flex items-start">
              <Target className="mr-4 text-yellow-400 flex-shrink-0" />
              <span>Simulated scenarios prepare teams for real-world cyber attacks</span>
            </li>
            <li className="flex items-start">
              <Cloud className="mr-4 text-indigo-400 flex-shrink-0" />
              <span>Stay updated with the latest security tools, techniques, and best practices</span>
            </li>
          </ul>
        </div>
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
              <div className="block text-center mb-5 lg:text-left lg:mb-0">
                <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                  Connect with us
                </h2>
                <p className="text-xl text-indigo-100">
                  Contact us with any query or any idea.
                </p>
              </div>
              <Link
                href={"/#contact"}
                className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500 hover:shadow-md hover:bg-indigo-50"
              >
                Get In Touch
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                    stroke="#4F46E5"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>           
      </div>
    </div>
  );
}

export default page;
