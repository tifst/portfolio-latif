import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const filters = ["All", "Game", "Website"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="pt-20 text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center">Projects</h2>
        <p className="reveal mt-4 text-gray-400 text-center">
          Showcasing my academic and personal projects.
        </p>

        {/* FILTER */}
        <div className="reveal mt-4 flex flex-wrap gap-3 align-center justify-center">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm border transition
                ${
                  active === f
                    ? "bg-green-500/20 border-green-500 text-green-400"
                    : "border-white/10 text-gray-400 hover:text-white hover:border-white"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="reveal my-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
