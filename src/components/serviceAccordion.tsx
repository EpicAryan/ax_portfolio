// 'use client'

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, Minus, Dot } from 'lucide-react';
// import Image from 'next/image';

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// import { ServiceAccordionProps } from '@/utils/servicesData';
// import { ServiceCard } from './serviceCard';

// export const ServiceAccordion = ({ services, defaultOpenId = "service-05" }: ServiceAccordionProps) => {
//   const [hoveredId, setHoveredId] = useState<string | undefined>(defaultOpenId);
//   const [openId, setOpenId] = useState<string | undefined>(defaultOpenId);

//   const iconVariants = {
//     initial: { rotate: -90, opacity: 0 },
//     animate: { rotate: 0, opacity: 1, transition: { duration: 0.1 } },
//     exit: { rotate: 90, opacity: 0, transition: { duration: 0.1 } },
//   };

//   return (
//     <Accordion
//       type="single"
//       collapsible
//       className="w-full"
//       value={openId}
//       onValueChange={setOpenId}
//     >
//       <div onMouseLeave={() => setHoveredId(openId)}>
//         {services.map((service) => {
//           const isHovered = hoveredId === service.id;
//           const isOpen = openId === service.id;

//           return (
//             <AccordionItem
//               key={service.id}
//               value={service.id}
//               className="border-b border-gray-200"
//               onMouseEnter={() => setHoveredId(service.id)}
//             >
//               <AccordionTrigger 
//                 className="relative py-4 md:py-6 hover:no-underline focus:no-underline [&>svg.lucide-chevron-down]:hidden cursor-pointer"
//               >
//                  <motion.div
//                   animate={{
//                     paddingLeft: isHovered ? 16 : 0,
//                     paddingRight: isHovered ? 16 : 0,
//                   }}
//                   transition={{ duration: 0.3, ease: 'easeInOut' }}
//                   className="flex items-center justify-between w-full"
//                 >
                
//                 {isHovered && (
//                   <motion.div
//                     layoutId="active-service-background"
//                     className="absolute inset-0 bg-black"
//                     transition={{ type: 'spring', stiffness: 350, damping: 30 }}
//                   />
//                 )}

//                 {/* Header Content */}
//                 <div className="relative z-10 flex items-center justify-between w-full">
//                   <div className="flex items-center gap-1 md:gap-6">
//                     <span className={`text-xs md:text-xl font-normal transition-colors self-baseline ${isHovered ? 'text-primary-text' : 'text-primary-text'}`}>
//                       {service.id.split('-')[1]}
//                     </span>
//                     <div className="flex items-baseline gap-1 md:gap-4 text-left">
//                       <h3 className={`text-lg md:text-3xl lg:text-4xl font-bold uppercase tracking-wider transition-colors ${isHovered ? 'text-white' : 'text-[#555555]'}`}>
//                         {service.title}
//                       </h3>
//                       <span className={`text-xs md:text-base font-normal transition-colors ${isHovered ? 'text-white/70' : 'text-[#868686'}`}>
//                         {service.category}
//                       </span>
//                     </div>
//                   </div>
                  
              
//                   <div className="relative z-10 flex size-4 lg:size-6 items-center justify-center rounded-full border-2 border-gray-300 p-3 lg:p-4 transition-colors duration-300">
//                     <AnimatePresence initial={false} mode="wait">
//                       {isOpen ? (
//                         <motion.div
//                           key="minus"
//                           variants={iconVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                         >
//                           <Minus className={`size-3 lg:size-4 transition-colors ${isHovered ? 'text-white' : 'text-gray-900'}`} />
//                         </motion.div>
//                       ) : (
//                         <motion.div
//                           key="plus"
//                           variants={iconVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                         >
//                           <Plus className={`size-3 lg:size-4 transition-colors ${isHovered ? 'text-white' : 'text-gray-900'}`} />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//                   </motion.div>
//               </AccordionTrigger>

//               <AccordionContent className="px-6 py-8">
//                 <div className="flex flex-col gap-y-4">
//                     <h4 className='max-w-4xl text-base lg:text-2xl font-semibold'>{service.innerTitle}</h4>
//                     <p className="max-w-3xl text-sm lg:text-xl font-regular leading-tight">{service.description}</p>

//                     <div className='flex flex-col md:flex-row justify-between items-start'>
//                       <div className="grid grid-cols-2 gap-x-16 gap-y-2 pt-2 lg:pt-6">
//                         {service.features.map((feature, idx) => (
//                           <p key={idx} className="text-sm lg:text-lg text-gray-600 flex items-center"><Dot className='size-7'/>{feature}</p>
//                         ))}
//                       </div>
//                       <div className="flex items-center gap-4 pt-4 lg:pt-0">
//                         {service.images.map((img, idx) => (
//                           <ServiceCard key={idx} imageUrl={img.src} liveUrl={img.liveUrl} />
//                         ))}
//                       </div>
//                     </div>
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           );
//         })}
//       </div>
//     </Accordion>
//   );
// };

'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Dot } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ServiceAccordionProps } from '@/utils/servicesData';
import { ServiceCard } from './serviceCard';
import { ServiceCardCarousel } from '@/components/ui/serviceCardCarousel'; 
import { useScreenSize } from '../hooks/useScreenSize'; 

export const ServiceAccordion = ({ services, defaultOpenId = "service-00" }: ServiceAccordionProps) => {
  const [hoveredId, setHoveredId] = useState<string | undefined>(defaultOpenId);
  const [openId, setOpenId] = useState<string | undefined>(defaultOpenId);
  const { isMobile } = useScreenSize(); 

  const iconVariants = {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1, transition: { duration: 0.1 } },
    exit: { rotate: 90, opacity: 0, transition: { duration: 0.1 } },
  };
  

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openId}
      onValueChange={setOpenId}
    >
      <div onMouseLeave={() => setHoveredId(openId)}>
        {services.map((service) => {
          const isHovered = hoveredId === service.id;
          const isOpen = openId === service.id;
          const leftColumn = service.features.filter((_, i) => i % 2 === 0); 
          const rightColumn = service.features.filter((_, i) => i % 2 !== 0); 


          return (
            <AccordionItem
              key={service.id}
              value={service.id}
              className="border-b border-gray-200"
              onMouseEnter={() => setHoveredId(service.id)}
            >
              <AccordionTrigger 
                className="relative py-4 md:py-6 hover:no-underline focus:no-underline [&>svg.lucide-chevron-down]:hidden cursor-pointer"
              >
                 <motion.div
                  animate={{
                    paddingLeft: isHovered ? 16 : 0,
                    paddingRight: isHovered ? 16 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex items-center justify-between w-full"
                >
                
                {isHovered && (
                  <motion.div
                    layoutId="active-service-background"
                    className="absolute inset-0 bg-black"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Header Content */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 md:gap-6">
                    <span className={`text-xs md:text-xl font-normal transition-colors self-baseline ${isHovered ? 'text-primary-text' : 'text-primary-text'}`}>
                      {service.id.split('-')[1]}
                    </span>
                    <div className="flex items-baseline gap-1 md:gap-4 text-left">
                      <h3 className={`text-lg md:text-3xl lg:text-4xl font-bold uppercase tracking-wider transition-colors ${isHovered ? 'text-white' : 'text-[#555555]'}`}>
                        {service.title}
                      </h3>
                      <span className={`text-xs md:text-base font-normal transition-colors ${isHovered ? 'text-white/70' : 'text-[#868686'}`}>
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex size-4 lg:size-6 items-center justify-center rounded-full border-2 border-gray-300 p-3 lg:p-4 transition-colors duration-300">
                    <AnimatePresence initial={false} mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="minus"
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <Minus className={`size-3 lg:size-4 transition-colors ${isHovered ? 'text-white' : 'text-gray-900'}`} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <Plus className={`size-3 lg:size-4 transition-colors ${isHovered ? 'text-white' : 'text-gray-900'}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                  </motion.div>
              </AccordionTrigger>

              <AccordionContent className="px-6 py-8">
                <div className="flex flex-col gap-y-4">
                    <h4 className='max-w-4xl text-base md:text-xl lg:text-2xl font-semibold'>{service.innerTitle}</h4>
                    <p className="max-w-3xl text-sm md:text-lg lg:text-xl font-regular leading-tight">{service.description}</p>

                    <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
                      <div className="w-full grid grid-cols-2 xl:gap-x-16 gap-y-2 pt-2 lg:pt-6">
                        <div className="flex flex-col gap-y-2">
                          {leftColumn.map((feature, idx) => (
                            <p key={idx} className="text-sm xl:text-lg text-gray-600 flex items-center justify-center lg:justify-start">
                              <Dot className="size-7" /> {feature}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-col gap-y-2">
                          {rightColumn.map((feature, idx) => (
                            <p key={idx} className="text-sm xl:text-lg text-gray-600 flex items-center justify-center lg:justify-start">
                              <Dot className="size-7" /> {feature}
                            </p>
                          ))}
                        </div>
                      </div>

                      
                     
                      {isMobile ? (
                        <div className="w-full pt-4 lg:pt-0">
                          <ServiceCardCarousel
                            cards={service.images.map((img, idx) => ({
                              id: idx,
                              imageUrl: img.src,
                              liveUrl: img.liveUrl
                            }))}
                            baseWidth={580}
                            autoplay={true}
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-4 pt-4 lg:pt-0">
                          {service.images.map((img, idx) => (
                            <ServiceCard key={idx} imageUrl={img.src} liveUrl={img.liveUrl} />
                          ))}
                        </div>
                      )}
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </div>
    </Accordion>
  );
};
