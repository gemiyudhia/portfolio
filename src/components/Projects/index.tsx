import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { ProjectCarousel } from "./ProjectCarousel";
import { PROJECTS_DATA } from "./constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const refs = {
    project: useRef<HTMLDivElement>(null),
    cards: Array(4)
      .fill(null)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .map(() => useRef<HTMLDivElement>(null)),
  };

  useGSAP(() => {
    const scrollConfig = {
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      scroller: ".scrollbar",
    };

    gsap.fromTo(
      refs.project.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: scrollConfig,
      }
    );

    refs.cards.forEach((ref, index) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1 + index * 0.5,
          ease: "power3.out",
          scrollTrigger: { ...scrollConfig, trigger: ref.current },
        }
      );
    });
  }, []);

  return (
    <section className="md:pt-28 pt-[100px]">
      <h1
        ref={refs.project}
        className="text-3xl text-secondary uppercase text-center font-black mb-9"
      >
        my projects
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 grid-rows-4 gap-7">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={project.title}
            ref={refs.cards[index]}
            className={`bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 ${
              index === 0
                ? "lg:col-span-3"
                : index === 1
                ? "md:col-span-2"
                : index === 2
                ? "md:col-span-2 lg:row-span-2"
                : "lg:col-span-3"
            } shadow-thick-solid overflow-hidden`}
          >
            <ProjectCarousel {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
