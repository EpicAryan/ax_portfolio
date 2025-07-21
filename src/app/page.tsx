'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from 'motion/react'

const HomePage = () => {
  return (
    <motion.div className='min-h-screen flex items-center justify-center text-center text-5xl text-red-500'
    >HomePage
      <Button
      variant='default'
      size='lg'
      >How</Button>
    </motion.div>
  )
}

export default HomePage
