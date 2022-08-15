import { IMG_PATH } from "../config";
import { LINKS } from "../data/links";
import { Button } from "primereact/button";
import { Image } from "primereact/image";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-column justify-content-center align-items-center gap-3 bg-gray-800"
    >
      <Image src={IMG_PATH + "logo-light.png"} width="64" />
      <p className="text-xs text-color">&copy; Alan Blangille 2022</p>
      <div className="flex flex-row gap-2">
        {LINKS.map((value, index) => {
          return (
            <Button
              key={index}
              className="p-button-text p-button-rounded"
              onClick={() => window.open(value.link, "_blank")}
            >
              <i
                className={value.icon + " text-color"}
                style={{ fontSize: "2em" }}
              ></i>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
