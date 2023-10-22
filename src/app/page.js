<<<<<<< HEAD
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <About/>
        <Contact />
      </div>
    </main>
  )
}
=======
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <About/>
        <Contact />
      </div>
    </main>
  )
}
>>>>>>> 378cc9e485104b3e6d2f04a9c94101fadd100d80
