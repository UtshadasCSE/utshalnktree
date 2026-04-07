"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface ProfileProps {
  name: string;
  bio: string;
  avatar: string;
  accentColor: string;
}

export function Profile({ name, bio, avatar, accentColor }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-6 mt-16 mb-12 px-6">
      {/* Avatar Container with Glow */}
      <div className="relative group">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative p-1 rounded-full bg-gradient-to-tr from-[#4BEEF5]/20 to-[#BD00FF]/20 backdrop-blur-sm glitch-hover cursor-pointer"
        >
          <div
            className="absolute inset-0 rounded-full blur-[20px] opacity-40 group-hover:opacity-70 transition-opacity"
            style={{ backgroundColor: accentColor }}
          />
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/10 p-0.5">
            <Image
              src={avatar}
              alt={name}
              width={96}
              height={96}
              className="rounded-full object-cover grayscale-[0.2] contrast-[1.1]"
            />
          </div>
        </motion.div>

        {/* Status Indicator */}
        <div className="absolute -right-2 top-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
          <p className="text-[8px] font-bold text-emerald-400 tracking-tighter uppercase whitespace-nowrap">
            <span className="inline-block w-1 h-1 rounded-full bg-emerald-500 mr-1 animate-pulse" />
            Neural Link: Active
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="text-center max-w-lg">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
        >
          {name}
        </motion.h1>

        <div className="font-medium leading-relaxed mt-2 min-h-[60px]">
          <TextGenerateEffect words={bio} className="md:text-base font-normal" />
        </div>
      </div>
    </div>
  );
}
