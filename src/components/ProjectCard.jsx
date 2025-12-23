export default function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-green-500/40 hover:scale-101 hover:-translate-y-0.5 transition">
      
      {/* IMAGE */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <span className="inline-block text-xs text-green-400">
          {project.category}
        </span>

        <h3 className="text-lg mt-1 font-semibold">{project.title}</h3>

        <p className="mt-1 text-sm text-gray-400">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-4 flex gap-3 text-sm">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="bg-green-500 text-black font-semibold rounded-lg border border-white/10 p-2 px-3 hover:bg-white hover:scale-105 transition"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="bg-green-500 text-black font-semibold rounded-lg border border-white/10 p-2 px-3 hover:bg-white hover:scale-105 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}