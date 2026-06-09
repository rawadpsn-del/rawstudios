import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "process — Privacy & Terms",
  description:
    "Privacy policy and terms of use for process, the binding-contract discipline app by Raw Studios.",
};

export default function ProcessLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition"
      >
        ← Back to Raw Studios
      </Link>

      <h1 className="mt-10 text-4xl font-bold tracking-tight">
        process — Privacy &amp; Terms
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: June 9, 2026</p>

      <div className="prose prose-invert mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
        <p>
          <strong>process</strong> is a self-discipline app by Raw Studios in
          which you sign a contract with yourself, log your work daily, and
          keep a permanent record. This page covers both how we handle your
          data and the terms you agree to by using the app.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Privacy Policy</h2>

        <h3 className="text-xl font-semibold mt-6">
          1. Your data stays on your device
        </h3>
        <p>
          Everything you create in process — your aim, your daily work lines,
          your scores, your ledger, your metric (&quot;the Number&quot;), and
          all settings — is stored locally on your device. We operate no
          accounts and no servers for this data. We cannot see it, and we
          never transmit it.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Purchases</h3>
        <p>
          process uses one-time in-app purchases (an initial signing fee and a
          re-signing fee after a broken contract). Payments are processed
          entirely by Apple. We use RevenueCat, a purchase-management
          provider, to verify purchase receipts. RevenueCat receives an
          anonymous app-user identifier and receipt data — never your name,
          email, or payment details. See{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat&apos;s privacy policy
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold mt-6">3. Notifications</h3>
        <p>
          The app schedules two local notifications a day (morning and
          evening) on your device. These are generated locally and involve no
          server.
        </p>

        <h3 className="text-xl font-semibold mt-6">4. No tracking</h3>
        <p>
          process contains no third-party analytics, no advertising SDKs, and
          no trackers. We do not collect usage data.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Data deletion</h3>
        <p>
          Deleting the app deletes all of its data from your device. Because
          we hold nothing, there is nothing for us to delete on our end.
        </p>

        <h3 className="text-xl font-semibold mt-6">6. Children</h3>
        <p>
          process is not directed at children under 13 and does not knowingly
          collect information from them.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Terms of Use</h2>

        <h3 className="text-xl font-semibold mt-6">1. The product</h3>
        <p>
          process is a commitment device. You pay a one-time fee to sign a
          contract with yourself inside the app. If your contract breaks under
          the terms you agreed to when signing (extended inactivity or
          sustained low performance), it is voided and beginning a new
          contract requires a new signing fee. This mechanic is the product —
          by purchasing, you acknowledge that a voided contract is the
          intended behavior of the app, not a defect.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Purchases are final</h3>
        <p>
          Signing fees are one-time purchases processed by Apple. Refunds are
          handled by Apple under their standard App Store policies. A contract
          voided under its own terms is not grounds for a refund from us.
        </p>

        <h3 className="text-xl font-semibold mt-6">3. Honest self-report</h3>
        <p>
          The app scores what you tell it. It does not verify your work. Its
          value depends entirely on your honesty with yourself; we make no
          guarantee of any outcome, habit change, or result.
        </p>

        <h3 className="text-xl font-semibold mt-6">4. Not professional advice</h3>
        <p>
          process is a productivity tool, not medical, psychological, or
          financial advice. If self-monitoring tools negatively affect your
          wellbeing, stop using the app.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Warranty &amp; liability</h3>
        <p>
          The app is provided &quot;as is&quot; without warranties of any
          kind. To the maximum extent permitted by law, Raw Studios is not
          liable for any indirect or consequential damages arising from use of
          the app. Our total liability is limited to the amount you paid for
          the app in the twelve months before a claim.
        </p>

        <h3 className="text-xl font-semibold mt-6">6. Changes</h3>
        <p>
          We may update these terms; material changes will be reflected on
          this page with a new date. Continued use after changes constitutes
          acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Contact</h2>
        <p>
          Questions:{" "}
          <a href="mailto:hello@rawstudios.info" className="underline">
            hello@rawstudios.info
          </a>
        </p>
      </div>
    </main>
  );
}
