"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "./SectionWrapper";
import { aboutText, siteConfig } from "@/lib/data";
import { FiMapPin, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <SectionWrapper id="about" className="max-w-4xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-14">
        <span className="font-display text-[11px] text-muted/70 tracking-[0.2em] uppercase">
          01
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em]">
          About
        </h2>
        <div className="flex-1 section-divider" />
      </motion.div>

      <motion.div variants={itemVariants}>
        <p className="text-lg md:text-xl text-foreground/80 font-body leading-[1.75] mb-8 max-w-2xl">
          {aboutText}
        </p>
        <div className="flex flex-wrap gap-6 text-sm font-display text-muted/70">
          <span className="flex items-center gap-2">
            <FiMapPin size={14} className="text-muted/70" />
            {siteConfig.location}
          </span>
          <span className="flex items-center gap-2">
            <FiMail size={14} className="text-muted/70" />
            {siteConfig.email}
          </span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
