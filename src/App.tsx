import { useEffect } from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/hero/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

function App() {
  // in each component set the page offset value , it is given as "offsetTop", save it in scroll reducer state so that it is available globally
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
