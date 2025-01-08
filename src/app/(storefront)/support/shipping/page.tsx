import InfoPageTemplate from "@/components/InfoPageTemplate";
import Link from "next/link";

const ShippingInfoPage = () => {
  return (
    <InfoPageTemplate title="Shipping Policy">
      <p className="mb-4">
        At Hana Shop（花屋）, we are committed to delivering your flowers in the
        best possible condition. This Shipping Policy explains how we handle
        shipping and delivery of your orders.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Shipping Rates</h3>{" "}
      <p className="mb-4">
        Shipping rates are calculated based on the delivery location and the
        size of your order. The shipping cost will be displayed at checkout
        before you complete your purchase.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Delivery Time</h3>{" "}
      <p className="mb-4">
        We strive to deliver your flowers as quickly as possible. Standard
        delivery times are as follows:
      </p>{" "}
      <ul className="mb-4 list-inside list-disc">
        {" "}
        <li>
          <strong>Local Deliveries</strong>: 1-2 business days
        </li>{" "}
        <li>
          <strong>National Deliveries</strong>: 3-5 business days
        </li>{" "}
        <li>
          <strong>International Deliveries</strong>: 7-14 business days
        </li>{" "}
      </ul>{" "}
      <h3 className="mb-2 text-lg font-semibold">Order Processing</h3>{" "}
      <p className="mb-4">
        Orders are processed within 1-2 business days. You will receive a
        confirmation email once your order has been shipped, along with tracking
        information.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Shipping Methods</h3>{" "}
      <p className="mb-4">
        We use reliable shipping carriers to ensure your flowers arrive in
        perfect condition. The shipping method will be selected based on the
        delivery location and the size of your order.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Delivery Issues</h3>{" "}
      <p className="mb-4">
        If you experience any issues with your delivery, please contact our
        customer service team at [Customer Service Email] or call us at
        [Customer Service Phone Number]. We will work with you to resolve the
        issue as quickly as possible.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>{" "}
      <p className="mb-4">
        If you have any questions or concerns about our Shipping Policy, please
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

export default ShippingInfoPage;
