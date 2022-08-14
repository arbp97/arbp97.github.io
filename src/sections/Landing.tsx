import { useSpring, animated } from "react-spring";
import { Button } from "primereact/button";

const Landing = () => {
  const landingMainProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });
  const landingButtonsProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });

  return (
    <section
      id="landing"
      className="flex justify-content-center align-items-center bg-primary-reverse"
    >
      <div className="flex flex-column align-items-center p-8 mt-2 mb-8">
        <animated.div
          className="text-center text-6xl font-bold"
          id="landing-main"
          style={landingMainProps}
        >
          <p className="m-1">
            Hi, my name is{" "}
            <span className="text-green-600">Alan Blangille</span>
          </p>
          <p className="m-1">I'm a Web Developer.</p>
        </animated.div>
        <animated.div
          className="mt-8"
          id="landing-buttons"
          style={landingButtonsProps}
        >
          <Button
            className="p-button-outlined text-2xl"
            label="Know More"
            onClick={() => window.location.replace("/#about")}
          />
        </animated.div>
      </div>
    </section>
  );
};

export default Landing;
