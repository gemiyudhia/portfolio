import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "../elements/HamburgerMenu";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const navbarRef = useRef<HTMLInputElement>(null);

  const hamburgerOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    const section = document.getElementById(menu);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Ambil semua section
    const options = {
      threshold: 0.5, // Nilai 0.5 berarti setidaknya 50% dari section harus terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveMenu(id);
          }
        }
      });
    }, options);

    // Amati setiap section
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-20 bg-primary rounded-full py-3 px-3 pr-7 container mx-auto shadow-thick-solid"
    >
      <div className="flex items-center">
        <div className="flex items-center w-full">
          {/* Logo untuk Mobile */}
          <h1 className="bg-white text-secondary font-black p-4 text-2xl rounded-full lg:hidden">
            GY
          </h1>

          {/* Menu Desktop */}
          <MenuDesktop
            activeMenu={activeMenu}
            handleMenuClick={handleMenuClick}
          />
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <HamburgerMenu isOpen={isOpen} hamburgerOpen={hamburgerOpen} />

        {/* Mobile Menu */}
        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Header;
