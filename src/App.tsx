import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import NavigationSidebar from "./components/NavigationSidebar";
import Topbar from "./components/Topbar";
import { ScrollTop } from "primereact/scrolltop";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <>
      <ThemeProvider>
        <Topbar setVisibleSidebar={setVisibleSidebar} />
        <NavigationSidebar
          visibleSidebar={visibleSidebar}
          setVisibleSidebar={setVisibleSidebar}
        />
        <Landing />
        <Skills />
        <Projects />
        <About />
        <ScrollTop threshold={200} />
      </ThemeProvider>
    </>
  );
};

export default App;
