import "../styles/divider.overrides.css";
import { IMG_PATH } from "../config";
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
        <img
          src={IMG_PATH + "personal.png"}
          className="object-cover photo"
          width="340"
          alt="Alan Blangille"
        />
        <div className="text-color text-xl line-height-4">
          <Divider align="left">
            <span className="p-tag border-1 border-white">Myself</span>
          </Divider>
          <span>
            I'm {new Date().getFullYear() - 2000} years old and I am from
            Argentina. I studied Computer Science at{" "}
            <span className="text-pink-600">Universidad Nacional de Lanús</span>
            .
          </span>
          <Divider align="center">
            <span className="p-tag border-1 border-white">Work</span>
          </Divider>
          <span>
            I'm currently working as a Ssr. Backend Software Developer at{" "}
            <span className="text-red-600">Andreani Grupo Logístico</span>.
          </span>
          <Divider align="right">
            <span className="p-tag border-1 border-white">Future</span>
          </Divider>
          <span>
            My current objective is to keep on learning, working and pushing my
            limits{" "}
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
