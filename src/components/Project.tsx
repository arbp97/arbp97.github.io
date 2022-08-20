import { IMG_PATH } from "../config";
import { useRef } from "react";
import { Image } from "primereact/image";
import useObserver from "../hooks/useObserver";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";

type Props = {
  name: string;
  description: string;
  stack: string[];
  files: string[];
  live?: string;
  link: string;
};

const Project = ({ name, description, stack, files, live, link }: Props) => {
  const ref = useRef<any>(null);
  const isVisible = useObserver(ref);

  const itemTemplate = (item: any) => {
    return (
      <Image
        src={IMG_PATH + item.src}
        alt={""}
        width="100%"
        preview
        onShow={() => {
          const element = document.getElementsByClassName(
            "p-image-mask p-component-overlay p-component-overlay-enter"
          );
          const child = document.createElement("i");
          child.id = "tempChild";
          child.classList.add("pi");
          child.classList.add("pi-check");
          child.classList.add("text-red-600");
          child.style.fontSize = "2em";
          child.style.position = "fixed";
          child.style.right = "20%";
          child.style.top = "50%";
          child.style.zIndex = "7000";
          element[0].appendChild(child);
        }}
      />
    );
  };

  return (
    <div
      ref={ref}
      className="flex flex-column lg:flex-row justify-content-center w-full h-auto gap-8"
    >
      <div
        className={
          "w-full lg:w-3 h-auto flex flex-column gap-1" +
          (isVisible ? " fadeinleft animation-duration-500" : " opacity-0")
        }
      >
        <p className="text-primary text-2xl font-bold">{name}</p>
        <p className="text-color text-xl line-height-2">{description}</p>
        <div className="flex flex-row gap-1">
          {stack.map((tech, index) => (
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
            disabled={live ? false : true}
            icon="pi pi-external-link"
            onClick={() => window.open(live, "_blank")}
          />
          <Button
            className="p-button-outlined"
            label="Repository"
            icon="pi pi-github"
            onClick={() => window.open(link, "_blank")}
          />
        </div>
      </div>
      <Galleria
        className={
          "w-full lg:w-6" +
          (isVisible ? " fadeinright animation-duration-500" : " opacity-0")
        }
        value={files.map((element, index) => ({
          src: element,
          index: index,
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
};

export default Project;
