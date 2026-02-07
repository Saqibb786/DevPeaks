"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket, Globe } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Performance-obsessed engineering ensuring sub-second load times and silky smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Built on robust architecture designed to scale with your business while keeping data secure.",
  },
  {
    icon: Rocket,
    title: "Growth Driven",
    description: "Every pixel is placed with conversion in mind. We build digital products that grow your bottom line.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "World-class design and code quality that competes on the global stage. No compromises.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="text-gray-400">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
