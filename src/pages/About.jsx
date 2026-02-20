import { TEAM, VALUES } from "../data/content";
import { TeamCard } from "../components/Card";

export default function About() {
  return (
    <>
      <section className="px-[6vw] pt-36 pb-24">
        <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
          About Us
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Stack */}
          <div className="relative h-[480px] lg:h-[520px]">
            <div className="absolute w-3/4 h-[380px] top-0 left-0 rounded-sm bg-gradient-to-br from-[#1a1a2e] to-accent2 flex items-center justify-center font-display text-xs tracking-widest uppercase text-white/30">
              Team Photo
            </div>
            <div className="absolute w-[55%] h-56 bottom-0 right-0 rounded-sm bg-accent flex flex-col items-center justify-center text-paper font-display">
              <span className="text-4xl font-black">8+</span>
              <span className="text-base opacity-80">Years of craft</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none mb-5">
              We're Pivot.
              <br />
              Nice to meet you.
            </h1>
            <p className="text-mid leading-relaxed mb-4">
              Founded in 2017, Pivot emerged from a simple belief: great work
              happens at the intersection of strategy, design, and technology.
              We're a team of 18 passionate creators, engineers, and
              strategists.
            </p>
            <p className="text-mid leading-relaxed">
              We partner with startups and established brands alike—helping them
              clarify their vision, captivate their audience, and drive real
              business results.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5 mt-9">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className={`flex gap-4 items-start pb-5 ${i < VALUES.length - 1 ? "border-b border-black/10" : ""}`}
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-display font-bold mb-1">{v.t}</div>
                    <div className="text-sm text-mid">{v.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-[6vw] py-20 bg-cream">
        <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
          The Team
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none mb-14">
          The people behind the work.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <TeamCard key={i} {...m} />
          ))}
        </div>
      </section>
    </>
  );
}
