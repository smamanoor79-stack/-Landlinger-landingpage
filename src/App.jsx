import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import BusinessSuccess from "./components/BusinessSuccess";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
       <Features />
       <Steps />
       <Pricing />
       <BusinessSuccess/>
       <Stats/>
       <Testimonials/>
       <Newsletter/>
       <Footer/>

    </div>
  )
}

export default App