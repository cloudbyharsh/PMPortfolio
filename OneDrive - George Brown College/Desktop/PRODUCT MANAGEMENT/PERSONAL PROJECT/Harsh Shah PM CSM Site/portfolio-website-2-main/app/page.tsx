import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Timeline from '@/components/Timeline'
import Academic from '@/components/Academic'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Timeline />
      <Academic />
      <Testimonials />
      <Contact />
    </main>
  )
}
