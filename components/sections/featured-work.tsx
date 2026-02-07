"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const featuredProjects = [
  {
    title: "EcoScout",
    category: "AI / Surveillance",
    description: "Smart vehicle littering & smoke emission detection system using advanced computer vision.",
    image: "/images/ecoscout-preview.jpg", 
    color: "from-green-500/20 to-emerald-500/5",
    tags: ["Python", "YOLOv8", "React"]
  },
  {
    title: "FinTech PRO",
    category: "SaaS / Finance",
    description: "Real-time crypto analytics dashboard with sub-millisecond data updates.",
    image: "/images/fintech-preview.jpg",
    color: "from-blue-500/20 to-cyan-500/5",
    tags: ["Next.js", "WebSockets", "D3.js"]
  }
];

export function FeaturedWork() {
  return (
    <section className="py-20 bg-black relative">
       {/* Background gradient */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                >
                    Selected Work
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg max-w-xl"
                >
                    We don't just write code; we engineer experiences. Here are a few projects that define our standard.
                </motion.p>
            </div>
            
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Link href="/projects" className="group flex items-center text-white font-medium hover:text-blue-400 transition-colors">
                    View All Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                >
                    <div className="block group cursor-default">
                        <div className={`relative overflow-hidden rounded-3xl aspect-[16/9] mb-6 border border-white/10 bg-gradient-to-br ${project.color}`}>
                            {/* Placeholder for actual image or creative abstract art */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white/20 uppercase tracking-widest">{project.title}</span>
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <div className="flex gap-2">
                                     {project.tags.map(tag => (
                                         <span key={tag} className="text-xs px-2 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">{tag}</span>
                                     ))}
                                </div>
                            </div>
                            <p className="text-gray-400 line-clamp-2">{project.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </Container>
    </section>
  );
}
