import InfoPageTemplate from "@/components/InfoPageTemplate";

const FaqPage = () => {
  return (
    <InfoPageTemplate title="Frequently Asked Questions">
      <h3 className="mb-2 text-lg font-semibold">
        1. How do I place an order?
      </h3>{" "}
      <p className="mb-4">
        To place an order, simply browse our selection of flowers, add your
        desired items to the cart, and proceed to checkout. Follow the prompts
        to complete your purchase.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        2. What payment methods do you accept?
      </h3>{" "}
      <p className="mb-4">
        We accept various payment methods including credit cards, debit cards,
        and PayPal.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        3. How can I track my order?
      </h3>{" "}
      <p className="mb-4">
        Once your order has been shipped, you will receive a confirmation email
        with a tracking number. You can use this number to track your order on
        our website or the carrier&apos;s website.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        4. What is your return policy?
      </h3>{" "}
      <p className="mb-4">
        If you are not satisfied with your purchase, please contact us within 48
        hours of delivery. We will arrange for a replacement or a full refund.
        For more details, please refer to our Refund Policy page.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        5. Do you offer same-day delivery?
      </h3>{" "}
      <p className="mb-4">
        Yes, we offer same-day delivery for orders placed before 12 PM local
        time. Please note that same-day delivery is subject to availability and
        may not be available in all areas.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        6. How can I contact customer service?
      </h3>{" "}
      <p className="mb-4">
        You can contact our customer service team at cs@hanashop.com or call us
        at +08012345678. We are available Monday to Friday from 9 AM to 5 PM.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        7. Can I customize my order?
      </h3>{" "}
      <p className="mb-4">
        Yes, we offer customization options for many of our flower arrangements.
        Please contact us to discuss your specific requirements.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        8. Do you deliver internationally?
      </h3>{" "}
      <p className="mb-4">
        Yes, we offer international delivery to select countries. Please check
        our Shipping Policy page for more details.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        9. How do I care for my flowers?
      </h3>{" "}
      <p className="mb-4">
        To keep your flowers fresh, trim the stems at an angle, change the water
        every two days, and keep them away from direct sunlight and heat
        sources.
      </p>{" "}
      <h3 className="mb-2 text-lg font-semibold">
        10. What if I have a problem with my order?
      </h3>{" "}
      <p className="mb-4">
        If you experience any issues with your order, please contact our
        customer service team. We will work with you to resolve the issue as
        quickly as possible.
      </p>
    </InfoPageTemplate>
  );
};

export default FaqPage;
