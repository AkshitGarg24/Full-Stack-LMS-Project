import React from 'react'
import { Companies, CoursesSection, Hero, Testimonials } from '../../components/student'

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <CoursesSection />
      <Testimonials />
    </div>
  )
}

export default Home