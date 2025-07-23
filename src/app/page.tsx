'use client'
import AboutSection from '@/components/about'
import HeroSection from '@/components/hero'
import ServiceSection from '@/components/services'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
    </main>
  )
}

export default HomePage
