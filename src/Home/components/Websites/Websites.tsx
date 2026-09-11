import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { homeWebsites } from "../../../data/home.data";
import WebsiteCard from "./WebsiteCard";
import WebsiteDots from "./WebsiteDots";

function Websites() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === homeWebsites.length - 1 ? 0 : current + 1,
      );
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const website = homeWebsites[activeIndex];

  return (
    <section id="websites" className="bg-[#050b12] py-24">
      <div className="mx-auto max-w-250 px-5 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8c7df]">
            Websites
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Selected web experiences I've built
          </h2>
        </div>

        <WebsiteCard website={website} />

        <WebsiteDots
          count={homeWebsites.length}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#a8c7df]"
          >
            View All Websites
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Websites;
