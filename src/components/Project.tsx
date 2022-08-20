import { IMG_PATH } from "../config";
import { useRef, useState } from "react";
import { Image } from "primereact/image";
import useObserver from "../hooks/useObserver";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";

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
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);
  const [isFirstZoom, setIsFirstZoom] = useState(true);
  let tempOverlay = (() => {
    const element = document.createElement("div");
    element.classList.add(
      "p-image-mask",
      "p-component-overlay",
      "p-component-overlay-enter"
    );
    element.id = "tempOverlay";
    element.style.zIndex = "2100";
    return element;
  })();

  const dispatchIndicatorEvent = () => {
    const previewIndicator = document.getElementById(String(id))?.lastChild
      ?.firstChild?.firstChild?.firstChild?.firstChild?.firstChild?.lastChild;
    const event = new Event("click", { bubbles: true, cancelable: false });
    previewIndicator?.dispatchEvent(event);
  };

  const next = () => {
    setGalleryActiveIndex((prevState) => {
      dispatchIndicatorEvent();
      return prevState === files.length - 1 ? 0 : prevState + 1;
    });
  };

  const prev = () => {
    setGalleryActiveIndex((prevState) => {
      dispatchIndicatorEvent();
      return prevState === 0 ? files.length - 1 : prevState - 1;
    });
  };

  const GalleryArrow = (isPositionLeft: boolean) => {
    const element = document.createElement("i");
    element.classList.add("pi", "text-primary");
    element.style.fontSize = "2em";
    element.style.position = "fixed";
    element.style.zIndex = "7000";
    element.style.cursor = "pointer";

    if (isPositionLeft) {
      element.classList.add("pi-chevron-left");
      element.style.left = "3%";
      element.id = "tempOverlayChildLeft";
      element.style.top = "50%";
      element.onclick = () => prev();
    } else {
      element.classList.add("pi-chevron-right");
      element.style.right = "3%";
      element.id = "tempOverlayChildRight";
      element.style.top = "50%";
      element.onclick = () => next();
    }
    return element;
  };

  const itemTemplate = (item: { src: string; index: number }) => {
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

          element[0].appendChild(GalleryArrow(true));
          element[0].appendChild(GalleryArrow(false));

          if (!isFirstZoom)
            tempOverlay = document.body.appendChild(tempOverlay);
          else setIsFirstZoom(false);
        }}
        onHide={() => {
          document.getElementById(tempOverlay.id)?.remove();
        }}
      />
    );
  };

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
        activeIndex={galleryActiveIndex}
        onItemChange={(e) => setGalleryActiveIndex(e.index)}
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
