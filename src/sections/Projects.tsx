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
      <a
        href="https://github.com/arbp97"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-lg text-primary underline"
      >
        See more projects on GitHub
      </a>
    </section>
  );
};

export default Projects;
