'use client'

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'

interface ServiceCardProps {
  imageUrl: string
  liveUrl: string
}

export const ServiceCard = ({ imageUrl, liveUrl }: ServiceCardProps) => {
  return (
    <Card className="relative w-56 h-60 md:w-45 md:h-57 lg:w-40 lg:h-50 xl:w-45 xl:h-57 overflow-hidden rounded-3xl shadow-md">
      <Image
        src={imageUrl}
        alt="Project preview"
        fill
        className="object-cover"
      />
      
      <div className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 p-2 border-none">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative w-full rounded-full overflow-hidden bg-white"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black rounded-full"
            variants={{
              rest: {
                x: '-100%',
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              },
              hover: {
                x: '0%',
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
          />

          <div className="relative z-10 px-4 py-2">
            <Link 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-between text-sm font-medium"
            >
              <motion.span
                variants={{
                  rest: {
                    color: '#000000',
                    transition: {
                      duration: 0.3
                    }
                  },
                  hover: {
                    color: '#ffffff',
                    transition: {
                      duration: 0.3,
                      delay: 0.2
                    }
                  }
                }}
              >
                Live Link
              </motion.span>
              
              <motion.span 
                className="absolute right-0.5 size-8 flex items-center justify-center rounded-full"
                variants={{
                  rest: {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    transition: {
                      duration: 0.3
                    }
                  },
                  hover: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    transition: {
                      duration: 0.3,
                      delay: 0.2
                    }
                  }
                }}
              >
                <ArrowUpRight className="size-4" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>    
    </Card>
  )
}
