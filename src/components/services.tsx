'use client'

import { easeOut, motion, useInView } from 'motion/react'
import { useRef } from "react"
import { servicesData } from "@/utils/servicesData"
import { ServiceAccordion } from "./serviceAccordion"

const ServiceSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        ease: easeOut,
      },
    },
  }

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  }

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut, delay: 0.4 } },
  }

  return (
    <section className="py-12 lg:py-24 overflow-x-hidden">
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <div className="flex flex-col space-y-1 lg:space-y-2 text-left">
          <motion.h4
            variants={slideFromLeft}
            className="text-primary-text md:text-xl lg:text-3xl font-bold lg:font-semibold uppercase"
          >
            Ser<span className="font-medium italic">vices</span>
          </motion.h4>
          <motion.h1
            variants={slideFromLeft}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-tight"
          >
            Explore what I can do for you
          </motion.h1>
        </div>
        
        <motion.div 
          variants={slideFromBottom}
          className="mt-10"
        >
          <ServiceAccordion services={servicesData} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServiceSection
