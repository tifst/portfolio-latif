export default function About() {
  return (
    <section
      id="about"
      className="relative pt-20 bg-black text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full
                           bg-green-900/30 text-green-400 text-sm">
            &lt;/&gt; About Me
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Crafting Digital Experiences <br />
            That Matter
          </h2>

          {/* Description */}
          <div className="mt-6 space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              I’m a developer passionate about building interactive and
              meaningful digital products. I enjoy combining clean code,
              thoughtful UI, and solid technical foundations.
            </p>
            <p>
              My main focus is on game development using Unity and modern
              frontend development using React. I continuously explore new
              technologies and best practices to improve my skills.
            </p>
            <p>
              Outside of coding, I enjoy learning new tools, refining my
              workflow, and experimenting with design and performance
              optimizations.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-green-400 text-xl font-bold">5+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div>
              <p className="text-green-400 text-xl font-bold">Unity</p>
              <p className="text-xs text-gray-400">Main Focus</p>
            </div>
            <div>
              <p className="text-green-400 text-xl font-bold">React</p>
              <p className="text-xs text-gray-400">Web Stack</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid gap-6">
          
          {/* Big Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-green-400">&lt;/&gt;</span>
              Expertise
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Focused on building structured, maintainable applications with
              modern tools and clear architecture.
            </p>
          </div>

          {/* Small Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-sm font-semibold text-green-400">
                Clean Code
              </h4>
              <p className="mt-2 text-xs text-gray-400">
                Writing readable, structured, and maintainable code.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h4 className="text-sm font-semibold text-green-400">
                Performance
              </h4>
              <p className="mt-2 text-xs text-gray-400">
                Optimizing assets, logic, and rendering for smooth experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}