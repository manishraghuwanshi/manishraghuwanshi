import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function ExperiencePreview() {
  return (
    <section className="bg-[#050b12] py-24">
      <div className="mx-auto max-w-250 px-5 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
          Experience
        </p>

        <div className="mt-10">
          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>2023</span>
            <div className="h-px flex-1 bg-white/10" />
            <span>2024</span>
          </div>

          <div className="mt-8 border-l border-[#1e3e62] pl-6">
            <p className="text-sm text-white/50">
              Junior Web Developer
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              SmartInfosys / WebConnect
            </h2>
            <p className="mt-4 text-sm text-white/50">
              React · React Native · PHP · WordPress · Web Development
            </p>
          </div>
        </div>

        <Link
          to="/experience"
          className="mt-10 inline-flex items-center gap-2 text-sm font-bold"
        >
          Full Experience
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default ExperiencePreview;
