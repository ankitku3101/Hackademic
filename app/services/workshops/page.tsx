import BackgroundGradient from '@/components/BackgroundGradient';
import React from 'react';
import { BookOpen, Code, Shield, Users, Brain, Target, Cloud } from 'lucide-react'

function page() {
  return (
    <div className="container h-auto pb-20">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12} />
      <div className="p-8">
        <h1 className="p-4 text-3xl text-center font-bold tracking-tight text-gray-200 md:text-5xl">
            Join our Workshops
        </h1>
        <p className="p-4 text-center tracking-tight text-base md:text-xl font-normal text-gray-300 max-w-2xl mx-auto">
          Empower your team with hands-on learning experiences designed to enhance your organization's security posture.
        </p>
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
      </div>
    </div>
  );
}

export default page;
