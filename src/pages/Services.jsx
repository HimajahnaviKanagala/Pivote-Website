import { SERVICES, PROCESS_STEPS } from "../data/content";
import { ServiceCard } from "../components/Card";

export default function Services() {
  return (
    <>
      <section className="px-[6vw] pt-36 pb-24">
        <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
          Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-0">
          <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none">
            Everything you need to grow.
          </h1>
          <p className="text-lg text-mid leading-relaxed">
            From brand foundations to full-stack engineering, we offer an
            integrated suite of services tailored to ambitious companies at
            every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 mt-14">
          {SERVICES.map((s, i) => (
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

      {/* Process */}
      <section className="px-[6vw] py-20 bg-cream">
        <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
          Our Process
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none mb-12">
          How we work.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="bg-cream p-10">
              <div className="font-display text-5xl font-black text-cream [text-stroke:1.5px_rgba(10,10,15,0.12)] [-webkit-text-stroke:1.5px_rgba(10,10,15,0.12)] mb-4 leading-none">
                {step.n}
              </div>
              <div className="font-display font-bold text-lg mb-2.5">
                {step.t}
              </div>
              <div className="text-sm text-mid leading-relaxed">{step.d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
