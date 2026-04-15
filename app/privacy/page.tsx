import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Raw Studios",
  description: "Privacy policy for Raw Studios apps and services.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition"
      >
        ← Back to Raw Studios
      </Link>

      <h1 className="mt-10 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted">Last updated: April 14, 2026</p>

      <div className="prose prose-invert mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
        <p>
          Raw Studios (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
          operates the Raw Studios website and mobile applications including{" "}
          <strong>Countd</strong> and <strong>LeanLog</strong> (collectively,
          the &quot;Services&quot;). This Privacy Policy explains what
          information we collect, how we use it, and the choices you have.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          1. Information We Collect
        </h2>
        <p>
          Our apps are designed to be privacy-first. Most data you create —
          events, countdowns, logs, protocols, weight entries, and preferences
          — is stored locally on your device and is not transmitted to our
          servers.
        </p>
        <p>
          We may collect the following limited information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Purchase information:</strong> When you subscribe to a paid
            plan, Apple processes your payment. We receive a receipt to verify
            your subscription status via RevenueCat, our subscription
            management provider. We never receive or store your payment card
            details.
          </li>
          <li>
            <strong>Anonymous usage analytics:</strong> We may collect
            anonymous crash reports and app performance data to improve
            reliability. This data cannot be used to identify you.
          </li>
          <li>
            <strong>Support correspondence:</strong> If you contact us via
            email, we will retain that email and your message to respond.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          2. How We Use Information
        </h2>
        <p>We use the limited information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Verify active subscriptions and restore purchases</li>
          <li>Diagnose crashes and improve app stability</li>
          <li>Respond to customer support requests</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          3. Data Sharing
        </h2>
        <p>
          We do not sell, rent, or trade your personal information. We share
          data only with the following service providers, strictly to operate
          the Services:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Apple:</strong> for payment processing and App Store
            services
          </li>
          <li>
            <strong>RevenueCat:</strong> for subscription management
          </li>
          <li>
            <strong>Crash reporting providers:</strong> to capture anonymous
            crash logs
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          4. Data Retention
        </h2>
        <p>
          Locally stored data remains on your device until you delete it or
          uninstall the app. Subscription records are retained for as long as
          required by applicable tax and accounting laws.
        </p>

        <h2 className="text-2xl font-semibold mt-10">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete any personal
          information we hold about you. Because most data is stored on your
          device, you can delete it at any time from within the app or by
          uninstalling the app. For any other requests, contact us at the
          email below.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          6. Children&apos;s Privacy
        </h2>
        <p>
          Our Services are not directed to children under 13. We do not
          knowingly collect personal information from children under 13. If
          you believe a child has provided us with personal information,
          please contact us and we will delete it.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          7. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date at the top of this
          page. Your continued use of the Services after any change
          constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10">8. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at{" "}
          <a
            href="mailto:outreach@rawstudios.info"
            className="text-accent hover:underline"
          >
            outreach@rawstudios.info
          </a>
          .
        </p>
      </div>
    </main>
  );
}
