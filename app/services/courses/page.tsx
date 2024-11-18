import BackgroundGradient from '@/components/BackgroundGradient';
import React from 'react';
import { BookOpen, Code, Shield, Users } from 'lucide-react'

function page() {
  return (
    <div className="container h-auto pb-20">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12} />
      <div className="p-8">
        <h1 className="p-4 text-3xl text-center font-bold tracking-tight text-gray-200 md:text-5xl">
            Master Cybersecurity with Our Courses
        </h1>
        <p className="p-4 text-center tracking-tight text-base md:text-xl font-normal text-gray-300 max-w-2xl mx-auto">
            Equip yourself with the skills to defend against cyber threats. <br/>Our expert-led courses cover a wide range of cybersecurity topics.
        </p>
      </div>
      <div className='p-4 grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
            <div className='flex flex-col items-center'>
                <Shield className="h-16 w-20 text-blue-400 m-4" />
                <h1 className='text-lg font-semibold pb-2'>Network Security Fundamentals</h1>
                <p className='tracking-tight'>Learn the basics of network security, including firewalls, VPNs, and intrusion detection systems.</p>
            </div>
        </div>                   
        <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
            <div className='flex flex-col items-center'>
                <Code className="h-16 w-20 text-blue-400 m-4" />
                <h1 className='text-lg font-semibold pb-2'>Ethical Hacking and Penetration Testing</h1>
                <p className='tracking-tight'>Discover vulnerabilities and learn how to secure systems through hands-on ethical hacking techniques.</p>
            </div>
        </div>                   
        <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
            <div className='flex flex-col items-center'>
                <Users className="h-16 w-20 text-blue-400 m-4" />
                <h1 className='text-lg font-semibold pb-2'>Social Engineering and Phishing Defense</h1>
                <p className='tracking-tight'>Understand the psychology behind social engineering attacks and learn strategies to protect against them.</p>
            </div>
        </div>                   
        <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
            <div className='flex flex-col items-center'>
                <BookOpen className="h-16 w-20 text-blue-400 m-4" />
                <h1 className='text-lg font-semibold pb-2'>Cybersecurity Governance and Compliance</h1>
                <p className='tracking-tight'>Learn about cybersecurity frameworks, regulations, and best practices for organizational security.</p>
            </div>
        </div>                   
      </div>
    </div>
  );
}

export default page;
