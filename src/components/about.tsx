'use client';

import { easeOut, motion, useInView } from 'motion/react';
import Image from "next/image";
import { useRef } from "react";
import GlareHover from "./ui/glare-hover";
import {ScrollReveal} from "./ui/scroll-reveal";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        ease: easeOut,
      },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const logoVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: easeOut } },
  };
  
  return (
    <section className="pt-6 pb-12 md:pt-0 lg:py-24 overflow-x-hidden">
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 flex flex-col"
      >
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="max-w-md xl:max-w-3xl space-y-4 text-center lg:text-start">
            <motion.h1
              variants={slideFromLeft}
              className="text-2xl md:text-4xl xl:text-6xl text-primary-text font-semibold"
            >
              Building Tomorrow,{" "}
              <span className="font-medium italic">Today.</span>
            </motion.h1>
            
            <motion.h2
              variants={slideFromLeft}
              className="text-xl md:text-2xl/snug xl:text-5xl/tight text-[#5E5E5E] font-medium"
            >
              -Trader, Entrepreneur, Product Builder, Investor.
            </motion.h2>
          </div>
          
          <motion.div
            variants={logoVariant}
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
            <motion.h4
              variants={slideFromRight}
              className="text-base md:text-xl text-[#FF8367] font-medium text-center lg:text-end"
            >
              <span className="text-lg md:text-2xl text-primary-text font-bold">Hey, I&apos;m Nikhil! </span>
              <br className="lg:hidden"/>Trader, Entrepreneur, Builder from Delhi.
            </motion.h4>

            <ScrollReveal
              size="sm"
              align="left"
              // baseRotation={0}
              staggerDelay={0.02}
              duration={0.5}
              textClassName="text-sm lg:text-lg xl:text-xl font-medium text-gray-600 text-justify"
            >
              With 5 years in trading, I specialize in long-term growth and risk management. I&apos;m building Axtionable, a job discovery platform, and creating custom SaaS solutions for startups. I also invest in early-stage startups and run a PVC granules manufacturing unit. My background spans fintech, logistics, research, and customer experience.
              Always open to collaborations—let&apos;s connect!
            </ScrollReveal>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection;
// 'use client';

// import { easeOut, motion, useInView } from 'motion/react';
// import Image from "next/image";
// import { useRef, useEffect, useState } from "react";
// import GlareHover from "./ui/glare-hover";
// import {ScrollReveal} from "./ui/scroll-reveal";

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { margin: "-100px" });
  
//   // Add mobile detection
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);
    
//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, 
//         ease: easeOut,
//       },
//     },
//   };

//   // Desktop animations (original)
//   const slideFromLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
//   };

//   const slideFromRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
//   };

//   const logoVariant = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -10 },
//     visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: easeOut } },
//   };

//   // Mobile animations (center-aligned appropriate)
//   const mobileSlideFromBottom = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const mobileFadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.6 } },
//   };
  
//   return (
//     <section className="pt-6 pb-12 md:pt-0 lg:py-24 overflow-x-hidden">
//       <motion.div
//         ref={sectionRef}
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="container mx-auto px-6 flex flex-col"
//       >
//         <div className="flex flex-col lg:flex-row items-center lg:justify-between">
//           <div className="max-w-md xl:max-w-3xl space-y-4 text-center lg:text-start">
//             <motion.h1
//               variants={isMobile ? mobileSlideFromBottom : slideFromLeft}
//               className="text-2xl md:text-4xl xl:text-6xl text-primary-text font-semibold"
//             >
//               Building Tomorrow,{" "}
//               <span className="font-medium italic">Today.</span>
//             </motion.h1>
            
//             <motion.h2
//               variants={isMobile ? mobileSlideFromBottom : slideFromLeft}
//               className="text-xl md:text-2xl/snug xl:text-5xl/tight text-[#5E5E5E] font-medium"
//             >
//               -Trader, Entrepreneur, Product Builder, Investor.
//             </motion.h2>
//           </div>
          
//           <motion.div
//             variants={isMobile ? mobileFadeIn : logoVariant}
//             className="mt-4 md:mt-6 lg:mt-0 xl:-translate-y-8 "
//           >
//             <GlareHover
//               glareColor="#ffffff"
//               glareOpacity={0.6}
//               glareAngle={-30}
//               glareSize={200}
//               transitionDuration={1500}
//               autoPlay={true}
//               autoPlayInterval={3000}
//               removeBackground={true}
//               borderRadius="0px"
//             >
//               <Image
//                 width={500}
//                 height={500}
//                 src='/svg/about-logo.svg'
//                 alt="about-logo"
//                 className="size-16 md:size-20 xl:size-28"
//               />
//             </GlareHover>
//           </motion.div>
//         </div>
        
//         <div className="text-right flex flex-col items-center lg:items-end mt-6 xl:mt-0">
//           <div className="max-w-xl xl:max-w-3xl space-y-2">
//             <motion.h4
//               variants={isMobile ? mobileSlideFromBottom : slideFromRight}
//               className="text-base md:text-xl text-[#FF8367] font-medium text-center lg:text-end"
//             >
//               <span className="text-lg md:text-2xl text-primary-text font-bold">Hey, I&apos;m Nikhil! </span>
//               <br className="lg:hidden"/>Trader, Entrepreneur, Builder from Delhi.
//             </motion.h4>

//             <ScrollReveal
//               size="sm"
//               align="left"
//               // baseRotation={0}
//               staggerDelay={0.02}
//               duration={0.5}
//               textClassName="text-sm lg:text-lg xl:text-xl font-medium text-gray-600 text-justify"
//             >
//               With 5 years in trading, I specialize in long-term growth and risk management. I&apos;m building Axtionable, a job discovery platform, and creating custom SaaS solutions for startups. I also invest in early-stage startups and run a PVC granules manufacturing unit. My background spans fintech, logistics, research, and customer experience.
//               Always open to collaborations—let&apos;s connect!
//             </ScrollReveal>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default AboutSection;
