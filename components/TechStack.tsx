"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "./SectionWrapper";
import { techStack, allTechFlat } from "@/lib/data";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiAmazons3,
  SiDocker,
  SiGit,
  SiStripe,
  SiRust,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp, TbApi, TbLock } from "react-icons/tb";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Prisma: SiPrisma,
  "AWS S3": SiAmazons3,
  Docker: SiDocker,
  Git: SiGit,
  Stripe: SiStripe,
  Rust: SiRust,
  Java: FaJava,
  C: TbBrandCpp,
  "REST APIs": TbApi,
  OAuth: TbLock,
};

function TechTag({ name }: { name: string }) {
  const Icon = iconMap[name];
  return (
    <div className="tech-tag flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.02] text-[13px] font-display text-foreground/60 cursor-default">
      {Icon && <Icon className="w-3.5 h-3.5 text-foreground/40" />}
      {name}
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className={`flex gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((tech, i) => (
          <TechTag key={`${tech}-${i}`} name={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const categories = Object.entries(techStack);

  return (
    <SectionWrapper id="skills" className="max-w-5xl mx-auto">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-14">
        <span className="font-display text-[11px] text-muted/40 tracking-[0.2em] uppercase">
          02
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em]">
          Tech Stack
        </h2>
        <div className="flex-1 section-divider" />
      </motion.div>

      {/* Category grid */}
      <motion.div
        variants={itemVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.03] rounded-xl overflow-hidden border border-white/[0.08] mb-16"
      >
        {categories.map(([category, techs]) => (
          <div
            key={category}
            className="p-6 bg-background"
          >
            <h3 className="text-[11px] font-display tracking-[0.15em] uppercase text-muted/70 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Marquee */}
      <motion.div variants={itemVariants} className="space-y-2.5">
        <Marquee items={allTechFlat.slice(0, 12)} />
        <Marquee items={allTechFlat.slice(12)} reverse />
      </motion.div>
    </SectionWrapper>
  );
}
