import Nav from './_components/Nav'
import Hero from './_components/Hero'
import Marquee from './_components/Marquee'
import Experience from './_components/Experience'
import Projects from './_components/Projects'
import Analyses from './_components/Analyses'
import Writing from './_components/Writing'
import Recognition from './_components/Recognition'
import Contact from './_components/Contact'
import Footer from './_components/Footer'
import { publishedAnalyses } from '@/data/analyses'

export default function Page() {
  const showAnalyses = publishedAnalyses().length > 0

  return (
    <main>
      <Nav showAnalyses={showAnalyses} />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <Analyses />
      <Writing />
      <Recognition />
      <Contact />
      <Footer />
    </main>
  )
}
