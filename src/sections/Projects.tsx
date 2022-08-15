import { useThemeContext } from "../context/ThemeContext";
import { PROJECTS } from "../data/projects";
import { IMG_PATH } from "../config";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";

const Projects = () => {
  const { currentTheme } = useThemeContext();

  const itemTemplate = (item: any) => {
    return <Image src={IMG_PATH + item.src} alt={""} width="100%" preview />;
  };

  return (
    <section
      id="projects"
      className={
        "flex flex-column justify-content-center align-items-center gap-4 pb-8" +
        (currentTheme ? " bg-bluegray-900" : " bg-primary-100")
      }
    >
      <p className="text-5xl font-bold mt-0 mb-8 text-primary">PROJECTS</p>
      {PROJECTS.map((value, index) => {
        return (
          <div
            key={index}
            className="flex flex-column lg:flex-row justify-content-center w-full h-auto gap-8"
          >
            <div className="w-full md:w-3 h-auto flex flex-column gap-1">
              <p className="text-primary text-2xl font-bold">{value.name}</p>
              <p className="text-color text-xl line-height-2">
                {value.description}
              </p>
            </div>
            <Galleria
              className="w-full lg:w-6"
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
