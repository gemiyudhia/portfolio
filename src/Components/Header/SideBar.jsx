import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`transform ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      } absolute top-full w-[390px] bg-secondary rounded-md transition-all duration-300 ease-in-out md:hidden right-0`}>
      <div className="p-4 flex flex-col">
        <Link to="/" className="nav-sidebar">
          Home
        </Link>
        <Link to="/projects" className="nav-sidebar">
          Projects
        </Link>
        <Link to="/contact" className="nav-sidebar">
          Contact
        </Link>
      </div>
    </div>
  );
};
