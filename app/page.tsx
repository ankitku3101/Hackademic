import Hero from "@/components/Hero/Hero";
import { About } from "@/sections/About";
import { Blogs } from "@/sections/Blogs";
import { CallToAction } from "@/sections/CallToAction";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { WhyUs } from "@/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Blogs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
