import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Tambahkan ini
import { useRef } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={aboutRef} className="md:pt-28 pt-[100px] mb-10">
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-10 md:w-1/2">
          <h4 className="font-bold uppercase text-primary text-3xl mb-3">
            About me
          </h4>
          <h2 className="font-bold text-secondary text-3xl md:text-4xl mb-5 max-w-md">
            Turning designs into digital reality
          </h2>
          <p className="font-medium text-base text-secondary max-w-xl md:text-lg">
            I enjoy turning imagination into reality by creating visually
            appealing websites that are both engaging and functional, with a
            focus on delivering a great user experience.
          </p>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <h3 className="font-semibold text-secondary text-2xl mb-4 md:text-3xl md:pt-10">
            My vision
          </h3>
          <p className="font-medium text-base text-secondary mb-5 md:text-lg max-w-2xl">
            My vision as a frontend developer is to create intuitive and
            engaging user experiences that not only meet user needs but also
            push the boundaries of what's possible in web development.
          </p>
          <div className="flex items-center md:hidden">
            <a
              href="https://instagram.com/yuudhia"
              target="blank"
              className="bg-primary p-2 inline-block rounded-xl mr-3"
            >
              <FaInstagram className="text-white text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/gemiyudhia/"
              target="blank"
              className="bg-primary p-2 inline-block rounded-xl mr-3"
            >
              <FaLinkedinIn className="text-white text-3xl" />
            </a>
            <a
              href="https://github.com/gemiyudhia"
              target="blank"
              className="bg-primary p-2 inline-block rounded-xl mr-3"
            >
              <FiGithub className="text-white text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
