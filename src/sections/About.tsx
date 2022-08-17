import "../styles/divider.overrides.css";
import { IMG_PATH } from "../config";
import { Image } from "primereact/image";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import useObserver from "../hooks/useObserver";
import { useRef } from "react";

const About = () => {
  const domRef = useRef<any>();
  const isVisible = useObserver(domRef);

  return (
    <section
      id="about"
      className={
        "flex flex-column align-items-center pb-8 pt-8 bg-bluegray-900" +
        (isVisible ? " fadein animation-duration-1000" : " opacity-0")
      }
    >
      <p className="text-5xl text-center font-bold mt-0 mb-8 text-primary">
        ABOUT ME
      </p>
      <div
        ref={domRef}
        className="flex flex-column md:flex-row justify-content-center align-items-center gap-8 w-11 mb-8"
      >
        <Image
          className="black-white-filter"
          src={IMG_PATH + "personal.png"}
          width="340"
        ></Image>
        <div className="text-color text-xl line-height-4">
          <Divider align="left">
            <span className="p-tag border-1 border-white">Myself</span>
          </Divider>
          <span>
            I'm 22 years old and I am from Argentina. At this moment I find
            myself studying Computer Systems at{" "}
            <span className="text-pink-600">Universidad Nacional de Lanús</span>
            .
          </span>
          <Divider align="center">
            <span className="p-tag border-1 border-white">Work</span>
          </Divider>
          <span>
            I'm currently working as a trainee software developer at{" "}
            <span className="text-red-600">Andreani Grupo Logístico</span>.
          </span>
          <Divider align="right">
            <span className="p-tag border-1 border-white">Future</span>
          </Divider>
          <span>
            My current objectives are to finish my degree at University and keep
            on pushing my limits{" "}
            <span className="text-blue-600">one line of code at a time</span>.
          </span>
          <div className="flex flex-row gap-2 mt-6">
            <Button
              className="p-button-outlined text-xl"
              label="View Resume"
              onClick={() => window.open("/resume.pdf", "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
