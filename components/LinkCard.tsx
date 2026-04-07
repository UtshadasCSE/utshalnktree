"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { cn } from "../lib/utils";

interface LinkCardProps {
  label: string;
  url: string;
  icon: string;
  badge?: string;
  colorAccent?: string;
  index: number;
}

export function LinkCard({ label, url, icon, badge, colorAccent, index }: LinkCardProps) {
  const accent = colorAccent || "#4BEEF5";
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index + 1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full max-w-md"
    >
      {/* Background Glow */}
      <div 
        className={cn(
          "absolute -inset-0.5 rounded-xl blur-[12px] opacity-0 group-hover:opacity-40 transition-all duration-300",
        )}
        style={{ backgroundColor: accent }}
      />
      
      {/* Main Card Body */}
      <div className="relative flex items-center gap-4 p-4 rounded-xl glassmorphism hover:bg-white/[0.04] transition-all duration-300 border-white/5 border-[1px] overflow-hidden">
        {/* Neon Border on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ 
            boxShadow: `inset 0 0 10px ${accent}20`,
            border: `1px solid ${accent}40`
          }}
        />

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        {/* Icon Container */}
        <div className="relative">
         <div 
           className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900/80 border border-white/10 group-hover:border-white/30 transition-all shadow-inner"
           style={{ color: accent }}
         >
           <Icon name={icon} size={22} />
         </div>
         {/* Small corner detail */}
         <div 
           className="absolute -top-1 -left-1 w-2 h-2 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity"
           style={{ borderColor: accent }}
         />
        </div>

        {/* Label */}
        <div className="flex-1 relative">
          <span className="text-[13px] font-bold tracking-[0.1em] text-zinc-300 uppercase group-hover:text-zinc-50 transition-colors">
            {label}
          </span>
        </div>

        {/* Badge */}
        {badge && (
          <div 
           className="px-2 py-0.5 rounded-md border backdrop-blur-sm transition-colors duration-300"
           style={{ 
             borderColor: `${accent}30`,
             backgroundColor: `${accent}05`
           }}
          >
            <span 
             className="text-[9px] font-black uppercase tracking-widest"
             style={{ color: accent }}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Interactive Hover Detail */}
        <motion.div 
          className="w-1 h-1 rounded-full group-hover:animate-ping"
          style={{ backgroundColor: accent }}
        />
      </div>
    </motion.a>
  );
}
