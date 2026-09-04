import { FaGraduationCap } from "react-icons/fa";


import EducationItem from "./EducationItem";
import { FiExternalLink } from "react-icons/fi";

import education_page from "../../assets/PNG/education_page.png"

export default function Education() {
  return (
    <section className="mx-auto w-full max-w-(--container-width) px-4 py-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
        <div className="mb-4 flex items-center gap-3">
          <FaGraduationCap className="text-xl text-blue-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Education
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Academic Journey
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          My educational background, academic achievements, and qualifications.
        </p>
        </div>
        <div>
            
              <img
                src={education_page}
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
            
          </div>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[11px] top-0 hidden h-full w-px bg-blue-900/60 sm:block" />

        <div className="space-y-12">
          {/* B.Tech */}
          <div className="relative sm:pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-[5px] top-8 hidden h-3 w-3 rounded-full border-2 border-blue-400 bg-black sm:block" />

            <EducationItem
              title="Undergraduate"
              institution="VIT Bhopal University"
              field="B.Tech - Computer Science & Engineering (Core)"
              score="7.53"
              scoreLabel="CGPA"
              date="12 September 2023"
              registrationNumber="19BCE10439"
              period="2019 → 2023"
            />
          </div>

          {/* School Education */}
          <div className="relative sm:pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-[5px] top-8 hidden h-3 w-3 rounded-full border-2 border-blue-400 bg-black sm:block" />

            <article className="group relative overflow-hidden rounded-3xl border border-blue-900/70 bg-black p-6 transition-all duration-300 hover:border-blue-700/80 sm:p-8">
              {/* Border Glow */}
              <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-transparent via-blue-500/40 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p
                      className="
                      bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
                      bg-size-[300%_100%]
                      bg-clip-text
                      text-transparent
                      text-xl
                      animate-shimmer
                    "
                    >
                      {" "}
                      School Education
                    </p>

                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      Madhya Pradesh Board
                    </h2>

                    <p className="mt-2 text-sm text-zinc-400">
                      Board of Secondary Education, Madhya Pradesh
                    </p>
                  </div>

                  {/* MP Board Logo */}
                  <div>
                    <a
                      href="https://mpbse.nic.in/"
                      target="_blank"
                      className="flex items-center gap-3"
                    >
                      <p> MP Board </p>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                {/* Class XII + Class X */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Class XII */}
                  <div className="rounded-2xl border border-blue-950/80 bg-blue-950/10 p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                          Class XII
                        </p>

                        <p className="mt-1 text-sm text-zinc-400">
                          Higher Secondary
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">95.2%</p>

                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Percentage
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-blue-950/70 pt-4">
                      <span className="text-sm text-zinc-500">Stream</span>

                      <span className="text-sm font-medium text-zinc-200">
                        Mathematics
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-zinc-500">Completed</span>

                      <span className="text-sm font-medium text-zinc-200">
                        15 May 2019
                      </span>
                    </div>
                  </div>

                  {/* Class X */}
                  <div className="rounded-2xl border border-blue-950/80 bg-blue-950/10 p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                          Class X
                        </p>

                        <p className="mt-1 text-sm text-zinc-400">
                          High School
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">90.66%</p>

                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Percentage
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-blue-950/70 pt-4">
                      <span className="text-sm text-zinc-500">Board</span>

                      <span className="text-sm font-medium text-zinc-200">
                        MP Board
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-zinc-500">Completed</span>

                      <span className="text-sm font-medium text-zinc-200">
                        12 May 2017
                      </span>
                    </div>
                  </div>
                </div>

                {/* School Period */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-blue-950/70 bg-blue-950/5 px-5 py-4">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                    Academic Period
                  </span>

                  <span className="text-sm font-semibold text-zinc-200">
                    2017 → 2019
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Bottom summary */}
      <div className="mt-12 rounded-3xl border border-blue-500/15 bg-blue-500/3 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">
              Academic Highlight
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Strong academic foundation in Computer Science
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Graduated with a B.Tech in Computer Science & Engineering (Core),
              following a strong performance in Mathematics at the
              higher-secondary level.
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right">
            <p className="text-3xl font-bold text-white">7.53</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              B.Tech CGPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
