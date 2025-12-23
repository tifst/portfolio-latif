export default function Footer() {
  return (
    <footer className="relative bg-black text-white pb-5 overflow-hidden">
      <div className="reveal max-w-6xl mx-auto px-6">

        {/* DIVIDER */}
        <div className="my-5 h-px bg-white/10"></div>

        {/* BOTTOM BAR */}
        <div>
          <p className="text-center text-gray-500">© {new Date().getFullYear()} Muhammad Abdul Latif. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}