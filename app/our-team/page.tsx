import BackgroundGradient from '@/components/BackgroundGradient';
import MemberCard from '@/components/MemberCard';
import ProfileCard from '@/components/ProfileCard';
import React from 'react';

function page() {
  return (
    <div className="container h-auto pb-20">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12} />
      <div className="p-8">
        <h1 className="text-6xl text-center font-bold tracking-tight text-gray-300">
          Our People Make Us Great
        </h1>
      </div>
      <div className="flex p-6 justify-center">
        <ProfileCard
          profileImg="/assets/KhushiPant.jpg"
          name="Khushi Pant"
          designation="Founder"
          emailId="khushi@gmail.com"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl mt-10 pb-16">
        <MemberCard profileImg={'/assets/dummy.png'} name="Kaushik Thapa" designation="Security Professional" />
        <MemberCard profileImg={'/assets/BijendraRana.jpg'} name="Bijendra Rana" designation="Security Professional" />
        <MemberCard profileImg={'/assets/dummy.png'} name="Vaibhav Lekhwar" designation="Security Professional" />
        <MemberCard profileImg={'/assets/dummy.png'} name="Ankit Kumar" designation="Developer" />
      </div>
    </div>
  );
}

export default page;
