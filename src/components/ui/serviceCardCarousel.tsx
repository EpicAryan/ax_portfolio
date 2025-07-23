'use client'
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, spring } from "motion/react"
import { ServiceCard } from "@/components/serviceCard"

interface ServiceCardData {
  imageUrl: string
  liveUrl: string
  id: number
}

interface ServiceCardCarouselProps {
  cards: ServiceCardData[]
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
}

const SPRING_OPTIONS = { type: spring, stiffness: 300, damping: 30 }

export const ServiceCardCarousel = ({
  cards,
  baseWidth = 320,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
}: ServiceCardCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current
      const handleMouseEnter = () => setIsHovered(true)
      const handleMouseLeave = () => setIsHovered(false)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [pauseOnHover])

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length)
      }, autoplayDelay)
      return () => clearInterval(timer)
    }
  }, [autoplay, autoplayDelay, isHovered, cards.length, pauseOnHover])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl"
        style={{ width: `${baseWidth}px` }}
      >
        {/* Centered Card Container */}
        <div className="flex justify-center items-center py-4 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={SPRING_OPTIONS}
              className="cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 50) {
                  goToPrev()
                } else if (info.offset.x < -50) {
                  goToNext()
                }
              }}
            >
              <ServiceCard 
                imageUrl={cards[currentIndex].imageUrl} 
                liveUrl={cards[currentIndex].liveUrl} 
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex w-full justify-center pb-4">
          <div className="flex gap-2">
            {cards.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                  currentIndex === index
                    ? "bg-gray-800"
                    : "bg-gray-300"
                }`}
                animate={{
                  scale: currentIndex === index ? 1.2 : 1,
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
