import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";

const useScrollToSection = (sectionId) => {
  const [shouldScroll, setShouldScroll] = useState(false);
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setShouldScroll(true);
  };

  useEffect(() => {
    if (shouldScroll) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [shouldScroll, sectionId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldScroll(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return [sectionRef, handleScrollToSection];
};

export default useScrollToSection;
