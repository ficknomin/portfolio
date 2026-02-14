"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import AnimatedText from "./AnimatedText";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs — slow, ambient, premium */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[140px] animate-orb-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[120px] animate-orb-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{ y, opacity }}
      >
        {/* Status */}
        {mounted && (
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-10 rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] font-display tracking-[0.15em] uppercase text-muted"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Available for work
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-[-0.03em] mb-5 text-white"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <AnimatedText text={siteConfig.name} speed={75} />
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-base sm:text-lg md:text-xl font-display text-muted tracking-wide mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {siteConfig.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-sm text-muted/80 max-w-lg mx-auto mb-12 font-body leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-display text-sm tracking-wide rounded-lg transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            View My Work
            <FiArrowDown size={14} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/[0.08] text-foreground/70 font-display text-sm tracking-wide rounded-lg transition-all duration-300 hover:border-white/[0.15] hover:text-foreground hover:bg-white/[0.02]"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          className="flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/60 hover:text-foreground transition-colors duration-300 p-2.5"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/60 hover:text-foreground transition-colors duration-300 p-2.5"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
