"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface SocialsProps {
  socials: SocialLink[];
}

export function Socials({ socials }: SocialsProps) {
  return (
    <div className="flex items-center gap-6 mt-12 mb-8">
      {socials.map((social, i) => (
        <motion.a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-zinc-500 hover:text-zinc-100 transition-colors"
          aria-label={social.platform}
        >
          <Icon name={social.icon} size={24} />
        </motion.a>
      ))}
    </div>
  );
}
