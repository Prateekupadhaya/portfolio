import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import "themify-icons/themify-icons.css";
import "./assets/vendors/themify-icons/css/themify-icons.css"
import "./assets/css/meyawo.css"
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      {/* <Pricing />
      <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App
