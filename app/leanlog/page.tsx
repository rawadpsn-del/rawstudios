import type { Metadata } from "next";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/leanlog/id6762533297";

export const metadata: Metadata = {
  title: "LeanLog — Peptide & GLP-1 Tracker",
  description:
    "The peptide tracker built for the stack. Track tirzepatide, semaglutide, retatrutide, BPC-157, TB-500 and more. Multi-compound stacks, injection site rotation, weight projection, progress photos. Free on the App Store.",
  keywords: [
    "peptide tracker",
    "tirzepatide app",
    "semaglutide tracker",
    "retatrutide log",
    "GLP-1 tracker",
    "mounjaro tracker",
    "zepbound tracker",
    "wegovy app",
    "peptide stack",
    "BPC-157 tracker",
    "weight loss app",
    "injection site rotation",
  ],
  openGraph: {
    title: "LeanLog — Peptide & GLP-1 Tracker",
    description:
      "Track every dose, rotate injection sites, project your weight. Built for the stack — free on the App Store.",
    url: "https://rawstudios.info/leanlog",
    siteName: "LeanLog",
    type: "website",
    images: [
      {
        url: "https://rawstudios.info/leanlog-og.png",
        width: 1200,
        height: 630,
        alt: "LeanLog — Peptide tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeanLog — Peptide & GLP-1 Tracker",
    description:
      "Track every dose, rotate injection sites, project your weight. Free on the App Store.",
  },
  alternates: {
    canonical: "https://rawstudios.info/leanlog",
  },
};

// JSON-LD structured data so Google indexes this as a SoftwareApplication.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "LeanLog",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "The peptide tracker built for the stack. Multi-compound stacks, injection site rotation, weight projection, progress photos.",
  url: "https://rawstudios.info/leanlog",
  downloadUrl: APP_STORE_URL,
};

export default function LeanLogPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top bar — minimal, brand only */}
      <header className="border-b border-card-border">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background font-black text-sm">
              L
            </div>
            <span className="font-bold tracking-tight text-lg">LeanLog</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-muted hover:text-foreground transition">Features</a>
            <a href="#how-it-works" className="text-muted hover:text-foreground transition">How it works</a>
            <a href="#faq" className="text-muted hover:text-foreground transition">FAQ</a>
            <Link href="/leanlog-support" className="text-muted hover:text-foreground transition">Support</Link>
          </nav>
          <a
            href={APP_STORE_URL}
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-accent text-background px-4 py-2 text-sm font-bold hover:opacity-90 transition"
          >
            Download free
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-card-border px-3 py-1 text-xs font-bold tracking-wide text-muted uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Live on the App Store · Free
            </div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05]">
              The peptide tracker built for the&nbsp;<span className="text-accent">stack</span>.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Track tirzepatide, semaglutide, retatrutide, BPC-157, TB-500 — whatever your protocol looks like. Multi-compound stacks, injection site rotation, weight projection, progress photos. Free, no account, your data stays on your phone.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent text-background px-6 py-4 text-base font-bold hover:opacity-90 transition"
              >
                Download on the App Store
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-card-border px-6 py-4 text-base font-medium text-foreground hover:bg-card transition"
              >
                See features
              </a>
            </div>
            <p className="mt-6 text-xs text-muted/80">
              No account · No cloud sync · No ads · iOS 14+
            </p>
          </div>

          {/* Hero device mockup — pure CSS, no asset dependency */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] h-[560px] rounded-[44px] bg-card border border-card-border shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-background z-10" />
              {/* Screen content */}
              <div className="absolute inset-0 p-4 pt-12 flex flex-col gap-3">
                <div className="text-[10px] tracking-widest font-bold text-accent">
                  TODAY · DEC 4
                </div>
                <h3 className="text-2xl font-black leading-tight">
                  Next pin in
                  <br />
                  <span className="text-accent">2d 14h</span>
                </h3>

                <div className="mt-4 space-y-2">
                  {[
                    { name: "Tirzepatide", dose: "5mg · weekly", color: "bg-accent" },
                    { name: "BPC-157", dose: "250mcg · daily", color: "bg-emerald-500" },
                    { name: "GHK-Cu", dose: "2mg · 3x/week", color: "bg-blue-500" },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-3 rounded-xl bg-background/60 border border-card-border p-3"
                    >
                      <div className={`w-2 h-10 rounded-full ${p.color}`} />
                      <div className="flex-1">
                        <div className="text-xs font-bold">{p.name}</div>
                        <div className="text-[10px] text-muted">{p.dose}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-xl bg-background/60 border border-card-border p-3">
                  <div className="text-[9px] tracking-wider font-bold text-muted">
                    WEIGHT · LAST 30 DAYS
                  </div>
                  <div className="mt-1 text-2xl font-black">
                    -8.4<span className="text-sm text-muted ml-1">lbs</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">
                    On pace to hit 180 by Mar 12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section id="features" className="border-t border-card-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest font-bold text-accent uppercase mb-3">
              Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Built for people running real protocols.
            </h2>
            <p className="mt-4 text-muted text-lg">
              Not a generic health app with peptide UI bolted on. Every feature was built because someone running a stack needed it.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-card border border-card-border p-6 hover:border-accent/40 transition"
              >
                <div className="text-xs tracking-widest font-bold text-accent uppercase mb-4">
                  {f.tag}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-card-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs tracking-widest font-bold text-accent uppercase mb-3">
              How it works
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Three taps to start logging.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="text-7xl font-black text-accent/20 leading-none">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / PRO */}
      <section className="border-t border-card-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs tracking-widest font-bold text-accent uppercase mb-3">
                Pricing
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                Logging is free. Forever.
              </h2>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                Track your first compound, log doses, log weight, use the recon calculator — free, no account, no nag screens. Pro unlocks everything else.
              </p>
              <a
                href={APP_STORE_URL}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent text-background px-6 py-3 text-base font-bold hover:opacity-90 transition"
              >
                Download free
              </a>
            </div>

            <div className="rounded-2xl bg-background border border-accent/30 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs tracking-widest font-bold text-accent uppercase">
                    Pro
                  </div>
                  <div className="mt-1 text-2xl font-black">Everything unlocked</div>
                </div>
                <div className="text-xs text-muted">In app</div>
              </div>
              <ul className="space-y-3 text-sm">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted/80">
                Pricing visible in the App Store. Monthly, yearly, and lifetime options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-card-border bg-yellow-500/5">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="text-xs tracking-widest font-bold text-yellow-500 uppercase mb-3">
            Important
          </div>
          <h3 className="text-xl font-bold tracking-tight">
            LeanLog is a logging tool, not medical advice.
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            We don&apos;t supply, recommend, or endorse any compound. Substances you log may be regulated, prescription-only, or experimental in your jurisdiction — that&apos;s your responsibility. Consult a licensed healthcare professional before starting, modifying, or stopping any protocol. See{" "}
            <Link href="/terms" className="text-accent hover:underline">
              full terms
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-card-border">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-xs tracking-widest font-bold text-accent uppercase mb-3">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">
            Common questions.
          </h2>

          <div className="space-y-8">
            {faqs.map((q) => (
              <div key={q.q} className="border-b border-card-border pb-8 last:border-0">
                <h3 className="text-lg font-bold">{q.q}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-card-border bg-accent/5">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Track every pin.
            <br />
            <span className="text-accent">Zero excuses.</span>
          </h2>
          <p className="mt-5 text-muted text-lg">
            Free on the App Store. No account. Your data stays on your phone.
          </p>
          <a
            href={APP_STORE_URL}
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent text-background px-8 py-4 text-base font-bold hover:opacity-90 transition"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-card-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-background font-black text-xs">
                L
              </div>
              <span className="font-bold tracking-tight">LeanLog</span>
            </div>
            <p className="mt-3 text-xs text-muted">
              Built by{" "}
              <Link href="/" className="text-foreground hover:text-accent transition">
                Raw Studios
              </Link>
              . Akron, Ohio.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="/leanlog-support" className="hover:text-foreground transition">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms
            </Link>
            <a
              href="mailto:outreach@rawstudios.info"
              className="hover:text-foreground transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    tag: "01 · Stacks",
    title: "Multi-compound stacks",
    body: "Run tirzepatide, semaglutide, retatrutide, BPC-157, TB-500 — whatever your protocol looks like. Custom frequencies, dose escalation, no caps.",
  },
  {
    tag: "02 · Site rotation",
    title: "Injection site map",
    body: "Map every dose to an exact site. Coverage tracker shows which sides are due for a rest. Stop pinning the same spot twice.",
  },
  {
    tag: "03 · Projection",
    title: "Weight trajectory",
    body: "Linear regression on your weigh-ins. Tells you the date you'll hit your next milestone — at your current pace.",
  },
  {
    tag: "04 · Photos",
    title: "Progress photos",
    body: "Time-stamped, on-device only. Never leaves your phone. Compare any two dates side-by-side.",
  },
  {
    tag: "05 · Recon",
    title: "Reconstitution calculator",
    body: "Vial size, BAC water, dose. Tells you exactly how many syringe units. No more 'wait is it 0.25 or 0.025'.",
  },
  {
    tag: "06 · Widgets",
    title: "Home screen widgets",
    body: "Next pin countdown, streak, weight trend. Never have to open the app to know where you stand.",
  },
];

const steps = [
  {
    title: "Add your stack",
    body: "Pick from the peptide library or add a custom compound. Set the dose, frequency, and injection site preferences.",
  },
  {
    title: "Log every dose",
    body: "One tap to log. Site is auto-rotated. Time-stamped automatically. Side effects optional.",
  },
  {
    title: "Watch the data",
    body: "Weight trends, dose history, streak counters, healed gallery. Everything you need to know if it's working.",
  },
];

const proFeatures = [
  "Unlimited compounds in your stack",
  "Apple Health two-way sync",
  "Home screen widgets (next pin, streak, trend)",
  "Weight projection with goal tracking",
  "Progress photo timeline + side-by-side compare",
  "90-day history view (free is 30-day)",
  "Full data CSV export — for coaches or doctors",
  "Push reminders for every dose",
  "Injection site rotation map",
  "Invite friends — both get 14 days free Pro",
];

const faqs = [
  {
    q: "Is my data private?",
    a: "Yes. Everything you log — compounds, doses, weight, photos — lives on your iPhone. LeanLog has no backend that stores your data. The only exception is Apple Health, which is opt-in.",
  },
  {
    q: "Do I need an account?",
    a: "No. LeanLog works without any login or signup. Open the app, accept the disclaimer, start logging.",
  },
  {
    q: "What does Pro unlock?",
    a: "Multi-compound stacks beyond your first protocol, home screen widgets, weight projection, Apple Health sync, progress photos, CSV export, 90-day history, and dose reminders. Logging your first compound and basic features stay free forever.",
  },
  {
    q: "Does LeanLog supply or recommend any compounds?",
    a: "No. LeanLog is a logging tool only. We don't sell, recommend, supply, or endorse any compound. Substances you choose to log may be regulated, prescription-only, or experimental in your jurisdiction — that responsibility is on you. Always consult a licensed healthcare professional.",
  },
  {
    q: "Why is it free?",
    a: "Because the basic act of logging your stack shouldn't cost money. Pro funds development for the more advanced features that real stack runners want. The free tier isn't crippled — it's actually useful.",
  },
  {
    q: "How do referrals work?",
    a: "Open Settings → Invite Friends to grab your unique 6-character code. Share it. Anyone who enters your code gets 14 days of LeanLog Pro free. When they upgrade to a paid Pro plan, you also get 14 days added to your subscription.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. iOS first. Android is on the roadmap once iOS reaches sustainable revenue.",
  },
  {
    q: "Who built this?",
    a: "An indie developer based in Akron, Ohio. LeanLog is independent — no VC funding, no parent company, no data brokers. Just one person trying to build the tracker that should exist.",
  },
];
