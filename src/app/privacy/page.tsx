import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Show-Me Home Ventures. Learn how we collect, use, and protect your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-600">
          Last updated: February 2025
        </p>

        <div className="mt-12 prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          <p>
            {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the website {siteConfig.url}. This Privacy Policy describes
            how we collect, use, disclose, and protect your information when you
            visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Information We Collect
          </h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and mailing address when you submit a form, request an
              offer, or contact us.
            </li>
            <li>
              <strong>Property Information:</strong> Property address, type,
              condition, timeline for sale, and other details you provide about
              your property.
            </li>
            <li>
              <strong>Communications:</strong> Records of correspondence when
              you contact us or we contact you.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, including IP address, browser type, pages visited, and
              referring URLs. We may use cookies and similar technologies for
              this purpose.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluate your property and prepare offers</li>
            <li>Communicate with you about your property and our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations and protect our rights</li>
            <li>Send you relevant information about our services (with your
              consent, where required by law)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Information Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service providers:</strong> Third parties who assist us
              with operations such as hosting, analytics, and customer
              communication. These providers are contractually obligated to
              protect your information.
            </li>
            <li>
              <strong>Legal requirements:</strong> When required by law, court
              order, or government authority, or when necessary to protect our
              rights, your safety, or the safety of others.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Your Rights
          </h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing of your information</li>
            <li>Data portability (receive your data in a structured format)</li>
            <li>Withdraw consent where we rely on consent for processing</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-emerald-700 hover:underline"
            >
              {siteConfig.email}
            </a>
            . We will respond to your request in accordance with applicable law.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Cookies
          </h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. Cookies are small text files stored on
            your device. We may use:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential cookies:</strong> Required for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics cookies:</strong> To understand how visitors
              use our site and improve our services.
            </li>
            <li>
              <strong>Marketing cookies:</strong> To deliver relevant content
              (with your consent where required).
            </li>
          </ul>
          <p className="mt-4">
            You can control or delete cookies through your browser settings.
            Disabling certain cookies may affect the functionality of our
            website.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the updated policy on this
            page and updating the &quot;Last updated&quot; date. We encourage you
            to review this policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or our privacy
            practices, please contact us:
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
