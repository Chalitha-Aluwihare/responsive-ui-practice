import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import LandingPage from './components/landingPage/LandingPage'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
    <LandingPage />
    <Footer />
    </>
  )
}

export default App
