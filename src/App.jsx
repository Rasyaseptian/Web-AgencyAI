import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Title from './components/Title'
import Services from './components/Services'
import OurWork from './components/OurWork'
import ServiceCard from './components/Services.Card'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import assets from './assets/assets'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} dark:bg-black relative`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </div>
  )
}

export default App
