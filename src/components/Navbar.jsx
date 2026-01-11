import { useEffect, useState } from "react";

const sections = ["home", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120; // offset navbar
      setScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && scrollPos >= sec.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="text-3xl font-bold text-green-400 hover:text-white transition">
            &lt;/&gt; Tif
          </a>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {sections.map((sec) => {
              const isActive = active === sec;

              return (
                <a
                  key={sec}
                  href={`#${sec}`}
                  className={` text-lg
                    group relative pb-1 transition
                    ${isActive ? "text-green-400" : "text-gray-300 hover:text-green-400"}
                  `}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}

                  {/* UNDERLINE: HANYA SAAT HOVER */}
                  <span
                    className="
                      absolute left-0 bottom-0 h-0.5 w-full
                      bg-green-400
                      scale-x-0 origin-left
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-lg font-medium
                       bg-green-500 text-black hover:bg-white active:bg-white transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
