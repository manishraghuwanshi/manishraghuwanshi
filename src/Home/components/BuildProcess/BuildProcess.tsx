import { buildSteps } from "../../../data/home.data";

function BuildProcess() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
            How I Build Things
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Understand → Structure → Build → Refine
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {buildSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-white/10 bg-[#0b192c] p-6"
            >
              <span className="text-xs font-bold text-[#a8c7df]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildProcess;
