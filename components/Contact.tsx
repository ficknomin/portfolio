"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "./SectionWrapper";
import { siteConfig } from "@/lib/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="max-w-3xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-14">
        <span className="font-display text-[11px] text-muted/60 tracking-[0.2em] uppercase">
          06
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em]">
          Contact
        </h2>
        <div className="flex-1 section-divider" />
      </motion.div>

      <motion.div variants={itemVariants} className="text-center">
        <h3 className="text-3xl md:text-4xl font-display font-semibold mb-3 tracking-[-0.02em]">
          Let&apos;s work together
        </h3>
        <p className="text-muted/70 font-body text-base mb-12 max-w-sm mx-auto leading-relaxed">
          Available for freelance projects and full-time roles.
        </p>

        {/* Contact cards */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300 card-hover"
          >
            <FiMail className="text-muted/60" size={18} />
            <div className="text-left">
              <div className="text-[10px] font-display text-muted/50 tracking-[0.1em] uppercase">
                Email
              </div>
              <div className="text-sm font-display text-foreground/60">
                {siteConfig.email}
              </div>
            </div>
            <FiArrowUpRight
              className="text-muted/40 group-hover:text-foreground/40 transition-colors ml-1"
              size={14}
            />
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300 card-hover"
          >
            <FiPhone className="text-muted/60" size={18} />
            <div className="text-left">
              <div className="text-[10px] font-display text-muted/50 tracking-[0.1em] uppercase">
                Phone
              </div>
              <div className="text-sm font-display text-foreground/60">
                {siteConfig.phone}
              </div>
            </div>
            <FiArrowUpRight
              className="text-muted/40 group-hover:text-foreground/40 transition-colors ml-1"
              size={14}
            />
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display text-muted/60 hover:text-foreground/60 transition-colors duration-300"
          >
            <FaGithub size={15} />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display text-muted/60 hover:text-foreground/60 transition-colors duration-300"
          >
            <FaLinkedinIn size={15} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
