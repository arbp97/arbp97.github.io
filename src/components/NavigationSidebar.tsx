import "../styles/sidebar.overrides.css";
import { useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { LINKS } from "../data/links";
import { useThemeContext } from "../context/ThemeContext";

const items = [
  { label: "Home", icon: "pi pi-fw pi-home", section: "landing" },
  { label: "Skills", icon: "pi pi-fw pi-code", section: "skills" },
  { label: "Projects", icon: "pi pi-fw pi-book", section: "projects" },
  { label: "About Me", icon: "pi pi-fw pi-user", section: "about" },
];

type Props = {
  visibleSidebar: boolean;
  setVisibleSidebar: (visible: boolean) => void;
};

const NavigationSidebar = ({ visibleSidebar, setVisibleSidebar }: Props) => {
  const { currentTheme, changeTheme } = useThemeContext();
  const themeToast = useRef<any>(null);

  const handleClick = (section: string) => {
    setVisibleSidebar(false);
    window.location.replace("/#" + section);
  };

  return (
    <Sidebar
      visible={visibleSidebar}
      position="right"
      blockScroll={true}
      showCloseIcon={false}
      style={{ width: "15em" }}
      onHide={() => setVisibleSidebar(false)}
      icons={
        <Button
          className="p-button-rounded"
          icon={currentTheme ? "pi pi-sun" : "pi pi-moon"}
          tooltip="Change theme"
          onClick={() => {
            changeTheme();
            themeToast.current?.show({
              severity: "info",
              summary: "Theme Changed",
              detail: currentTheme ? "Light Mode" : "Dark Mode",
              life: 1000,
            });
          }}
        />
      }
    >
      <Button
        className="border-none"
        onClick={() => setVisibleSidebar(false)}
        style={{
          position: "absolute",
          top: "25%",
          left: "-64px",
        }}
      >
        <i className="pi pi-chevron-right" style={{ fontSize: "2em" }}></i>
      </Button>
      <Toast ref={themeToast} position="top-left" />
      <div className="flex flex-column gap-3">
        {items.map((value, index) => {
          return (
            <Button
              key={index}
              className="p-button-outlined"
              label={value.label}
              icon={value.icon}
              onClick={() => handleClick(value.section)}
            ></Button>
          );
        })}
      </div>
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
