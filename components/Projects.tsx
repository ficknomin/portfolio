"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "./SectionWrapper";
import { projects } from "@/lib/data";
import BrowserFrame from "./BrowserFrame";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="max-w-5xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-14">
        <span className="font-display text-[11px] text-muted/70 tracking-[0.2em] uppercase">
          04
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em]">
          Projects
        </h2>
        <div className="flex-1 section-divider" />
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <div
              className={`grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center ${
                idx % 2 === 1 ? "" : ""
              }`}
            >
              {/* Browser preview */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                {project.url && project.screenshot && (
                  <BrowserFrame
                    url={project.url}
                    title={project.title}
                    screenshot={project.screenshot}
                  />
                )}
              </div>

              {/* Info */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-[11px] font-display text-muted/70 tracking-wider">
                  {project.year}
                </span>

                <h3 className="text-xl md:text-2xl font-display font-semibold mt-1 mb-4 tracking-[-0.01em]">
                  {project.title}
                </h3>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-display tracking-wide text-muted/70 border border-white/[0.08] bg-white/[0.02]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-foreground/60 font-body leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted/30 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-display text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    Visit Site
                    <FiArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
