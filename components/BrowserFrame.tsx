"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface BrowserFrameProps {
  url: string;
  title: string;
  blocked?: boolean;
}

export default function BrowserFrame({ url, title, blocked }: BrowserFrameProps) {
  const domain = url.replace("https://", "").replace(/\/$/, "");

  return (
    <motion.div
      className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#080808] group"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0c0c0c] border-b border-white/[0.08]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-white/[0.04] rounded-md px-3 py-1 text-[11px] text-muted/70 font-display truncate text-center">
            {domain}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="relative w-full aspect-[16/9] bg-[#050505]">
        {blocked ? (
          /* Fallback for sites that block iframes */
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 group/link"
          >
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="text-2xl sm:text-3xl font-display font-semibold text-foreground/20 tracking-tight">
                {domain}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs font-display text-foreground/40 group-hover/link:text-foreground/70 group-hover/link:border-white/[0.15] transition-all duration-300">
                Visit Live Site
                <FiArrowUpRight size={12} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </div>
            </div>
          </a>
        ) : (
          /* Live iframe */
          <>
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
            <div className="absolute inset-0 bg-transparent" />
          </>
        )}
      </div>
    </motion.div>
  );
}
