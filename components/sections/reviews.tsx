"use client";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "CTO, FinTech Startups",
    content: "DevPeaks transformed our MVP into a scalable enterprise solution. The attention to performance and security was exceptional.",
    avatar: "SJ",
  },
  {
    name: "David Chen",
    role: "Founder, EcoStream",
    content: "Their design team just gets it. Our conversion rate doubled within a month of launching the new site. Highly recommended.",
    avatar: "DC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Lead, Nexus",
    content: "We needed a complex AI integration, and DevPeaks delivered ahead of schedule. Truly a partner, not just a vendor.",
    avatar: "MR",
  },
  {
    name: "Emily White",
    role: "Marketing Director, Aura",
    content: "Professional, transparent, and incredibly talented. They helped us clarify our vision and execute it perfectly.",
    avatar: "EW",
  },
  {
    name: "James Wilson",
    role: "CEO, Wilson Media",
    content: "The best development agency we've worked with. The code quality is top-notch and the communication is seamless.",
    avatar: "JW",
  },
];

export function Reviews() {
  return (
    <section className="py-24 overflow-hidden border-y border-white/5 bg-black/20">
      <Container className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Loved by <span className="text-blue-500">Innovators</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Don't just take our word for it. Here's what our clients have to say.
        </p>
      </Container>

      <div className="relative flex w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#030712] to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#030712] to-transparent" />

        {/* Marquee Container */}
        <motion.div
           className="flex gap-8 px-4"
           animate={{ x: "-50%" }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 30, // Adjust speed here
           }}
           style={{ width: "max-content" }}
        >
          {/* Double the list to create seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="relative w-[350px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-blue-500/30 hover:bg-white/10"
            >
              <div className="flex gap-1 mb-4">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                 ))}
              </div>
              <p className="mb-6 text-gray-300 italic">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-400">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
