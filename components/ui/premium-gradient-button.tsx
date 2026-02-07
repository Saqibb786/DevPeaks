"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function PremiumGradientButton({ children, className, variant = "primary", ...props }: PremiumButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-white transition-all duration-300",
        // Primary: Gradient Border & Dark BG
        variant === "primary" && "bg-slate-950 shadow-[0_0_40px_-10px_rgba(60,130,246,0.4)]",
        // Secondary: Glassy
        variant === "secondary" && "bg-white/5 hover:bg-white/10 border border-white/10",
        className
      )}
      {...props}
    >
      {/* Primary Variant Effects */}
      {variant === "primary" && (
        <>
            {/* Spinning Gradient Border */}
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#3b82f6_50%,#9333ea_100%)] opacity-100" />
            
            {/* Inner Background to mask the spinning border center */}
            <div className="absolute inset-[1.5px] rounded-full bg-slate-950 transition-colors duration-300 group-hover:bg-slate-900" />

            {/* Bottom Glow Sheen */}
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm transition-all duration-500 group-hover:w-3/4 group-hover:opacity-100" />
        </>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Inner Glow on Hover */}
      {variant === "primary" && (
          <div className="absolute inset-0 -z-10 bg-blue-600/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.button>
  );
}
