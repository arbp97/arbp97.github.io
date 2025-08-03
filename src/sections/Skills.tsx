import { SKILLS } from "../data/skills";
import { Image } from "primereact/image";
import { Ripple } from "primereact/ripple";
import useObserver from "../hooks/useObserver";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef<any>(null);
  const isVisible = useObserver(ref);

  return (
    <section
      id="skills"
      className={
        "flex flex-column justify-content-center align-items-center bg-primary-reverse pb-2" +
        (isVisible ? " fadein animation-duration-1000" : " opacity-0")
      }
    >
      <div ref={ref} className="mt-4 w-10">
        <span
          className="text-5xl font-bold mt-0"
          style={{ wordBreak: "break-word" }}
        >
          TECHNOLOGIES AND TOOLS
        </span>
        <p className="text-xl mt-5 line-height-4 text-color">
          Using modern server-side technologies and robust open-source tools, I
          build <span className="text-red-600">scalable</span>, secure, and{" "}
          <span className="text-green-600">high-performance</span> backend
          systems that power seamless experiences across all platforms.
        </p>
      </div>
      <div className="grid gap-4 mt-6 w-full lg:w-10 justify-content-center">
        {SKILLS.map((value, index) => {
          return (
            <div
              key={index}
              className="p-ripple col-10 md:col-4 lg:col-2 flex flex-row justify-content-center align-items-center gap-4 shadow-4"
            >
              <Image src={value.image} width="48"></Image>
              <p className="text-color font-bold">{value.name}</p>
              <Ripple />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
