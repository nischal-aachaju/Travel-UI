import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import Body1 from './components/layout/Body1'
import Body2 from './components/layout/Body2'
import Body3 from './components/layout/Body3'
import Footer from './components/layout/Footer'
import imafgs from "./assets/images/UI.png"
const App = () => {
  return (
    <div>
      <img src={imafgs} alt="" />
      <Navbar/>
      <Hero />
      <Body1 />
      <Body2 />
      <Body3 />
      <Footer />
      
    </div>
  )
}

export default App
