import { useState, useEffect } from "react";
import { Project } from "./types";
import { CarouselButton } from "./CarouselButton";
import { ProjectInfo } from "./ProjectInfo";

export const ProjectCarousel = ({
  images,
  title,
  description,
  demoLink,
  repoLink,
}: Project) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full flex flex-col">
      <div className="relative overflow-hidden flex-grow">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        {images.length > 1 && (
          <>
            <CarouselButton
              direction="left"
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
            />
            <CarouselButton
              direction="right"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % images.length)
              }
            />
          </>
        )}
      </div>
      <ProjectInfo
        title={title}
        description={description}
        demoLink={demoLink}
        repoLink={repoLink}
      />
    </div>
  );
};
