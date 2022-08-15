import { useEffect, useState } from "react";

const useObserver = (ref: any) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return isVisible;
};

export default useObserver;
