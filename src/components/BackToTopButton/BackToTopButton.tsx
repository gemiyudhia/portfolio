import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  return (
    <div className="fixed bottom-8 right-5">
      <button
        type="button"
        className="bg-primary text-white p-3 rounded-full shadow-xl"
      >
        <a href="#home">
          <FaArrowUp className="text-4xl" />
        </a>
      </button>
    </div>
  );
};

export default BackToTopButton;
