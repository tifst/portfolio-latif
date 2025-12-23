export default function Skills() {
  return (
    <section
      id="skills"
      className="relative pt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="reveal text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="reveal mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and skills I use to build games with web development as a supporting skill.
          </p>
        </div>

        {/* CONTENT — FLEX 1 BARIS */}
        <div className="reveal flex flex-col lg:flex-row gap-6">

          {/* GAME DEV */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:scale-105 transition hover:border-green-500">
            <h3 className="text-lg font-semibold mb-4 text-white">
              🎮 Game Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Unity 3D",
                "C# Programming",
                "Gameplay Systems",
                "UI System",
                "Save & Load System"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-xs rounded-full
                               bg-green-900/30 text-green-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* WEB DEV */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:scale-105 transition hover:border-green-500">
            <h3 className="text-lg font-semibold mb-4 text-white">
              🌐 Web Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {["WordPress",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Vite"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-xs rounded-full
                               bg-green-900/30 text-green-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:scale-105 transition hover:border-green-500">
            <h3 className="text-lg font-semibold mb-4 text-white">
              🛠 Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Critical Thinking",
                "Team Collaboration",
                "Communication",
                "Self-Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-xs rounded-full
                             bg-green-900/30 text-green-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
