"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  LineChart, 
  ShoppingBag, 
  BrainCircuit, 
  Smartphone, 
  Bitcoin, 
  Plane,
  Code2,
  LucideIcon
} from "lucide-react";

interface ProjectImageProps {
  title: string;
  category: string;
  color: string;
  className?: string;
}

export function ProjectImage({ title, category, color, className }: ProjectImageProps) {
  
  // Deterministic pattern based on category
  const getPattern = () => {
    switch (category) {
      case "Web App":
        if (title.includes("FinTech")) return <FinTechPattern />;
        if (title.includes("Crypto")) return <CryptoPattern />;
        if (title.includes("Travel")) return <TravelPattern />;
        return <WebAppPattern />;
      case "E-commerce":
        return <EcommercePattern />;
      case "AI":
        return <AIPattern />;
      case "Mobile":
        return <MobilePattern />;
      default:
        return <WebAppPattern />;
    }
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-slate-950", className)}>
      {/* Base Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        {getPattern()}
      </div>

       {/* Overlay Gradient for depth */}
       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
    </div>
  );
}

function FinTechPattern() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 100" className="w-[120%] h-full text-blue-500/30 stroke-current stroke-2 fill-none">
        <path d="M0 80 Q 40 100 80 60 T 160 40 T 200 20" />
        <path d="M0 90 Q 50 110 100 70 T 200 50" className="opacity-50" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <LineChart className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      </div>
    </div>
  );
}

function CryptoPattern() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-20">
         {[...Array(24)].map((_, i) => (
            <div key={i} className="bg-orange-500/20 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
         ))}
      </div>
        <Bitcoin className="relative z-10 w-20 h-20 text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
    </div>
  );
}

function EcommercePattern() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute w-40 h-40 border border-emerald-500/20 rounded-full" />
      <ShoppingBag className="relative z-10 w-16 h-16 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
    </div>
  );
}

function AIPattern() {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute top-1/2 left-1/2 w-[200%] h-px bg-purple-500/20" 
                    style={{ 
                        transform: `translate(-50%, -50%) rotate(${i * 36}deg)`
                    }} 
                />
            ))}
        </div>
        <BrainCircuit className="relative z-10 w-20 h-20 text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
      </div>
    );
  }

function MobilePattern() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-24 h-40 border-2 border-indigo-500/20 rounded-xl" />
            <div className="absolute w-20 h-32 bg-indigo-500/10 rounded-lg animate-pulse" />
            <Smartphone className="relative z-10 w-12 h-12 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]" />
        </div>
    );
}

function TravelPattern() {
     return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 to-transparent" />
            <Plane className="relative z-10 w-16 h-16 text-teal-400 rotate-[-45deg] drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]" />
        </div>
     );
}

function WebAppPattern() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute right-0 top-0 p-4 opacity-20">
                <div className="w-12 h-2 bg-gray-500 rounded-full mb-2" />
                <div className="w-8 h-2 bg-gray-500 rounded-full" />
            </div>
             <Code2 className="relative z-10 w-16 h-16 text-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
        </div>
    );
}
