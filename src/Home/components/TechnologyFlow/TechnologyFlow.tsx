import { technologyFlow } from "../../../data/home.data";

function TechnologyFlow() {
  const items = [...technologyFlow, ...technologyFlow];

  return (
    <section className=" relative overflow-hidden border-y border-white/5 bg-[#050b12]  py-8">
      <div className="mx-auto text-center mb-3 max-w-300 px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
          Technologies
        </p>
      </div>

      <div className=" overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {items.map((technology, index) => (
            <div key={`${technology}-${index}`} className="flex items-center">
              <span className="px-5 text-xl font-bold text-white/75">
                {technology}
              </span>

              <span className="text-[#1e3e62]">→</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#050b12] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#050b12] to-transparent" />
    </section>
  );
}

export default TechnologyFlow;
