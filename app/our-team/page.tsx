import BackgroundGradient from '@/components/BackgroundGradient';
import MemberCard from '@/components/MemberCard';
import ProfileCard from '@/components/ProfileCard';
import React from 'react';

function Page() {
  return (
    <div className="container mx-auto h-auto pb-20 px-4 sm:px-6 lg:px-8">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12} />

      <div className="text-center mt-12 mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-300">
          Our People Make Us Great
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 mb-8">
        <div className="flex-shrink-0">
          <ProfileCard
            profileImg="/assets/KhushiPant.jpg"
            name="Khushi Pant"
            designation="Founder"
          />
        </div>
        <div className="flex flex-col items-center max-w-md md:max-w-xl gap-4 text-center md:text-center px-4 sm:px-6 mt-12">
          <h2 className="text-lg italic font-semibold px-4 sm:px-6">
            "Security is not a one-time event, it's an ongoing process"
          </h2>
          <p className="text-gray-200 px-4 sm:px-6">
            As the founder and owner of Hackademic, I am dedicated to providing top-tier cybersecurity services to protect businesses from evolving digital threats.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 sm:px-6">
        <MemberCard profileImg={'/assets/kaushik.jpg'} name="Kaushik Thapa" designation="Security Professional" />
        <MemberCard profileImg={'/assets/BijendraRana.jpg'} name="Bijendra Rana" designation="Security Professional" />
        <MemberCard profileImg={'/assets/vaibhav.jpg'} name="Vaibhav Lekhwar" designation="Security Professional" />
        <MemberCard profileImg={'/assets/dummy.png'} name="Ankit Kumar" designation="Developer" />
      </div>
    </div>
  );
}

export default Page;
