import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { SideBar } from "./SideBar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-300 ${
        scrolled ? "bg-secondary" : "bg-transparent"
      }`}>
      <nav className="container mx-auto flex items-center justify-between py-8">
        <span className="text-2xl font-bold">Gemi Yudhia</span>

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="hidden md:block space-x-5">
          <Link to="/" className="nav-menu-animation">
            Home
          </Link>
          <Link to="/projects" className="nav-menu-animation">
            Projects
          </Link>
          <Link to="/contact" className="nav-menu-animation">
            Contact
          </Link>
        </div>

        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
};
