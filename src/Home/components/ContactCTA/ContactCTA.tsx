import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-[#050b12] py-28">
      <div className="mx-auto max-w-[900px] px-5 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
          Let's Work Together
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Have an opportunity in mind?
        </h2>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black"
        >
          <span className="text-black" >Contact Me</span>
          <FiArrowUpRight className="text-black" />
        </Link>

        <div className="mt-8 flex justify-center gap-5 text-white/50">
          <a
            href="https://github.com/manishraghuwanshi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/manishraghuwanshi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:hello@example.com"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
