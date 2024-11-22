import Footer from "./Components/Footer/Footer"
import Navigation from "./Components/Navigation/Navigation"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Hero from "./Pages/Hero"

function App() {

  return (
    <main className="w-screen overflow-x-hidden">
      <Navigation/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
