import { IMG_PATH } from "../config";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import { useState } from "react";

type Props = {
  files: string[];
  parentId: string;
  isVisible: boolean;
};

enum GalleryArrowPosition {
  Left = 0,
  Right = 1,
}

const Gallery = ({ files, parentId, isVisible }: Props) => {
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

  // dont judge me pls, this was the only option
  const dispatchIndicatorEvent = () => {
    const previewIndicator =
      document.getElementById(parentId)?.lastChild?.firstChild?.firstChild
        ?.firstChild?.firstChild?.firstChild?.lastChild;
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

  const GalleryArrow = (position: GalleryArrowPosition) => {
    const element = document.createElement("i");
    element.classList.add("pi", "text-primary");
    element.style.fontSize = "2em";
    element.style.position = "fixed";
    element.style.zIndex = "7000";
    element.style.cursor = "pointer";

    if (position === GalleryArrowPosition.Left) {
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

          element[0].appendChild(GalleryArrow(GalleryArrowPosition.Left));
          element[0].appendChild(GalleryArrow(GalleryArrowPosition.Right));

          if (isFirstZoom) setIsFirstZoom(false);
          else {
            const isDefaultOverlayGone = document.querySelector(
              ".p-component-overlay-leave"
            );
            if (isDefaultOverlayGone)
              tempOverlay = document.body.appendChild(tempOverlay);
          }
        }}
        onHide={() => {
          document.getElementById(tempOverlay.id)?.remove();
        }}
      />
    );
  };

  return (
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
  );
};

export default Gallery;
