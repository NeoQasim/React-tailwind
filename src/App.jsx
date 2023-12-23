import { useState } from 'react'
 import viteLogo from '/vite.svg'
import './App.css'
import Navs from './components/Navs'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navs/>
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
    </>
  )
}

export default App
