"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PremiumGradientButton } from "@/components/ui/premium-gradient-button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/20" : "py-6 bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="z-50 relative flex items-center">
          <Image 
            src="/images/devpeaks-vector-logo.svg" 
            alt="DevPeaks Logo" 
            width={100} 
            height={25} 
            className="w-[60px] md:w-[80px] h-auto object-contain"
            priority
          />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
             <PremiumGradientButton className="h-10 px-6 text-sm">
              Get Started
            </PremiumGradientButton>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50 relative">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white/80 hover:text-white transition-colors"
            >
                {isMobileMenuOpen ? (
                     <X className="w-6 h-6" />
                ) : (
                     <Menu className="w-6 h-6" />
                )}
            </button>
        </div>



      </Container>
    </motion.header>

    <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center gap-8"
            >
                <nav className="flex flex-col items-center gap-6 w-full">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + (i * 0.1) }}
                            className="w-full text-center"
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full py-2 text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="w-full pt-4"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                                <PremiumGradientButton className="w-full h-12 text-lg">
                                    Get Started
                                </PremiumGradientButton>
                            </Link>
                        </motion.div>
                </nav>
            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}
