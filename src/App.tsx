import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Structure from './components/Structure';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import { useFadeInAnimation } from './hooks/useFadeInAnimation';

function App() {
  useFadeInAnimation();

  return (
    <div className="font-sans">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Structure />
      <Gallery />
      <News />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
