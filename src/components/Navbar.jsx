import { useState, useEffect } from "react";
import { PAGES } from "../data/content";

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (p) => {
    navigate(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-paper/90 backdrop-blur-md border-b border-border transition-all duration-300 ${scrolled ? "px-[6vw] py-3.5" : "px-[6vw] py-5"}`}
      >
        {/* Logo */}
        <div
          onClick={() => handleNav("Home")}
          className="font-display text-2xl font-black tracking-tight cursor-pointer text-ink"
        >
          Pivot<span className="text-accent">.</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-9 list-none">
          {PAGES.map((p) => (
            <li key={p}>
              <button
                onClick={() => handleNav(p)}
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 cursor-pointer border-none bg-transparent
                  ${
                    p === "Contact"
                      ? "bg-ink text-paper px-5 py-2.5 rounded-sm hover:bg-accent"
                      : currentPage === p
                        ? "text-ink"
                        : "text-mid hover:text-ink"
                  }`}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => handleNav(p)}
              className="font-display text-4xl font-bold text-ink bg-transparent border-none cursor-pointer hover:text-accent transition-colors duration-200"
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
