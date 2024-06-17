export const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="cursor-pointer flex flex-col h-[25px] justify-between md:hidden"
      onClick={() => setIsOpen(!isOpen)}>
      <span
        className={`hamburger-menu transition-all duration-300 ${
          isOpen &&
          "origin-top-left rotate-45 translate-x-1.5 translate-y-[-1px]"
        }`}></span>
      <span
        className={`hamburger-menu transition-all duration-300 ${
          isOpen && "scale-x-0"
        }`}></span>
      <span
        className={`hamburger-menu transition-all duration-300 ${
          isOpen &&
          "origin-bottom-left -rotate-45 translate-x-1.5 translate-y-[1px]"
        }`}></span>
    </div>
  );
};
