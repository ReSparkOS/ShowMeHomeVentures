import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for Show-Me Home Ventures. Read our terms for using our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-4 text-slate-600">
          Last updated: February 2025
        </p>

        <div className="mt-12 prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          <p>
            Please read these Terms of Service (&quot;Terms&quot;) carefully
            before using the website or services of {siteConfig.name}
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
            or using our website or services, you agree to be bound by these
            Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By visiting our website, submitting a form, requesting an offer, or
            otherwise engaging with our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and our
            Privacy Policy. If you do not agree, please do not use our website
            or services.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            2. Services Description
          </h2>
          <p>
            {siteConfig.name} provides real estate services, including the
            evaluation and purchase of residential properties in Springfield,
            MO and the Ozarks region. Our Open-Book Certainty Offer™ process
            includes property evaluation, transparent offer presentation, and
            assistance with closing. Our services are provided subject to
            availability and our discretion.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            3. User Responsibilities
          </h2>
          <p>
            When using our website or services, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide accurate, current, and complete information when
              submitting forms or communicating with us
            </li>
            <li>
              Not misrepresent the condition, ownership, or legal status of any
              property
            </li>
            <li>
              Use our website only for lawful purposes and in accordance with
              these Terms
            </li>
            <li>
              Not attempt to interfere with the proper functioning of our
              website or services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            4. No Guaranteed Outcomes
          </h2>
          <p>
            Requesting an offer or engaging with our services does not
            guarantee that we will make an offer, that you will accept our
            offer, or that a transaction will close. Offers are subject to our
            evaluation, due diligence, and business judgment. We reserve the
            right to decline to make an offer or to withdraw an offer in
            accordance with applicable law and any written agreement between the
            parties.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            5. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, {siteConfig.name}, its
            officers, directors, employees, and agents shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising out of or related to your use of our website or
            services, including but not limited to loss of profits, data, or
            goodwill. Our total liability for any claim arising from these
            Terms or our services shall not exceed the amount you paid to us, if
            any, in the twelve months preceding the claim. Some jurisdictions
            do not allow the exclusion of certain warranties or limitation of
            liability, so some of the above may not apply to you.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            6. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless {siteConfig.name}
            and its officers, directors, employees, and agents from and against
            any claims, liabilities, damages, losses, costs, or expenses
            (including reasonable attorneys&apos; fees) arising out of or
            related to (a) your use of our website or services, (b) your
            violation of these Terms, (c) your violation of any third-party
            rights, or (d) any misrepresentation or breach of your
            representations regarding property condition, ownership, or legal
            status.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            7. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Missouri, without regard to its conflict
            of law provisions. Any dispute arising from these Terms or our
            services shall be brought exclusively in the state or federal
            courts located in Greene County, Missouri, and you consent to the
            personal jurisdiction of such courts.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            8. Changes to Terms
          </h2>
          <p>
            We may modify these Terms at any time. We will notify you of
            material changes by posting the updated Terms on this page and
            updating the &quot;Last updated&quot; date. Your continued use of
            our website or services after such changes constitutes acceptance
            of the revised Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            9. Contact Information
          </h2>
          <p>
            For questions about these Terms, please contact us:
          </p>
          <p className="mt-4">
            <strong>{siteConfig.name}</strong>
            <br />
            {fullAddress}
            <br />
            Phone:{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="text-emerald-700 hover:underline"
            >
              {siteConfig.phone}
            </a>
            <br />
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-emerald-700 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
