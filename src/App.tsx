import React, { useEffect, useState } from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/hero/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Preloader } from "./components/preloader/Preloader";

function App() {
  // in each component set the page offset value , it is given as "offsetTop", save it in scroll reducer state so that it is available globally
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    const timerId = setTimeout(() => {
      setShow(true);
      console.log("hello");
    }, 4500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <React.Fragment>
      {show && (
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}

      {!show && <Preloader />}
    </React.Fragment>
  );
}

export default App;
