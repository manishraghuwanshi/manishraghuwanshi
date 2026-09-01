import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "../../types/project";
import ProjectGallery from "./ProjectGallery";
import ProjectTags from "./ProjectTags";

interface FeaturedProjectsProps {
  project: Project;
}

export default function FeaturedProjects({
  project,
}: FeaturedProjectsProps) {
  return (
    <article className="group relative">
      {/* Outer glow */}
      <div
        className="
          absolute
          -inset-px
          rounded-[2rem]
          bg-linear-to-r
          from-[#1E3E62]/0
          via-[#1E3E62]/50
          to-[#A8C7DF]/0
          opacity-0
          blur-md
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.025]
          backdrop-blur-sm
        "
      >
        {/* top shimmer */}
        <div className="absolute left-0 top-0 h-px w-full overflow-hidden">
          <div
            className="
              h-full
              w-1/3
              animate-[shimmer_3s_linear_infinite]
              bg-linear-to-r
              from-transparent
              via-[#A8C7DF]
              to-transparent
            "
          />
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          {/* Gallery */}
          <div className="border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
            <ProjectGallery
              images={
                project.gallery?.length
                  ? project.gallery
                  : [
                      {
                        src: project.image,
                        alt: `${project.title} preview`,
                      },
                    ]
              }
              featured
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="mb-6">
              <span
                className="
                  mb-4
                  inline-flex
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
                Featured Project
              </span>

              <h2
                className="
                  font-display
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                {project.title}
              </h2>

              {project.year && (
                <p className="mt-2 text-sm text-zinc-500">
                  {project.year} · {project.status}
                </p>
              )}
            </div>

            <p className="mb-7 text-sm leading-7 text-zinc-400 sm:text-base">
              {project.longDescription ?? project.description}
            </p>

            {project.role && (
              <div className="mb-7">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8C7DF]/70">
                  Role
                </p>

                <p className="text-sm font-semibold text-zinc-200">
                  {project.role}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="mb-7">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8C7DF]/70">
                  Highlights
                </p>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.slice(0, 6).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1E3E62]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-7">
              <ProjectTags technologies={project.technologies} />
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-[#1E3E62]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#0B192C]
                      hover:shadow-[0_10px_30px_rgba(30,62,98,0.25)]
                    "
                  >
                    {link.label}

                    <HiArrowUpRight
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
} 