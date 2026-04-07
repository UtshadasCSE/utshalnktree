"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SystemHUD() {
  const [time, setTime] = useState("");
  const [uptime, setUptime] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none opacity-40">
      {/* Top Left: System Status */}
      <div className="absolute top-8 left-8 hidden md:block">
        <div className="flex flex-col gap-1 border-l border-white/20 pl-4 py-1">
          <p className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[9px] font-mono text-emerald-400/80">ONLINE // PROTOCOL_V4.2</p>
          </div>
        </div>
      </div>

      {/* Top Right: Clock & Coordinates */}
      <div className="absolute top-8 right-8 text-right hidden md:block">
        <div className="flex flex-col gap-1 border-r border-white/20 pr-4 py-1">
          <p className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">{time}</p>
          <p className="text-[9px] font-mono text-zinc-500">LOC: 23.8103° N, 90.4125° E</p>
        </div>
      </div>

      {/* Bottom Left: Data Stream */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-24 bg-gradient-to-r from-white/20 to-transparent mb-2" />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
              className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter"
            >
              Fetch_Packet: 0x{Math.floor(Math.random() * 10000).toString(16)}... OK
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Right: Uptime Counter */}
      <div className="absolute bottom-8 right-8 text-right hidden lg:block">
        <div className="flex flex-col gap-1 items-end">
          <div className="h-[1px] w-24 bg-gradient-to-l from-white/20 to-transparent mb-2" />
          <p className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Session Uptime</p>
          <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
            T + {Math.floor(uptime / 60)}M {uptime % 60}S
          </p>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-white/10" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/10" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/10" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-white/10" />
    </div>
  );
}
