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
      <p className="mt-3 text-sm text-muted">Last updated: April 24, 2026</p>

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
          8. Health, Medical, and Peptide Disclaimer (LeanLog)
        </h2>
        <p>
          <strong>LeanLog is a logging tool, not a medical device, pharmacy,
          marketplace, or healthcare provider.</strong> Raw Studios does not
          recommend, endorse, prescribe, supply, or facilitate the purchase of
          any compound, peptide, medication, or substance you log in the app.
          Substances you choose to log — including but not limited to GLP-1
          receptor agonists, growth hormone secretagogues, research peptides,
          and other compounds — may be regulated, prescription-only,
          experimental, or unapproved for human use in your jurisdiction.
        </p>
        <p>
          You are solely responsible for: (a) determining the legality of any
          substance you obtain, possess, or use in your jurisdiction; (b)
          obtaining and following the advice of a licensed healthcare
          professional before starting, modifying, or stopping any protocol;
          (c) the safety, sourcing, dosage, purity, and storage of any
          substance you use; and (d) any consequences resulting from your use
          of substances you choose to track.
        </p>
        <p>
          Raw Studios does not verify the accuracy of dosages, frequencies,
          injection sites, side effects, or any other data you enter into the
          app. Reminders, charts, projections, recon calculator outputs, and
          any other generated content are informational and may contain
          errors. They are not medical advice and must not be relied upon as
          a substitute for professional medical judgment.
        </p>
        <p>
          <strong>No doctor-patient or other professional relationship is
          created by your use of the Services.</strong> If you experience any
          adverse reaction, contact a licensed medical professional or
          emergency services immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          9. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, Raw Studios shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of the
          Services. Raw Studios&apos; total aggregate liability shall not
          exceed the greater of (a) the amount you paid for the Services in
          the twelve months preceding the claim, or (b) one hundred U.S.
          dollars (US $100). Nothing in these Terms limits liability for gross
          negligence, willful misconduct, fraud, or any other liability that
          cannot be excluded or limited under applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          10. Termination
        </h2>
        <p>
          We may suspend or terminate your access to the Services at any time
          if you breach these Terms. You may stop using the Services at any
          time by uninstalling the apps and canceling any active
          subscriptions.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          11. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. Material changes will
          be reflected by updating the &quot;Last updated&quot; date above.
          Continued use of the Services after changes constitutes acceptance
          of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          12. Dispute Resolution; Binding Arbitration; Class Waiver
        </h2>
        <p>
          <strong>Please read this Section carefully — it affects your legal
          rights.</strong>
        </p>
        <p>
          <strong>Informal resolution first.</strong> Before filing a claim,
          you agree to attempt to resolve any dispute informally by contacting
          us at{" "}
          <a
            href="mailto:outreach@rawstudios.info"
            className="text-accent hover:underline"
          >
            outreach@rawstudios.info
          </a>
          . We will try to resolve disputes within 30 days of notice.
        </p>
        <p>
          <strong>Binding individual arbitration.</strong> If informal
          resolution fails, you and Raw Studios agree that any dispute, claim,
          or controversy arising out of or relating to these Terms or the
          Services shall be resolved by binding individual arbitration
          administered by the American Arbitration Association (&quot;AAA&quot;)
          under its Consumer Arbitration Rules. Judgment on the award may be
          entered in any court having jurisdiction.
        </p>
        <p>
          <strong>Class action waiver.</strong> You and Raw Studios each agree
          that any dispute will be brought solely in your or our individual
          capacity and not as a plaintiff or class member in any purported
          class, collective, consolidated, or representative proceeding. The
          arbitrator may not consolidate more than one person&apos;s claims
          and may not preside over any form of representative or class
          proceeding.
        </p>
        <p>
          <strong>Small-claims carve-out.</strong> Either party may bring
          qualifying claims in small-claims court instead of arbitration, so
          long as the action remains in that court and proceeds only on an
          individual (non-class) basis.
        </p>
        <p>
          <strong>Opt-out.</strong> You may opt out of this arbitration
          agreement by sending written notice to{" "}
          <a
            href="mailto:outreach@rawstudios.info"
            className="text-accent hover:underline"
          >
            outreach@rawstudios.info
          </a>{" "}
          within 30 days of first accepting these Terms. Your opt-out notice
          must include your name, the email used to access the Services, and
          a clear statement that you wish to opt out of arbitration.
        </p>
        <p>
          If any portion of this Section is found unenforceable, the
          unenforceable portion shall be severed and the remainder shall
          continue in full force.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          13. Governing Law and Venue
        </h2>
        <p>
          These Terms are governed by the laws of the State of Ohio, United
          States, without regard to its conflict of law provisions. Subject to
          Section 12 (Arbitration), any action not subject to arbitration
          shall be brought exclusively in the state or federal courts located
          in Summit County, Ohio, and you consent to the personal jurisdiction
          of those courts.
        </p>

        <h2 className="text-2xl font-semibold mt-10">14. Contact</h2>
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
