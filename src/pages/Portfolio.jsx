import { useState } from "react";
import { PROJECTS, FILTER_CATS } from "../data/content";
import { ProjectCard } from "../components/Card";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered = PROJECTS.filter(
    (p) =>
      filter === "All" || p.cat.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <section className="px-[6vw] pt-36 pb-24">
      <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
        Portfolio
      </div>
      <div className="flex justify-between items-end flex-wrap gap-6 mb-12">
        <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none">
          Selected
          <br />
          works.
        </h1>
        <p className="text-mid leading-relaxed max-w-sm">
          A curated collection spanning brand identity, digital experiences, and
          product design.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-12">
        {FILTER_CATS.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 cursor-pointer
              ${
                filter === c
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-mid border-black/15 hover:bg-ink hover:text-paper hover:border-ink"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
