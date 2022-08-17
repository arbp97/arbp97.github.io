import { PROJECTS } from "../data/projects";
import { IMG_PATH } from "../config";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
import { useRef } from "react";
import useObserver from "../hooks/useObserver";

const Projects = () => {
  const ref = useRef<any>(null);
  const isVisible = useObserver(ref);

  const itemTemplate = (item: any) => {
    return <Image src={IMG_PATH + item.src} alt={""} width="100%" preview />;
  };

  return (
    <section
      id="projects"
      className={
        "flex flex-column justify-content-center align-items-center gap-4 pb-8 bg-bluegray-900"
      }
    >
      <p ref={ref} className="text-5xl font-bold mt-0 mb-8 text-primary">
        PROJECTS
      </p>
      {PROJECTS.map((value, index) => {
        return (
          <div
            key={index}
            className="flex flex-column lg:flex-row justify-content-center w-full h-auto gap-8"
          >
            <div
              className={
                "w-full lg:w-3 h-auto flex flex-column gap-1" +
                (isVisible
                  ? " fadeinleft animation-duration-1000"
                  : " opacity-0")
              }
            >
              <p className="text-primary text-2xl font-bold">{value.name}</p>
              <p className="text-color text-xl line-height-2">
                {value.description}
              </p>
              <div className="flex flex-row gap-1">
                {value.stack.map((tech, index) => (
                  <Tag
                    key={index}
                    value={tech}
                    style={{ width: "fit-content" }}
                  ></Tag>
                ))}
              </div>
              <div className="flex flex-row w-full mt-6 gap-3">
                <Button
                  className="p-button-outlined"
                  label="Live"
                  disabled={value.live ? false : true}
                  icon="pi pi-external-link"
                  onClick={() => window.open(value.live, "_blank")}
                />
                <Button
                  className="p-button-outlined"
                  label="Repository"
                  icon="pi pi-github"
                  onClick={() => window.open(value.link, "_blank")}
                />
              </div>
            </div>
            <Galleria
              className={
                "w-full lg:w-6" +
                (isVisible
                  ? " fadeinright animation-duration-1000"
                  : " opacity-0")
              }
              value={value.files.map((element) => ({
                src: element,
              }))}
              item={itemTemplate}
              style={{ maxWidth: "768px" }}
              numVisible={5}
              showThumbnails={false}
              showIndicators
              changeItemOnIndicatorHover
              showIndicatorsOnItem
            />
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
