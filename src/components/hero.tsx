'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { SlidingLogoMarquee, SlidingLogoMarqueeItem  } from "@/components/ui/sliding-logo-marquee"

const HeroSection = () => {
  const services = [
    { name: "Talent Sourcing", delay: 0.2 },
    { name: "Customer Acquisition", delay: 0.3 },
    { name: "Job Finder", delay: 0.4 },
    { name: "MVP Development", delay: 0.5 },
    { name: "Talent Sourcing", delay: 0.6 },
    { name: "Customer Acquisition", delay: 0.6 },
    { name: "Customer Acquisition", delay: 0.7 },
    { name: "Talent Sourcing", delay: 0.7 },
    { name: "Customer Acquisition", delay: 0.8 },
    { name: "Customer Acquisition", delay: 0.9 },
    { name: "Customer Acquisition", delay: 1.0 },
  ]

  const logos: SlidingLogoMarqueeItem[] = [
  {
    id: "1",
    content: <Image width={200} height={200} src="/brands/loreal.png" alt="Logo" className="w-16 md:w-20 h-auto" />
  },
  {
    id: "2", 
    content: <Image width={400} height={400} src="/brands/danske.png" alt="Logo" className="w-24 md:w-36 h-auto" />
  },
  {
    id: "3", 
    content: <Image width={400} height={400} src="/brands/nissan.png" alt="Logo" className="w-18 md:w-24 h-auto" />
  },
  {
    id: "4", 
    content: <Image width={200} height={200} src="/brands/siemens.png" alt="Logo" className="w-16 md:w-20 h-auto" />
  },
  {
    id: "5", 
    content: <Image width={200} height={200} src="/brands/toyota.png" alt="Logo" className="w-16 md:w-20 h-auto" />
  }
];

  return (
    <section className="min-h-screen w-full pt-20 sm:pt-28 lg:pt-32">
      <div className="w-full container mx-auto px-6">
        <div className="w-full flex items-center justify-between h-[70vh] rounded-4xl relative bg-radial from-[#504644] to-[#463B3B] overflow-hidden"
        >
          
          <Image
            width={800}
            height={800}
            src="https://images.ctfassets.net/m3x6aw9x53qp/6f22PkE5C7VQ8ruGY1Ek8C/3e7d5d2454dfc20cd1443bf3ea1c7f3f/person.png"
            alt="Hero Line"
            className="absolute w-[500px] xl:w-[700px] left-1/2 -bottom-0 xl:top-1/2  -translate-x-1/2 xl:-translate-y-1/2 z-10"
          />
          <Image
            fill
            src="/svg/hero-line.svg"
            alt="Hero Line"
            className="absolute -translate-x-[28%] bottom-0 z-0  xl:scale-[1.04] -rotate-1"
          />
            <motion.div 
              initial={{ opacity: 0, x:-20, y: 30 }}
              animate={{ opacity: 1, x:0, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex flex-col px-10 xl:px-20 -translate-y-12 space-y-2.5 ">
                <p className="text-white text-xl xl:text-3xl font-normal">Hey there, I&apos;m</p>
                <h1 className="text-7xl/tight xl:text-8xl/tight text-white font-extrabold">Nikhil<br/>Kakkar</h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="hidden lg:flex flex-wrap gap-x-4 gap-y-4 max-w-sm xl:max-w-md px-2 -translate-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: service.delay }}
                >
                  <Badge
                    variant="outline"
                    className="text-white border-white text-xs xl:text-sm font-medium px-4 py-1.5 rounded-full w-fit transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                  >
                    {service.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile view */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="lg:hidden w-full absolute top-6 text-center flex flex-col justify-center space-y-2">
              <p className="text-white text-lg font-normal">Hey there, I&apos;m</p>
              <h1 className="text-4xl/snug text-white font-bold">Nikhil Kakkar</h1>
            </motion.div>
        </div>

        {/* logo section */}
        <div className="border-t-1 border-t-[#DEDEDE] mt-6 mx-auto flex justify-center">
          <div className="max-w-3xl flex flex-col md:flex-row md:space-x-6">
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5}} 
                className="text-[#545454] text-center md:text-left md:text-lg font-medium text-nowrap mt-4 lg:mt-8">
                Trusted by <span className="text-black font-bold">many</span>
              </motion.h4>
              <SlidingLogoMarquee 
                items={logos}
                speed={30}
                height="20px"
                pauseOnHover={false}
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
