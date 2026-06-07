import { useReveal } from '@/hooks/use-reveal'
import { Nav } from '@/components/portfolio/Nav'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Experience } from '@/components/portfolio/Experience'
import { Skills } from '@/components/portfolio/Skills'
import { Projects } from '@/components/portfolio/Projects'
import { Achievements } from '@/components/portfolio/Achievements'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'
import { Particles } from '@/components/portfolio/Particles'
import { CursorGlow } from '@/components/portfolio/CursorGlow'

function App() {
  useReveal()
  return (
    <div className="relative min-h-screen text-foreground overflow-x-clip">
      <Particles />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
