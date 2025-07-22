'use client'

import { easeOut, motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import GlareHover from "./ui/glare-hover"
import ScrollReveal from "./ui/scroll-reveal"

const AboutSection = () => {
  const mainHeadingRef = useRef(null)
  const subtitleRef = useRef(null)
  const greetingRef = useRef(null)
  const logoRef = useRef(null)

  const isMainHeadingInView = useInView(mainHeadingRef, { margin: "-100px" })
  const isSubtitleInView = useInView(subtitleRef, { margin: "-100px" })
  const isGreetingInView = useInView(greetingRef, { margin: "-100px" })
  const isLogoInView = useInView(logoRef, { margin: "-100px" })

  const slideFromLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
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
      x: 50,
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

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotate: -10,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: easeOut
      }
    }
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: 0.2
      }
    }
  }

  return (
    <section className="pt-6 pb-12 md:pt-0 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 flex flex-col">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="max-w-md xl:max-w-3xl space-y-4 text-center lg:text-start">
            {/* Main Heading with staggered animation */}
            <motion.h1 
              ref={mainHeadingRef}
              variants={slideFromLeftVariants}
              initial="hidden"
              animate={isMainHeadingInView ? "visible" : "hidden"}
              className="text-2xl md:text-4xl xl:text-6xl text-primary-text font-semibold"
            >
              Building Tomorrow,{" "}
              <motion.span 
                variants={wordVariants}
                initial="hidden"
                animate={isMainHeadingInView ? "visible" : "hidden"}
                className="font-medium italic"
              >
                Today.
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.h2 
              ref={subtitleRef}
              variants={slideFromLeftVariants}
              initial="hidden"
              animate={isSubtitleInView ? "visible" : "hidden"}
              className="text-xl md:text-2xl/snug xl:text-5xl/tight text-[#5E5E5E] font-medium"
            >
              -Trader, Entrepreneur, Product Builder, Investor.
            </motion.h2>
          </div>
          
          {/* Animated Logo */}
          <motion.div
            ref={logoRef}
            variants={logoVariants}
            initial="hidden"
            animate={isLogoInView ? "visible" : "hidden"}
            className="mt-4 md:mt-6 lg:mt-0 xl:-translate-y-8 "
          >
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.6}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={1500}
              autoPlay={true}
              autoPlayInterval={3000}
              removeBackground={true}
              borderRadius="0px"
            >
              <Image
                width={500}
                height={500}
                src='/svg/about-logo.svg'
                alt="about-logo"
                className="size-16 md:size-20 xl:size-28"
              />
            </GlareHover>
          </motion.div>
        </div>
        
        <div className="text-right flex flex-col items-center lg:items-end mt-6 xl:mt-0">
          <div className="max-w-xl xl:max-w-3xl space-y-2">
            {/* Greeting text */}
            <motion.h4 
              ref={greetingRef}
              variants={slideFromRightVariants}
              initial="hidden"
              animate={isGreetingInView ? "visible" : "hidden"}
              className="text-base md:text-xl text-[#FF8367] font-medium text-center lg:text-end"
            >
              <span className="text-lg md:text-2xl text-primary-text font-bold">Hey, I&apos;m Nikhil! </span>
              <br className="lg:hidden"/>Trader, Entrepreneur, Builder from Delhi.
            </motion.h4>
            
            <ScrollReveal
              size="sm"
              align="left"
              baseRotation={0}
              staggerDelay={0.02}
              duration={0.5}
              textClassName="text-sm lg:text-lg xl:text-xl font-medium text-gray-600 text-justify"
            >
              With 5 years in trading, I specialize in long-term growth and risk management. I&apos;m building Axtionable, a job discovery platform, and creating custom SaaS solutions for startups. I also invest in early-stage startups and run a PVC granules manufacturing unit. My background spans fintech, logistics, research, and customer experience.
              Always open to collaborations—let&apos;s connect!
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
