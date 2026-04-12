export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-20">
      {/* Subtle gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Cleveland App Studio
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Apps that bring your
          <br />
          customers back
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
          Custom ordering, loyalty, and booking apps for restaurants and local
          businesses. Your brand, your customers, no middleman fees.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Get a Free Quote
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-card-border px-8 py-3 text-base font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}
