import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // animasi sekali
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Glow kiri atas */}
        <div className="
          absolute -top-150 -left-100
          w-200 h-200
          bg-green-500/30
          rounded-full
          blur-[150px]
        " />

        {/* Glow tengah kanan*/}
        <div className="
          absolute bottom-1/2 -right-100
          w-200 h-200
          bg-green-900/20
          rounded-full
          blur-[150px]
        " />

        {/* Glow tengah kiri*/}
        <div className="
          absolute top-1/2 -left-100
          w-200 h-200
          md:bg-green-900/20
          rounded-full
          blur-[150px]
        " />

        {/* Glow kanan bawah */}
        <div className="
          absolute -bottom-150 -right-100
          w-200 h-200
          bg-green-500/30
          rounded-full
          blur-[150px]
        " />

      </div>
      {/* ===================================================== */}

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="home"><Hero /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
          <section id="footer"><Footer /></section>
        </main>
      </div>

    </div>
  );
}

export default App;