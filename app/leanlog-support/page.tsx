import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LeanLog Support — Raw Studios",
  description:
    "Help, FAQ, and contact for LeanLog — the private peptide and GLP-1 research log.",
};

export default function LeanLogSupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition"
      >
        ← Back to Raw Studios
      </Link>

      <h1 className="mt-10 text-4xl font-bold tracking-tight">
        LeanLog Support
      </h1>
      <p className="mt-3 text-sm text-muted">
        Questions, feedback, or bugs — we answer every email.
      </p>

      <div className="prose prose-invert mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
        <h2 className="text-2xl font-semibold mt-10">Contact</h2>
        <p>
          Email{" "}
          <a
            href="mailto:outreach@rawstudios.info"
            className="text-accent hover:underline"
          >
            outreach@rawstudios.info
          </a>{" "}
          for anything — app issues, billing, feature requests, or general
          questions. We respond within 48 hours.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Common Questions</h2>

        <h3 className="text-xl font-semibold mt-6">Is my data private?</h3>
        <p>
          Yes. Everything you log — compounds, doses, weight entries, photos —
          lives on your iPhone. LeanLog does not have a backend and does not
          upload your data. The only exception is Apple Health, and only if you
          explicitly enable that sync.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          How do I restore my Pro subscription on a new phone?
        </h3>
        <p>
          Open Settings inside LeanLog and tap <strong>Restore Purchases</strong>.
          You&apos;ll need to be signed in to the same Apple ID you originally
          purchased with.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          How do I cancel my subscription?
        </h3>
        <p>
          From inside the app, open Settings →{" "}
          <strong>Manage Subscription</strong>. That opens your Apple ID
          subscription settings where you can cancel or change plans. You can
          also cancel from iOS Settings → [your name] → Subscriptions.
        </p>

        <h3 className="text-xl font-semibold mt-6">Does LeanLog give medical advice?</h3>
        <p>
          No. LeanLog is a personal logging tool for research use only. It does
          not provide diagnoses, treatment, dose recommendations, or medical
          guidance of any kind. Always consult a qualified medical professional
          before making any health decision.
        </p>

        <h3 className="text-xl font-semibold mt-6">Can I export my data?</h3>
        <p>
          Full history export is a Pro feature rolling out soon. If you need
          your data sooner, email us and we&apos;ll help.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          I found a bug / want a feature. Where do I send it?
        </h3>
        <p>
          Email{" "}
          <a
            href="mailto:outreach@rawstudios.info"
            className="text-accent hover:underline"
          >
            outreach@rawstudios.info
          </a>
          . Real humans read every message. Bug reports with the iPhone model
          and iOS version help us fix faster.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Legal</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-accent hover:underline">
              Terms of Use
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
