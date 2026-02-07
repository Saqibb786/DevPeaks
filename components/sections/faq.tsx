"use client";

import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does DevPeaks offer?",
    answer: "We offer a comprehensive suite of digital services including Custom Web Development, Mobile App Development, AI & Machine Learning Solutions, UI/UX Design, and Digital Strategy. We specialize in building high-performance, scalable solutions for startups and enterprises.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline varies based on complexity. A standard marketing website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. We provide detailed timelines during our Discovery phase.",
  },
  {
    question: "Do you work with startups or enterprises?",
    answer: "Both! We love helping startups launch their MVP and find product-market fit, and we also scale enterprise systems to handle millions of users. Our flexible process adapts to your organization's needs.",
  },
  {
    question: "What is your pricing model?",
    answer: "We typically work on a project-based fixed price or a retainer model for ongoing support. We believe in transparent pricing with no hidden fees. Contact us for a custom quote based on your specific requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer various maintenance and support packages to ensure your digital product remains secure, up-to-date, and performant after launch.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black/40">
      <Container className="max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to know about working with DevPeaks.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-400">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
