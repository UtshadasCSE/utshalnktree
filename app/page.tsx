"use client";

import { Background } from "../components/Background";
import { Profile } from "../components/Profile";
import { LinkCard } from "../components/LinkCard";
import { Socials } from "../components/Socials";
import { SystemHUD } from "../components/SystemHUD";
import config from "../data/config.json";
import { motion } from "framer-motion";

export default function Home() {
  const { name, bio, avatar, links, socials, footer, theme } = config;

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between py-12 px-4 selection:bg-[#4BEEF5]/30 overflow-x-hidden">
      {/* Sci-fi Background Layer */}
      <Background />
      
      {/* Decorative Overlay */}
      <SystemHUD />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full max-w-2xl z-10"
      >
        {/* Profile Section */}
        <Profile
          name={name}
          bio={bio}
          avatar={avatar}
          accentColor={theme.accentColor}
        />

        {/* Links Section */}
        <div className="flex flex-col gap-4 w-full items-center mb-12">
          {links.map((link: any, i: number) => (
            <LinkCard
              key={link.label}
              label={link.label}
              url={link.url}
              icon={link.icon}
              badge={link.badge}
              colorAccent={link.colorAccent}
              index={i}
            />
          ))}
        </div>

        {/* Social Icons Section */}
        <Socials socials={socials} />
      </motion.div>

      {/* Footer & Status Status Section */}
      <footer className="text-center mt-auto">
        <div className="flex items-center justify-center gap-2 mb-4 group cursor-default">
          <div className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]">
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-500/80 uppercase">
            System Online: Protocol Active
          </span>
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
          {footer}
        </p>
      </footer>
    </main>
  );
}
