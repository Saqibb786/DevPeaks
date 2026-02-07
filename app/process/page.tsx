"use client";

import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, Search, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to build a roadmap for success.",
    details: ["Stakeholder Interviews", "Market Analysis", "Technical Feasibility"]
  },
  {
    icon: Lightbulb,
    title: "Ideation & UX",
    description: "Structuring the user journey. We create wireframes and user flows to ensure intuitive navigation and core functionality.",
    details: ["Information Architecture", "Wireframing", "User Journey Mapping"]
  },
  {
    icon: PenTool,
    title: "UI Design",
    description: "Crafting the visual identity. We design high-fidelity interfaces that align with your brand and captivate your users.",
    details: ["Visual Systems", "High-Fidelity Mockups", "Interactive Prototypes"]
  },
  {
    icon: Code2,
    title: "Development",
    description: "Writing clean, scalable code. We build your product using modern tech stacks ensuring performance and security.",
    details: ["Frontend & Backend", "API Integration", "Database Design"]
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    description: "Rigorous testing across devices and scenarios to ensure a bug-free, smooth experience before launch.",
    details: ["Performance Testing", "Security Audits", "Usability Testing"]
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deploying to production. We monitor the launch and provide ongoing support to scale your product.",
    details: ["CI/CD Deployment", "Analytics Setup", "Post-Launch Support"]
  }
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How We <span className="text-blue-500">Build</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            From chaos to clarity. Our proven process ensures transparency, quality, and velocity at every stage of the product lifecycle.
          </motion.p>
        </Container>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="py-10 relative">
        <Container>
            <div className="relative max-w-4xl mx-auto">
                {/* Center Line (hidden on mobile, visible on md) */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
                    <motion.div 
                        style={{ height: lineHeight }} 
                        className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
                    />
                </div>

                <div className="space-y-16 md:space-y-24">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Dot */}
                                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-10 bg-black rounded-full border border-white/10 shadow-xl shadow-black">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                                </div>

                                {/* Content Side */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className={`flex flex-col ${isEven ? 'md:items-end' : ''}`}>
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-4 text-blue-400">
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                                        <ul className={`space-y-2 ${isEven ? 'md:justify-end' : ''}`}>
                                            {step.details.map((detail, i) => (
                                                <li key={i} className={`flex items-center text-sm text-gray-500 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2 ${isEven ? 'md:mr-0 md:ml-2' : ''}`} />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Empty Side for Balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center">
        <Container>
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-blue-900/20 to-black border border-white/10 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to start your journey?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">We&#39;ve got the process down to a science. All we need is your vision.</p>
                </div>
            </div>
        </Container>
      </section>
    </main>
  );
}
