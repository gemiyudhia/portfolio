import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type CarouselButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

export const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => (
  <Button
    variant="outline"
    size="icon"
    className={`
      absolute top-1/2 ${direction === "left" ? "left-4" : "right-4"}
      transform -translate-y-1/2 z-10
      bg-slate-800 border-slate-700
      hover:bg-slate-700 hover:border-slate-600
      text-slate-200 hover:text-white
      transition-all duration-300 ease-in-out
      rounded-full shadow-lg hover:shadow-xl
      group
    `}
    onClick={onClick}
  >
    {direction === "left" ? (
      <ArrowLeft className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
    ) : (
      <ArrowRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
    )}
  </Button>
);
