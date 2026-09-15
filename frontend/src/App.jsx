import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Achievements from './Achievements.jsx';
import Footer from './Footer.jsx';
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>    
      <Experience></Experience>
      <Skills></Skills>
      <Achievements></Achievements>
      <Footer></Footer>
      <Analytics></Analytics>
    </div>
  )
}

export default App
