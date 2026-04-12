const projects = [
  {
    title: "Fresh Kitchen",
    description:
      "Restaurant ordering app with menu browsing, loyalty rewards, and real-time order tracking.",
    tags: ["Ordering", "Loyalty", "Push Notifications"],
    // TODO: Add mockup images
    mockups: [] as string[],
  },
  {
    title: "CashBurned",
    description:
      "Personal finance app with daily check-ins, streak tracking, insights, and home screen widgets.",
    tags: ["iOS", "Widgets", "Gamification"],
    mockups: [] as string[],
  },
  {
    title: "Countd",
    description:
      "Countdown timer app with checklists, custom backgrounds, Live Activities, and calendar sync.",
    tags: ["iOS", "Widgets", "Live Activities"],
    mockups: [] as string[],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Recent Work
        </h2>

        <div className="mt-16 flex flex-col gap-12">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-card-border bg-card"
            >
              <div
                className={`flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:p-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-muted">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-card-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mockup placeholder */}
                <div className="flex flex-1 items-center justify-center">
                  {project.mockups.length > 0 ? (
                    // TODO: render actual mockup images
                    <div />
                  ) : (
                    <div className="flex h-80 w-full items-center justify-center rounded-xl border-2 border-dashed border-card-border text-sm text-muted">
                      Mockup coming soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
