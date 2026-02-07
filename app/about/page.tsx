"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming we might use images later, or just placeholders

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <Container>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              We Are <span className="text-blue-500">DevPeaks</span>
            </h1>
            <p className="text-xl text-gray-400">
              A collective of visionaries, engineers, and strategists dedicated to redefining what's possible in the digital realm.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower forward-thinking businesses with technology that is not just functional, but transformative. We believe in building digital experiences that drive measurable growth and leave a lasting impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global standard for digital excellence, where innovation meets reliability. We envision a future where every business, regardless of size, has access to world-class technology.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Culture */}
      <section className="py-24 bg-white/5">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Built on Excellence</h2>
            <p className="text-lg text-gray-400 mb-12">
              At DevPeaks, we are more than just a team of developers. We are a collective of innovators, problem-solvers, and strategic thinkers. Our strength lies in our unified approach to tackling complex digital challenges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
             <div className="p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-400">We don't just follow trends; we set them. Our team is constantly exploring new technologies to give our clients a competitive edge.</p>
             </div>
             <div className="p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">Client-Centric</h3>
                <p className="text-gray-400">Your success is our success. We view every project as a partnership, working closely with you to understand your goals and exceed expectations.</p>
             </div>
             <div className="p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">Global Standards</h3>
                <p className="text-gray-400">Founded by Saqib Ali Butt and Abdullah Naveed, DevPeaks maintains world-class standards in code quality, design, and project management.</p>
             </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
