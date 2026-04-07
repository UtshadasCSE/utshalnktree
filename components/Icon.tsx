"use client";

import { 
  Github, 
  Globe, 
  Linkedin, 
  FileText, 
  Twitter, 
  Instagram,
  LucideIcon,
  ExternalLink,
  Cpu,
  Zap,
  Terminal,
  Layers
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Globe,
  Linkedin,
  FileText,
  Twitter,
  Instagram,
  Cpu,
  Zap,
  Terminal,
  Layers
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 20 }: IconProps) {
  const IconComponent = iconMap[name] || ExternalLink;
  return <IconComponent className={className} size={size} />;
}
