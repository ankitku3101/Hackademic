import BackgroundGradient from "@/components/BackgroundGradient";
import AnimatedCard from "@/components/AnimatedCard";
import {
  ChartNoAxesCombined,
  MessageCircleReply,
  ShieldCheck,
} from "lucide-react";

export function WhyUs() {
  return (
    <section
      id="features"
      className="relative block px-6 py-10 md:py-20 md:px-10"
    >
      <BackgroundGradient
        color1="#ff80b5"
        color2="#9089fc"
        position="bottom left"
        id={10}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Why choose us
        </span>
        <h2 className="block w-full font-bold text-3xl sm:text-4xl md:text-5xl text-gray-300">
          Services That Our Customers Love
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
          Committed to Excellence, We Ensure Every Service Exceeds Expectations
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-1 lg:grid-cols-3">
        <AnimatedCard
          icon={<ShieldCheck className="h-10 w-10 text-white" />}
          title="Expertise and Experience"
          description="Our team consists of cybersecurity professionals with extensive experience in securing websites from various threats, including malware, ransomware, DDoS attacks, and data breaches."
          circleColor="bg-blue-700"  
        />
        <AnimatedCard
          icon={<ChartNoAxesCombined className="h-10 w-10 text-white" />}
          title="Customizable and Scalable"
          description="Whether you run a small blog or a large e-commerce site, our solutions are scalable, flexible and customizable to suit your specific security requirements."
          circleColor="bg-purple-700"
        />
        <AnimatedCard
          icon={<MessageCircleReply className="h-10 w-10 text-white" />}
          title="Fast Response and Support"
          description="In the event of an attack or breach, our team is quick to respond. We provide 24/7 support to mitigate risks and reduce downtime, helping you recover swiftly."
          circleColor="bg-green-700"
        />
      </div>
    </section>
  );
}
