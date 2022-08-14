import { useSpring, animated } from "react-spring";

const Landing = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <section id="landing">
      <animated.div style={props}>I will fade in</animated.div>
    </section>
  );
};

export default Landing;
