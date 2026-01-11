export default function Hero() {
  return (
    <section className="relative flex items-center text-white">
         
      <div className="relative pt-30 z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="reveal order-2 md:order-1">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Abdul Latif
          </h1>

          <h1 className="typing text-4xl md:text-4xl font-bold leading-tight text-green-400">
            Unity Game Developer
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl">
            I am a Game Developer focused on building interactive gameplay experiences using Unity and C#. 
            My main interest lies in developing gameplay systems, mechanics, and playable game prototypes. 
            I also have experience with modern web technologies, which I use as supporting skills alongside my primary focus on game development.
          </p>

          <div className="mt-8">
            <div className="flex gap-4 [&>a]:active:border-green-400 [&>a]:active:scale-110">
              <a className="rounded-lg border border-white/10 p-3 hover:border-green-400 hover:scale-110 transition"
                href="https://www.linkedin.com/in/muhammad-abdul-latif-b5b0a3202" aria-label="Find us on LinkedIn"
                target="_blank" rel="noopener">
                <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                        fill="currentColor"></path>
                </svg>
              </a>
              <a className="rounded-lg border border-white/10 p-2 hover:border-green-400 hover:scale-110 transition"
                href="https://tifst.itch.io/" aria-label="Find us on Itch-IO" target="_blank"rel="noopener">
                <img class="h-8 w-8" src="itch-io.svg" color='green' alt="Itch-IO Logo"/>
              </a>
              <a className="rounded-lg border border-white/10 p-2 hover:border-green-400 hover:scale-110 transition"
                href="https://github.com/tifst" aria-label="Find us on GitHub" target="_blank"rel="noopener">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
              <a className="rounded-lg border border-white/10 p-2.5 hover:border-green-400 hover:scale-110 transition"
                href="https://www.instagram.com/malatif3" aria-label="Find us on Instagram" target="_blank"rel="noopener">
                <svg class="h-7 w-7 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                        fill="currentColor"></path>
                    <path
                        d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                        fill="currentColor"></path>
                </svg>
              </a>
            </div>

            <div className="mt-8 flex gap-4 [&>a]:active:bg-white [&>a]:active:scale-105 transition">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-white hover:scale-105 transition"
              >
                View Projects
              </a>
              <a
                href="LatifCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-white hover:scale-105 transition"
              >
                View CV
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="reveal relative order-1 md:order-2 flex justify-center">
          <div className="group w-80 h-80 md:w-80 md:h-100 rounded-full overflow-hidden border-3 border-white bg-black">
            <img
              src="profilepicture.jpg"
              alt="Profile"
              className="
                w-full h-full object-cover
                transition-transform duration-500 ease-out
                md:group-hover:scale-120 md:group-hover:translate-y-10 object-[center_20%]
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
