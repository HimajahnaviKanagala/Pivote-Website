import { PAGES, SERVICES } from "../data/content";

export default function Footer({ navigate }) {
  return (
    <footer className="bg-ink text-paper px-[6vw] pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10 mb-8">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-black tracking-tight mb-4">
            Pivot<span className="text-accent">.</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            A creative digital agency building exceptional brand experiences for
            ambitious companies worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="font-display text-xs font-bold tracking-widest uppercase text-white/40 mb-5">
            Navigation
          </div>
          <div className="flex flex-col gap-3">
            {PAGES.map((p) => (
              <button
                key={p}
                onClick={() => navigate(p)}
                className="text-sm text-white/65 hover:text-paper transition-colors duration-200 text-left bg-transparent border-none cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="font-display text-xs font-bold tracking-widest uppercase text-white/40 mb-5">
            Services
          </div>
          <div className="flex flex-col gap-3">
            {SERVICES.map((s) => (
              <span key={s.name} className="text-sm text-white/65">
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <div className="font-display text-xs font-bold tracking-widest uppercase text-white/40 mb-5">
            Connect
          </div>
          <div className="flex flex-col gap-3">
            {["Twitter / X", "LinkedIn", "Dribbble", "Instagram", "GitHub"].map(
              (s) => (
                <span
                  key={s}
                  className="text-sm text-white/65 cursor-pointer hover:text-paper transition-colors duration-200"
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-2 text-xs text-white/35">
        <span>© 2025 Pivot Studio. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}
