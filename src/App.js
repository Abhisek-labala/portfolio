
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; 
import '@fortawesome/fontawesome-free/css/solid.css';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Services />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
