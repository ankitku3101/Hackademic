import Image from "next/image";
import BackgroundGradient from "@/components/BackgroundGradient";

export function About() {
    return (
        <section id="about" className="relative max-w-6xl px-6 py-10 mx-auto sm:py-16 lg:px-8">
        <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="top left" id={6}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-500">
            <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
        
        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
            <Image
                src={'/assets/pie.svg'}
                alt="image"
                loading="lazy"
                width={50}
                height={50}
                className="w-full"
            />
            </div>
            <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-4xl text-white">
            Protect Your Business with Top-Tier Cybersecurity Services
            </h2>
            <p className="my-8 text-gray-300">
            Our dedicated professionals provide comprehensive protection tailored to your unique needs,
             ensuring your data remains safe and secure. <br/> 
             <br/>  Phone: +91 6396111576 <br /> 
            Email: support@hackademic.in
            </p>
            <div className="divide-y space-y-4 divide-gray-800">
                <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-900/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-indigo-400">
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                    </svg>        
                </div>
                <div className="w-5/6">
                    <h3 className="font-semibold text-lg text-indigo-300">Get in touch with us</h3>
                    <p className="text-gray-400">We generally respond within 1-2 working days</p>
                </div> 
                </div> 
                <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-900/20">  
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>                                      
                </div>
                <div className="w-5/6">
                    <h3 className="font-semibold text-lg text-teal-300">Dehradun, Uttarakhand</h3>
                    <p className="text-gray-400">Remote</p>
                </div> 
                </div> 
            </div>
        </div>
        </div>
    </section>
    )
}