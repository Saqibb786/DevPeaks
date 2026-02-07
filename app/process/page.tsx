"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience. We ask the right questions to uncover the core problems and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we craft a tailored roadmap. This includes technical architecture, design direction, and a project timeline.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create high-fidelity prototypes that bring your vision to life. We focus on user experience, ensuring every interaction is intuitive.",
  },
  {
    number: "04",
    title: "Development",
    description: "We build your product using modern, scalable technologies. Our code is clean, documented, and built for performance.",
  },
  {
    number: "05",
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free and performs flawlessly across all devices and browsers.",
  },
  {
    number: "06",
    title: "Launch & Scale",
    description: "We handle the deployment process to ensure a smooth launch. Post-launch, we help you measure success and scale your product.",
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-20">
        <Container>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Our <span className="text-blue-500">Process</span>
            </h1>
            <p className="text-xl text-gray-400">
              A proven workflow designed to deliver exceptional results, on time and within budget.
            </p>
          </motion.div>

          <div className="relative">
             {/* Central Line for Desktop */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content Side */}
                  <div className="md:w-1/2 md:px-12">
                     <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                        <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4 inline-block`}>
                           {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                     </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 top-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-black border-4 border-blue-500 z-10 box-content" />
                  </div>

                   {/* Empty Side for layout balance */}
                   <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
