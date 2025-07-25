'use client'
import AboutSection from '@/components/about'
import ExperienceSection from '@/components/experience'
import HeroSection from '@/components/hero'
import ServiceSection from '@/components/services'


const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <ExperienceSection/>
    </main>
  )
}

export default HomePage
