import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-gray-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl border-t border-gray-900/10 px-6 pb-8 pt-4 dark:border-white/10 sm:pt-8 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            <Link className="flex" href="/home">
              <Logo />
            </Link>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              A shop to fulfill all your flower needs
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/support/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/support/refund">Refund</Link>
                </li>
                <li>
                  <Link href="/support/shipping">Shipping</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/legal/terms">Terms and Service</Link>
                </li>
                <li>
                  <Link href="/legal/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 dark:border-white/10 sm:mt-12 lg:mt-16">
          <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Hana Shop（花屋）. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
