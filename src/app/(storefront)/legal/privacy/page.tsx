import InfoPageTemplate from "@/components/InfoPageTemplate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hana Shop (花屋)",
  description: "A shop to buy flowers for your loved ones.",
};

const PrivacyPage = () => {
  return (
    <InfoPageTemplate title="Privacy Policy">
      <p className="mb-4">
        At Hana Shop (花屋) we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you visit our website.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Information We Collect</h3>{" "}
      <p className="mb-4">
        We may collect information about you in a variety of ways. The
        information we may collect on the Site includes:
      </p>{" "}
      <ul className="mb-4 list-inside list-disc">
        {" "}
        <li>
          <b>Personal Data:</b> Personally identifiable information, such as
          your name, shipping address, email address, and telephone number.
        </li>{" "}
        <li>
          <b>Payment Data:</b> Financial information, such as credit card
          number, expiration date, and billing address.
        </li>{" "}
        <li>
          <b>Usage Data:</b> Information about your interactions with our
          website, such as your IP address, browser type, and pages visited.
        </li>{" "}
      </ul>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        How We Use Your Information
      </h3>{" "}
      <p className="mb-4">
        We use the information we collect in the following ways:
      </p>{" "}
      <ul className="mb-4 list-inside list-disc">
        {" "}
        <li>To process and manage your orders.</li>{" "}
        <li>
          To communicate with you, including sending order confirmations and
          updates.
        </li>{" "}
        <li>To improve our website and services.</li>{" "}
        <li>To prevent fraudulent transactions and monitor against theft.</li>{" "}
      </ul>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        Disclosure of Your Information
      </h3>{" "}
      <p className="mb-4">
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </p>{" "}
      <ul className="mb-4 list-inside list-disc">
        {" "}
        <li>
          <b>By Law or to Protect Rights:</b> If we believe the release of
          information about you is necessary to respond to legal process, to
          investigate or remedy potential violations of our policies, or to
          protect the rights, property, and safety of others.
        </li>{" "}
        <li>
          <b>Third-Party Service Providers:</b> We may share your information
          with third parties that perform services for us or on our behalf, such
          as payment processing, data analysis, email delivery, hosting
          services, customer service, and marketing assistance.
        </li>{" "}
      </ul>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        Security of Your Information
      </h3>{" "}
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Policy for Children</h3>{" "}
      <p className="mb-4">
        We do not knowingly solicit information from or market to children under
        the age of 13. If we learn that we have collected information from a
        child under age 13 without verification of parental consent, we will
        delete that information as quickly as possible.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        Changes to This Privacy Policy
      </h3>{" "}
      <p className="mb-4">
        We may update this Privacy Policy from time to time in order to reflect
        changes to our practices or for other operational, legal, or regulatory
        reasons.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>{" "}
      <p className="mb-4">
        If you have questions or comments about this Privacy Policy, please
        contact us directly at:
      </p>{" "}
      <p className="mb-4">
        Hana Shop (花屋)
        <br /> 123 Imaginary Street, Osaka, Japan.
        <br /> cs@hanashop.com
        <br /> +08012345678
      </p>
      or send a message through our{" "}
      <Link href="/contact" className="text-blue-600 dark:text-blue-300">
        contact form
      </Link>
      .
    </InfoPageTemplate>
  );
};

export default PrivacyPage;
