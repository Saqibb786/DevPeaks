"use client";

import { Container } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Smartphone, Cpu, BarChart, Layers, Globe, Database, Cloud, Lock } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Cutting-edge websites built with Next.js, React, and modern CSS frameworks. We focus on speed, accessibility, and SEO.",
    features: ["Custom Web Apps", "E-commerce Platforms", "CMS Integration", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
    features: ["React Native", "iOS & Android", "App Store Optimization", "Maintenance & Support"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that automate processes, analyze data, and provide predictive insights for your business.",
    features: ["Chatbots & Assistants", "Predictive Analytics", "NLP Solutions", "Computer Vision"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centric design that creates intuitive and engaging digital experiences. We bridge the gap between aesthetics and functionality.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description: "Robust and scalable server-side architecture that powers your applications securely and efficiently.",
    features: ["API Development", "Database Design", "Microservices", "Cloud Infrastructure"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and management to ensure your applications are always available and performing at their best.",
    features: ["AWS/Azure/GCP", "DevOps & CI/CD", "Serverless Architecture", "Security Audits"],
  },
  {
    icon: BarChart,
    title: "Digital Strategy",
    description: "Data-driven strategies to grow your digital presence, reach valuable customers, and maximize ROI.",
    features: ["Market Analysis", "Growth Hacking", "Conversion Rate Optimization", "Analytics Setup"],
  },
  {
    icon: Globe,
    title: "SEO & Digital Marketing",
    description: "Comprehensive marketing services to improve visibility and drive organic and paid traffic to your digital products.",
    features: ["Technical SEO", "Content Strategy", "PPC Campaigns", "Social Media Marketing"],
  },
   {
    icon: Lock,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security measures and compliance standards.",
    features: ["Security Audits", "Penetration Testing", "Compliance (GDPR/HIPAA)", "Data Encryption"],
  },
];

export default function ServicesPage() {
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
              Our <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-400">
              We provide a holistic approach to digital transformation, covering everything from design and development to strategy and growth.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                  <CardDescription className="mb-6 flex-grow">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
