import { FaAward, FaCalendarAlt, FaIdCard, FaUniversity } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";


import type { EducationCardProps } from "./../../types/education";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function EducationItem({
  title,
  institution,
  field,
  score,
  scoreLabel,
  date,
  registrationNumber,
  period,
}: EducationCardProps) {


  

  return (
    <article className="group relative">
      {/* Border glow */}
      <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-transparent via-blue-500/40 to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-500/30">
        <div className="p-6 sm:p-7 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-5">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <FaUniversity className="text-lg" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <p
                  className="bg-[linear-gradient(110deg,var(--color-primary)_30%,#4F7FA8_45%,var(--color-shimmer)_50%,#4F7FA8_55%,var(--color-primary)_70%)]
                      bg-size-[300%_100%]
                      bg-clip-text
                      text-transparent
                      text-xl
                      animate-shimmer"
                >
                  {title}
                </p>

                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {institution}
                </h2>

                {field && <p className="mt-1 text-sm text-gray-500">{field}</p>}
              </div>
            </div>

            {/* Institution logo */}
            {/* Institution logo */}
            <div>
              <a
                href="https://vitbhopal.ac.in/"
                target="_blank"
                className="flex items-center gap-3"
              >
                <p> VIT Bhopal </p>
                <FiExternalLink />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {/* Score */}
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <FaAward className="text-xs" aria-hidden="true" />

                <span className="text-xs uppercase tracking-wider">Score</span>
              </div>

              <p className="text-lg font-semibold text-white">
                {score}

                <span className="ml-1 text-sm font-normal text-blue-400">
                  {scoreLabel}
                </span>
              </p>
            </div>

            {/* Date */}
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-gray-500">
                <FaCalendarAlt className="text-xs" aria-hidden="true" />

                <span className="text-xs uppercase tracking-wider">
                  Completed
                </span>
              </div>

              <p className="text-sm font-medium leading-5 text-white">{date}</p>
            </div>

            {/* Registration */}
            {registrationNumber && (
              <div className="col-span-2 rounded-2xl border border-white/8 bg-black/20 p-4 sm:col-span-1">
                <div className="mb-2 flex items-center gap-2 text-gray-500">
                  <FaIdCard className="text-xs" aria-hidden="true" />

                  <span className="text-xs uppercase tracking-wider">
                    Registration
                  </span>
                </div>

                <p className="font-mono text-sm font-medium text-white">
                  {registrationNumber}
                </p>
              </div>
            )}
          </div>

          {/* Period */}
          {period && (
            <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>{period.split(" → ")[0]}</span>

                <span className="h-px w-8 bg-blue-500/40" />

                <span className="text-gray-300">{period.split(" → ")[1]}</span>
              </div>

              <Link to="/contact" className="flex items-center gap-3">
                <p> Connect to Know More </p>
                <HiArrowUpRight
                  className="text-lg text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                  aria-hidden="true"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
