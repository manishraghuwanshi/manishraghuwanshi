import { FiExternalLink } from "react-icons/fi";
import type { HomeWebsite } from "../../../types/home";

type WebsiteCardProps = {
  website: HomeWebsite;
};

function WebsiteCard({ website }: WebsiteCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-black">
      <a
        href={website.url}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={website.image}
            alt={`${website.name} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#a8c7df]">
                {website.category}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{website.name}</h3>
            </div>

            <FiExternalLink className="mt-1 shrink-0 text-xl text-white/50" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {website.stack.map((technology) => (
              <span key={technology} className="text-xs text-white/50">
                {technology}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/55">
            {website.description}
          </p>
        </div>
      </a>
    </article>
  );
}

export default WebsiteCard;
