const projects = [
  {
    title: "Countd",
    description:
      "A countdown app for iOS with checklists per event, custom backgrounds, home screen widgets, Live Activities, and calendar sync. Built with Flutter, monetized with RevenueCat subscriptions.",
    tags: ["iOS", "Flutter", "Widgets", "Live Activities", "Subscriptions"],
    mockups: ["/countd/home.jpg", "/countd/detail.png", "/countd/edit.png"],
  },
  {
    title: "CashBurned",
    description:
      "Personal finance app with daily check-ins, spending insights, streak-based challenges, and home screen widgets. Built to make budgeting feel like a game.",
    tags: ["iOS", "Widgets", "Gamification", "Insights"],
    mockups: [
      "/cashburned/home.webp",
      "/cashburned/insights.webp",
      "/cashburned/challenge.webp",
    ],
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

                {/* Mockups */}
                <div className="flex flex-1 items-center justify-center">
                  {project.mockups.length > 0 ? (
                    <div className="flex items-end justify-center gap-3 sm:gap-4">
                      {project.mockups.map((src, idx) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={src}
                          src={src}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className={`w-28 rounded-[1.5rem] border border-card-border shadow-2xl sm:w-36 md:w-40 ${
                            idx === 1 ? "-translate-y-4" : ""
                          }`}
                        />
                      ))}
                    </div>
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
