import { useMemo, useState } from "react";

import FeaturedProjects from "../components/projects/FeaturedProjects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectCarousel from "../components/projects/ProjectCarousel";
import ProjectFilter, {
  type ProjectFilterValue,
} from "../components/projects/ProjectFilter";

import product_page from "../assets/projectImgs/product_page.png";

import {
  contributionProjects,
  currentProjects,
  featuredProject,
  professionalProjects,
} from "../data/projects";

import type { Project } from "../types/project";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>("all");

  const handleActiveFilter = (filters: ProjectFilterValue) => {
    setActiveFilter(filters);
    
  };

  const allProjects = useMemo<Project[]>(
    () => [
      ...currentProjects,
      ...professionalProjects,
      ...contributionProjects,
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return allProjects;
    }

    return allProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, allProjects]);

  const showStructuredSections = activeFilter === "all";

  return (
    <main className="min-h-screen bg-black">
      {/* =====================================================
          Page Header
          ===================================================== */}
      <section className="mx-auto w-full max-w-(--container-width) px-4 py-12 sm:px-6 lg:px-8">
        {" "}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <FaProjectDiagram className="text-xl text-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Selected Work
              </span>
            </div>

            <h1
              className="
              font-display
              text-4xl
              font-bold
              tracking-[-0.03em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
            >
              Projects
            </h1>

            <p
              className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-zinc-400
              sm:text-base
            "
            >
              A collection of projects I&apos;m currently building, professional
              work I&apos;ve contributed to, and the additional development work
              I&apos;ve handled along the way.
            </p>
          </div>
          <div>
            <a
              href="https://react.dev/learn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.currentTarget.href = [
                  "https://react.dev/learn",
                  "https://nextjs.org                              ",
                ][Math.floor(Math.random() * 2)];
              }}
            >
              <img
                src={product_page}
                alt=""
                className="
                relative
                z-10
                h-40
                w-auto
                object-contain
                transition-all
                duration-500
                group-hover:brightness-110
              "
              />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          Main Content
          ===================================================== */}
      <div className="mx-auto w-full max-w-300 px-5 pb-24 sm:px-6 lg:px-8">
        {showStructuredSections ? (
          <div className="space-y-0">
            {/* =================================================
                Filter
                ================================================= */}
            <section></section>
            {/* =================================================
                Featured Project
                ================================================= */}
            <section>
              <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p
                    className="
                      bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
                      bg-size-[300%_100%]
                      bg-clip-text
                      text-transparent
                      text-xl
                      pb-4
                      animate-shimmer"
                  >
                    Featured
                  </p>
                  <h2
                    className="
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-2xl
                  "
                  >
                    A closer look at what I&apos;m building
                  </h2>
                </div>

                <ProjectFilter
                  activeFilter={activeFilter}
                  onChange={handleActiveFilter}
                />
              </div>

              <FeaturedProjects project={featuredProject} />
            </section>

            {/* =================================================
                Current Projects
                ================================================= */}
            <section>
              <div className="mb-7">
                <p
                  className="
                      bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
                      bg-size-[300%_100%]
                      bg-clip-text
                      text-transparent
                      text-xl
                      pt-8 pb-4
                      animate-shimmer"
                >
                  Current Work
                </p>

                <h2
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Projects I&apos;m working on
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                  Personal projects where I&apos;m actively applying and
                  expanding my current development skills.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {currentProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* =================================================
                Professional Projects
                ================================================= */}
            <section>
              <div className="mb-7">
                <p
                  className="
                      bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
                      bg-size-[300%_100%]
                      bg-clip-text
                      text-transparent
                      text-xl
                      pt-8 pb-4
                      animate-shimmer "
                >
                  Professional Work
                </p>

                <h2
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Selected professional projects
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                  Selected projects I contributed to during my professional
                  experience as a Junior Web Developer.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {professionalProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* =================================================
                Additional Contributions
                ================================================= */}
            <section>
              <div className="mb-7">
                <p className="mb-2 pt-12 pb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#A8C7DF]">
                  Beyond Primary Projects
                </p>

                <h2
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Additional contributions
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                  Smaller but valuable pieces of work handled across different
                  projects whenever the team needed additional development
                  support.
                </p>
              </div>

              <ProjectCarousel projects={contributionProjects} />
            </section>
          </div>
        ) : (
          /* ===================================================
             Filtered View
             =================================================== */
          <section>
            <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p
                  className="
                      bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
                      bg-size-[300%_100%]
                      bg-clip-text
                      text-transparent
                      text-xl
                      animate-shimmer"
                >
                  Filtered Work
                </p>

                <h2
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-2xl
                  "
                >
                  {activeFilter === "current"
                    ? "Current projects"
                    : activeFilter === "professional"
                      ? "Professional projects"
                      : "Additional contributions"}
                </h2>
              </div>

              <ProjectFilter
                activeFilter={activeFilter}
                onChange={handleActiveFilter}
              />
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/2.5 p-10 text-center">
                <p className="text-sm text-zinc-500">
                  No projects available in this category yet.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
