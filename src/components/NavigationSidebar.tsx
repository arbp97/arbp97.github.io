import "../styles/sidebar.overrides.css";
import { IMG_PATH } from "../config";
import { useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import { LINKS } from "../data/links";

const items = [
  { label: "Home", icon: "pi pi-fw pi-home", section: "landing" },
  { label: "About Me", icon: "pi pi-fw pi-user", section: "about" },
  { label: "Skills", icon: "pi pi-fw pi-code", section: "skills" },
  { label: "Projects", icon: "pi pi-fw pi-book", section: "projects" },
];

type Props = {
  visibleSidebar: boolean;
  setVisibleSidebar: (visible: boolean) => void;
};

const NavigationSidebar = ({ visibleSidebar, setVisibleSidebar }: Props) => {
  const themeToast = useRef<any>(null);

  const handleClick = (section: string) => {
    setVisibleSidebar(false);
    window.location.replace("/#" + section);
  };

  return (
    <Sidebar
      visible={visibleSidebar}
      position="right"
      showCloseIcon={false}
      className="bg-black-alpha-30"
      style={{ width: "16em" }}
      onHide={() => setVisibleSidebar(false)}
    >
      <Button
        className="border-none"
        onClick={() => setVisibleSidebar(false)}
        style={{
          position: "absolute",
          paddingLeft: ".5em",
          paddingRight: ".5em",
          top: "25%",
          left: "-48px",
        }}
      >
        <i className="pi pi-chevron-right" style={{ fontSize: "2em" }}></i>
      </Button>
      <Toast ref={themeToast} position="top-left" />
      <div className="flex flex-column gap-2">
        {items.map((value, index) => {
          return (
            <Button
              key={index}
              className="text-color p-button-raised p-button-text w-14rem"
              label={value.label}
              onClick={() => handleClick(value.section)}
            >
              <i
                className={value.icon + " text-primary"}
                style={{ fontSize: "1.5em" }}
              ></i>
            </Button>
          );
        })}
      </div>
      <Image className="mt-1" src={IMG_PATH + "logo-light.png"} width="64px" />
      <div className="flex flex-row justify-content-center">
        {LINKS.map((value, index) => {
          return (
            <Button
              key={index}
              className="p-button-text p-button-rounded"
              icon={value.icon}
              tooltip={value.name}
              onClick={() => window.open(value.link, "_blank")}
            ></Button>
          );
        })}
      </div>
    </Sidebar>
  );
};

export default NavigationSidebar;
