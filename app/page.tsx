import Hero from "@/components/Hero/Hero";
import { About } from "@/sections/About";
import { Blogs } from "@/sections/Blogs";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Blogs />
    </>
  );
}
