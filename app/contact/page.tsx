"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <main className="pt-24 pb-16">
      <section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Let's Build <br />
                <span className="text-blue-500">The Future.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12">
                We are currently accepting new projects. Tell us about your vision, and let's see how we can help you achieve it.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <a href="mailto:devpeaks26@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                      devpeaks26@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Call Us</h3>
                    <p className="text-gray-400"><a href="tel:+923143147711" className="hover:text-white transition-colors">+92 314 3147711</a></p>
                    <p className="text-gray-400"><a href="tel:+923426621797" className="hover:text-white transition-colors">+92 342 6621797</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <a href="https://wa.me/message/UDMZO4FVKTXII1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                 <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Global Reach</h3>
                    <p className="text-gray-400">
                      Serving clients worldwide. Remote-first agency.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
               <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                        <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label htmlFor="company" className="text-sm font-medium text-gray-300">Company (Optional)</label>
                     <Input id="company" placeholder="Your Company Ltd." />
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                     <Textarea id="message" placeholder="Tell us about your project, timeline, and budget..." className="min-h-[150px]" required />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </span>
                    )}
                  </Button>
               </form>
            </motion.div>

          </div>
        </Container>
      </section>
    </main>
  );
}
