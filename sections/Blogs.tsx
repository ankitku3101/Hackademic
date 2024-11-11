import BackgroundGradient from "@/components/BackgroundGradient";
import Image from "next/image";

export function Blogs() {
    return (
        <section id="blog">
            <div className="relative max-w-7xl mx-auto m-10 px-6 md:px-12 xl:px-6">
                <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom left" id={3}/>
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Latest Blogs</h2>
                    <p className="lg:mx-auto lg:w-6/12 text-gray-300">
                        Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
                        aliquid explicabo? Excepturi, voluptate?
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group p-6 sm:p-8 rounded-3xl bg-gray-800 border border-gray-700 shadow-none">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                                alt="art cover" 
                                loading="lazy" 
                                width={1000} 
                                height={667} 
                                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-6 relative">
                            <h3 className="text-2xl font-semibold text-white">
                                De fuga fugiat lorem ispum laboriosam expedita.
                            </h3>
                            <p className="mt-6 mb-8 text-gray-300">
                                Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                            </p>
                            <a className="inline-block" href="#">
                                <span className="text-blue-300">Read more</span>
                            </a>
                        </div>
                    </div>
                    <div className="group p-6 sm:p-8 rounded-3xl bg-gray-800 border border-gray-700 shadow-none">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                                alt="art cover" 
                                loading="lazy" 
                                width={1000} 
                                height={667} 
                                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-6 relative">
                            <h3 className="text-2xl font-semibold text-white">
                                De fuga fugiat lorem ispum laboriosam expedita.
                            </h3>
                            <p className="mt-6 mb-8 text-gray-300">
                                Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                            </p>
                            <a className="inline-block" href="#">
                                <span className="text-blue-300">Read more</span>
                            </a>
                        </div>
                    </div>
                    <div className="group p-6 sm:p-8 rounded-3xl bg-gray-800 border border-gray-700 shadow-none">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                                alt="art cover" 
                                loading="lazy" 
                                width={1000} 
                                height={667} 
                                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-6 relative">
                            <h3 className="text-2xl font-semibold text-white">
                                De fuga fugiat lorem ispum laboriosam expedita.
                            </h3>
                            <p className="mt-6 mb-8 text-gray-300">
                                Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                            </p>
                            <a className="inline-block" href="#">
                                <span className="text-blue-300">Read more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
