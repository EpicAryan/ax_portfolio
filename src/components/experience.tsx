"use client";
import { motion } from 'motion/react';
import { useRef } from 'react';
import ExperienceCardSection from "./experienceCardSection"

const ExperienceSection = () => {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    fromLeft: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    fromBottom: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.7 } },
    },
  };

  return (
    <section className="py-4 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-start space-y-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          ref={ref}
        >
          <motion.h3 
            className="md:text-xl lg:text-3xl text-primary-text font-semibold italic uppercase"
            variants={itemVariants.fromLeft}
          >
            Experience
          </motion.h3>
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold uppercase"
            variants={itemVariants.fromBottom}
          >
            Explore What I have done in past
          </motion.h1>
        </motion.div>
        
        <div
          className="mb-8"
        >
          <ExperienceCardSection/>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
