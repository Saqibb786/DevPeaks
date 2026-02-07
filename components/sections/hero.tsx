"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[80px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-400 backdrop-blur-sm"
        >
          <span className="mr-2 flex h-2 w-2 items-center justify-center rounded-full bg-blue-500">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-blue-400 opacity-75"></span>
          </span>
          Accepting New Projects for 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Features</span> Not Just Websites.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          DevPeaks is a global digital agency. We combine futuristic design with robust engineering to help startups and enterprises peak in their industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-gray-200">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              View Services
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
