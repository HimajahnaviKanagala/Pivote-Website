// Service Card
export function ServiceCard({ number, icon, name, desc }) {
  return (
    <div className="service-card bg-paper p-12 transition-colors duration-300 cursor-default">
      <div className="service-num font-display text-6xl font-black text-cream leading-none mb-6 transition-colors duration-300">
        {number}
      </div>
      <div className="service-icon text-3xl mb-4 transition-colors duration-300">
        {icon}
      </div>
      <div className="service-name font-display text-xl font-bold mb-3 transition-colors duration-300">
        {name}
      </div>
      <div className="service-desc text-sm text-mid leading-relaxed transition-colors duration-300">
        {desc}
      </div>
    </div>
  );
}

// Project Card
export function ProjectCard({ name, cat, bg, wide }) {
  return (
    <div
      className={`rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${wide ? "col-span-2" : ""}`}
    >
      <div
        className={`${bg} aspect-[4/3] flex items-center justify-center font-display text-xs font-semibold tracking-widest uppercase text-white/50`}
      >
        Project Visual
      </div>
      <div className="px-6 py-5 bg-cream border border-border border-t-0">
        <div className="text-xs tracking-widest uppercase text-accent mb-1.5">
          {cat}
        </div>
        <div className="font-display font-bold text-lg">{name}</div>
      </div>
    </div>
  );
}

// Team Card
export function TeamCard({ name, role, bg, initial }) {
  return (
    <div className="text-center">
      <div
        className={`${bg} w-full aspect-square rounded-sm mb-4 flex items-center justify-center font-display text-3xl font-black text-paper`}
      >
        {initial}
      </div>
      <div className="font-display font-bold mb-1">{name}</div>
      <div className="text-sm text-mid">{role}</div>
    </div>
  );
}
