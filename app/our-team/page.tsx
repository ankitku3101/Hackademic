import BackgroundGradient from '@/components/BackgroundGradient'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'

function page() {
  return (
        <div className="min-h-screen container">
            <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom" id={12}/>
            <div className='p-10'>
                <h1 className='text-6xl text-center font-bold tracking-tight text-gray-300'>
                    Our People Make Us Great
                </h1>
            </div>
            <div className='flex p-10 justify-center'>
                <ProfileCard
                    profileImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                    name="Khushi Pant"
                    designation="Founder"
                    emailId="khushi@gmail.com"
                />
            </div>
        </div>
    )
}

export default page
