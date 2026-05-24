import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-[#ff8a65]/15 py-8">
        <div className="section-shell flex flex-col gap-2 text-sm text-[#b6c4c9] md:flex-row md:items-center md:justify-between">
          <p>Vinayak Portfolio</p>
          <p>MERN Stack Developer & Cyber Security Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
