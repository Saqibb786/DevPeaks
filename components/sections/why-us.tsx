"use client";

import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Forward-Thinking Companies Choose <span className="text-blue-500">DevPeaks</span>
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              We aren't just a service provider; we are your strategic partner in growth. Our approach combines technical excellence with business acumen to deliver results that matter.
            </p>
            
            <ul className="space-y-4">
              {[
                "Transparent communication and agile workflow.",
                "Commitment to code quality and maintainability.",
                "Focus on user experience and conversion.",
                "Long-term partnership mindset.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 shrink-0 text-blue-500" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative isolate">
             {/* Abstract visual representation */}
             <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-blue-500/20 p-6">
                        <div className="text-3xl font-bold text-blue-400">98%</div>
                        <div className="text-sm text-gray-400">Client Retention</div>
                    </div>
                    <div className="rounded-lg bg-purple-500/20 p-6">
                        <div className="text-3xl font-bold text-purple-400">50+</div>
                        <div className="text-sm text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="col-span-2 rounded-lg bg-white/5 p-6 border border-white/5">
                        <div className="text-sm text-gray-400 mb-2">Average Impact</div>
                        <div className="text-xl font-semibold text-white">"DevPeaks transformed our digital presence and doubled our leads."</div>
                    </div>
                </div>
             </div>
             {/* Glow behind */}
             <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
