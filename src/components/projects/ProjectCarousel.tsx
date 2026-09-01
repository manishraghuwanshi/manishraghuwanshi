import { useState } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
} from "react-icons/hi2";
import type { Project } from "../../types/project";
import ProjectTags from "./ProjectTags";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({
  projects,
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects.length) {
    return null;
  }

  const activeProject = projects[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="relative">
      <article
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/2.5
          backdrop-blur-sm
        "
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <div
            className="
              relative
              aspect-16/10
              overflow-hidden
              border-b
              border-white/10
              bg-[#0B192C]/70
              lg:aspect-auto
              lg:border-b-0
              lg:border-r
            "
          >
            <img
              src={activeProject.image}
              alt={`${activeProject.title} contribution`}
              className="
                h-full
                w-full
                object-contain
                p-4
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span
                className="
                  rounded-full
                  border
                  border-[#1E3E62]/50
                  bg-[#1E3E62]/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#A8C7DF]
                "
              >
                Additional Contribution
              </span>

              <span className="text-xs font-medium text-zinc-500">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <h3
              className="
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              {activeProject.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {activeProject.description}
            </p>

            {activeProject.contribution && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium leading-6 text-zinc-400">
                  {activeProject.contribution}
                </p>
              </div>
            )}

            <div className="mt-6">
              <ProjectTags
                technologies={activeProject.technologies}
                limit={6}
              />
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous contribution"
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/3
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:border-[#1E3E62]
                  hover:bg-[#1E3E62]/20
                  hover:text-white
                "
              >
                <HiArrowLeft />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next contribution"
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/3
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:border-[#1E3E62]
                  hover:bg-[#1E3E62]/20
                  hover:text-white
                "
              >
                <HiArrowRight />
              </button>

              {/* Dots */}
              <div className="ml-3 flex items-center gap-1.5">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to contribution ${index + 1}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        activeIndex === index
                          ? "w-7 bg-[#1E3E62]"
                          : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}