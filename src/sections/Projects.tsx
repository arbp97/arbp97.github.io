import { useThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const { currentTheme } = useThemeContext();
  return (
    <section
      id="projects"
      className={currentTheme ? "bg-bluegray-900" : "bg-primary-100"}
    >
      PROJECTS
    </section>
  );
};

export default Projects;
