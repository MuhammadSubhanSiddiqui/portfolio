import { Suspense, lazy } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../sections/Home'

const About = lazy(() => import('../sections/About'))
const Skills = lazy(() => import('../sections/Skills'))
const Projects = lazy(() => import('../sections/Projects'))
const Experience = lazy(() => import('../sections/Experience'))
const Education = lazy(() => import('../sections/Education'))
const Contact = lazy(() => import('../sections/Contact'))

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
