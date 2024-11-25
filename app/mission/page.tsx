import BackgroundGradient from '@/components/BackgroundGradient';
import MemberCard from '@/components/MemberCard';
import ProfileCard from '@/components/ProfileCard';
import React from 'react';

function Page() {
  return (
    <div className="container mx-auto h-auto pb-20 px-4 sm:px-6 lg:px-8">
      <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={8} />

      <div className="text-center mt-12 mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-300">
          Our Mission
        </h1>
        <p className="text-gray-200 sm:p-10 md:p-20 text-justify">
            At Hackademic, our mission is to safeguard the digital landscapes of government agencies and private organizations by providing robust, innovative, and adaptive cybersecurity solutions. We are dedicated to protecting sensitive data, ensuring operational continuity, and mitigating the risks posed by cyber threats.
            By leveraging cutting-edge technology, continuous research, and a team of highly skilled cybersecurity professionals, we aim to reduce cybercrime and fortify critical infrastructures. Our commitment is to empower organizations with the confidence to operate securely in a rapidly evolving digital world.
            With a proactive approach, we not only respond to emerging threats but also anticipate them, creating a safer and more resilient digital environment for all. Together, we strive to build a future where trust and security underpin every digital interaction.
        </p>
      </div>
    </div>
  );
}

export default Page;
