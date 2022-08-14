import "../styles/toolbar.overrides.css";
import { IMG_PATH } from "../config";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useThemeContext } from "../context/ThemeContext";

type Props = {
  setVisibleSidebar: (visible: boolean) => void;
};

const Topbar = ({ setVisibleSidebar }: Props) => {
  const { currentTheme } = useThemeContext();
  return (
    <Toolbar
      right={
        <Button
          className="p-button-text"
          icon="pi pi-bars"
          onClick={() => setVisibleSidebar(true)}
        />
      }
      left={
        <Image
          src={
            currentTheme
              ? IMG_PATH + "logo-light.png"
              : IMG_PATH + "logo-dark.png"
          }
          width="32px"
        />
      }
    ></Toolbar>
  );
};

export default Topbar;
