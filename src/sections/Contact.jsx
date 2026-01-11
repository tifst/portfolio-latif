import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); 
  // idle | sending | success | error
  const [cooldown, setCooldown] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    if (formRef.current.company.value) return;

    if (cooldown) return;

    emailjs
      .sendForm(
        "service_p1h1gu8",
        "template_d27jrpw",
        formRef.current,
        "9VmWcjT2LPoWPDkhz"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();

        setCooldown(true);
        setSecondsLeft(30);

        const timer = setInterval(() => {
          setSecondsLeft(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setCooldown(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      })

      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="relative pt-20 pb-6 text-white"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="reveal text-3xl md:text-4xl font-bold">Let&apos;s Work Together</h2>
          <p className="reveal mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT: FORM */}
          <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-2">

              <input type="text" name="company" className="hidden" />

              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10
                             px-4 py-2 text-sm text-white outline-none
                             focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10
                             px-4 py-2 text-sm text-white outline-none
                             focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10
                             px-4 py-2 text-sm text-white outline-none
                             focus:border-green-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || cooldown}
                className="w-full rounded-lg bg-linear-to-r bg-green-600
                           py-3 text-sm font-medium text-black hover:bg-white active:bg-white disabled:bg-gray-400 transition"
              >
                {cooldown ? `Wait ${secondsLeft}s`: status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  ✅ Message sent successfully. I’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  ❌ Failed to send message. Please try again later.
                </p>
              )}

            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="space-y-4">

            <div>
              <h3 className="reveal text-xl font-semibold mb-2">Let&apos;s Connect</h3>
              <p className="reveal text-gray-400 text-sm">
                I&apos;m open to discussing academic projects, personal projects,
                or collaboration opportunities.
              </p>
            </div>

            {/* EMAIL */}
            <a href="mailto:abdlatifst@gmail.com"
              className="reveal flex items-center gap-4 rounded-xl border border-white/10
                        bg-white/5 p-4 backdrop-blur hover:border-green-500 active:border-green-400 transition">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg
                              bg-green-500/20 text-green-400">
                @
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm">abdlatifst@gmail.com</p>
              </div>
            </a>

            {/* LOCATION (OPSIONAL) */}
            <a href="https://maps.google.com/?q=Semarang, Indonesia"
              target="_blank" rel="noopener noreferrer"
              className="reveal flex items-center gap-4 rounded-xl border border-white/10
                        bg-white/5 p-4 backdrop-blur hover:border-green-500 active:border-green-500 transition">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg
                              bg-green-500/20 text-green-400">
                📍
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm">Semarang, Indonesia</p>
              </div>
            </a>

            {/* SOCIAL */}
            <div>
              <p className="reveal text-sm text-gray-400 mb-3">Connect with me</p>
              <div className="reveal flex gap-4 [&>a]:active:border-green-400 [&>a]:active:scale-110">
                <a className="rounded-lg border border-white/10 p-3 hover:border-green-400 hover:scale-110 transition"
                  href="https://www.linkedin.com/in/muhammad-abdul-latif-b5b0a3202" aria-label="Find us on LinkedIn"
                  target="_blank" rel="noopener">
                  <svg class="h-8 w-8 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                          fill="currentColor"></path>
                  </svg>
                </a>
                <a className="rounded-lg border border-white/10 p-2 hover:border-green-400 hover:scale-110 transition"
                  href="https://tifst.itch.io/" aria-label="Find us on Itch-IO" target="_blank"rel="noopener">
                  <img class="h-10 w-10" src="itch-io.svg" color='green' alt="Itch-IO Logo"/>
                </a>
                <a className="rounded-lg border border-white/10 p-2 hover:border-green-400 hover:scale-110 transition"
                  href="https://github.com/tifst" aria-label="Find us on GitHub" target="_blank"rel="noopener">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a className="rounded-lg border border-white/10 p-2.5 hover:border-green-400 hover:scale-110 transition"
                  href="https://www.instagram.com/malatif3" aria-label="Find us on Instagram" target="_blank"rel="noopener">
                  <svg class="h-9 w-9 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                          fill="currentColor"></path>
                      <path
                          d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                          fill="currentColor"></path>
                  </svg>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}