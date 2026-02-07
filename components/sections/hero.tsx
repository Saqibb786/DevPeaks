"use client";

import { Container } from "@/components/ui/container";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse delay-1000" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-md"
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
          className="mb-8 max-w-5xl text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl lead"
        >
          We Build <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">Digital Features</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-2xl text-lg text-gray-400 sm:text-xl md:text-2xl leading-relaxed"
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
            <Button size="lg" className="h-14 px-10 text-lg font-semibold bg-white text-black hover:bg-gray-200 rounded-full transition-transform hover:scale-105">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold rounded-full border-white/10 hover:bg-white/5 hover:text-white transition-transform hover:scale-105">
              View Services
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
