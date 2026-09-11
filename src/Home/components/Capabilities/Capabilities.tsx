import { capabilities } from "../../../data/home.data";
import CapabilityCard from "./CapabilityCard";

function Capabilities() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
            What I Do
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Capabilities
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
