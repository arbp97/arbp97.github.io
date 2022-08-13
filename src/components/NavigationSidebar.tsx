import "../styles/sidebar.overrides.css";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { LINKS } from "../data/links";

const items = [
  { label: "Home", icon: "pi pi-fw pi-home", section: "landing" },
  { label: "Skills", icon: "pi pi-fw pi-code", section: "skills" },
  { label: "Projects", icon: "pi pi-fw pi-book", section: "projects" },
  { label: "About Me", icon: "pi pi-fw pi-user", section: "about" },
];

type NavigationSidebarProps = {
  visibleSidebar: boolean;
  setVisibleSidebar: (visible: boolean) => void;
};

const NavigationSidebar = ({
  visibleSidebar,
  setVisibleSidebar,
}: NavigationSidebarProps) => {
  const onClick = (section: string) => {
    setVisibleSidebar(false);
    window.location.replace("/#" + section);
  };

  return (
    <Sidebar
      visible={visibleSidebar}
      position="right"
      blockScroll={true}
      className="p-sidebar-sm"
      onHide={() => setVisibleSidebar(false)}
    >
      <div className="flex flex-column gap-3">
        {items.map((value, index) => {
          return (
            <Button
              key={index}
              className="p-button-outlined p-button-raised p-button-rounded"
              label={value.label}
              icon={value.icon}
              onClick={() => onClick(value.section)}
            ></Button>
          );
        })}
      </div>
      <div className="flex flex-row justify-content-center">
        {LINKS.map((value, index) => {
          return (
            <Button
              key={index}
              className="p-button-text p-button-rounded p-link"
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
