import { LocaleProvider } from './i18n/LocaleContext'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <LocaleProvider>
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  )
}
