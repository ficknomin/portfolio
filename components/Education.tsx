"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "./SectionWrapper";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <SectionWrapper id="education" className="max-w-4xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-14">
        <span className="font-display text-[11px] text-muted/60 tracking-[0.2em] uppercase">
          05
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em]">
          Education
        </h2>
        <div className="flex-1 section-divider" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="card-hover p-6 md:p-8 rounded-xl border border-white/[0.08] bg-white/[0.01]"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-display font-medium mb-1">
              {education.degree}
            </h3>
            <p className="text-sm font-display text-muted/60">
              {education.institution}
            </p>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-display text-muted/60 tracking-wider">
              {education.period}
            </div>
            <div className="text-sm font-display text-foreground/70 mt-1">
              {education.honours}
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="mb-6">
          <h4 className="text-[11px] font-display tracking-[0.15em] uppercase text-muted/70 mb-2">
            Dissertation
          </h4>
          <p className="text-sm text-foreground/60 font-body leading-relaxed">
            {education.dissertation}
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-display tracking-[0.15em] uppercase text-muted/70 mb-3">
            Key Projects
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.highlights.map((highlight, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-md text-[12px] font-display text-foreground/50 border border-white/[0.08] bg-white/[0.02]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
