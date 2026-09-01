import { HiArrowUpRight } from "react-icons/hi2";
import type { ProjectLink } from "../../types/project";

interface ProjectLinksProps {
  links?: ProjectLink[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external === false ? undefined : "_blank"}
          rel={
            link.external === false
              ? undefined
              : "noopener noreferrer"
          }
          className="
            group/link
            inline-flex
            items-center
            gap-2
            rounded-xl
            border border-white/10
            bg-white/[0.035]
            px-4 py-2.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#1E3E62]
            hover:bg-[#1E3E62]/20
          "
        >
          {link.label}

          <HiArrowUpRight
            className="
              text-base
              transition-transform
              duration-300
              group-hover/link:-translate-y-0.5
              group-hover/link:translate-x-0.5
            "
          />
        </a>
      ))}
    </div>
  );
}