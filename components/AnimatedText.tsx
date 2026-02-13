"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function AnimatedText({
  text,
  className = "",
  speed = 50,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    setDisplayText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={`${className} inline`}>
      <span>{displayText}</span>
      {!isComplete && isInView && (
        <motion.span
          className="text-accent/60 ml-[1px]"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
