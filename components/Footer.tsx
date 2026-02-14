"use client";

import { siteConfig } from "@/lib/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-[11px] font-display text-muted/50 tracking-wide">
          <span>&copy; 2025 {siteConfig.name}</span>
          <span className="text-white/[0.1]">/</span>
          <span>Full-stack software engineer</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/40 hover:text-muted/60 transition-colors duration-300 p-1.5"
            aria-label="GitHub"
          >
            <FaGithub size={14} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/40 hover:text-muted/60 transition-colors duration-300 p-1.5"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
