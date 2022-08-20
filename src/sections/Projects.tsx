import { PROJECTS } from "../data/projects";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section
      id="projects"
      className={
        "flex flex-column justify-content-center align-items-center gap-4 pb-8 bg-bluegray-900"
      }
    >
      <p className="text-5xl font-bold mt-0 mb-8 text-primary">PROJECTS</p>
      {PROJECTS.map((value, index) => {
        return (
          <Project
            id={String(index)}
            key={index}
            name={value.name}
            description={value.description}
            stack={value.stack}
            files={value.files}
            link={value.link}
            live={value.live}
          />
        );
      })}
    </section>
  );
};

export default Projects;
