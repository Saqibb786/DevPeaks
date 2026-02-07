"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { useState } from "react";

// Placeholder projects
const allProjects = [
  {
    id: 1,
    title: "FinTech Dashboard Overhaul",
    category: "Web App",
    description: "Redesigned a complex financial dashboard to improve user engagement and reduce churn by 40%.",
    image: "/images/project-1.jpg", 
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    id: 2,
    title: "E-commerce Scale-Up",
    category: "E-commerce",
    description: "Migrated a legacy store to a headless architecture, resulting in a 300% increase in load speed.",
    image: "/images/project-2.jpg", 
    tags: ["Shopify Plus", "React", "Node.js"],
    color: "from-emerald-500/20 to-teal-500/5",
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "AI",
    description: "Built an AI-powered tool that helps marketers generate SEO-optimized content in seconds.",
    image: "/images/project-3.jpg", 
    tags: ["OpenAI API", "Python", "Vue.js"],
    color: "from-purple-500/20 to-pink-500/5",
  },
  {
    id: 4,
    title: "HealthTech Mobile App",
    category: "Mobile",
    description: "Developed a HIPAA-compliant mobile app for patient monitoring and telemedicine consults.",
    image: "/images/project-4.jpg", 
    tags: ["React Native", "Firebase", "WebRTC"],
    color: "from-indigo-500/20 to-blue-500/5",
  },
   {
    id: 5,
    title: "Crypto Trading Bot",
    category: "Web App",
    description: "Automated trading algorithms with real-time market conceptualization and execution.",
    image: "/images/project-5.jpg", 
    tags: ["Rust", "React", "WebSockets"],
    color: "from-orange-500/20 to-red-500/5",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    category: "Web App",
    description: "A comprehensive booking engine with itinerary management and local experiences.",
    image: "/images/project-6.jpg", 
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    color: "from-teal-500/20 to-green-500/5",
  },
];

const categories = ["All", "Web App", "E-commerce", "AI", "Mobile"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter(project => filter === "All" || project.category === filter);

  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                  Our <span className="text-blue-500">Work</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-xl">
                  A showcase of technical excellence and creative innovation. We build products that scale.
                </p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            filter === cat 
                            ? "bg-white text-black" 
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="#" className="group h-full block">
                    <div className={`relative h-full rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-blue-500/30 transition-colors flex flex-col`}>
                        {/* Image Area */}
                        <div className={`aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 font-bold text-2xl uppercase tracking-widest">{project.category}</span>
                             </div>
                             
                             {/* Overlay */}
                             <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             
                             <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                             </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                            
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider px-2 py-1 border border-white/5">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-gray-500">
                <p>No projects found in this category.</p>
            </div>
        )}

        <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Have a project in mind?</h3>
            <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Let's Talk
                </Button>
            </Link>
          </div>
        </Container>
    </main>
  );
}
