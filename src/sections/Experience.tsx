import { EXPERIENCE } from "../data/experience";
import ExpCard from "../components/ExpCard";
import useObserver from "../hooks/useObserver";
import { useRef } from "react";
import { Divider } from "primereact/divider";

const Experience = () => {
  const ref = useRef<any>(null);
  const isVisible = useObserver(ref);
  return (
    <section
      id="experience"
      className={
        "flex flex-column justify-content-left align-items-left gap-4 pb-8" +
        (isVisible ? " fadein animation-duration-1000" : " opacity-0")
      }
    >
      <p
        ref={ref}
        className="text-5xl font-bold mt-0 mb-8 text-primary text-center lg:w-10 mx-auto"
      >
        EXPERIENCE
      </p>
      {EXPERIENCE.map((value, index) => {
        return (
          <div>
            <ExpCard
              id={String(index)}
              key={index}
              company={value.company}
              title={value.title}
              dateRange={value.dateRange}
              logo={value.logo}
              description={value.description}
            />
            {index < EXPERIENCE.length - 1 && (
              <Divider
                align="center"
                type="solid"
                style={{
                  height: "1px",
                  width: "25%",
                  margin: "1.5rem auto",
                }}
                className="!p-0"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
