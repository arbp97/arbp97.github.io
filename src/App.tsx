import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Footer from "./sections/Footer";
import NavigationSidebar from "./components/NavigationSidebar";
import { ScrollTop } from "primereact/scrolltop";
import { Button } from "primereact/button";
import PrimeReact from "primereact/api";
import { useState } from "react";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  PrimeReact.ripple = true;

  return (
    <div className="bg-primary-reverse">
      <NavigationSidebar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />
      <Button
        className={visibleSidebar ? "border-none hidden" : "border-none"}
        onClick={() => setVisibleSidebar(true)}
        style={{
          position: "fixed",
          paddingLeft: ".5em",
          paddingRight: ".5em",
          top: "25%",
          right: "0",
          zIndex: 1000,
        }}
      >
        <i className="pi pi-chevron-left" style={{ fontSize: "2em" }}></i>
      </Button>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollTop threshold={200} />
    </div>
  );
};

export default App;
