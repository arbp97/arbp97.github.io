import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

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
    ></Toolbar>
  );
};

export default Topbar;
