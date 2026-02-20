export default function Contact({ onSubmit }) {
  return (
    <section className="px-[6vw] pt-36 pb-24">
      <div className="text-xs font-medium tracking-widest uppercase text-accent mb-4 flex items-center gap-2.5 before:content-[''] before:block before:w-7 before:h-px before:bg-accent">
        Contact
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Form */}
        <div>
          <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black tracking-tight leading-none mb-5">
            Let's work
            <br />
            together.
          </h1>
          <p className="text-mid leading-relaxed mb-10">
            Have a project in mind? Drop us a message and we'll get back to you
            within one business day.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium tracking-widest uppercase text-mid">
                  First Name
                </label>
                <input
                  placeholder="Jane"
                  required
                  className="font-body text-base px-4 py-3.5 border-2 border-black/12 rounded-sm bg-paper text-ink outline-none focus:border-ink transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium tracking-widest uppercase text-mid">
                  Last Name
                </label>
                <input
                  placeholder="Smith"
                  required
                  className="font-body text-base px-4 py-3.5 border-2 border-black/12 rounded-sm bg-paper text-ink outline-none focus:border-ink transition-colors duration-200"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-widest uppercase text-mid">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@company.com"
                required
                className="font-body text-base px-4 py-3.5 border-2 border-black/12 rounded-sm bg-paper text-ink outline-none focus:border-ink transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-widest uppercase text-mid">
                Subject
              </label>
              <input
                placeholder="Tell us what you need"
                className="font-body text-base px-4 py-3.5 border-2 border-black/12 rounded-sm bg-paper text-ink outline-none focus:border-ink transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-widest uppercase text-mid">
                Message
              </label>
              <textarea
                placeholder="Share a bit about your project, timeline, and budget..."
                required
                className="font-body text-base px-4 py-3.5 border-2 border-black/12 rounded-sm bg-paper text-ink outline-none focus:border-ink transition-colors duration-200 min-h-36 resize-y"
              />
            </div>
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2.5 bg-ink text-paper text-sm font-medium tracking-wide px-7 py-3.5 rounded-sm border-none cursor-pointer hover:bg-accent transition-colors duration-200"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-9">
          <div>
            <div className="font-display font-bold text-lg mb-1.5">
              Prefer to call?
            </div>
            <p className="text-sm text-mid leading-relaxed">
              Our team is available Mon–Fri, 9am–6pm PST.
            </p>
          </div>
          {[
            { t: "Email", v: "hello@pivot.studio" },
            { t: "Phone", v: "+1 (415) 555-0192" },
            {
              t: "Address",
              v: "580 Howard St, Suite 301\nSan Francisco, CA 94105",
            },
            { t: "Hours", v: "Monday – Friday\n9:00 AM – 6:00 PM PST" },
          ].map((b, i) => (
            <div key={i}>
              <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                {b.t}
              </div>
              <div className="text-ink leading-relaxed whitespace-pre-line">
                {b.v}
              </div>
            </div>
          ))}
          <div className="w-full h-48 bg-cream border border-black/10 rounded-sm flex items-center justify-center text-xs text-mid tracking-widest uppercase">
            Map Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
