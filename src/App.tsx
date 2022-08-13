import Landing from "./sections/Landing";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import NavigationSidebar from "./components/NavigationSidebar";
import Topbar from "./components/Topbar";
import { useState } from "react";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <>
      <Topbar setVisibleSidebar={setVisibleSidebar} />
      <NavigationSidebar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />
      <Landing />
      <Skills />
      <Projects />
      <About />
    </>
  );
};

export default App;
