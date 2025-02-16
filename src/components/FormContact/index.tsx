import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdMessage } from "react-icons/md";
import send from "../../assets/send.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

const FormContact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useGSAP(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 }, // Mulai tersembunyi
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          `${import.meta.env.VITE_REACT_SERVICE}`,
          `${import.meta.env.VITE_REACT_TEMPLATE}`,
          form.current,
          {
            publicKey: `${import.meta.env.VITE_REACT_API}`,
          }
        )
        .then(
          () => {
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div ref={contactRef} className="md:pt-28 pt-[100px]">
      <h1 className="flex items-center text-3xl text-secondary font-bold mb-8">
        Write me a Message <MdMessage className="ml-2 text-primary" />
      </h1>
      <div className="lg:grid grid-cols-2 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-200 py-9 px-5 flex flex-col rounded-3xl shadow-thick-solid"
        >
          <label className="text-secondary font-semibold mb-1">Name</label>
          <input
            type="text"
            name="user_name"
            className="px-3 py-2 rounded-lg text-secondary mb-3 outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your name..."
            required
          />
          <label className="text-secondary font-semibold mt-1">Email</label>
          <input
            type="email"
            name="user_email"
            className="px-3 py-2 rounded-lg text-secondary mb-3 outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your email..."
            required
          />
          <label className="text-secondary font-semibold mt-1">Message</label>
          <textarea
            name="message"
            className="px-3 py-2 rounded-lg text-secondary mb-3 outline-none focus:ring-1 focus:ring-primary"
            placeholder="Write your message here..."
            required
          />
          <input
            type="submit"
            value="Send"
            className="bg-primary cursor-pointer lg:py-5 hover:bg-[#43318a] md:py-3 md:w-1/2 lg:w-1/4 md:px-5 py-3 mt-8 rounded-xl text-white font-semibold"
          />
        </form>
        <div>
          <img
            src={send}
            alt="send image"
            className="hidden lg:flex w-96 h-96 ml-56"
          />
        </div>
      </div>

      {isSuccess && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 mt-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
          Your message was sent successfully!
        </div>
      )}
    </div>
  );
};

export default FormContact;
