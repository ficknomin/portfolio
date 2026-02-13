"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // If scrolled to bottom, highlight last section
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });

      if (current) setActiveSection(current);
      else if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-sm tracking-[0.05em] text-foreground hover:text-white transition-colors duration-300"
          >
            {siteConfig.name.split(" ")[0].toLowerCase()}
            <span className="text-muted/50">.</span>
            <span className="text-foreground/60">
              {siteConfig.name.split(" ")[1]?.toLowerCase()}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative px-3.5 py-2 text-xs font-display tracking-[0.06em] uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-foreground/40 hover:text-foreground/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-accent/70 rounded-full"
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-[1.5px] bg-foreground/80 origin-center"
              animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-foreground/80 origin-center"
              animate={
                mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-lg font-display tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
