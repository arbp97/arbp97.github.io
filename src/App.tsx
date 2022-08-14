import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import NavigationSidebar from "./components/NavigationSidebar";
//import Topbar from "./components/Topbar";
import { ScrollTop } from "primereact/scrolltop";
import { Button } from "primereact/button";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <>
      <ThemeProvider>
        <NavigationSidebar
          visibleSidebar={visibleSidebar}
          setVisibleSidebar={setVisibleSidebar}
        />
        <Button
          className={visibleSidebar ? "border-none hidden" : "border-none"}
          onClick={() => setVisibleSidebar(true)}
          style={{
            position: "fixed",
            top: "25%",
            right: "0",
          }}
        >
          <i className="pi pi-chevron-left" style={{ fontSize: "2em" }}></i>
        </Button>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <ScrollTop threshold={200} />
      </ThemeProvider>
    </>
  );
};

export default App;
