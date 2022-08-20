import { useRef } from "react";
import useObserver from "../hooks/useObserver";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import Gallery from "./Gallery";

type Props = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  files: string[];
  live?: string;
  link: string;
};

const Project = ({
  id,
  name,
  description,
  stack,
  files,
  live,
  link,
}: Props) => {
  const ref = useRef<any>(null);
  const isVisible = useObserver(ref);

  return (
    <div
      id={id}
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
      <Gallery isVisible={isVisible} files={files} parentId={id} />
    </div>
  );
};

export default Project;
