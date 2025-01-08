import InfoPageTemplate from "@/components/InfoPageTemplate";
import Link from "next/link";

const TermsPage = () => {
  return (
    <InfoPageTemplate title="Terms and Service">
      <p className="mb-4">
        Welcome to Hana Shop (花屋). By accessing our website, you agree to
        comply with and be bound by the following terms and conditions of use,
        which together with our privacy policy govern Hana Shop (花屋)&apos;s
        relationship with you in relation to this website.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Use of the Website</h3>{" "}
      <p className="mb-4">
        By accessing the website, you warrant and represent to [Your Flower Shop
        Name] that you are legally entitled to do so and to make use of
        information made available via the website.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Trademarks</h3>{" "}
      <p className="mb-4">
        The trademarks, names, logos, and service marks (collectively
        “trademarks”) displayed on this website are registered and unregistered
        trademarks of Hana Shop (花屋). Nothing contained on this website should
        be construed as granting any license or right to use any trademark
        without the prior written permission of Hana Shop (花屋).
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">External Links</h3>{" "}
      <p className="mb-4">
        External links may be provided for your convenience, but they are beyond
        the control of Hana Shop (花屋) and no representation is made as to
        their content. Use or reliance on any external links and the content
        thereon provided is at your own risk.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Warranties</h3>{" "}
      <p className="mb-4">
        Hana Shop (花屋) makes no warranties, representations, statements or
        guarantees (whether express, implied in law or residual) regarding the
        website.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Disclaimer of Liability</h3>{" "}
      <p className="mb-4">
        Hana Shop (花屋) shall not be responsible for and disclaims all
        liability for any loss, liability, damage (whether direct, indirect or
        consequential), personal injury or expense of any nature whatsoever
        which may be suffered by you or any third party (including your
        company), as a result of or which may be attributable, directly or
        indirectly, to your access and use of the website.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Governing Law</h3>{" "}
      <p className="mb-4">
        These terms and conditions shall be governed by and construed in
        accordance with the laws of [Your Country], and you submit to the
        jurisdiction of the courts located in [Your Country] for the resolution
        of any disputes.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Changes to Terms</h3>{" "}
      <p className="mb-4">
        Hana Shop (花屋) reserves the right to change these terms and conditions
        at any time without prior notice. Your continued use of the website
        following any changes indicates your acceptance of the new terms.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>{" "}
      <p className="mb-4">
        If you have any questions about our Terms and Service, please contact us
        directly at:
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

export default TermsPage;
