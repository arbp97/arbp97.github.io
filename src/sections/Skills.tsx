import { IMG_PATH } from "../config";
import { SKILLS } from "../data/skills";
import { Image } from "primereact/image";
import { Ripple } from "primereact/ripple";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-column justify-content-center align-items-center bg-primary-reverse mb-8"
    >
      <div className="mt-4 w-10">
        <span
          className="text-5xl font-bold mt-0 mb-8"
          style={{ wordBreak: "break-word" }}
        >
          TECHNOLOGIES AND TOOLS
        </span>
        <p className="text-xl mt-5 line-height-4 text-color">
          Using a combination of{" "}
          <span className="text-red-600">cutting-edge</span> technologies and
          reliable <span className="text-green-600">open-source software</span>{" "}
          I can build user-focused, performant apps and websites for every
          platform.
        </p>
      </div>
      <div className="grid gap-4 mt-6 w-full lg:w-10 justify-content-center">
        {SKILLS.map((value, index) => {
          return (
            <div
              key={index}
              className="p-ripple col-12 lg:col-2 flex flex-row justify-content-center align-items-center gap-4 shadow-2"
            >
              <Image src={IMG_PATH + value.image} width="32"></Image>
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
