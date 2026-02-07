"use client";

import { Container } from "@/components/ui/container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Smartphone, BarChart, Layers, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance websites and web applications built with Next.js and React.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that provide seamless user experiences.",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Leverage the power of Artificial Intelligence to automate processes and gain insights.",
  },
  {
    icon: Layers,
    title: "Product Design",
    description: "User-centric UI/UX design that is both beautiful and functional.",
  },
  {
    icon: BarChart,
    title: "Digital Strategy",
    description: "Data-driven strategies to grow your digital presence and reach valuable customers.",
  },
  {
    icon: Globe,
    title: "SEO & Marketing",
    description: "Improve visibility and drive traffic with organic search and paid campaigns.",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-black/50 py-32 sm:py-40 backdrop-blur-sm">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Comprehensive <span className="text-blue-500">Digital Services</span>
            </h2>
            <p className="text-lg text-gray-400">
              We offer a full suite of services to take your product from concept to launch and beyond.
            </p>
          </div>
          <Link href="/services">
            <Button variant="ghost" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 sm:p-10 flex flex-col items-start gap-4">
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
