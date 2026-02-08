import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import { Pricing } from "./components/Pricing";
import Services from "./components/Services";
import { TestimonialsSection } from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
