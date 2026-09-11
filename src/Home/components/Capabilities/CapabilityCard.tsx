import type { Capability } from "../../../types/home";

type CapabilityCardProps = {
  capability: Capability;
};

function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#0b192c] p-7 transition hover:-translate-y-1 hover:border-[#1e3e62]">
      <h3 className="text-xl font-bold">{capability.title}</h3>

      <p className="mt-4 text-sm leading-6 text-white/55">
        {capability.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {capability.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default CapabilityCard;
