import { Button } from "primereact/button";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex justify-content-center align-items-center bg-primary-reverse"
    >
      <div className="flex flex-column align-items-center p-8 mt-2 mb-8">
        <div
          className="text-center text-6xl font-bold fadeinup animation-duration-500"
          id="landing-main"
        >
          <p className="m-1">
            Hi, my name is{" "}
            <span className="text-green-600">Alan Blangille</span>
          </p>
          <p className="m-1">I'm a Software Developer.</p>
        </div>
        <div
          className="fadein animation-duration-2000 mt-8"
          id="landing-buttons"
        >
          <Button
            className="p-button-outlined text-2xl shadow-2"
            label="Know More"
            onClick={() => window.location.replace("/#about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
