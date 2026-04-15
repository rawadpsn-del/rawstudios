import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Raw Studios",
  description: "Terms of Use and EULA for Raw Studios apps and services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition"
      >
        ← Back to Raw Studios
      </Link>

      <h1 className="mt-10 text-4xl font-bold tracking-tight">Terms of Use</h1>
      <p className="mt-3 text-sm text-muted">Last updated: April 14, 2026</p>

      <div className="prose prose-invert mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your use of the Raw
          Studios website and mobile applications including{" "}
          <strong>Countd</strong> and <strong>LeanLog</strong>{" "}
          (collectively, the &quot;Services&quot;). By downloading, installing,
          or using the Services, you agree to these Terms. If you do not agree,
          do not use the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          1. License
        </h2>
        <p>
          Raw Studios grants you a limited, non-exclusive, non-transferable,
          revocable license to use the Services for your personal,
          non-commercial use, subject to these Terms and Apple&apos;s{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Standard EULA
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          2. Subscriptions
        </h2>
        <p>
          The Services offer auto-renewable subscriptions. The following terms
          apply to all subscriptions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Payment is charged to your Apple ID account at confirmation of
            purchase.
          </li>
          <li>
            Subscriptions automatically renew unless auto-renew is turned off
            at least 24 hours before the end of the current period.
          </li>
          <li>
            Your account will be charged for renewal within 24 hours prior to
            the end of the current period.
          </li>
          <li>
            You can manage and cancel your subscription by going to your
            account settings on the App Store after purchase.
          </li>
          <li>
            Any unused portion of a free trial period, if offered, will be
            forfeited when you purchase a subscription.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          3. Refunds
        </h2>
        <p>
          All purchases are processed by Apple. Refund requests must be
          submitted directly to Apple through{" "}
          <a
            href="https://reportaproblem.apple.com"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            reportaproblem.apple.com
          </a>
          . Raw Studios cannot process refunds directly.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          4. Health and Wellness Disclaimer
        </h2>
        <p>
          LeanLog and other wellness-oriented Services are provided for
          personal tracking and informational purposes only. The Services do
          not provide medical advice, diagnosis, or treatment, and are not a
          substitute for professional medical care. Always consult a qualified
          healthcare provider before starting, stopping, or modifying any
          protocol, medication, or health regimen. Raw Studios is not
          responsible for any decisions you make based on information tracked
          in the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          5. User Responsibilities
        </h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the Services for any illegal or unauthorized purpose</li>
          <li>Attempt to reverse-engineer, decompile, or tamper with the Services</li>
          <li>Interfere with or disrupt the Services or servers</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          6. Intellectual Property
        </h2>
        <p>
          The Services, including all content, design, code, and trademarks,
          are the exclusive property of Raw Studios or its licensors. You may
          not copy, modify, distribute, or create derivative works without our
          written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          7. Disclaimer of Warranties
        </h2>
        <p>
          The Services are provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, express or implied,
          including but not limited to warranties of merchantability, fitness
          for a particular purpose, or non-infringement. Raw Studios does not
          warrant that the Services will be uninterrupted, error-free, or free
          of harmful components.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          8. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, Raw Studios shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of the
          Services. Raw Studios&apos; total liability shall not exceed the
          amount you paid for the Services in the twelve months preceding the
          claim.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          9. Termination
        </h2>
        <p>
          We may suspend or terminate your access to the Services at any time
          if you breach these Terms. You may stop using the Services at any
          time by uninstalling the apps and canceling any active
          subscriptions.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          10. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. Material changes will
          be reflected by updating the &quot;Last updated&quot; date above.
          Continued use of the Services after changes constitutes acceptance
          of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          11. Governing Law
        </h2>
        <p>
          These Terms are governed by the laws of the State of Ohio, United
          States, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-10">12. Contact</h2>
        <p>
          Questions about these Terms? Contact us at{" "}
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
