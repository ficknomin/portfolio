"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`relative px-6 md:px-12 lg:px-24 py-24 md:py-32 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}
