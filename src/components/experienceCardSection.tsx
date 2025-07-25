"use client";
import { useInView, motion } from 'motion/react';
import { useRef } from 'react';
import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Experience, experiences } from '@/utils/experienceData'

const ExperienceCardSection = () => {
  const itemVariants = {
    fromLeft: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    fromRight: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    fromBottom: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1 
      } 
    },
  };

  const ExperienceCard = ({ exp }: { exp: Experience }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
      <motion.div 
        ref={ref}
        className="flex flex-col md:flex-row border-b-1 py-8 md:py-16 border-[#B7B7B7]"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col space-y-2">
            <motion.div variants={itemVariants.fromLeft}>
                <motion.div
                    className="cursor-grab w-fit pl-3"
                    drag
                    dragConstraints={{ left: -15, right: 15, top: -10, bottom: 10 }}
                    dragElastic={0.35}
                    whileTap={{ cursor: "grabbing" }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 11,
                        x: 5,
                        y: -3,
                        filter:
                        "brightness(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
                        transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 0.6,
                        },
                    }}
                >
                    <Image
                        src={exp.logo}
                        alt={exp.logoAlt}
                        width={100}
                        height={100}
                        className="size-24 md:size-28 object-contain select-none l"
                        draggable={false}  
                    />
                </motion.div>

            </motion.div>

            <div className="px-4 space-y-2 max-w-lg md:max-w-sm lg:max-w-lg xl:max-w-2xl">
                <motion.div 
                className="flex items-center gap-x-3 md:gap-x-6"
                variants={itemVariants.fromRight}
                >
                    <h5 className="text-lg md:text-2xl font-semibold">{exp.company}</h5>
                    <span className="flex items-center font-normal text-base md:text-lg text-gray-600">
                        <Dot className="size-5" /> {exp.type}
                    </span>
                </motion.div>

                <motion.div 
                className="flex items-center text-base md:text-lg font-normal text-gray-600 gap-x-5"
                variants={itemVariants.fromRight}
                >
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <span className="flex items-center">
                        <Dot className="size-5" /> {exp.duration}
                    </span>
                </motion.div>

                <motion.p 
                className="text-base md:text-lg font-normal text-neutral-800"
                variants={itemVariants.fromRight}
                >
                    {exp.description}
                </motion.p>

                <motion.h4 
                className="text-primary-text text-2xl md:text-3xl lg:text-5xl font-semibold mt-4"
                variants={itemVariants.fromBottom}
                >
                    {exp.position}
                </motion.h4>
            </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="">
      {experiences.map((exp) => (
        <ExperienceCard 
          key={exp.id} 
          exp={exp}
        />
      ))}
    </div>
  )
}

export default ExperienceCardSection
