"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "./SectionWrapper";
import { experience } from "@/lib/data";
import { FiArrowUpRight } from "react-icons/fi";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="max-w-4xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-14">
        <span className="font-display text-[11px] text-muted/70 tracking-[0.2em] uppercase">
          03
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em]">
          Experience
        </h2>
        <div className="flex-1 section-divider" />
      </motion.div>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group card-hover p-6 md:p-8 rounded-xl border border-white/[0.08] bg-white/[0.01]"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div>
                <h3 className="text-lg font-display font-medium mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-display text-muted/70">
                  {exp.company}
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-muted/70 hover:text-foreground/60 transition-colors"
                    >
                      <FiArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-display text-muted/70 tracking-wider">
                {exp.period} · {exp.location}
              </span>
            </div>

            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-foreground/60 font-body leading-relaxed"
                >
                  <span className="text-muted/40 mt-2 w-1 h-1 rounded-full bg-muted/30 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
