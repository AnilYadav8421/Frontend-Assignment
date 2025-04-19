import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import DigitalMastery from './components/DigitalMastery'
import Services from './components/Services'
import Marketing from './components/Marketing'
import PropertyInq from './components/PropertyInq'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <DigitalMastery/>
      <Services/>
      <Marketing/>
      <PropertyInq/>
    </div>
  )
}

export default App