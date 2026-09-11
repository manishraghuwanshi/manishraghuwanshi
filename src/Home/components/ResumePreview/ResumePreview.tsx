import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { RESUME_PATH } from "../../../data/home.data";

function ResumePreview() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="rounded-xl border border-white/10 bg-[#0b192c] p-6">
            <div className="border border-white/10 bg-black p-7">
              <p className="text-xl font-bold">MANISH RAGHUWANSHI</p>
              <p className="mt-2 text-sm text-[#a8c7df]">
                React/Next.js Developer
              </p>

              <div className="mt-8 space-y-2 text-xs text-white/40">
                <p>Experience</p>
                <p>Skills</p>
                <p>Education</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
              My Resume
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              A concise overview of my professional journey.
            </h2>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={RESUME_PATH}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black"
              >
                <span className="text-black" >Download Resume</span>
                <FiDownload className="text-black" />
              </a>

              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold"
              >
                View Resume
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumePreview;
