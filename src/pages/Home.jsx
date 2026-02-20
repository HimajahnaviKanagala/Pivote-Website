import Button from "../components/Button";
import { ServiceCard } from "../components/Card";
import { SERVICES, MARQUEE_ITEMS } from "../data/content";

export default function Home({ navigate }) {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[6vw] pt-32 pb-20 gap-16 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent mb-5">
            <span className="inline-block w-5 h-px bg-accent" />
            Creative Digital Agency
          </div>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,5.2rem)] font-black leading-none tracking-tight mb-7">
            We build things
            <br />
            that <span className="text-accent">move</span> people.
          </h1>
          <p className="text-lg text-mid leading-relaxed max-w-xl mb-10">
            Pivot is a full-service creative agency helping ambitious brands
            grow through design, development, and strategy that actually works.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" onClick={() => navigate("Portfolio")}>
              View Our Work →
            </Button>
            <Button variant="outline" onClick={() => navigate("Contact")}>
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-black/10 flex-wrap">
            {[
              ["120+", "Projects Delivered"],
              ["8+", "Years Experience"],
              ["98%", "Client Satisfaction"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl font-black tracking-tight text-ink">
                  {n}
                </div>
                <div className="text-xs text-mid mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Panels — hidden on mobile */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <div className="col-span-2 h-60 rounded-sm bg-gradient-to-br from-ink to-[#1a1a2e] flex items-center justify-center font-display text-2xl font-black text-paper">
            Your Brand, Elevated
          </div>
          <div className="h-40 rounded-sm bg-cream border border-black/10 flex items-center justify-center font-display text-xs font-semibold tracking-widest uppercase text-mid">
            Strategy
          </div>
          <div className="h-40 rounded-sm bg-accent flex items-center justify-center font-display text-xs font-semibold tracking-widest uppercase text-paper">
            Design
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink py-4 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array(2)
            .fill(MARQUEE_ITEMS)
            .flat()
            .map((t, i) => (
              <span
                key={i}
                className="font-display text-sm font-semibold tracking-widest uppercase text-white/40 flex-shrink-0 after:content-['◆'] after:text-accent after:text-xs after:ml-16"
              >
                {t}
              </span>
            ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="px-[6vw] py-24 bg-cream">
        <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
          What We Do
        </div>
        <div className="flex justify-between items-end flex-wrap gap-6 mb-0">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none">
            Creative solutions
            <br />
            for bold ambitions.
          </h2>
          <Button variant="ghost" onClick={() => navigate("Services")}>
            All services →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 mt-14">
          {SERVICES.slice(0, 3).map((s, i) => (
            <ServiceCard
              key={i}
              number={`0${i + 1}`}
              icon={s.icon}
              name={s.name}
              desc={s.desc}
            />
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-ink px-[6vw] py-20 text-center">
        <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center justify-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
          Ready to Start?
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight text-paper mb-5">
          Let's build something
          <br />
          extraordinary together.
        </h2>
        <p className="text-white/55 text-lg mb-9">
          We're accepting new projects for 2025. Book a free discovery call
          today.
        </p>
        <button
          onClick={() => navigate("Contact")}
          className="inline-flex items-center gap-2.5 bg-accent text-paper text-sm font-medium tracking-wide px-7 py-3.5 rounded-sm cursor-pointer hover:bg-accent/90 transition-colors duration-200 border-none"
        >
          Start a Project →
        </button>
      </section>
    </>
  );
}
