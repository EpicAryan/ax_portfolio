'use client'

import { easeOut, motion, useInView } from "motion/react"
import { useRef } from "react"
import { Button } from "./ui/button"
import Squares from "@/components/ui/squares"
import { GoArrowUpRight } from "react-icons/go";
import {  ArrowUpRight } from "lucide-react"
import {ScrollReveal} from "./ui/scroll-reveal"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.5
      }
    }
  }

  const slideFromLeftVariantsBottom = {
    hidden: { 
      opacity: 0, 
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 1.0 
      }
    }
  }

  const slideFromRightVariantsBottom = {
    hidden: { 
      opacity: 0, 
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 1.0  
      }
    }
  }

  const slideFromLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  }

  const slideFromRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  }

  const socialLinks = [
    { name: "Instagram", href: "#", label: "INSTAGRAM" },
    { name: "LinkedIn",  href: "#", label: "LINKEDIN" },
    { name: "Twitter",  href: "#", label: "TWITTER" }
  ]

  return (
    <footer ref={ref} className="relative bg-[#1a1a1a] overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.2}
          borderColor="rgba(255, 255, 255, 0.1)"
          squareSize={60}
          hoverFillColor="rgba(255, 131, 103, 0.25)"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container mx-auto px-6 py-8 lg:py-16 flex-1 pointer-events-none"
        >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-16 pointer-events-none">
                <motion.div 
                  variants={slideFromLeftVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="pointer-events-none"
                >
                  <p className="text-white text-[10px] md:text-sm tracking-wide text-center font-medium">
                      BASED IN DELHI,
                      <br />
                      <span className="text-white/70">INDIA</span>
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={slideFromRightVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="pointer-events-none"
                >
                  <p className="text-white text-[10px] md:text-sm font-medium tracking-wide text-center">
                      TRADER, ENTREPRENEUR
                      <br />
                      <span className="text-white/70">PRODUCT BUILDER, INVESTOR</span>
                  </p>
                </motion.div>
            </div>

            {/* Main CTA Section */}
            <div className="text-center pointer-events-none">
                <motion.div
                    variants={itemVariants}
                    className="mb-8 pointer-events-none"
                >
                <h2 className="text-3xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold text-white uppercase">
                    LET&apos;S WORK
                    <br />
                    <span className="text-primary-text">TOGETHER</span>
                </h2>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6 lg:mb-16">
                <Button 
                    className="lg:!px-5 lg:py-5 bg-white text-black rounded-full font-medium text-xs lg:text-xl hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer border border-black hover:border-white pointer-events-auto"
                >
                    Contact Now <GoArrowUpRight className="size-3.5 lg:size-5"/>
                </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="max-w-[18rem] md:max-w-lg lg:max-w-4xl mx-auto mb-6 lg:mb-10 pointer-events-none">
                    <ScrollReveal
                    size="sm"
                    align="center"
                    // baseRotation={0}
                    staggerDelay={0.02}
                    duration={0.5}
                        textClassName="text-white text-sm lg:text-2xl font-medium"
                    >
                        HEY, I&apos;M NIKHIL! TRADER, ENTREPRENEUR, AND BUILDER FROM DELHI. I&apos;M ALL 
                        ABOUT LONG-TERM GROWTH, BUILDING AXTIONABLE, INVESTING IN 
                        STARTUPS, AND RUNNING A PVC GRANULES UNIT.
                    </ScrollReveal>
                </motion.div>

                {/* Social Links */}
                <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-4 md:space-x-12 pointer-events-none"
                >
                {socialLinks.map((social, index) => {
                
                    return (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 , transition: {
                            duration:0.3
                        } }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-2 text-white hover:text-primary-text transition-colors duration-100 pointer-events-auto"
                    >
                        <span className="text-xs md:text-sm lg:text-lg font-semibold tracking-wide flex items-center">
                        {social.label} <ArrowUpRight className="size-5 lg:size-6"/>
                        </span>
                    </motion.a>
                    );
                })}
                </motion.div>
            </div>

            {/* Bottom Section */}
            <div
            className="pt-10 lg:pt-16 pointer-events-none"
            >
                <div className="flex flex-row justify-between items-center">
                    {/* Left side - slides from left */}
                    <motion.p 
                      variants={slideFromLeftVariantsBottom}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-white text-[10px] md:text-sm lg:text-lg font-semibold"
                    >
                      ©2025 NIKHIL KAKKAR
                    </motion.p>
                    
                    {/* Right side - slides from right */}
                    <motion.p 
                      variants={slideFromRightVariantsBottom}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="text-white text-[10px] md:text-sm lg:text-lg font-semibold"
                    >
                      Axtionable Pvt. Ltd.
                    </motion.p>
                </div>
            </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
