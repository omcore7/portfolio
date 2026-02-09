import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <Footer />

       {/* Back to Top Button */}
      <a href="#home" className="back-to-top-btn">
        ↑
      </a>

    </>
  );
}

export default App;