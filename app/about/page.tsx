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

      {/* Partners / Team */}
      <section className="py-24 bg-white/5">
        <Container>
          <h2 className="text-3xl font-bold text-center text-white mb-16">Meet The Partners</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Partner 1 */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 text-center transition-colors hover:border-blue-500/50"
            >
               <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                 <div className="h-full w-full rounded-full bg-black/90 flex items-center justify-center text-2xl font-bold text-white">
                   SB
                 </div>
               </div>
               <h3 className="text-xl font-bold text-white">Saqib Ali Butt</h3>
               <p className="text-blue-400 mb-4">Co-Founder & Partner</p>
               <p className="text-sm text-gray-500">
                 Visionary leader with a passion for scalable architecture and business growth.
               </p>
            </motion.div>

            {/* Partner 2 */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 text-center transition-colors hover:border-blue-500/50"
            >
               <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-1">
                 <div className="h-full w-full rounded-full bg-black/90 flex items-center justify-center text-2xl font-bold text-white">
                   AN
                 </div>
               </div>
               <h3 className="text-xl font-bold text-white">Abdullah Naveed</h3>
               <p className="text-blue-400 mb-4">Co-Founder & Partner</p>
               <p className="text-sm text-gray-500">
                 Tech innovator focus on AI solutions and next-gen web technologies.
               </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
