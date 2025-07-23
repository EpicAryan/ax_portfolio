"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { easeOut, motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < breakpoint);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [breakpoint]);
  return isMobile;
};


export interface ScrollRevealProps {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  staggerDelay?: number;
  duration?: number;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function ScrollReveal({
  children,
  containerClassName,
  textClassName,
  staggerDelay = 0.02,
  duration = 0.5,
  size = "lg",
  align = "left",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const isMobile = useIsMobile(); 

  const text = useMemo(() => (typeof children === "string" ? children : ""), [children]);
  const words = useMemo(() => text.split(" "), [text]);

  if (isMobile) {
    return (
      <motion.p
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeOut }}
        className={cn(
          "leading-relaxed",
          sizeClasses[size],
          alignClasses[align],
          textClassName
        )}
      >
        {text}
      </motion.p>
    );
  }



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration } },
  };

  return (
    <motion.p
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "leading-relaxed",
        sizeClasses[size],
        alignClasses[align],
        containerClassName,
        textClassName
      )}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
