import type { Project } from "../../types/project";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group relative h-full">
      {/* Glow */}
      <div
        className="
          absolute
          -inset-px
          rounded-[1.55rem]
          bg-linear-to-r
          from-transparent
          via-[#1E3E62]/50
          to-transparent
          opacity-0
          blur-sm
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.025]
          backdrop-blur-sm
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:border-[#1E3E62]/50
        "
      >
        {/* Image */}
        <div
          className="
            relative
            aspect-[16/10]
            w-full
            overflow-hidden
            border-b
            border-white/10
            bg-[#0B192C]/60
          "
        >
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="
              h-full
              w-full
              object-contain
              p-2
              transition-transform
              duration-700
              group-hover:scale-[1.025]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-t
              from-black/30
              via-transparent
              to-transparent
            "
          />

          {/* Status */}
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-white/10
              bg-black/70
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#A8C7DF]
              backdrop-blur-md
            "
          >
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-5">
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3
                className="
                  font-display
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-2xl
                "
              >
                {project.title}
              </h3>

              {project.year && (
                <span className="shrink-0 text-xs text-zinc-500">
                  {project.year}
                </span>
              )}
            </div>

            <p className="text-sm leading-6 text-zinc-400">
              {project.description}
            </p>
          </div>

          {project.role && (
            <div className="mb-5">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8C7DF]/70">
                Role
              </p>

              <p className="text-sm font-medium text-zinc-200">
                {project.role}
              </p>
            </div>
          )}

          <div className="mt-auto space-y-5">
            <ProjectTags
              technologies={project.technologies}
              limit={5}
            />

            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </article>
  );
}