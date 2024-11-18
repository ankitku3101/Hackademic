import BackgroundGradient from '@/components/BackgroundGradient';
import React from 'react';
import { Shield, Server, Wifi, Smartphone, Cog, CheckCircle, ArrowRight } from 'lucide-react'

function page() {
  return (
    <div className="container h-auto pb-20">
        <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12} />
        <div className="p-8">
            <h1 className="p-4 text-3xl text-center font-bold tracking-tight text-gray-200 md:text-5xl">
                Professional Penetration Testing Services
            </h1>
            <p className="p-4 text-center tracking-tight text-base md:text-xl font-normal text-gray-300 max-w-2xl mx-auto">
                Identify vulnerabilities in your systems before hackers do. Our expert team provides comprehensive penetration testing to secure your digital assets.
            </p>
        </div>
        <div className='p-4 grid grid-cols-1 gap-10 md:grid-cols-3'>
            <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
                <div className='flex flex-col items-center'>
                    <Server className="h-16 w-20 text-blue-400 m-4" />
                    <h1 className='text-lg font-semibold pb-2'>Network Penetration Testing</h1>
                    <p className='tracking-tight'>Comprehensive assessment of your network infrastructure to identify and exploit vulnerabilities.</p>
                </div>
            </div>                   
            <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
                <div className='flex flex-col items-center'>
                    <Wifi className="h-16 w-20 text-blue-400 m-4" />
                    <h1 className='text-lg font-semibold pb-2'>Wireless Network Testing</h1>
                    <p className='tracking-tight'>Evaluate the security of your Wi-Fi networks and identify potential entry points for attackers.</p>
                </div>
            </div>                   
            <div className='bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl'>
                <div className='flex flex-col items-center'>
                    <Smartphone className="h-16 w-20 text-blue-400 m-4" />
                    <h1 className='text-lg font-semibold pb-2'>Mobile Application Testing</h1>
                    <p className='tracking-tight'>Thorough security assessment of your mobile applications on iOS and Android platforms.</p>
                </div>
            </div>                 
        </div>
        <div className="m-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Penetration Testing Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2">1. Scoping and Planning</h4>
              <p className="text-sm text-gray-400">Define the scope and objectives of the penetration test.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="text-green-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2">2. Reconnaissance and Scanning</h4>
              <p className="text-sm text-gray-400">Gather information and identify potential vulnerabilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-purple-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2">3. Exploitation and Testing</h4>
              <p className="text-sm text-gray-400">Attempt to exploit identified vulnerabilities to assess their impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-red-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2">4. Reporting and Remediation</h4>
              <p className="text-sm text-gray-400">Provide detailed reports and actionable recommendations.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default page;
