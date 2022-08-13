import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

type TopbarProps = {
  setVisibleSidebar: (visible: boolean) => void;
};

const Topbar = ({ setVisibleSidebar }: TopbarProps) => {
  return (
    <Toolbar
      style={{ position: "sticky", zIndex: 1000, top: 0 }}
      right={
        <Button
          className="p-button-text"
          icon="pi pi-bars"
          onClick={() => setVisibleSidebar(true)}
        />
      }
      left={<Image src={"favicon.png"} width="32px" />}
    ></Toolbar>
  );
};

export default Topbar;
