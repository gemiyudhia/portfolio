import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects"; // Import projects dari file terpisah

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const projectCards = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
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

    projectCards.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scroller: ".scrollbar",
          },
        }
      );
    });
  }, []);

  return (
    <section className="md:pt-28 pt-[100px] px-4 md:px-8 lg:px-16">
      <h1
        ref={projectRef}
        className="text-4xl text-secondary uppercase text-center font-black mb-12"
      >
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectCards.current[index] = el)}
            className="bg-primary rounded-xl overflow-hidden transition-all duration-300 shadow-thick-solid hover:-translate-y-2"
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a href={project.demo} target="_blank">
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-200">
                    <span>View Project</span>
                    <ArrowUpRight size={18} />
                  </button>
                </a>

                <a href={project.repo} target="_blank">
                  <button className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-200">
                    <span>Repository</span>
                    <Github size={18} />
                  </button>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
