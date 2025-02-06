import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Tambahkan ini
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

const Projects = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const projectOneRef = useRef<HTMLImageElement>(null);
  const projectTwoRef = useRef<HTMLImageElement>(null);
  const projectThreeRef = useRef<HTMLImageElement>(null);
  const projectFourRef = useRef<HTMLImageElement>(null);
  const projectFiveRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scroller: ".scrollbar",
        },
      }
    );
    gsap.fromTo(
      projectOneRef.current,
      { opacity: 0, x: -50 }, // Mulai tersembunyi
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectOneRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scroller: ".scrollbar",
        },
      }
    );
    gsap.fromTo(
      projectTwoRef.current,
      { opacity: 0, x: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectTwoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scroller: ".scrollbar",
        },
      }
    );
    gsap.fromTo(
      projectThreeRef.current,
      { opacity: 0, y: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectThreeRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scroller: ".scrollbar",
        },
      }
    );
    gsap.fromTo(
      projectFourRef.current,
      { opacity: 0, y: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectFourRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scroller: ".scrollbar",
        },
      }
    );
    gsap.fromTo(
      projectFiveRef.current,
      { opacity: 0, y: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        y: 0,
        duration: 3.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectFiveRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scroller: ".scrollbar",
        },
      }
    );
  }, []);

  return (
    <section className="md:pt-28 pt-[100px]">
      <h1
        ref={projectRef}
        className="text-3xl text-secondary uppercase text-center font-black mb-9"
      >
        my project
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 grid-rows-4 gap-7">
        {/* Gambar pertama */}
        <img
          ref={projectOneRef}
          src=""
          alt="1"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 lg:col-span-3 shadow-thick-solid"
        />
        {/* Gambar kedua */}
        <img
          ref={projectTwoRef}
          src=""
          alt="2"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 md:col-span-2 row-span-2 shadow-thick-solid"
        />
        {/* Gambar ketiga */}
        <img
          ref={projectFourRef}
          src=""
          alt="4"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 md:col-span-2 lg:row-span-2 shadow-thick-solid"
        />
        {/* Gambar kelima */}
        <img
          ref={projectFiveRef}
          src=""
          alt="5"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 lg:col-span-3 shadow-thick-solid"
        />
      </div>
    </section>
  );
};

export default Projects;
