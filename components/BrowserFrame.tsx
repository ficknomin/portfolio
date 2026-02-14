"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BrowserFrameProps {
  url: string;
  title: string;
  screenshot: string;
}

export default function BrowserFrame({
  url,
  title,
  screenshot,
}: BrowserFrameProps) {
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

      {/* Screenshot preview */}
      <div className="relative w-full aspect-[16/9] bg-[#050505] overflow-hidden">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full relative"
        >
          <Image
            src={screenshot}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </a>
      </div>
    </motion.div>
  );
}
