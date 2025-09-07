import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;