const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We talk about your business, your customers, and what you need. No jargon, no upsells.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I design your app with your branding, menu, and features. You see mockups before any code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I build and test the app. You get progress updates and can give feedback throughout.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "App goes live on the App Store. I handle submission, updates, and ongoing maintenance.",
  },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Process
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          How It Works
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-card-border lg:block" />
              )}
              <span className="text-4xl font-bold text-accent/20">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
