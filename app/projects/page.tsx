"use client";

import { Container } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Placeholder projects
const projects = [
  {
    title: "FinTech Dashboard Overhaul",
    category: "Web App / FinTech",
    description: "Redesigned a complex financial dashboard to improve user engagement and reduce churn by 40%.",
    image: "/images/project-1.jpg", // Placeholder
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
  },
  {
    title: "E-commerce Scale-Up",
    category: "E-commerce / Optimization",
    description: "Migrated a legacy store to a headless architecture, resulting in a 300% increase in load speed.",
    image: "/images/project-2.jpg", // Placeholder
    tags: ["Shopify Plus", "React", "Node.js"],
  },
  {
    title: "AI Content Generator",
    category: "SaaS / AI",
    description: "Built an AI-powered tool that helps marketers generate SEO-optimized content in seconds.",
    image: "/images/project-3.jpg", // Placeholder
    tags: ["OpenAI API", "Python", "Vue.js"],
  },
  {
    title: "HealthTech Mobile App",
    category: "Mobile / Healthcare",
    description: "Developed a HIPAA-compliant mobile app for patient monitoring and telemedicine consults.",
    image: "/images/project-4.jpg", // Placeholder
    tags: ["React Native", "Firebase", "WebRTC"],
  },
];

export default function ProjectsPage() {
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
              Featured <span className="text-blue-500">Work</span>
            </h1>
            <p className="text-xl text-gray-400">
              A selection of projects where we've helped our clients achieve remarkable growth and innovation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group cursor-pointer overflow-hidden border-white/5 hover:border-blue-500/30">
                  {/* Image Placeholder */}
                  <div className="aspect-video w-full rounded-lg bg-white/5 mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium bg-gradient-to-br from-white/5 to-white/10 group-hover:scale-105 transition-transform duration-500">
                        {project.category} Preview
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="text-sm font-medium text-blue-400 mb-2">{project.category}</div>
                        <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-white/50 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <CardDescription className="mb-6">{project.description}</CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Have a project in mind?</h3>
            <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Let's Talk
                </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
