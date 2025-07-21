'use client'

import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const socialIcons = [
    { name: "Twitter", icon: FaXTwitter, href: "#" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" }
  ]

  return (
    <motion.section 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full py-4 px-4 md:px-6 z-50 bg-transparent backdrop-blur-md border-b border-white/20"
    >
      <div className="w-full container mx-auto ">
        <div className="w-full flex items-center justify-between">
          {/* Social Icons */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 flex items-center justify-center transition-colors duration-200 text-sm font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <IconComponent className="size-5 lg:size-6" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Mobile menu toggle with smooth animation */}
            <div className="sm:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors relative w-10 h-10 flex items-center justify-center"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.4, 0.0, 0.2, 1] 
                    }}
                    className="absolute"
                  >
                    {isOpen ? (
                      <HiX className="w-5 h-5" />
                    ) : (
                      <HiMenu className="w-5 h-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Center Text */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 absolute left-1/2 transform -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1}}
          >
            Based in India
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant='outline'
                className="border-1 border-black rounded-3xl md:!px-4 cursor-pointer hover:bg-black hover:text-white text-xs md:text-base font-medium"
              >
                Book a Call
                <GoArrowUpRight />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="sm:hidden overflow-hidden bg-gray-200/50 rounded-xl mt-2"
        >
          <div className="pt-4 pb-8 space-y-3">
            <div className="text-center py-2 text-xl font-medium text-gray-700">
              Based in India
            </div>
            <div className="flex justify-center space-x-4">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <IconComponent className="size-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Navbar
