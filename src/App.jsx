import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'
function App () {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true
    })
  }, [])
  return (

    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
