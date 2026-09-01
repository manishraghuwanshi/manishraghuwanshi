export type ProjectFilterValue =
  | "all"
  | "current"
  | "professional"
  | "contribution";

interface ProjectFilterProps {
  activeFilter: ProjectFilterValue;
  onChange: (filter: ProjectFilterValue) => void;
}

const filters: {
  value: ProjectFilterValue;
  label: string;
}[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "current",
    label: "Current",
  },
  {
    value: "professional",
    label: "Professional",
  },
  {
    value: "contribution",
    label: "Contributions",
  },
];

export default function ProjectFilter({
  activeFilter,
  onChange,
}: ProjectFilterProps) {

  console.log("this is ProjectFilter component");
  
  return (
    <div
      className="
        flex
        w-full
        flex-wrap
        gap-2
        rounded-2xl
        border
        border-white/10
        bg-white/2
        p-1.5
        sm:w-fit
      "
    >
      {filters.map((filter) => {
        const active = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={`
              rounded-xl
              px-4
              py-2.5
              text-xs
              font-semibold
              transition-all
              duration-300
              ${
                active
                  ? "bg-[#1E3E62] text-white shadow-lg shadow-[#1E3E62]/20"
                  : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
