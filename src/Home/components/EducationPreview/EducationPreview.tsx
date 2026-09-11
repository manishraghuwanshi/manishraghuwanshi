import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function EducationPreview() {
  return (
    <section className="bg-[#050b12] flex py-24">
      <div className="mx-auto max-w-250 px-5 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
          Education / Foundation
        </p>

        <h2 className="mt-4 text-3xl font-bold">B.Tech CSE</h2>

        <p className="mt-3 text-white/55">
          VIT Bhopal University
        </p>

        <p className="mt-5 text-2xl font-bold text-[#a8c7df]">
          7.53 CGPA
        </p>

        <Link
          to="/education"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold"
        >
          View Education
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default EducationPreview;
