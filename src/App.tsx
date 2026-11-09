import About from './components/About'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Machines from './components/Machines'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <Machines />
        <Services />
        <Industries />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
