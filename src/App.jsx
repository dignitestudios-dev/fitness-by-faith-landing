import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactNavbar from './components/ContactNavbar'; // Import new navbar
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import DownloadSection from "./components/DownloadSection";
import './App.css';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar /> {/* Use default navbar on homepage */}
              <section id="home">
                <HeroSection />
              </section>
              <section id="features">
                <FeatureSection />
              </section>
              <DownloadSection />
              <section id="about-us">
                <AboutSection />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
            </>
          }
        />

        {/* Contact Us Page Route */}
        <Route
          path="/contact-us"
          element={
            <>
              <ContactNavbar /> {/* Use new navbar on contact page */}
              <ContactUs />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
